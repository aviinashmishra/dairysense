"""Turns art/cow-source.png into the two files the app recolours at run time.

  src/assets/cow-rgb.webp   the cow's colours, opaque, edge colours bled outward
  src/assets/cow-meta.json  size, and where the bell and the head are
  src/assets/cow-mask.png   four greyscale tiles in a 2 x 2 grid:
                              alpha      | whiteness (1 = white coat, 0 = black patch)
                              fur weight | part id (0 keep, 1 skin, 2 horn, 3 bell, 4 collar)

Keeping colour and masks in opaque images means nothing is ever premultiplied
by the browser, so edges stay clean when the coat colour changes.

Run:  python tools/build_cow_art.py [debug-dir]
Needs Pillow and numpy.
"""
import json
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'art', 'cow-source.png')
OUT = os.path.join(ROOT, 'src', 'assets')
OUT_H = 640
PAD = 10
PART_STEP = 50          # part id n is stored as grey level n * PART_STEP


def u8(a):
    return Image.fromarray(np.clip(a * 255 + 0.5, 0, 255).astype(np.uint8))


def f32(img):
    return np.asarray(img).astype(np.float32) / 255


def dilate(m, r):
    return f32(u8(m).filter(ImageFilter.MaxFilter(2 * r + 1)))


def erode(m, r):
    return f32(u8(m).filter(ImageFilter.MinFilter(2 * r + 1)))


def blur(m, r):
    return f32(u8(m).filter(ImageFilter.GaussianBlur(r)))


def close(m, r):
    return erode(dilate(m, r), r)


def smooth(lo, hi, v):
    t = np.clip((v - lo) / (hi - lo), 0, 1)
    return t * t * (3 - 2 * t)


def shape(size, kind, pts):
    img = Image.new('L', size, 0)
    d = ImageDraw.Draw(img)
    getattr(d, kind)(pts, fill=255)
    return f32(img)


def box(size, x0, y0, x1, y1):
    return shape(size, 'rectangle', [x0, y0, x1, y1])


def ellipse(size, cx, cy, rx, ry, rot=0.0):
    yy, xx = np.mgrid[0:size[1], 0:size[0]].astype(np.float32)
    c, s = np.cos(rot), np.sin(rot)
    dx, dy = xx - cx, yy - cy
    u, v = (dx * c + dy * s) / rx, (-dx * s + dy * c) / ry
    return (u * u + v * v <= 1).astype(np.float32)


def fill_holes(m):
    """Fills regions of zeros that cannot be reached from the image border."""
    img = u8(1 - (m > 0.5).astype(np.float32)).convert('L')
    w, h = img.size
    grown = Image.new('L', (w + 2, h + 2), 255)
    grown.paste(img, (1, 1))
    ImageDraw.floodfill(grown, (0, 0), 128)
    reached = np.asarray(grown)[1:-1, 1:-1] == 128
    return np.where(reached, (m > 0.5), True).astype(np.float32)


