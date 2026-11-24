// Loads the cow picture and its masks (bundled as data URLs, so this works from
// a double-clicked file with no server) and hands out repainted copies.
import rgbUrl from './assets/cow-rgb.webp';
import maskUrl from './assets/cow-mask.png';
import meta from './assets/cow-meta.json';
import { prepare, repaint } from './coats.js';

async function pixels(url, w, h) {
  const img = new Image();
  img.src = url;
  await img.decode();
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.drawImage(img, 0, 0, w, h);
  return g.getImageData(0, 0, w, h).data;
}

export async function loadCowArt() {
  const { w, h } = meta;
  const [rgb, mask] = await Promise.all([pixels(rgbUrl, w, h), pixels(maskUrl, w * 2, h * 2)]);
  const src = prepare(w, h, rgb, mask, meta.partStep);
  const stage = document.createElement('canvas');
  stage.width = w; stage.height = h;
  const sg = stage.getContext('2d');

  return {
    w, h, aspect: w / h, src, work: src.todo.length,
    bell: { x: meta.bell[0], y: meta.bell[1] },
    // A fresh RGBA buffer holding the cow as painted. Clamped, so repaint() can write floats into it.
    blank() {
      const out = new Uint8ClampedArray(rgb);
      for (let i = 0; i < w * h; i++) out[i * 4 + 3] = src.alpha[i];
      return out;
    },
    paint: (palette, out, from, to) => repaint(src, palette, out, from, to),
    // A small picture for the interface: 'head' is a square on the face, 'full' the whole animal.
    draw(buf, kind, px) {
      sg.putImageData(new ImageData(buf, w, h), 0, 0);
      const c = document.createElement('canvas'), g = c.getContext('2d');
      g.imageSmoothingQuality = 'high';
      if (kind === 'head') {
        const [cx, cy, r] = meta.head, k = px / (2 * r * w);
        c.width = c.height = px;
        g.drawImage(stage, -(cx - r) * w * k, -(cy * h - r * w) * k, w * k, h * k);
      } else {
        c.height = px; c.width = Math.round((px * w) / h);
        g.drawImage(stage, 0, 0, c.width, c.height);
      }
      return c;
    },
  };
}
