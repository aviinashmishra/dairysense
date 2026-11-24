// Checks the coat logic and the pixel repaint without a browser.
import assert from 'node:assert/strict';
import { BELT, HEALTH, IRONBOW, PART, PRESETS, defaultPreset, isHex, paletteFor, paletteSig, prepare, repaint, resolveCoat, statusOf, thermalLevel } from '../src/coats.js';

// ---- a tiny 4 x 2 "cow": white fur, black patch, half-covered edge, clear, then skin, horn, bell, collar
const W = 4, H = 2, STEP = 50;
const px = [[240, 232, 226], [30, 28, 30], [200, 190, 180], [120, 120, 120], [240, 150, 140], [220, 170, 120], [200, 140, 50], [60, 30, 15]];
const alpha = [255, 255, 128, 0, 255, 255, 255, 255], white = [255, 0, 255, 255, 255, 255, 255, 0], fur = [255, 255, 255, 255, 0, 0, 0, 0];
const part = [0, 0, 0, 0, PART.skin, PART.horn, PART.bell, PART.collar];
const rgb = new Uint8ClampedArray(W * H * 4), mask = new Uint8ClampedArray(W * 2 * H * 2 * 4);
px.forEach((c, i) => rgb.set([...c, 255], i * 4));
for (let i = 0; i < W * H; i++) {
  const x = i % W, y = (i / W) | 0, at = (xx, yy) => (yy * W * 2 + xx) * 4;
  mask[at(x, y)] = alpha[i]; mask[at(x + W, y)] = white[i]; mask[at(x, y + H)] = fur[i]; mask[at(x + W, y + H)] = part[i] * STEP;
}
const src = prepare(W, H, rgb, mask, STEP);
assert.deepEqual([...src.alpha], alpha, 'alpha plane read from the tile sheet');
assert.deepEqual([...src.part], part, 'part ids read from the tile sheet');
assert.equal(src.todo.length, W * H, 'a tiny image is all within reach of the edge');
const paint = (pal) => [...repaint(src, pal, new Uint8ClampedArray(W * H * 4))];
const at = (out, i) => out.slice(i * 4, i * 4 + 4);
const near = (a, b, tol, msg) => a.forEach((v, k) => assert.ok(Math.abs(v - b[k]) <= tol, `${msg}: got ${a} wanted about ${b}`));

// as painted: nothing changes
const plain = paint({ mode: 'coat' });
px.forEach((c, i) => assert.deepEqual(at(plain, i), [...c, alpha[i]], `pixel ${i} untouched without a coat`));

// a brown coat with dark patches
const brown = paint({ mode: 'coat', coat: '#b9683c', patch: '#8a4526' });
near(at(brown, 0).slice(0, 3), [185, 104, 60], 14, 'white fur takes the coat colour');
assert.ok(at(brown, 0)[0] > at(brown, 0)[1] && at(brown, 0)[1] > at(brown, 0)[2], 'coat keeps its hue');
near(at(brown, 1).slice(0, 3), [0x8a, 0x45, 0x26].map((v) => v * 0.83), 22, 'black patch takes the patch colour');
assert.deepEqual(at(brown, 4), [...px[4], 255], 'skin is left alone');
assert.deepEqual(at(brown, 6), [...px[6], 255], 'bell is left alone');
assert.equal(at(brown, 2)[3], 128, 'alpha passes through');
assert.equal(at(brown, 3)[3], 0, 'clear stays clear');
assert.notDeepEqual(at(brown, 3).slice(0, 3), px[3], 'the clear rim is recoloured too, so edges do not fringe');

// the bell and the other parts take a tint when asked
const alert = paint({ mode: 'coat', bell: BELT.fever, skin: '#6a5a5e', horn: '#4a4a4e', collar: '#1c2530' });
assert.ok(at(alert, 6)[0] > 200 && at(alert, 6)[1] < 120, 'fever turns the bell red');
assert.ok(at(alert, 4)[0] < 150, 'skin darkens for a buffalo');
assert.ok(at(alert, 5)[0] < 120, 'horn darkens');
assert.ok(at(alert, 7)[2] > at(alert, 7)[0], 'collar takes the blue-grey');
assert.deepEqual(at(alert, 0), [...px[0], 255], 'fur untouched when only parts are tinted');