def segment(rgb, alpha):
    """Full-resolution part masks. Coordinates are pixels of the source image."""
    h, w = alpha.shape
    size = (w, h)
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    lum = rgb @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
    warm = (r - b) / np.maximum(r, 0.04)       # brown, gold, horn
    pink = (r - g) / np.maximum(r, 0.04)       # muzzle, ears, udder, mouth
    solid = alpha > 0.5

    # bell: saturated gold, plus whatever its rim encloses
    bell_box = box(size, 418, 606, 580, 796)
    bell = ((warm > 0.45) & (r > 0.36)).astype(np.float32) * bell_box
    bell = fill_holes(close(bell, 4)) * bell_box
    bell = erode(dilate(bell, 1), 1)

    # collar: the leather band, traced a little generously; colour trims it back to the leather
    front = [(460, 555), (480, 587), (515, 610), (552, 620), (605, 620), (650, 605), (685, 582), (710, 555), (725, 525), (727, 485), (718, 452),
             (728, 452), (735, 490), (741, 520), (742, 560), (730, 590), (700, 620), (660, 645), (615, 662), (570, 670), (525, 657), (487, 630), (465, 600), (455, 570)]
    back_l = [(460, 558), (467, 525), (487, 495), (502, 497), (484, 530), (478, 560)]
    back_r = [(698, 452), (705, 500), (716, 532), (727, 548), (733, 520), (730, 485), (722, 452)]
    band = dilate(np.maximum.reduce([shape(size, 'polygon', p) for p in (front, back_l, back_r)]), 5)
    collar = ((lum < 0.5) & (warm > 0.2)).astype(np.float32) * band
    collar = close(collar, 4) * band           # takes in the pale stitching
    collar = dilate(erode(collar, 2), 2) * band * (1 - dilate(bell, 1))

    # horns
    horn_box = np.maximum(box(size, 243, 146, 364, 277), box(size, 526, 0, 617, 116))
    horn = ((warm > 0.27) & solid).astype(np.float32) * horn_box
    horn = close(horn, 2)

    # bare skin: inner ears, muzzle, mouth and udder
    skin_box = np.maximum.reduce([box(size, 158, 278, 392, 452), box(size, 633, 62, 842, 212), box(size, 488, 258, 708, 400), box(size, 738, 872, 942, 1032)])
    skin = ((pink > 0.24) & (r > 0.3)).astype(np.float32) * skin_box
    mouth_box = shape(size, 'polygon', [(520, 392), (708, 380), (712, 470), (640, 506), (540, 500), (512, 440)])
    mouth = ((pink > 0.27) & (lum < 0.86)).astype(np.float32) * mouth_box
    skin = np.maximum(skin, mouth)
    skin = erode(dilate(close(skin, 2), 1), 1)

    # eyes stay exactly as painted, and so does the dark liner round them
    eyes = np.maximum(ellipse(size, 449, 326, 41, 45, 0.25), ellipse(size, 617, 222, 37, 40, 0.2))
    liner = dilate(eyes, 9) * (lum < 0.34)
    # hooves
    hoof_box = np.maximum.reduce([box(size, 368, 1168, 542, 1268), box(size, 596, 1188, 750, 1280), box(size, 726, 1138, 820, 1228), box(size, 1018, 1158, 1162, 1268)])
    hoof = (lum < 0.43).astype(np.float32) * hoof_box
    hoof = close(hoof, 2)
    keep = np.maximum.reduce([eyes, liner, hoof])

    parts = {'keep': keep, 'skin': skin * (1 - keep), 'horn': horn, 'bell': bell, 'collar': collar}
    white = smooth(0.27, 0.45, lum)
    return {k: blur(v, 1.1) for k, v in parts.items()}, white


