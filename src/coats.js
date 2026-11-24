// Coat colours for the herd, and the pixel routine that repaints the cow art.
// Nothing here touches the DOM, so the tests can run it in Node.

// ---------------------------------------------------------------- colours
export const isHex = (s) => typeof s === 'string' && /^#[0-9a-f]{6}$/i.test(s);
export const hexToRgb = (hex) => { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const smooth = (lo, hi, v) => { const t = clamp((v - lo) / (hi - lo), 0, 1); return t * t * (3 - 2 * t); };
const luma = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

// A coat is { coat, patch, skin, horn }. A missing entry means "as painted":
// the source picture is a black-and-white Holstein with a pink muzzle.
export const PRESETS = [
  { id: 'hf', label: 'Holstein Friesian', group: 'breed' },
  { id: 'redhf', label: 'Red Holstein', group: 'breed', coat: '#fbf3ea', patch: '#9c3f22' },
  { id: 'sahiwal', label: 'Sahiwal', group: 'breed', coat: '#b9683c', patch: '#8a4526' },
  { id: 'gir', label: 'Gir', group: 'breed', coat: '#f4e7d4', patch: '#a8502a' },
  { id: 'redsindhi', label: 'Red Sindhi', group: 'breed', coat: '#9a4324', patch: '#6e2c17' },
  { id: 'jersey', label: 'Jersey', group: 'breed', coat: '#d9a66b', patch: '#a87543' },
  { id: 'tharparkar', label: 'Tharparkar', group: 'breed', coat: '#eceae4', patch: '#b4b1a8' },
  { id: 'kankrej', label: 'Kankrej', group: 'breed', coat: '#c4c6c8', patch: '#6f7378', skin: '#7b6a6c' },
  { id: 'murrah', label: 'Murrah', group: 'breed', coat: '#45454c', patch: '#1d1d21', skin: '#6a5a5e', horn: '#4a4a4e' },
  { id: 'bhoori', label: 'Brown Murrah', group: 'breed', coat: '#6b5140', patch: '#33271f', skin: '#7a5f58', horn: '#5a5048' },
  { id: 'reverse', label: 'Reverse Holstein', group: 'fun', coat: '#26262b', patch: '#f4f1ea' },
  { id: 'golden', label: 'Golden', group: 'fun', coat: '#f2c14e', patch: '#b9770e' },
  { id: 'strawberry', label: 'Strawberry', group: 'fun', coat: '#ffd6e0', patch: '#e0527d' },
  { id: 'sky', label: 'Sky', group: 'fun', coat: '#dff1ff', patch: '#3a8fd0' },
  { id: 'mint', label: 'Mint', group: 'fun', coat: '#e3f6e8', patch: '#2e9c6a' },
];
const BY_ID = Object.fromEntries(PRESETS.map((p) => [p.id, p]));
// the sim's coat keys -> the preset each animal starts with
const START = { holstein: 'hf', sahiwal: 'sahiwal', gir: 'gir', murrah: 'murrah', murrah2: 'bhoori' };
export const defaultPreset = (coatKey) => START[coatKey] || 'hf';

// Colours a swatch should show for a coat (the painted Holstein is white and near-black).
export const swatch = (c) => [c.coat || '#f7f5ef', c.patch || '#232327'];

// Turns whatever was saved or picked into a clean coat. Anything unusable falls back to the start coat.
export function resolveCoat(spec, coatKey) {
  const start = BY_ID[defaultPreset(coatKey)];
  if (spec && typeof spec === 'object') {
    if (spec.preset && BY_ID[spec.preset]) { const p = BY_ID[spec.preset]; return { preset: p.id, label: p.label, coat: p.coat || null, patch: p.patch || null, skin: p.skin || null, horn: p.horn || null }; }
    if (isHex(spec.coat) && isHex(spec.patch)) return { preset: null, label: 'Custom', coat: spec.coat.toLowerCase(), patch: spec.patch.toLowerCase(), skin: null, horn: null };
  }
  return { preset: start.id, label: start.label, coat: start.coat || null, patch: start.patch || null, skin: start.skin || null, horn: start.horn || null };
}

// ----------------------------------------------------------------- lenses
// The belt's status colours: the bell on each cow takes these when the AI flags her.
export const BELT = { healthy: '#3fa9ff', fever: '#ff3b30', heat: '#ffb020', estrus: '#ff5fd2', lame: '#7b68ee' };
export const LENSES = [
  { id: 'coats', label: 'Coats', hint: 'Each animal in her own coat. The bell changes colour when the belt AI flags her.' },
  { id: 'health', label: 'Health', hint: 'The whole animal takes the colour of her AI status, so trouble shows from across the farm.' },
  { id: 'thermal', label: 'Thermal', hint: 'Body temperature from the belt, drawn the way a thermal camera would show it.' },
];
export const HEALTH = {
  healthy: { label: 'Healthy', coat: '#d3efd6', patch: '#2e8b46' },
  heat: { label: 'Heat stress', coat: '#ffe3ae', patch: '#d97a1a' },
  fever: { label: 'Fever', coat: '#ffc9c2', patch: '#c0392b' },
  estrus: { label: 'In heat', coat: '#f7cdf0', patch: '#b0389a' },
  lame: { label: 'Possible lameness', coat: '#ddd8fb', patch: '#6250d6' },
};
export const statusOf = (a) => (a.ai && a.ai.flagged && HEALTH[a.ai.key] ? a.ai.key : 'healthy');

// What to paint for one animal under the current lens.
export function paletteFor(lens, coat, status, temp) {
  if (lens === 'thermal') return { mode: 'thermal', temp: Math.round(temp * 10) / 10 };
  if (lens === 'health') { const h = HEALTH[status] || HEALTH.healthy; return { mode: 'coat', coat: h.coat, patch: h.patch, skin: null, horn: null, bell: BELT[status] || BELT.healthy, collar: null }; }
  return { mode: 'coat', coat: coat.coat, patch: coat.patch, skin: coat.skin, horn: coat.horn, bell: status === 'healthy' ? null : BELT[status], collar: null };
}
export const paletteSig = (p) => (p.mode === 'thermal' ? `t${p.temp.toFixed(1)}` : [p.coat, p.patch, p.skin, p.horn, p.bell, p.collar].map((c) => c || '-').join(''));

// Thermal-camera colours ("ironbow"): cold is dark violet, hot runs through red and yellow to white.
export const THERMAL_RANGE = [37.5, 41.5];
const IRON = [[0, '#05061c'], [0.18, '#2b0f6b'], [0.38, '#8a1a8c'], [0.55, '#d6373f'], [0.72, '#f98b1c'], [0.88, '#ffd84a'], [1, '#fffbe6']];
export const IRONBOW = (() => {
  const lut = new Uint8Array(256 * 3);
  for (let i = 0; i < 256; i++) {
    const t = i / 255;
    let k = 1;
    while (k < IRON.length - 1 && IRON[k][0] < t) k++;
    const [t0, c0] = IRON[k - 1], [t1, c1] = IRON[k], a = hexToRgb(c0), b = hexToRgb(c1), f = (t - t0) / (t1 - t0);
    for (let c = 0; c < 3; c++) lut[i * 3 + c] = Math.round(a[c] + (b[c] - a[c]) * f);
  }
  return lut;
})();
// Where a body temperature sits on the scale: 0.5 at 37.5 degC, rising to the top by 41.5 degC.
export const thermalLevel = (temp) => clamp(0.5 + (temp - THERMAL_RANGE[0]) * 0.125, 0.3, 0.97);
export const ironbowCss = () => `linear-gradient(90deg, ${IRON.filter(([t]) => t >= 0.38).map(([t, c]) => `${c} ${(((t - 0.38) / 0.62) * 100).toFixed(0)}%`).join(', ')})`;

// ---------------------------------------------------------------- repaint
// Tone curves, indexed by a pixel's brightness (0-255).
const T = (() => {
  const mk = () => new Float32Array(256);
  const t = { mul: mk(), dark: mk(), sheen: mk(), skin: mk(), horn: mk(), bell: mk(), bellHi: mk(), collar: mk() };
  for (let i = 0; i < 256; i++) {
    const y = i / 255;
    t.mul[i] = Math.min(i / 242, 1.05);                      // white fur as a multiplier: 1 where the picture is brightest
    t.dark[i] = clamp(Math.pow(y / 0.15, 0.7), 0.2, 1.9);   // black fur, relit so its strands survive a lighter colour
    t.sheen[i] = smooth(0.75, 1, y);                        // highlights a dark coat would otherwise lose
    t.skin[i] = clamp(y / 0.68, 0.1, 1.4);
    t.horn[i] = clamp(y / 0.7, 0.2, 1.35);
    t.bell[i] = clamp(y / 0.55, 0.2, 1.3);
    t.bellHi[i] = smooth(0.78, 0.97, y) * 0.8;
    t.collar[i] = clamp(Math.pow(y / 0.2, 0.7), 0.3, 2.4);
  }
  return t;
})();
export const PART = { keep: 0, skin: 1, horn: 2, bell: 3, collar: 4 };

// src: { w, h, rgb (RGBA bytes), alpha, white, fur, part, lum (one byte per pixel), todo (indices worth painting) }
// Writes straight-alpha RGBA into out. Pixels outside `todo` are left as they are.
// `from` and `to` pick a slice of the work, so a repaint can be spread over several frames.
export function repaint(src, pal, out, from = 0, to = Infinity) {
  const { rgb, alpha, white, fur, part, lum, todo, w, h } = src;
  const n = Math.min(to, todo ? todo.length : w * h);
  if (pal.mode === 'thermal') {
    const base = thermalLevel(pal.temp), legs = h * 0.72, mid = h * 0.5, o = new Uint8Array(out.buffer, out.byteOffset, out.length);
    for (let q = from; q < n; q++) {
      const i = todo ? todo[q] : q, j = i * 4, y = lum[i], wv = white[i] / 255, fw = fur[i] / 255, row = (i / w) | 0;
      // form shading with the black patches flattened out, so the animal reads as one warm body
      const shade = (T.dark[y] / 1.3) * (1 - wv) + T.mul[y] * wv;
      let v = base + 0.22 * (shade - 0.85);
      if (row > legs) v -= (0.12 * (row - legs)) / (h - legs);          // legs run cooler
      if (fw < 1) {
        const id = part[i];
        // eyes, muzzle and udder are the warm spots a thermal camera sees; horn, hoof and metal are cold
        const d = id === PART.skin ? 0.1 : id === PART.horn ? -0.3 : id === PART.bell ? -0.55 : id === PART.collar ? -0.4 : row < mid ? 0.14 : -0.3;
        v += d * (1 - fw);
      }
      const k = (clamp(v, 0, 1) * 255) | 0;
      o[j] = IRONBOW[k * 3]; o[j + 1] = IRONBOW[k * 3 + 1]; o[j + 2] = IRONBOW[k * 3 + 2]; o[j + 3] = alpha[i];
    }
    return out;
  }
  const coat = pal.coat ? hexToRgb(pal.coat) : null, patch = pal.patch ? hexToRgb(pal.patch) : null;
  const tint = [null, pal.skin, pal.horn, pal.bell, pal.collar].map((c) => (c ? hexToRgb(c) : null));
  const anyFur = !!(coat || patch), anyPart = tint.some(Boolean);
  // Bytes are written through a plain view with the clamp done by hand, which is several times
  // faster than letting a clamped array convert every float.
  const o = new Uint8Array(out.buffer, out.byteOffset, out.length);
  if (!anyFur && !anyPart) {                     // as painted: a straight copy
    for (let q = from; q < n; q++) { const i = todo ? todo[q] : q, j = i * 4; o[j] = rgb[j]; o[j + 1] = rgb[j + 1]; o[j + 2] = rgb[j + 2]; o[j + 3] = alpha[i]; }
    return out;
  }
  const curve = [null, T.skin, T.horn, T.bell, T.collar];
  const c0 = coat ? coat[0] : 0, c1 = coat ? coat[1] : 0, c2 = coat ? coat[2] : 0, p0 = patch ? patch[0] : 0, p1 = patch ? patch[1] : 0, p2 = patch ? patch[2] : 0;
  const sheen = coat ? (1 - luma(c0, c1, c2) / 255) * 0.1 * 255 : 0, hasCoat = !!coat, hasPatch = !!patch;
  const MUL = T.mul, DARK = T.dark, SHEEN = T.sheen, K = 1 / 255;
  for (let q = from; q < n; q++) {
    const i = todo ? todo[q] : q, j = i * 4, r = rgb[j], g = rgb[j + 1], b = rgb[j + 2], y = lum[i], f8 = fur[i];
    let R = r, G = g, B = b;
    if (anyFur && f8 !== 0) {
      const w8 = white[i];
      let wr = r, wg = g, wb = b, dr = r, dg = g, db = b;
      if (hasCoat && w8 !== 0) {                   // white fur: multiply, which keeps the painted shading and its warmth
        const hl = sheen * SHEEN[y];
        wr = c0 * MUL[r] + hl; wg = c1 * MUL[g] + hl; wb = c2 * MUL[b] + hl;
      }
      if (hasPatch && w8 !== 255) { const f = DARK[y]; dr = p0 * f; dg = p1 * f; db = p2 * f; }
      if (w8 === 255) { R = wr; G = wg; B = wb; } else if (w8 === 0) { R = dr; G = dg; B = db; }
      else { const wv = w8 * K; R = dr + (wr - dr) * wv; G = dg + (wg - dg) * wv; B = db + (wb - db) * wv; }
    }
    if (f8 !== 255) {
      const id = part[i], c = tint[id], fw = f8 * K;
      let pr = r, pg = g, pb = b;
      if (c) {
        const f = curve[id][y];
        pr = c[0] * f; pg = c[1] * f; pb = c[2] * f;
        if (id === PART.bell) { const hi = T.bellHi[y]; pr += (255 - pr) * hi; pg += (255 - pg) * hi; pb += (255 - pb) * hi; }   // keep the metal's glint
      }
      R = pr + (R - pr) * fw; G = pg + (G - pg) * fw; B = pb + (B - pb) * fw;
    }
    o[j] = R > 255 ? 255 : R; o[j + 1] = G > 255 ? 255 : G; o[j + 2] = B > 255 ? 255 : B; o[j + 3] = alpha[i];
  }
  return out;
}

// Splits the decoded art files into the planes repaint() reads. `mask` is the 2 x 2 tile sheet.
export function prepare(w, h, rgbBytes, maskBytes, partStep) {
  const n = w * h, W2 = w * 2;
  const src = { w, h, rgb: rgbBytes, alpha: new Uint8Array(n), white: new Uint8Array(n), fur: new Uint8Array(n), part: new Uint8Array(n), lum: new Uint8Array(n), todo: null };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x;
    src.alpha[i] = maskBytes[(y * W2 + x) * 4];
    src.white[i] = maskBytes[(y * W2 + x + w) * 4];
    src.fur[i] = maskBytes[((y + h) * W2 + x) * 4];
    src.part[i] = Math.min(4, Math.round(maskBytes[((y + h) * W2 + x + w) * 4] / partStep));
    src.lum[i] = Math.round(luma(rgbBytes[i * 4], rgbBytes[i * 4 + 1], rgbBytes[i * 4 + 2]));
  }
  // Only the animal and a thin rim round her need repainting. The rim matters: texture
  // filtering reaches a few pixels past the edge, and must find coat colour there.
  const RIM = 5, near = new Uint8Array(n), pass = new Uint8Array(n);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let hit = 0;
    for (let d = -RIM; d <= RIM && !hit; d++) { const xx = x + d; if (xx >= 0 && xx < w && src.alpha[y * w + xx] > 0) hit = 1; }
    pass[y * w + x] = hit;
  }
  let count = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let hit = 0;
    for (let d = -RIM; d <= RIM && !hit; d++) { const yy = y + d; if (yy >= 0 && yy < h && pass[yy * w + x]) hit = 1; }
    near[y * w + x] = hit; count += hit;
  }
  src.todo = new Uint32Array(count);
  for (let i = 0, k = 0; i < n; i++) if (near[i]) src.todo[k++] = i;
  return src;
}