// thermal: hotter animal, brighter picture; metal reads cold
const bright = (o, i) => o[i * 4] + o[i * 4 + 1] + o[i * 4 + 2];
const cool = paint({ mode: 'thermal', temp: 38.5 }), hot = paint({ mode: 'thermal', temp: 40.8 });
assert.ok(bright(hot, 0) > bright(cool, 0) + 40, 'fever is visibly brighter in thermal view');
assert.ok(bright(cool, 6) < bright(cool, 0) - 150, 'the bell is cold');
assert.ok(bright(cool, 4) > bright(cool, 0), 'bare skin is the warm spot');
assert.ok(thermalLevel(37.5) < thermalLevel(39) && thermalLevel(39) < thermalLevel(41), 'thermal scale rises with temperature');
assert.equal(IRONBOW.length, 768);

// ---- coats and lenses
assert.ok(PRESETS.every((p) => (!p.coat || isHex(p.coat)) && (!p.patch || isHex(p.patch))), 'preset colours are valid');
assert.equal(new Set(PRESETS.map((p) => p.id)).size, PRESETS.length, 'preset ids are unique');
for (const k of ['holstein', 'sahiwal', 'gir', 'murrah', 'murrah2']) assert.ok(PRESETS.some((p) => p.id === defaultPreset(k)), `start coat for ${k}`);
assert.equal(resolveCoat(null, 'gir').preset, 'gir');
assert.equal(resolveCoat({ preset: 'golden' }, 'gir').coat, '#f2c14e');
assert.equal(resolveCoat({ preset: 'nope' }, 'murrah').preset, 'murrah', 'unknown preset falls back to the breed');
assert.equal(resolveCoat({ coat: 'red', patch: '#000000' }, 'sahiwal').preset, 'sahiwal', 'bad colour falls back to the breed');
assert.deepEqual(resolveCoat({ coat: '#AABBCC', patch: '#112233' }, 'gir'), { preset: null, label: 'Custom', coat: '#aabbcc', patch: '#112233', skin: null, horn: null });
assert.equal(resolveCoat('<img onerror=1>', 'gir').preset, 'gir', 'junk from storage is ignored');

const cow = (key, flagged) => ({ ai: { key, flagged } });
assert.equal(statusOf(cow('fever', true)), 'fever');
assert.equal(statusOf(cow('fever', false)), 'healthy');
assert.equal(statusOf(cow('something-new', true)), 'healthy', 'an unknown status never breaks the paint');
assert.equal(statusOf(cow('lame', true)), 'lame');
const gir = resolveCoat(null, 'gir');
assert.equal(paletteFor('coats', gir, 'healthy', 38.5).bell, null, 'healthy keeps the gold bell');
assert.equal(paletteFor('coats', gir, 'fever', 40).bell, BELT.fever);
assert.equal(paletteFor('health', gir, 'heat', 39).patch, HEALTH.heat.patch);
assert.notEqual(paletteSig(paletteFor('coats', gir, 'healthy', 38.5)), paletteSig(paletteFor('coats', gir, 'fever', 38.5)), 'a status change repaints');
assert.equal(paletteSig(paletteFor('thermal', gir, 'healthy', 38.52)), paletteSig(paletteFor('thermal', gir, 'healthy', 38.54)), 'thermal repaints only per 0.1 degC');
assert.notEqual(paletteSig(paletteFor('thermal', gir, 'healthy', 38.5)), paletteSig(paletteFor('thermal', gir, 'healthy', 38.7)));
for (const k of Object.keys(HEALTH)) assert.ok(isHex(BELT[k]), `belt colour for ${k}`);
console.log('coats: all checks passed');

// a repaint done in slices gives exactly the same pixels as one done in a single pass
{
  const whole = new Uint8ClampedArray(W * H * 4), sliced = new Uint8ClampedArray(W * H * 4);
  for (const pal of [{ mode: 'coat', coat: '#45454c', patch: '#1d1d21', skin: '#6a5a5e', bell: BELT.heat }, { mode: 'thermal', temp: 39.4 }, { mode: 'coat' }]) {
    repaint(src, pal, whole);
    for (let q = 0; q < W * H; q += 3) repaint(src, pal, sliced, q, q + 3);
    assert.deepEqual([...sliced], [...whole], `sliced repaint matches (${pal.mode})`);
  }
  console.log('coats: sliced repaint checks passed');
}