def bleed(rgb, alpha, rounds=24):
    """Spreads edge values into the transparent surround so filtering never pulls in black."""
    rgb = rgb.copy()
    known = alpha > 0.35
    for _ in range(rounds):
        acc = np.zeros_like(rgb)
        cnt = np.zeros(alpha.shape, dtype=np.float32)
        for dy, dx in ((0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (1, -1), (-1, 1), (-1, -1)):
            k = np.roll(known, (dy, dx), axis=(0, 1))
            acc += np.roll(rgb, (dy, dx), axis=(0, 1)) * k[..., None]
            cnt += k
        grow = (~known) & (cnt > 0)
        rgb[grow] = acc[grow] / cnt[grow][..., None]
        known = known | grow
    rgb[~known] = rgb[known].mean(axis=0)
    return rgb


def main():
    debug = sys.argv[1] if len(sys.argv) > 1 else None
    src = f32(Image.open(SRC).convert('RGBA'))
    rgb, alpha = src[..., :3], src[..., 3]
    # the cut-out leaves faint coloured specks outside the animal and tops out near 0.99
    alpha = np.clip((alpha - 0.12) / (0.97 - 0.12), 0, 1)
    alpha = np.minimum(alpha, blur(dilate(erode((alpha > 0.5).astype(np.float32), 2), 3), 1.5) * 4)
    parts, white = segment(rgb, alpha)

    ys, xs = np.where(alpha > 0.5)
    x0, x1, y0, y1 = xs.min() - PAD, xs.max() + PAD, ys.min() - PAD, ys.max() + PAD
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(alpha.shape[1], x1), min(alpha.shape[0], y1)
    crop = lambda a: a[y0:y1, x0:x1]
    scale = OUT_H / (y1 - y0)
    size = (round((x1 - x0) * scale), OUT_H)

    def small(a, mode=Image.LANCZOS):
        return f32(u8(crop(a)).resize(size, mode))

    a_s = small(alpha)
    pre = small(rgb * alpha[..., None])
    rgb_s = np.where(a_s[..., None] > 0.02, pre / np.maximum(a_s[..., None], 0.02), 0)
    names = ['keep', 'skin', 'horn', 'bell', 'collar']
    # colour and every mask are bled together, so the rim recolours like the fur beside it
    chan = np.concatenate([np.clip(rgb_s, 0, 1), small(white)[..., None]] + [small(parts[n], Image.BOX)[..., None] for n in names], axis=2)
    chan = bleed(chan, a_s)
    rgb_s, white_s, stack = chan[..., :3], chan[..., 3], chan[..., 4:].transpose(2, 0, 1)
    other = np.clip(stack.sum(axis=0), 0, 1)
    part_id = np.where(other > 0.02, stack.argmax(axis=0), 0)
    fur = 1 - other

    os.makedirs(OUT, exist_ok=True)
    u8(rgb_s).save(os.path.join(OUT, 'cow-rgb.webp'), quality=92, method=6)
    w, h = size
    grid = np.zeros((h * 2, w * 2), dtype=np.float32)
    grid[:h, :w], grid[:h, w:] = a_s, white_s
    grid[h:, :w], grid[h:, w:] = fur, part_id * PART_STEP / 255
    u8(grid).convert('L').save(os.path.join(OUT, 'cow-mask.png'), optimize=True)

    def centre(mask):
        yy, xx = np.where(mask > 0.5)
        return [round(float(xx.mean()) / w, 4), round(float(yy.mean()) / h, 4)]
    bell_m = (part_id == 3) & (other > 0.5)
    head = [round(float((500 - x0) * scale / w), 4), round(float((270 - y0) * scale / h), 4), round(float(350 * scale / w), 4)]
    meta = {'w': w, 'h': h, 'partStep': PART_STEP, 'bell': centre(bell_m), 'head': head}
    with open(os.path.join(OUT, 'cow-meta.json'), 'w') as f:
        json.dump(meta, f)
    print('wrote', size, meta, {n: os.path.getsize(os.path.join(OUT, n)) for n in ('cow-rgb.webp', 'cow-mask.png')})

    if debug:
        os.makedirs(debug, exist_ok=True)
        tint = {1: (255, 0, 160), 2: (255, 150, 0), 3: (255, 255, 0), 4: (0, 200, 255), 0: (0, 255, 0)}
        base = rgb_s.mean(axis=2, keepdims=True) * 0.5 + 0.25
        over = np.repeat(base, 3, axis=2)
        for i, c in tint.items():
            m = ((part_id == i) * other)[..., None]
            over = over * (1 - m * 0.75) + np.array(c, dtype=np.float32) / 255 * m * 0.75
        over = over * a_s[..., None] + np.array([0.1, 0.1, 0.3]) * (1 - a_s[..., None])
        u8(over).save(os.path.join(debug, 'parts.png'))
        u8(white_s * a_s).save(os.path.join(debug, 'white.png'))
        bg = np.array([0.15, 0.55, 0.25])
        u8(rgb_s * a_s[..., None] + bg * (1 - a_s[..., None])).save(os.path.join(debug, 'clean.png'))


if __name__ == '__main__':
    main()
