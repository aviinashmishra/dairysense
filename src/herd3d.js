// The herd in full 3D. Each animal is one skinned mesh: a sculpted body, neck
// and head, four jointed legs, tail, ears, jaw, eyelids, udder and the collar
// with its gold bell (the AI belt's sensor, with a status LED on it), all on
// one skeleton so the whole animal costs about five draw calls.
//
// How she moves:
//  - She faces where she is going, in any direction. Turning is gradual, with
//    a top turn rate, her spine curving into the turn and her head leading it.
//  - Hooves are planted in the world. Each step lifts a hoof and puts it down
//    where her hip will be, in the four-beat walk of cattle (left hind, left
//    fore, right hind, right fore). Hooves never slide, she steps round when
//    she turns on the spot, and she squares her feet up when she stops.
//  - Legs are two-bone chains solved with IK, swinging out sideways as needed.
//  - Grazing, eating and drinking bring the muzzle to the grass, the manger or
//    the water. Idle, she looks about: at a herd-mate, and at you when you
//    select her. She blinks, flicks her ears and swishes her tail at flies.
//  - Cattle lie down front end first and get up hind end first, legs folded
//    under, lying a little to one side; at night some sleep with the head
//    turned back to the flank.
//  - Her belt data shows: fever = slow, short steps, head and ears low; lame =
//    a limp with the head bobbing up on the sore foot; heat stress = panting,
//    fast breathing and tail swishing; rumination = cud chewing; heat
//    (estrus) = restless with the tail raised.
//  - The coat follows the herd colour views (coats, health, thermal) through
//    the palettes in coats.js, and each hoof that lands leaves a print.
import * as THREE from 'three';
import { paletteFor, paletteSig, statusOf, BELT, IRONBOW, thermalLevel } from './coats.js';
import { stampPrint, printLayer, tickPrints } from './gait.js';
import { GATE } from './layout.js';

export const S = 1.45;                    // metres of animal per board unit
const TAU = Math.PI * 2;
const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (rate, dt) => 1 - Math.exp(-rate * dt);
const ss = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const frac = (x) => x - Math.floor(x);
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
function rng(seed) {
  let a = seed | 0;
  return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---------------------------------------------------------------- anatomy
// Model space: metres, she faces +x, y is up, her left side is -z.
const POLL = [1.24, 1.47], HEAD_TILT = -0.95, NECK_BASE = [0.66, 1.16], NECK_TILT = 0.42;
const LEG = {
  front: { pivot: [0.6, 1.0], knee: [0.62, 0.46], fet: [0.63, 0.14], z: 0.19, fz: 0.18, lift: 0.15 },
  hind: { pivot: [-0.6, 1.04], knee: [-0.74, 0.5], fet: [-0.67, 0.14], z: 0.21, fz: 0.19, lift: 0.12 },
};
const FEET = [                          // touchdown order of the cattle walk
  { name: 'HL', front: false, side: -1, off: 0 },
  { name: 'FL', front: true, side: -1, off: 0.25 },
  { name: 'HR', front: false, side: 1, off: 0.5 },
  { name: 'FR', front: true, side: 1, off: 0.75 },
];
const LAME = 1;                          // the left fore
const STRIDE = 1.3, DUTY = 0.62, MAX_HZ = 2.1;

// Bones: name, parent, model-space position.
const headPt = (x, y, z = 0) => {         // head-local point (along the face) to model space
  const c = Math.cos(HEAD_TILT), s = Math.sin(HEAD_TILT);
  return [POLL[0] + x * c - y * s, POLL[1] + x * s + y * c, z];
};
const BONES = [
  ['trunk', null, [0, 1.12, 0]], ['hips', 'trunk', [0, 1.12, 0]], ['chest', 'trunk', [0, 1.12, 0]], ['ribs', 'trunk', [0, 1.0, 0]],
  ['neck1', 'chest', [0.74, 1.22, 0]], ['neck2', 'neck1', [1.0, 1.33, 0]], ['head', 'neck2', [POLL[0], POLL[1], 0]],
  ['jaw', 'head', headPt(0.08, -0.1)], ['earL', 'head', headPt(0.02, 0.07, -0.11)], ['earR', 'head', headPt(0.02, 0.07, 0.11)],
  ['eyeL', 'head', headPt(0.13, 0.055, -0.118)], ['eyeR', 'head', headPt(0.13, 0.055, 0.118)],
  ['bell', 'neck2', [1.103, 1.05, 0]], ['udder', 'hips', [-0.42, 0.74, 0]],
  ['tail1', 'hips', [-1.02, 1.3, 0]], ['tail2', 'tail1', [-1.065, 1.08, 0]], ['tail3', 'tail2', [-1.085, 0.84, 0]], ['tail4', 'tail3', [-1.095, 0.6, 0]],
];
for (const f of FEET) {
  const L = f.front ? LEG.front : LEG.hind, s = f.side, par = f.front ? 'chest' : 'hips';
  BONES.push([f.name + 'u', par, [L.pivot[0], L.pivot[1], L.z * s]], [f.name + 'l', f.name + 'u', [L.knee[0], L.knee[1], L.fz * s]], [f.name + 'h', f.name + 'l', [L.fet[0], L.fet[1], L.fz * s]]);
}
const BI = Object.fromEntries(BONES.map((b, i) => [b[0], i]));

// Materials, in draw order: textured coat, vertex-coloured trim, eyes, the bell, glowing bits.
const COAT = 0, TRIM = 1, EYE = 2, BELL = 3, GLOW = 4;
// trim roles (vertex colours set from the palette)
const R = { skin: 0, nose: 1, innerEar: 2, hoof: 3, horn: 4, earOuter: 5, tuft: 6, collar: 7, coat: 8, patch: 9, tag: 10, hump: 11, led: 12, shine: 13 };
// atlas regions of the coat texture, in uv: [u0, v0, u1, v1]
const REG = { body: [0, 0.5, 1, 1], neck: [0, 0.25, 0.5, 0.5], head: [0.5, 0.25, 1, 0.5], leg: [0, 0, 1, 0.25] };
const LEG_H = 1.15;                      // height the leg strip of the atlas covers

// ------------------------------------------------------- geometry helpers
const V = new THREE.Vector3(), N3 = new THREE.Vector3(), M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), E = new THREE.Euler();
function placed(geo, { pos = [0, 0, 0], scale = [1, 1, 1], rot = [0, 0, 0], order = 'XYZ' } = {}) {
  M4.compose(V.set(...pos), Q.setFromEuler(E.set(rot[0], rot[1], rot[2], order)), N3.set(...scale));
  geo.applyMatrix4(M4);
  return geo;
}
const ellip = (c, r, rot, ws = 18, hs = 12) => placed(new THREE.SphereGeometry(1, ws, hs), { pos: c, scale: r, rot: rot || [0, 0, 0] });
function tube(p0, p1, r0, r1, seg = 14, rows = 3) {
  const a = new THREE.Vector3(...p0), b = new THREE.Vector3(...p1), d = b.clone().sub(a), len = d.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, seg, rows, true);
  Q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  M4.compose(a.add(b).multiplyScalar(0.5), Q, N3.set(1, 1, 1));
  return g.applyMatrix4(M4);
}
// A skin over cross-sections [x, centreY, top, bottom, halfWidth] along x (superellipse rings).
function loft(rings, { radial = 30, sub = 4, sq = 2.4 } = {}) {
  const cr = (a, b, c, d, t) => 0.5 * (2 * b + (c - a) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (3 * b - a - 3 * c + d) * t * t * t);
  const RR = [];
  for (let i = 0; i < rings.length - 1; i++) {
    const a = rings[Math.max(0, i - 1)], b = rings[i], c = rings[i + 1], d = rings[Math.min(rings.length - 1, i + 2)];
    for (let s = 0; s < sub; s++) {
      const t = s / sub;
      RR.push([lerp(b[0], c[0], t), cr(a[1], b[1], c[1], d[1], t), ...[2, 3, 4].map((k) => Math.max(0.004, cr(a[k], b[k], c[k], d[k], t)))]);
    }
  }
  RR.push(rings[rings.length - 1]);
  const pos = [], uv = [], idx = [], n = RR.length, x0 = RR[0][0], x1 = RR[n - 1][0], e = 2 / sq;
  for (const [x, cy, top, bot, hw] of RR) for (let j = 0; j <= radial; j++) {
    const th = -Math.PI / 2 + (j / radial) * TAU, c = Math.cos(th), s = Math.sin(th);
    pos.push(x, cy + (s > 0 ? top : bot) * Math.sign(s) * Math.pow(Math.abs(s), e), hw * Math.sign(c) * Math.pow(Math.abs(c), e));
    uv.push((x - x0) / (x1 - x0), j / radial);
  }
  const W = radial + 1;
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < radial; j++) { const a = i * W + j, b = a + W; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const c0 = pos.length / 3; pos.push(RR[0][0], RR[0][1], 0); uv.push(0, 0.5);
  pos.push(RR[n - 1][0], RR[n - 1][1], 0); uv.push(1, 0.5);
  for (let j = 0; j < radial; j++) { idx.push(c0, j, j + 1); idx.push(c0 + 1, (n - 1) * W + j + 1, (n - 1) * W + j); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  const nrm = geo.attributes.normal;            // weld the shading across the belly seam
  for (let i = 0; i < n; i++) {
    const a = i * W, b = a + radial;
    N3.set(nrm.getX(a) + nrm.getX(b), nrm.getY(a) + nrm.getY(b), nrm.getZ(a) + nrm.getZ(b)).normalize();
    nrm.setXYZ(a, N3.x, N3.y, N3.z); nrm.setXYZ(b, N3.x, N3.y, N3.z);
  }
  return geo;
}

// A smooth limb swept along a path of [x, y, z] points with [rx (fore-aft), rz (sideways)] radii.
function sweep(pts, radii, { radial = 18, sub = 4 } = {}) {
  const cr = (a, b, c, d, t) => 0.5 * (2 * b + (c - a) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (3 * b - a - 3 * c + d) * t * t * t);
  const P = [], Rr = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const ia = Math.max(0, i - 1), id = Math.min(pts.length - 1, i + 2);
    for (let s = 0; s < sub; s++) {
      const t = s / sub;
      P.push([0, 1, 2].map((k) => cr(pts[ia][k], pts[i][k], pts[i + 1][k], pts[id][k], t)));
      Rr.push([0, 1].map((k) => Math.max(0.01, cr(radii[ia][k], radii[i][k], radii[i + 1][k], radii[id][k], t))));
    }
  }
  P.push(pts[pts.length - 1]); Rr.push(radii[radii.length - 1]);
  const pos = [], uv = [], idx = [], n = P.length, W = radial + 1;
  for (let i = 0; i < n; i++) {
    const a = P[Math.max(0, i - 1)], b = P[Math.min(n - 1, i + 1)];
    let tx = b[0] - a[0], ty = b[1] - a[1]; const tl = Math.hypot(tx, ty) || 1; tx /= tl; ty /= tl;
    const nx = -ty, ny = tx;                     // in-plane normal; the lateral axis is z
    for (let j = 0; j <= radial; j++) {
      const th = (j / radial) * TAU, c = Math.cos(th), s = Math.sin(th);
      pos.push(P[i][0] + nx * Rr[i][0] * c, P[i][1] + ny * Rr[i][0] * c, P[i][2] + Rr[i][1] * s);
      uv.push(j / radial, i / (n - 1));
    }
  }
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < radial; j++) { const a = i * W + j, b = a + W; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}

// Collects parts into one skinned geometry with a group per material.
function builder() {
  const P = [], Nn = [], U = [], SI = [], SW = [], ROLE = [], lists = [[], [], [], [], []];
  const p = new THREE.Vector3(), n = new THREE.Vector3();
  function add(geo, { mat = COAT, bone = 'trunk', w = null, uv = null, role = -1 }) {
    if (!geo.attributes.normal) geo.computeVertexNormals();
    const pos = geo.attributes.position, nrm = geo.attributes.normal, guv = geo.attributes.uv, base = P.length / 3;
    for (let i = 0; i < pos.count; i++) {
      p.fromBufferAttribute(pos, i); n.fromBufferAttribute(nrm, i);
      P.push(p.x, p.y, p.z); Nn.push(n.x, n.y, n.z);
      let u = 0.5, v = 0.5;
      if (Array.isArray(uv)) { const gu = guv ? guv.getX(i) : 0.5, gv = guv ? guv.getY(i) : 0.5; u = lerp(uv[0], uv[2], gu); v = lerp(uv[1], uv[3], gv); }
      else if (typeof uv === 'function') [u, v] = uv(p, guv ? guv.getX(i) : 0.5, guv ? guv.getY(i) : 0.5);
      U.push(u, v);
      let ws = w ? w(p) : [[BI[bone], 1]];
      ws = ws.filter((x) => x[1] > 1e-4).sort((a, b) => b[1] - a[1]).slice(0, 4);
      const tot = ws.reduce((s, x) => s + x[1], 0) || 1;
      for (let k = 0; k < 4; k++) { SI.push(ws[k] ? ws[k][0] : 0); SW.push(ws[k] ? ws[k][1] / tot : 0); }
      ROLE.push(role);
    }
    const idx = geo.index ? geo.index.array : [...Array(pos.count).keys()];
    for (let i = 0; i < idx.length; i++) lists[mat].push(base + idx[i]);
  }
  function build() {
    const geo = new THREE.BufferGeometry(), count = P.length / 3;
    geo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(Nn, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
    geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(SI, 4));
    geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(SW, 4));
    const col = new THREE.Float32BufferAttribute(new Float32Array(count * 3).fill(1), 3);
    col.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('color', col);
    const all = [];
    lists.forEach((l, m) => { if (l.length) { geo.addGroup(all.length, l.length, m); all.push(...l); } });
    geo.setIndex(count > 65535 ? new THREE.Uint32BufferAttribute(all, 1) : new THREE.Uint16BufferAttribute(all, 1));
    return { geo, role: Int8Array.from(ROLE) };
  }
  return { add, build };
}

// leg strip of the atlas: around the leg, and up it by height
const legUV = (cx, cz) => (p) => [frac(Math.atan2(p.z - cz, p.x - cx) / TAU + 0.5), clamp(p.y / LEG_H) * 0.25];

// ---------------------------------------------------------------- the body
function sculpt(kind, breed) {
  const buffalo = kind === 'buffalo', zebu = breed === 'gir' || breed === 'sahiwal';
  const B = builder(), bulk = buffalo ? 1.08 : 1;
  const wb = (z) => z * bulk;

  // trunk: hips -> chest blend, the barrel also breathes with the ribs bone
  const body = loft([
    [-1.06, 1.28, 0.03, 0.04, 0.03], [-1.0, 1.24, 0.15, 0.22, wb(0.2)], [-0.86, 1.18, 0.24, 0.37, wb(0.31)],
    [-0.62, 1.14, 0.31, 0.45, wb(0.37)], [-0.3, 1.1, 0.31, 0.5, wb(0.41)], [0, 1.09, 0.31, 0.51, wb(0.42)],
    [0.3, 1.11, 0.32, 0.49, wb(0.39)], ...(zebu ? [[0.44, 1.13, 0.39, 0.48, wb(0.36)], [0.53, 1.15, 0.48, 0.47, wb(0.33)], [0.62, 1.16, 0.43, 0.45, wb(0.31)]] : [[0.55, 1.14, 0.36, 0.47, wb(0.34)]]), [0.76, 1.17, 0.32, 0.43, wb(0.29)],
    [0.9, 1.18, 0.24, 0.35, wb(0.22)], [0.98, 1.19, 0.12, 0.2, 0.12], [1.0, 1.2, 0.03, 0.04, 0.03],
  ], { radial: 34, sub: 5 });
  const trunkW = (p) => {
    const c = ss(-0.38, 0.38, p.x), r = 0.42 * (1 - ss(0.2, 0.55, Math.abs(p.x + 0.05))) * ss(1.3, 0.9, p.y);
    return [[BI.hips, (1 - c) * (1 - r)], [BI.chest, c * (1 - r)], [BI.ribs, r]];
  };
  B.add(body, { w: trunkW, uv: REG.body });
  for (const s of [-1, 1]) B.add(ellip([-0.66, 1.35, 0.21 * s * bulk], [0.09, 0.05, 0.07]), { w: trunkW, uv: (p) => [0.3, 0.75] });      // hook bones

  // neck: chest -> neck1 -> neck2, with a dewlap (big on zebu cattle)
  const nc = Math.cos(NECK_TILT), ns = Math.sin(NECK_TILT);
  const neckM = (x, y, z) => [NECK_BASE[0] + x * nc - y * ns, NECK_BASE[1] + x * ns + y * nc, z];
  const neckGeo = loft([[-0.12, -0.03, 0.27, 0.38, wb(0.23)], [0.08, -0.02, 0.25, 0.34, wb(0.2)], [0.3, 0, 0.2, 0.27, wb(0.16)],
    [0.48, 0.02, 0.165, 0.21, wb(0.132)], [0.62, 0.04, 0.145, 0.165, wb(0.118)], [0.7, 0.05, 0.06, 0.07, 0.05]], { radial: 26, sub: 4 });
  placed(neckGeo, { pos: [NECK_BASE[0], NECK_BASE[1], 0], rot: [0, 0, NECK_TILT] });
  const neckT = (p) => clamp(((p.x - NECK_BASE[0]) * nc + (p.y - NECK_BASE[1]) * ns) / 0.62, -0.3, 1.2);
  const neckW = (p) => {
    const t = neckT(p), w2 = ss(0.42, 0.85, t), w1 = ss(-0.1, 0.32, t) * (1 - w2);
    return [[BI.chest, 1 - w1 - w2], [BI.neck1, w1], [BI.neck2, w2]];
  };
  B.add(neckGeo, { w: neckW, uv: REG.neck });
  B.add(ellip(neckM(0.2, -0.3, 0), zebu ? [0.26, 0.14, 0.035] : [0.2, 0.07, 0.04], [0, 0, NECK_TILT - 0.2]), { w: neckW, uv: (p) => [0.25, 0.3] });

  // collar, bell and LED (the bell is the AI belt's sensor)
  // a leather strap round the neck, square to it and snug on its cross-section
  const collar = placed(new THREE.CylinderGeometry(1, 1, 0.058, 44, 1, true), { scale: [0.229, 1, wb(0.162)] });
  placed(collar, { rot: [0, 0, NECK_TILT - Math.PI / 2], pos: neckM(0.36, -0.024, 0) });
  const rim = (o) => { const g = placed(new THREE.TorusGeometry(1, 0.03, 6, 44), { rot: [Math.PI / 2, 0, 0], scale: [0.232, wb(0.165), 0.3] }); placed(g, { pos: [0, o, 0] }); return placed(g, { rot: [0, 0, NECK_TILT - Math.PI / 2], pos: neckM(0.36, -0.024, 0) }); };
  B.add(collar, { mat: TRIM, role: R.collar, w: neckW });
  for (const o of [-0.029, 0.029]) B.add(rim(o), { mat: TRIM, role: R.collar, w: neckW });
  const bellPts = [[0, -0.115], [0.055, -0.112], [0.062, -0.1], [0.055, -0.08], [0.045, -0.05], [0.038, -0.02], [0.033, 0], [0.02, 0.012], [0, 0.016]].map(([r, y]) => new THREE.Vector2(r, y));
  B.add(placed(new THREE.LatheGeometry(bellPts, 22), { pos: [1.103, 1.035, 0] }), { mat: BELL, bone: 'bell' });
  B.add(ellip([1.103, 0.922, 0], [0.018, 0.018, 0.018]), { mat: BELL, bone: 'bell' });                     // clapper
  B.add(placed(new THREE.TorusGeometry(0.018, 0.006, 6, 14), { pos: [1.103, 1.06, 0] }), { mat: BELL, bone: 'bell' });
  B.add(ellip([1.15, 0.985, 0], [0.012, 0.012, 0.012], null, 10, 8), { mat: GLOW, role: R.led, bone: 'bell' });

  // head
  const hd = loft([[-0.07, 0, 0.05, 0.06, 0.05], [0, 0, 0.12, 0.13, wb(0.12)], [0.1, 0.005, 0.145, 0.15, wb(0.137)], [0.22, -0.005, 0.128, 0.14, wb(0.122)],
    [0.36, -0.015, 0.098, 0.116, 0.098], [0.47, -0.02, 0.086, 0.1, 0.094], [0.55, -0.022, 0.08, 0.095, 0.1], [0.6, -0.02, 0.04, 0.05, 0.05]], { radial: 28, sub: 4 });
  placed(hd, { pos: [POLL[0], POLL[1], 0], rot: [0, 0, HEAD_TILT] });
  B.add(hd, { bone: 'head', uv: REG.head });
  const onHead = (c, r, rot = [0, 0, 0]) => placed(ellip([0, 0, 0], r, rot), { pos: headPt(...c), rot: [0, 0, HEAD_TILT] });
  B.add(onHead([0.565, -0.012, 0], [0.058, 0.092, 0.105]), { mat: TRIM, role: R.skin, bone: 'head' });          // muzzle
  for (const s of [-1, 1]) B.add(onHead([0.605, 0.012, 0.045 * s], [0.016, 0.026, 0.016]), { mat: TRIM, role: R.nose, bone: 'head' });
  B.add(onHead([0.32, -0.115, 0], [0.24, 0.048, 0.078]), { mat: TRIM, role: R.coat, bone: 'jaw' });               // lower jaw
  B.add(onHead([0.56, -0.085, 0], [0.05, 0.028, 0.07]), { mat: TRIM, role: R.skin, bone: 'jaw' });                // lower lip
  for (const s of [-1, 1]) {
    const eye = s < 0 ? 'eyeL' : 'eyeR';
    B.add(onHead([0.13, 0.055, 0.118 * s], [0.03, 0.034, 0.022]), { mat: EYE, bone: eye });
    B.add(onHead([0.142, 0.07, 0.133 * s], [0.007, 0.007, 0.004]), { mat: GLOW, role: R.shine, bone: eye });
    B.add(onHead([0.12, 0.085, 0.112 * s], [0.042, 0.016, 0.028]), { mat: TRIM, role: R.coat, bone: eye });       // upper lid / brow
    // horns: curled back on buffalo, curving out and up on cattle
    if (buffalo) {
      const h = new THREE.TorusGeometry(0.17, 0.035, 8, 18, Math.PI * 1.1);
      placed(h, { pos: headPt(-0.03, 0.12, 0.2 * s), rot: [s > 0 ? 1.3 : -1.3, s > 0 ? 0.25 : -0.25, s > 0 ? 2.7 : 0.45] });
      B.add(h, { mat: TRIM, role: R.horn, bone: 'head' });
    } else {
      const base = headPt(0.0, 0.11, 0.075 * s), mid = [base[0] - 0.02, base[1] + (zebu ? 0.06 : 0.07), base[2] + 0.06 * s], tip = [mid[0] - (zebu ? 0.05 : 0.0), mid[1] + (zebu ? 0.07 : 0.05), mid[2] + (zebu ? 0.0 : 0.04 * s)];
      B.add(tube(base, mid, 0.028, 0.02, 10, 2), { mat: TRIM, role: R.horn, bone: 'head' });
      B.add(tube(mid, tip, 0.02, 0.004, 10, 2), { mat: TRIM, role: R.horn, bone: 'head' });
    }
    // ears: long and drooping on Gir, horizontal on the others; pink inside, a yellow tag in the right one
    const ear = s < 0 ? 'earL' : 'earR', droop = breed === 'gir' ? -1.15 : breed === 'sahiwal' ? -0.55 : buffalo ? -0.35 : -0.18;
    const len = breed === 'gir' ? 0.27 : 0.2;
    const earBase = headPt(0.02, 0.07, 0.11 * s);
    const leaf = placed(new THREE.SphereGeometry(1, 14, 8), { scale: [0.05, 0.016, len / 2], pos: [0, 0, (len / 2) * s] });
    const inner = placed(new THREE.SphereGeometry(1, 12, 6), { scale: [0.034, 0.006, len * 0.4], pos: [0.002, 0.012, (len / 2) * s] });
    for (const g of [leaf, inner]) { placed(g, { rot: [-droop * s, -0.3 * s, 0], order: 'YXZ' }); placed(g, { pos: earBase }); }
    B.add(leaf, { mat: TRIM, role: R.earOuter, bone: ear });
    B.add(inner, { mat: TRIM, role: R.innerEar, bone: ear });
    if (s > 0) {
      const tag = placed(new THREE.BoxGeometry(0.035, 0.045, 0.004), { pos: [0, -0.03, len * 0.35] });
      placed(tag, { rot: [-droop, -0.3, 0], order: 'YXZ' }); placed(tag, { pos: earBase });
      B.add(tag, { mat: TRIM, role: R.tag, bone: ear });
    }
  }

  // udder with four teats (smaller and dark on buffalo)
  const us = buffalo ? 0.8 : 1;
  B.add(ellip([-0.42, 0.7, 0], [0.24 * us, 0.16 * us, 0.19 * us]), { mat: TRIM, role: R.skin, bone: 'udder' });
  for (const [x, z] of [[0.1, 0.085], [0.1, -0.085], [-0.09, 0.085], [-0.09, -0.085]]) {
    B.add(tube([-0.42 + x * us, 0.57, z * us], [-0.42 + x * us, 0.5, z * us], 0.022, 0.016, 8, 1), { mat: TRIM, role: R.skin, bone: 'udder' });
  }

  // tail: one tube bending through four bones, and the switch
  const tailPts = [[-1.02, 1.3], [-1.065, 1.08], [-1.085, 0.84], [-1.095, 0.6], [-1.1, 0.47]];
  const tailW = (p) => {
    const w = [0, 0, 0, 0], y = p.y;
    const t = clamp((1.3 - y) / 0.83 * 3.6, 0, 3.6), i = Math.min(3, Math.floor(t)), f = ss(0.6, 1, t - i);
    w[i] = 1 - f; if (i < 3) w[i + 1] = f; else w[3] = 1;
    return [[BI.tail1, w[0]], [BI.tail2, w[1]], [BI.tail3, w[2]], [BI.tail4, w[3]]];
  };
  for (let i = 0; i < 4; i++) B.add(tube([tailPts[i][0], tailPts[i][1], 0], [tailPts[i + 1][0], tailPts[i + 1][1], 0], 0.034 - i * 0.004, 0.03 - i * 0.004, 8, 4), { mat: TRIM, role: R.coat, w: tailW });
  B.add(ellip([-1.1, 0.4, 0], [0.05, 0.13, 0.05], null, 12, 8), { mat: TRIM, role: R.tuft, bone: 'tail4' });

  // legs: one continuous limb each, weighted across the joints so it bends like a leg
  FEET.forEach((f, li) => {
    const L = f.front ? LEG.front : LEG.hind, s = f.side, z = L.z * s, fz = L.fz * s, u = f.name + 'u', l = f.name + 'l', h = f.name + 'h';
    const par = BI[f.front ? 'chest' : 'hips'], kneeY = L.knee[1], fx = L.fet[0];
    const path = f.front
      ? [[0.6, 1.06, z], [0.6, 0.88, z * 1.02], [0.606, 0.72, fz], [0.615, 0.57, fz], [0.622, 0.47, fz], [0.625, 0.39, fz], [0.628, 0.26, fz], [0.63, 0.165, fz], [0.638, 0.1, fz], [0.648, 0.055, fz]]
      : [[-0.6, 1.1, z], [-0.6, 0.9, z * 0.97], [-0.645, 0.74, fz], [-0.69, 0.62, fz], [-0.735, 0.51, fz], [-0.722, 0.43, fz], [-0.695, 0.28, fz], [-0.672, 0.165, fz], [-0.664, 0.1, fz], [-0.655, 0.055, fz]];
    const radii = f.front
      ? [[0.17, 0.1], [0.15, 0.095], [0.098, 0.082], [0.074, 0.064], [0.064, 0.058], [0.05, 0.047], [0.043, 0.04], [0.049, 0.046], [0.043, 0.041], [0.047, 0.044]]
      : [[0.25, 0.13], [0.22, 0.125], [0.13, 0.095], [0.088, 0.07], [0.07, 0.055], [0.052, 0.047], [0.045, 0.041], [0.049, 0.046], [0.043, 0.041], [0.047, 0.044]];
    const lw = (p) => {
      const y = p.y, top = ss(0.84, 1.02, y), hoof = 1 - ss(0.12, 0.17, y), lower = (1 - ss(kneeY - 0.05, kneeY + 0.05, y)) * (1 - hoof);
      const upper = (1 - lower - hoof) * (1 - top);
      return [[par, top], [BI[u], upper], [BI[l], lower], [BI[h], hoof]];
    };
    const luv = (p, gu) => [li * 0.25 + gu * 0.25, clamp(p.y / LEG_H) * 0.25];
    B.add(sweep(path, radii, { radial: 20, sub: 5 }), { w: lw, uv: luv });
    if (!f.front) B.add(ellip([-0.775, 0.535, fz], [0.03, 0.04, 0.03]), { bone: l, uv: (p) => [li * 0.25 + 0.1, 0.12] });      // point of hock
    for (const c of [-1, 1]) {
      B.add(ellip([fx + 0.036, 0.034, fz + 0.023 * c], [0.062, 0.034, 0.024], [0, 0, -0.08]), { mat: TRIM, role: R.hoof, bone: h });   // the two claws
      B.add(ellip([fx - 0.032, 0.105, fz + 0.022 * c], [0.014, 0.011, 0.011], null, 8, 6), { mat: TRIM, role: R.hoof, bone: h });     // dewclaws
    }
  });
  return B.build();
}

// --------------------------------------------------------- coat painting
// One atlas per animal: the breed's pattern as a mask (painted once), recoloured
// whenever the palette changes, with fur grain and shading laid over it.
const ATLAS = 1024;
const regRect = (r) => ({ x: r[0] * ATLAS, y: (1 - r[3]) * ATLAS, w: (r[2] - r[0]) * ATLAS, h: (r[3] - r[1]) * ATLAS });
const lut = (t) => { const i = Math.round(clamp(t) * 255) * 3; return `rgb(${IRONBOW[i]},${IRONBOW[i + 1]},${IRONBOW[i + 2]})`; };
const lutRGB = (t, out) => { const i = Math.round(clamp(t) * 255) * 3; out.setRGB(IRONBOW[i] / 255, IRONBOW[i + 1] / 255, IRONBOW[i + 2] / 255, THREE.SRGBColorSpace); return out; };
function canvas(w = ATLAS, h = ATLAS) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

// Pixels per metre on the animal for each atlas region, along u and v, so a
// spot drawn here comes out round on her body rather than stretched.
const PPM = { body: [497, 190], neck: [683, 171], head: [764, 301], leg: [711, 223] };
function patternMask(breed, seed) {
  const c = canvas(), g = c.getContext('2d'), r = rng(seed);
  g.fillStyle = '#fff';
  // an irregular patch of size s metres, made of overlapping ellipses
  const blob = (reg, q, x, y, s, k = 7) => {
    const [px, py] = PPM[reg];
    for (let i = 0; i < k; i++) {
      g.beginPath();
      g.ellipse(x + (r() - 0.5) * s * 1.2 * px, y + (r() - 0.5) * s * 0.9 * py, s * (0.3 + r() * 0.45) * px, s * (0.25 + r() * 0.35) * py, 0, 0, TAU);
      g.fill();
    }
  };
  const inReg = (reg, f) => { const q = regRect(REG[reg]); g.save(); g.beginPath(); g.rect(q.x, q.y, q.w, q.h); g.clip(); f(q); g.restore(); };
  const legs = (f) => inReg('leg', (q) => { for (let i = 0; i < 4; i++) { g.save(); g.beginPath(); g.rect(q.x + (q.w / 4) * i, q.y, q.w / 4, q.h); g.clip(); f({ x: q.x + (q.w / 4) * i, y: q.y, w: q.w / 4, h: q.h }); g.restore(); } });
  const speckle = (reg, n, r0, r1) => inReg(reg, (q) => {
    const [px, py] = PPM[reg];
    for (let i = 0; i < n; i++) { const rr = r0 + r() * (r1 - r0); g.beginPath(); g.ellipse(q.x + r() * q.w, q.y + r() * q.h, rr * px, rr * py * (0.7 + r() * 0.6), 0, 0, TAU); g.fill(); }
  });
  if (breed === 'holstein') {
    inReg('body', (q) => { for (let i = 0; i < 13; i++) blob('body', q, q.x + r() * q.w, q.y + q.h * (0.12 + r() * 0.76), 0.13 + r() * 0.14); });
    inReg('neck', (q) => { for (let i = 0; i < 4; i++) blob('neck', q, q.x + r() * q.w, q.y + q.h * (0.15 + r() * 0.7), 0.08 + r() * 0.06); });
    inReg('head', (q) => {                       // dark round the eyes and over the poll, a white blaze down the face
      for (const v of [0.25, 0.75]) blob('head', q, q.x + q.w * 0.3, q.y + q.h * v, 0.07, 6);
      blob('head', q, q.x + q.w * 0.06, q.y + q.h * 0.5, 0.07, 5);
    });
    legs((q) => { for (let i = 0; i < 3; i++) blob('leg', q, q.x + r() * q.w, q.y + q.h * (0.02 + r() * 0.28), 0.04 + r() * 0.05, 5); });
  } else if (breed === 'gir') {
    g.globalAlpha = 0.92;
    speckle('body', 900, 0.008, 0.022); speckle('neck', 220, 0.008, 0.02); speckle('leg', 500, 0.006, 0.016);
    g.globalAlpha = 0.85;
    inReg('head', (q) => g.fillRect(q.x, q.y, q.w, q.h));
    g.globalAlpha = 1;
  } else if (breed === 'sahiwal') {
    g.filter = 'blur(16px)';
    inReg('body', (q) => { for (let i = 0; i < 30; i++) { g.globalAlpha = 0.2 + r() * 0.3; blob('body', q, q.x + r() * q.w, q.y + r() * q.h, 0.15 + r() * 0.15, 3); } });
    g.filter = 'none'; g.globalAlpha = 0.55;
    inReg('neck', (q) => g.fillRect(q.x, q.y, q.w, q.h));
    inReg('head', (q) => g.fillRect(q.x, q.y, q.w, q.h));
    g.globalAlpha = 1;
  } else {                                         // buffalo: near solid, a little lighter on the lower legs
    g.globalAlpha = 0.92; g.fillRect(0, 0, ATLAS, ATLAS);
    g.globalCompositeOperation = 'destination-out';
    inReg('leg', (q) => { const gr = g.createLinearGradient(0, q.y + q.h * 0.55, 0, q.y + q.h); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,0.55)'); g.fillStyle = gr; g.fillRect(q.x, q.y, q.w, q.h); });
    g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
  }
  if (breed !== 'murrah') {
    const q = regRect(REG.body);
    g.globalCompositeOperation = 'destination-out';
    for (const [x0, x1] of [[q.x, q.x + q.w * 0.07], [q.x + q.w, q.x + q.w * 0.93]]) {
      const gr = g.createLinearGradient(x0, 0, x1, 0);
      gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr; g.fillRect(Math.min(x0, x1), q.y, Math.abs(x1 - x0), q.h);
    }
    g.globalCompositeOperation = 'source-over';
  }
  return c;
}
function shading(seed) {
  const c = canvas(), g = c.getContext('2d'), r = rng(seed + 99);
  for (let i = 0; i < 26000; i++) { g.fillStyle = r() < 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.07)'; g.fillRect(r() * ATLAS, r() * ATLAS, 1 + r() * 6, 1); }
  // underside of the barrel and neck a little darker, the back a little lighter
  for (const reg of [REG.body, REG.neck, REG.head]) {
    const q = regRect(reg), gr = g.createLinearGradient(0, q.y, 0, q.y + q.h);
    gr.addColorStop(0, 'rgba(40,28,16,0.22)'); gr.addColorStop(0.18, 'rgba(0,0,0,0)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.05)');
    gr.addColorStop(0.82, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(40,28,16,0.22)');
    g.fillStyle = gr; g.fillRect(q.x, q.y, q.w, q.h);
  }
  const q = regRect(REG.leg), gr = g.createLinearGradient(0, q.y, 0, q.y + q.h);
  gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.85, 'rgba(60,45,30,0.1)'); gr.addColorStop(1, 'rgba(60,45,30,0.3)');
  g.fillStyle = gr; g.fillRect(q.x, q.y, q.w, q.h);
  return c;
}
let furBump = null;
function fur() {
  if (furBump) return furBump;
  const c = canvas(256, 256), g = c.getContext('2d'), r = rng(7);
  g.fillStyle = '#808080'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 9000; i++) { const v = 70 + r() * 110; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(r() * 256, r() * 256, 2 + r() * 7, 1); }
  furBump = new THREE.CanvasTexture(c);
  furBump.wrapS = furBump.wrapT = THREE.RepeatWrapping; furBump.repeat.set(10, 10);
  return furBump;
}

// The defaults when a palette leaves a part "as painted"
const DEF = { coat: '#f3efe7', patch: '#1f1e22', skin: '#e9a99c', horn: '#d8c49c', collar: '#5b3820', bell: '#d8aa3e' };
const BUF_DEF = { coat: '#45454c', patch: '#1d1d21', skin: '#55474b', horn: '#3b3b40' };

// ------------------------------------------------------------ the animal
let sharedSculpt = new Map();
let repaintFrame = -1;

export function buildAnimal3D(def, look, sim) {
  const breed = def.coat === 'murrah2' ? 'murrah' : def.coat, buffalo = def.kind === 'buffalo';
  const key = `${def.kind}:${breed}`;
  if (!sharedSculpt.has(key)) sharedSculpt.set(key, sculpt(def.kind, breed));
  const { geo: baseGeo, role } = sharedSculpt.get(key);
  const geo = baseGeo.clone();                       // own vertex colours, shared shape
  const colors = geo.attributes.color;
  colors.setUsage(THREE.DynamicDrawUsage);

  // ---- materials
  const atlas = canvas(), ag = atlas.getContext('2d'), tint = canvas();
  const mask = patternMask(breed, (def.idx + 1) * 7919), shade = shading(def.idx);
  const tex = new THREE.CanvasTexture(atlas);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const coatMat = new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: '#000000', roughness: buffalo ? 0.42 : 0.86, metalness: 0, bumpMap: fur(), bumpScale: 0.55 });
  const trimMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62, metalness: 0 });
  trimMat.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance *= vColor.rgb;'); };
  trimMat.customProgramCacheKey = () => 'herd3d-trim';
  const eyeMat = new THREE.MeshStandardMaterial({ color: '#100a07', roughness: 0.08, metalness: 0.1 });
  const bellMat = new THREE.MeshStandardMaterial({ color: DEF.bell, roughness: 0.3, metalness: 0.55, emissive: '#2c1e05' });
  const glowMat = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
  const mats = [coatMat, trimMat, eyeMat, bellMat, glowMat];

  // ---- skeleton
  const mesh = new THREE.SkinnedMesh(geo, mats);
  mesh.castShadow = true; mesh.receiveShadow = true; mesh.frustumCulled = false;
  mesh.scale.setScalar(S);
  const bones = BONES.map(([name]) => { const b = new THREE.Bone(); b.name = name; return b; });
  BONES.forEach(([name, parent, p], i) => {
    const b = bones[i];
    if (parent) { const pp = BONES[BI[parent]][2]; b.position.set(p[0] - pp[0], p[1] - pp[1], p[2] - pp[2]); bones[BI[parent]].add(b); }
    else { b.position.set(...p); mesh.add(b); }
  });
  mesh.updateMatrixWorld(true);
  mesh.bind(new THREE.Skeleton(bones));
  const bone = Object.fromEntries(BONES.map(([n], i) => [n, bones[i]]));
  for (const f of FEET) bone[f.name + 'u'].rotation.order = 'XYZ';

  const root = new THREE.Group();
  root.add(mesh);
  // invisible box for clicking her, and the status ring and belt ping
  const hit = new THREE.Mesh(new THREE.BoxGeometry(2.25 * S, 1.6 * S, 0.95 * S), new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }));
  hit.position.set(0.1 * S, 0.85 * S, 0); hit.visible = false; hit.userData.animalId = def.id;
  root.add(hit);
  const ringMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.78, 2.0, 56), ringMat);
  ring.rotation.x = -Math.PI / 2; ring.position.set(0.1 * S, 0.04, 0); ring.visible = false;
  root.add(ring);
  const pingMat = new THREE.MeshBasicMaterial({ color: BELT.healthy, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
  const ping = new THREE.Mesh(new THREE.RingGeometry(0.24, 0.29, 32), pingMat);
  ping.rotation.x = -Math.PI / 2; ping.visible = false;
  const group = new THREE.Group();
  group.add(root, ping);

  // ---- leg geometry for the IK
  const legs = FEET.map((f, i) => {
    const L = f.front ? LEG.front : LEG.hind, s = f.side;
    const piv = L.pivot, kn = L.knee, fe = L.fet;
    const u0 = Math.atan2(kn[1] - piv[1], kn[0] - piv[0]), l0 = Math.atan2(fe[1] - kn[1], fe[0] - kn[0]);
    const base = Math.atan2(fe[1] - piv[1], fe[0] - piv[0]);
    return {
      ...f, i, L, up: bone[f.name + 'u'], lo: bone[f.name + 'l'], hf: bone[f.name + 'h'], parent: bone[f.front ? 'chest' : 'hips'],
      L1: Math.hypot(kn[0] - piv[0], kn[1] - piv[1]), L2: Math.hypot(fe[0] - kn[0], fe[1] - kn[1]), u0, l0, bend: Math.sign(wrap(u0 - base)) || 1,
      dz0: (L.fz - L.z) * s, home: [fe[0], L.fz * s],
      plant: new THREE.Vector3(), from: new THREE.Vector3(), cur: new THREE.Vector3(), swing: false, inWin: false,
    };
  });

  // ---- palette -> atlas and trim colours
  const cTrim = new THREE.Color(), cTmp = new THREE.Color(), cLed = new THREE.Color();
  let sig = '', lit = 0;
  let tSmooth = null, tShown = null;
  const pal = (a) => {
    tSmooth = tSmooth == null ? a.temp : tSmooth + (a.temp - tSmooth) * 0.05;
    if (tShown == null || Math.abs(tSmooth - tShown) > 0.15) tShown = Math.round(tSmooth * 5) / 5;
    return paletteFor(look.lens, look.coat(a.id), statusOf(a), tShown);
  };
  function paintCoat(p) {
    const D = buffalo ? { ...DEF, ...BUF_DEF } : DEF;
    const coat = p.coat || D.coat, patch = p.patch || D.patch;
    ag.globalCompositeOperation = 'source-over'; ag.globalAlpha = 1; ag.filter = 'none';
    ag.fillStyle = coat; ag.fillRect(0, 0, ATLAS, ATLAS);
    const tg = tint.getContext('2d');
    tg.globalCompositeOperation = 'source-over'; tg.clearRect(0, 0, ATLAS, ATLAS); tg.drawImage(mask, 0, 0);
    tg.globalCompositeOperation = 'source-in'; tg.fillStyle = patch; tg.fillRect(0, 0, ATLAS, ATLAS);
    ag.drawImage(tint, 0, 0);
    ag.drawImage(shade, 0, 0);
    const skin = p.skin || D.skin, horn = p.horn || D.horn, collar = p.collar || DEF.collar;
    const byRole = {
      [R.skin]: skin, [R.nose]: cTmp.set(skin).multiplyScalar(0.55).getStyle(), [R.innerEar]: buffalo ? skin : '#efa3a0', [R.hoof]: '#2a2421', [R.horn]: horn,
      [R.earOuter]: breed === 'holstein' ? patch : breed === 'gir' ? patch : coat, [R.tuft]: breed === 'holstein' ? patch : patch, [R.collar]: collar,
      [R.coat]: breed === 'murrah' ? patch : coat, [R.patch]: patch, [R.tag]: '#f2c230', [R.hump]: cTmp.set(coat).lerp(new THREE.Color(patch), 0.45).getStyle(),
    };
    for (let i = 0; i < role.length; i++) {
      const r = role[i];
      if (r < 0 || r === R.led) continue;
      if (r === R.shine) { colors.setXYZ(i, 1, 1, 1); continue; }
      cTrim.set(byRole[r] || coat);
      colors.setXYZ(i, cTrim.r, cTrim.g, cTrim.b);
    }
    bellMat.color.set(p.bell || DEF.bell);
    eyeMat.color.set('#100a07'); eyeMat.emissive.setRGB(0, 0, 0);
  }
  function paintThermal(temp) {
    const L = thermalLevel(temp);
    const body = regRect(REG.body), gr = ag.createLinearGradient(0, body.y, 0, body.y + body.h);
    gr.addColorStop(0, lut(L + 0.05)); gr.addColorStop(0.25, lut(L)); gr.addColorStop(0.5, lut(L - 0.04)); gr.addColorStop(0.75, lut(L)); gr.addColorStop(1, lut(L + 0.05));
    ag.globalCompositeOperation = 'source-over'; ag.globalAlpha = 1; ag.filter = 'none';
    ag.fillStyle = gr; ag.fillRect(body.x, body.y, body.w, body.h);
    for (const reg of [REG.neck, REG.head]) { const q = regRect(reg); ag.fillStyle = lut(L - 0.02); ag.fillRect(q.x, q.y, q.w, q.h); }
    const hq = regRect(REG.head);
    for (const v of [0.25, 0.75]) { const rg = ag.createRadialGradient(hq.x + hq.w * 0.3, hq.y + hq.h * v, 2, hq.x + hq.w * 0.3, hq.y + hq.h * v, 40); rg.addColorStop(0, lut(L + 0.16)); rg.addColorStop(1, lut(L - 0.02)); ag.fillStyle = rg; ag.fillRect(hq.x, hq.y, hq.w, hq.h); }
    const lq = regRect(REG.leg), lg = ag.createLinearGradient(0, lq.y, 0, lq.y + lq.h);
    lg.addColorStop(0, lut(L - 0.04)); lg.addColorStop(1, lut(L - 0.26));
    ag.fillStyle = lg; ag.fillRect(lq.x, lq.y, lq.w, lq.h);
    const lv = { [R.skin]: L + 0.1, [R.nose]: L - 0.1, [R.innerEar]: L - 0.04, [R.hoof]: L - 0.32, [R.horn]: L - 0.34, [R.earOuter]: L - 0.12, [R.tuft]: L - 0.22,
      [R.collar]: L - 0.25, [R.coat]: L - 0.03, [R.patch]: L - 0.03, [R.tag]: L - 0.3, [R.hump]: L + 0.02 };
    for (let i = 0; i < role.length; i++) {
      const r = role[i];
      if (r < 0 || r === R.led) continue;
      if (r === R.shine) { colors.setXYZ(i, 1, 1, 1); continue; }
      lutRGB(lv[r] ?? L, cTrim);
      colors.setXYZ(i, cTrim.r, cTrim.g, cTrim.b);
    }
    bellMat.color.copy(lutRGB(L - 0.3, cTmp));
    lutRGB(L + 0.18, cTmp); eyeMat.color.copy(cTmp); eyeMat.emissive.copy(cTmp);
  }
  function repaint(a, time, force) {
    const p = pal(a), s = paletteSig(p);
    if (s === sig) return;
    if (!force && repaintFrame === time) return;        // one repaint per frame across the herd
    repaintFrame = time; sig = s;
    if (p.mode === 'thermal') paintThermal(p.temp); else paintCoat(p);
    tex.needsUpdate = true; colors.needsUpdate = true;
  }

  // ---- motion state
  const st = {
    first: true, pos: new THREE.Vector3(), vel: new THREE.Vector3(), yaw: 0, yawRate: 0, phase: Math.random(), walk: 0, speed: 0,
    lieF: 0, lieH: 0, side: def.idx % 2 ? 1 : -1, sleep: 0,
    head: { n1z: 0, n2z: 0, hz: 0, n1y: 0, n2y: 0, hy: 0, hx: 0 }, look: { yaw: 0, pitch: 0, t: 1 + Math.random() * 3, target: null },
    ear: [0, 0], flick: [0, 0], flickT: [2 + Math.random() * 3, 3 + Math.random() * 4], blink: 0, blinkT: 1 + Math.random() * 3,
    shake: 0, shakeT: 8 + Math.random() * 14,
    tail: [0, 0, 0, 0, 0, 0, 0, 0], tailV: [0, 0, 0, 0, 0, 0, 0, 0], swishT: 1 + Math.random() * 3,
    bell: [0, 0], bellV: [0, 0], udder: 0, jaw: Math.random() * 6, chew: 0, breath: Math.random() * 6, bend: 0,
  };
  const inv = new THREE.Matrix4(), tgt = new THREE.Vector3(), hipW = new THREE.Vector3(), camL = new THREE.Vector3();
  const zero = new THREE.Vector3(), tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), leadV = new THREE.Vector3(), homeV = new THREE.Vector3();

  function homeWorld(lg, out, lead) {
    const c = Math.cos(st.yaw), s = Math.sin(st.yaw), [hx, hz] = lg.home;
    out.set(st.pos.x + S * (hx * c - hz * s) + lead.x, st.pos.y, st.pos.z + S * (hx * s + hz * c) + lead.z);
    return out;
  }
  function resetFeet() { const z = new THREE.Vector3(); for (const lg of legs) { homeWorld(lg, lg.plant, z); lg.cur.copy(lg.plant); lg.swing = false; } }

  // two-bone IK toward the fetlock target (parent-bone space), with the leg swung out to reach sideways
  function solve(lg, dx, dy, dz, toe, pitch) {
    const zz = dz - lg.dz0, r = Math.hypot(dy, zz);
    const abd = Math.atan2(-zz, -dy);
    const tx = dx, ty = -r, d = Math.min(Math.hypot(tx, ty), (lg.L1 + lg.L2) * 0.999);
    const base = Math.atan2(ty, tx), A = Math.acos(clamp((lg.L1 * lg.L1 + d * d - lg.L2 * lg.L2) / (2 * lg.L1 * d), -1, 1));
    const upA = base + lg.bend * A, kx = Math.cos(upA) * lg.L1, ky = Math.sin(upA) * lg.L1;
    const ex = Math.cos(base) * d, ey = Math.sin(base) * d, loA = Math.atan2(ey - ky, ex - kx);
    const f1 = wrap(upA - lg.u0), f2 = wrap(loA - lg.l0) - f1;
    return [abd, f1, f2, toe - pitch - f1 - f2];
  }

  function update(a, dt, time, selected, camera) {
    repaint(a, time, st.first);                         // colour views apply even while the farm is paused
    if (!printLayer().parent && group.parent) group.parent.add(printLayer());
    tickPrints(dt, time);

    // ---- where she is and which way she faces
    const tx = a.x, tz = a.z;
    if (st.first || Math.hypot(tx - st.pos.x, tz - st.pos.z) > 5) {
      st.pos.set(tx, 0.08, tz); st.vel.set(0, 0, 0); st.yaw = a.heading; st.yawRate = 0;
      resetFeet(); st.first = false;
    }
    if (dt > 0) {
      const k = 34, c = 2 * Math.sqrt(k) * 1.05;
      st.vel.x += (k * (tx - st.pos.x) - c * st.vel.x) * dt; st.vel.z += (k * (tz - st.pos.z) - c * st.vel.z) * dt;
      st.pos.x += st.vel.x * dt; st.pos.z += st.vel.z * dt;
    }
    const speedU = Math.hypot(st.vel.x, st.vel.z), speed = speedU / S;              // m/s
    const lying = a.state === 'rest';
    const want = speed > 0.22 && !lying ? Math.atan2(st.vel.z, st.vel.x) : a.heading;
    if (dt > 0) {
      const err = wrap(want - st.yaw), maxRate = lying ? 0.6 : 2.3;
      st.yawRate += (14 * err - 7.5 * st.yawRate) * dt;
      st.yawRate = clamp(st.yawRate, -maxRate, maxRate);
      st.yaw = wrap(st.yaw + st.yawRate * dt);
    }
    root.position.copy(st.pos); root.rotation.y = -st.yaw;

    // ---- lying down front end first, rising hind end first
    const kL = damp(2.6, dt);
    if (lying) { st.lieF += (1 - st.lieF) * kL; st.lieH += ((st.lieF > 0.55 ? 1 : 0) - st.lieH) * kL; }
    else { st.lieH += (0 - st.lieH) * kL; st.lieF += ((st.lieH < 0.45 ? 0 : 1) - st.lieF) * kL; }
    const lie = (st.lieF + st.lieH) / 2, down = Math.max(st.lieF, st.lieH);
    const night = sim && (sim.hour >= 23 || sim.hour < 4.5);
    st.sleep = lerp(st.sleep, lying && night && def.idx % 2 === 0 && lie > 0.95 ? 1 : 0, damp(0.8, dt));

    // ---- health shows in how she moves
    const sick = a.sick || 0, lame = a.lame || 0, stress = a.stress || 0, estrus = a.cond === 'estrus';
    const stride = STRIDE * (1 - 0.35 * sick) * (1 - 0.18 * lame) * (estrus ? 1.08 : 1);
    st.walk = lerp(st.walk, lying ? 0 : clamp((speed - 0.08) / 0.45), damp(st.walk < clamp((speed - 0.08) / 0.45) ? 6 : 3.5, dt));
    const w = st.walk * (1 - down);

    // ---- gait clock: driven by the ground she covers; it also runs to finish steps when she stops or turns on the spot
    let settle = false, swinging = false;
    for (const lg of legs) { if (lg.swing) swinging = true; else if (lg.plant.distanceTo(homeWorld(lg, tmpA, zero)) > 0.11 * S) settle = true; }
    let hz = 0;
    if (!lying && down < 0.05) {
      if (speed > 0.1) hz = Math.min(MAX_HZ, Math.max(0.7, speed / stride));
      else if (settle || swinging || Math.abs(st.yawRate) > 0.25) hz = 1.25;
    }
    st.phase = frac(st.phase + hz * dt);
    const fast = ss(1.6, 2.4, speed / stride);              // time-lapse speeds: feet cycle under the body instead of planting
    const stanceT = DUTY / Math.max(0.7, hz || 1);
    leadV.set(st.vel.x * stanceT * 0.5, 0, st.vel.z * stanceT * 0.5);
    const fwdX = Math.cos(st.yaw), fwdZ = Math.sin(st.yaw);

    // ---- feet: planted in the world, swung to where the hip will be
    const sLame = frac(st.phase + FEET[LAME].off), dutyLame = DUTY * (1 - 0.28 * lame), lameLoad = sLame < dutyLame ? Math.sin((Math.PI * sLame) / dutyLame) : 0;
    for (const lg of legs) {
      const duty = lg.i === LAME ? dutyLame : DUTY, s = frac(st.phase + lg.off), inWin = s >= duty;
      const home = homeWorld(lg, homeV, leadV);
      if (down > 0.02) { homeWorld(lg, lg.plant, zero); lg.cur.copy(lg.plant); lg.swing = false; lg.inWin = inWin; continue; }
      if (inWin && !lg.inWin) {
        lg.inWin = true;
        if (w > 0.12 || lg.plant.distanceTo(homeWorld(lg, tmpA, zero)) > 0.08 * S || Math.abs(st.yawRate) > 0.25) { lg.swing = true; lg.from.copy(lg.plant); }
      } else if (!inWin && lg.inWin) {
        lg.inWin = false;
        if (lg.swing) {
          lg.swing = false; lg.plant.copy(home); lg.plant.y = st.pos.y;
          if (w > 0.3 && fast < 0.5 && dt > 0) stampPrint(lg.plant.x + fwdX * 0.05 * S, lg.plant.z + fwdZ * 0.05 * S, st.yaw, (lg.plant.z < GATE.z ? 0.32 : 0.6) * (lg.i === LAME ? 1 - 0.4 * lame : 1));
        }
      }
      if (lg.swing) {
        const t = clamp((s - duty) / (1 - duty)), e = t * t * (3 - 2 * t);
        lg.cur.lerpVectors(lg.from, home, e);
        lg.cur.y = st.pos.y + (lg.L.lift * (lg.i === LAME ? 1 - 0.45 * lame : 1) * (1 - 0.35 * sick) * Math.sin(Math.PI * t) * Math.max(0.35, w)) * S;
      } else lg.cur.copy(lg.plant);
      if (fast > 0) {                                     // at time-lapse speed the classic cycle under the body
        const hw = homeWorld(lg, tmpB, zero), sw = s < duty ? 0.5 - s / duty : -0.5 + ss(0, 1, (s - duty) / (1 - duty));
        hw.x += fwdX * sw * stride * S * 0.8; hw.z += fwdZ * sw * stride * S * 0.8;
        hw.y = st.pos.y + (s >= duty ? lg.L.lift * S * Math.sin(Math.PI * (s - duty) / (1 - duty)) : 0);
        lg.cur.lerp(hw, fast); if (!lg.swing) lg.plant.lerp(hw, fast);
      }
      // never let a planted hoof get left behind out of reach
      const dxh = lg.plant.x - home.x, dzh = lg.plant.z - home.z, far = Math.hypot(dxh, dzh), lim = 0.62 * S;
      if (far > lim && !lg.swing) { lg.plant.x = home.x + (dxh / far) * lim; lg.plant.z = home.z + (dzh / far) * lim; lg.cur.copy(lg.plant); }
    }

    // ---- trunk: the rise and fall of each step, side-to-side weight shift, settling down to lie
    const ph = st.phase * TAU;
    const breathRate = 1.3 + 3.2 * stress + 1.2 * sick;
    st.breath += dt * breathRate;
    const pant = clamp((stress - 0.5) / 0.3);
    const tr = bone.trunk;
    const sternal = 0.6;                                   // how far the trunk comes down onto folded legs
    tr.position.set(0, 1.12 - 0.012 * w * (0.5 + 0.5 * Math.cos(2 * ph + 0.6)) - sternal * (0.5 * st.lieF + 0.5 * st.lieH) + 0.025 * lame * w * lameLoad, 0.012 * w * Math.sin(ph));
    tr.rotation.set(0.022 * w * Math.sin(ph) + 0.1 * st.side * st.lieH * st.lieF - 0.04 * lame * w * lameLoad,
      0, 0.014 * w * Math.sin(2 * ph + 0.5) - 0.32 * (st.lieF - st.lieH) + 0.03 * lie - 0.07 * st.graze);
    st.bend = lerp(st.bend, clamp(st.yawRate * 0.17, -0.24, 0.24), damp(5, dt));
    bone.chest.rotation.set(0, st.bend * (1 - down), 0);
    bone.hips.rotation.set(0.03 * w * Math.sin(ph + 1.6), -st.bend * 0.6 * (1 - down), 0);
    const br = Math.sin(st.breath) * (0.012 + 0.02 * pant + 0.01 * sick);
    bone.ribs.scale.set(1, 1 + br, 1 + br * 1.3);

    // ---- head and neck: carriage, nod of the walk, reach to food, looking at things
    const eating = a.state === 'graze' || a.state === 'eat' || a.state === 'drink';
    const reachY = a.state === 'graze' ? 0.04 : a.state === 'eat' ? 0.62 : a.state === 'drink' ? 0.42 : 1.05;
    const reach = eating ? clamp((1.05 - reachY) / 1.0) : 0;
    st.graze = lerp(st.graze || 0, a.state === 'graze' ? 1 : 0, damp(2.4, dt));
    const L = st.look;
    L.t -= dt;
    if (L.t <= 0) {
      L.t = 2.5 + Math.random() * 5;
      const mates = sim ? sim.animals.filter((o) => o.id !== a.id) : [];
      L.target = Math.random() < 0.45 && mates.length ? mates[Math.floor(Math.random() * mates.length)] : Math.random() < 0.3 ? 'cam' : null;
      L.idle = (Math.random() - 0.5) * 0.9;
    }
    let lookYaw = 0, lookPitch = 0;
    const turning = wrap(want - st.yaw);
    if (selected && camera) { camL.copy(camera.position); lookYaw = wrap(Math.atan2(camL.z - st.pos.z, camL.x - st.pos.x) - st.yaw); lookPitch = clamp(Math.atan2(camL.y - 2.2, Math.hypot(camL.x - st.pos.x, camL.z - st.pos.z)), -0.3, 0.5); }
    else if (w > 0.2) lookYaw = clamp(turning * 0.7, -0.9, 0.9);
    else if (L.target === 'cam' && camera) lookYaw = wrap(Math.atan2(camera.position.z - st.pos.z, camera.position.x - st.pos.x) - st.yaw);
    else if (L.target && L.target.x !== undefined) lookYaw = wrap(Math.atan2(L.target.z - st.pos.z, L.target.x - st.pos.x) - st.yaw);
    else lookYaw = L.idle || 0;
    if (Math.abs(lookYaw) > 1.9) lookYaw = Math.sign(lookYaw) * 0.4;      // not behind her: she would turn instead
    lookYaw = clamp(lookYaw, -1.25, 1.25) * (1 - 0.8 * reach) * (1 - 0.6 * st.sleep);
    const H = st.head, kh = damp(eating ? 2.4 : 3.2, dt);
    const nod = 0.055 * w * Math.sin(2 * ph + 1.2) - 0.18 * lame * w * lameLoad;
    const carriage = -0.06 * w - 0.22 * sick + 0.1 * (estrus || selected ? 1 : 0) + lookPitch * 0.4;
    const sleepZ = -0.35 * st.sleep, sleepY = 1.25 * st.sleep * st.side;
    H.n1z = lerp(H.n1z, lerp(carriage, -1.2, reach) + sleepZ + 0.08 * lie * (1 - st.sleep), kh);
    H.n2z = lerp(H.n2z, lerp(0.02, -0.25, reach) - 0.15 * st.sleep, kh);
    H.hz = lerp(H.hz, lerp(lookPitch * 0.6, 1.1, reach) - 0.08 * sick, kh);
    H.n1y = lerp(H.n1y, lookYaw * 0.3 + sleepY * 0.55, kh); H.n2y = lerp(H.n2y, lookYaw * 0.3 + sleepY * 0.35, kh); H.hy = lerp(H.hy, lookYaw * 0.4 + sleepY * 0.2, kh);
    H.hx = lerp(H.hx, -lookYaw * 0.15 + 0.35 * st.sleep * st.side, kh);
    // a shake of the head at flies now and then
    st.shakeT -= dt;
    if (st.shakeT <= 0 && !lying && !eating) { st.shake = 1; st.shakeT = 10 + Math.random() * 18; }
    st.shake = Math.max(0, st.shake - dt * 2.2);
    const shake = st.shake * 0.22 * Math.sin(st.shake * 30);
    const bite = eating && a.state !== 'drink' ? 0.05 * Math.max(0, Math.sin(time * 4.4 + def.idx)) : 0;
    bone.neck1.rotation.set(0, H.n1y, H.n1z + nod * 0.6);
    bone.neck2.rotation.set(0, H.n2y, H.n2z + nod * 0.4 + bite);
    bone.head.rotation.set(H.hx + shake, H.hy, H.hz - nod * 0.5);

    // ---- jaw: cud chewing side to side, chewing while eating, panting in the heat
    const ruminating = (lying || a.state === 'idle') && (a.rum || 0) > 12 && st.sleep < 0.5;
    st.chew = lerp(st.chew, ruminating || (eating && a.state !== 'drink') ? 1 : 0, damp(3, dt));
    st.jaw += dt * TAU * (eating ? 1.4 : 1.1);
    const pantOpen = pant * (1 - st.chew) * (0.6 + 0.4 * Math.sin(time * 14));
    bone.jaw.rotation.set(0, st.chew * 0.05 * Math.sin(st.jaw), -st.chew * 0.06 * (0.5 - 0.5 * Math.cos(st.jaw)) - 0.18 * pantOpen);

    // ---- eyes blink; closed when asleep
    st.blinkT -= dt;
    if (st.blinkT <= 0) { st.blink = 1; st.blinkT = 2 + Math.random() * 4.5; }
    st.blink = Math.max(0, st.blink - dt * 7);
    const lid = Math.max(Math.sin(Math.PI * st.blink), st.sleep, 0.35 * sick);
    bone.eyeL.scale.set(1, 1 - 0.85 * lid, 1); bone.eyeR.scale.set(1, 1 - 0.85 * lid, 1);

    // ---- ears: droop with fever, prick when watching, flick at flies
    for (let i = 0; i < 2; i++) {
      st.flickT[i] -= dt;
      if (st.flickT[i] <= 0) { st.flick[i] = 1; st.flickT[i] = 2 + Math.random() * 6; }
      st.flick[i] = Math.max(0, st.flick[i] - dt * 3.5);
      const sgn = i ? 1 : -1, want2 = -0.38 * sick - 0.15 * st.sleep + 0.18 * (selected || estrus || L.target === 'cam' ? 1 : 0);
      st.ear[i] = lerp(st.ear[i], want2, damp(3, dt));
      const ear = i ? bone.earR : bone.earL, fl = Math.sin(st.flick[i] * 14) * st.flick[i];
      ear.rotation.set(-sgn * (st.ear[i] + 0.3 * fl) + 0.05 * w * Math.sin(2 * ph + i), 0.35 * fl * sgn + 0.15 * Math.abs(lookYaw) * sgn, 0);
    }

    // ---- tail: four springy links; swishes at flies (more when hot), raised in heat, sways with the walk
    st.swishT -= dt;
    if (st.swishT <= 0 && st.sleep < 0.5) {
      st.tailV[0] += (Math.random() < 0.5 ? -1 : 1) * (3.2 + 5 * stress) * (1 - 0.6 * lie);
      st.swishT = (1 / (0.1 + 0.55 * stress + (eating ? 0.12 : 0))) * (0.4 + Math.random() * 1.2);
    }
    const tailUp = estrus ? -0.55 : 0, sway = 0.12 * w * Math.sin(ph + 0.8);
    for (let left = dt; left > 1e-6; left -= 1 / 120) {
      const h = Math.min(left, 1 / 120), T = st.tail, Vt = st.tailV;
      for (let i = 0; i < 4; i++) {
        const xi = i, zi = i + 4;
        const wantX = i === 0 ? sway * (1 - lie) : -0.35 * Vt[xi - 1] * 0.12, wantZ = i === 0 ? tailUp - 0.9 * lie : i === 1 ? -tailUp * 0.5 + 0.35 * lie : i === 2 ? 0.3 * lie : 0;
        Vt[xi] += ((i === 0 ? 40 : 70) * (wantX - T[xi]) - (i === 0 ? 5 : 7) * Vt[xi]) * h; T[xi] = clamp(T[xi] + Vt[xi] * h, -0.9, 0.9);
        Vt[zi] += (50 * (wantZ - T[zi]) - 8 * Vt[zi]) * h; T[zi] = clamp(T[zi] + Vt[zi] * h, -1.2, 0.9);
      }
    }
    ['tail1', 'tail2', 'tail3', 'tail4'].forEach((n, i) => bone[n].rotation.set(st.tail[i], 0, st.tail[i + 4]));

    // ---- bell swings on its strap; udder sways with the walk
    for (let left = dt; left > 1e-6; left -= 1 / 120) {
      const h = Math.min(left, 1 / 120);
      st.bellV[0] += (60 * (0.18 * w * Math.sin(2 * ph) - st.bell[0]) - 3 * st.bellV[0]) * h; st.bell[0] += st.bellV[0] * h;
      st.bellV[1] += (60 * (0.1 * w * Math.sin(ph) + 0.25 * shake - st.bell[1]) - 3 * st.bellV[1]) * h; st.bell[1] += st.bellV[1] * h;
    }
    bone.bell.rotation.set(st.bell[1], 0, st.bell[0] - H.n1z - H.n2z - tr.rotation.z);
    bone.udder.rotation.set(0.05 * w * Math.sin(ph + 0.4), 0, 0.03 * w * Math.sin(2 * ph));

    // ---- legs: IK to the hooves, or folded under her when lying
    mesh.updateMatrixWorld(true);
    const pitch = tr.rotation.z;
    for (const lg of legs) {
      inv.copy(lg.parent.matrixWorld).invert();
      const s = frac(st.phase + lg.off), duty = lg.i === LAME ? dutyLame : DUTY;
      let toe = 0;
      if (lg.swing) { const t = clamp((s - duty) / (1 - duty)); toe = -0.75 * Math.sin(Math.PI * Math.pow(t, 0.7)) * Math.max(0.4, w); }
      else if (w > 0.1 && s > duty * 0.75) toe = -0.35 * ((s - duty * 0.75) / (duty * 0.25)) * w;
      tgt.copy(lg.cur); tgt.y += LEG.front.fet[1] * S;
      tgt.applyMatrix4(inv);
      const p0 = lg.up.position;
      let [abd, f1, f2, f3] = solve(lg, tgt.x - p0.x, tgt.y - p0.y, tgt.z - p0.z, toe, pitch);
      const fold = lg.front ? st.lieF : st.lieH, sf = fold * fold * (3 - 2 * fold);
      if (sf > 0.001) {
        const lie2 = lg.front ? [1.45, -2.7, 1.1, 0] : [1.25, -2.45, 1.0, 0.55 * st.side];
        f1 = lerp(f1, lie2[0], sf); f2 = lerp(f2, lie2[1], sf); f3 = lerp(f3, lie2[2], sf); abd = lerp(abd, lie2[3], sf);
      }
      lg.up.rotation.set(abd, 0, f1); lg.lo.rotation.set(0, 0, f2); lg.hf.rotation.set(0, 0, f3);
    }

    // ---- belt LED, radio ping and status ring
    const key = statusOf(a), blink = key === 'healthy' ? 0.55 + 0.45 * Math.sin(time * 2.2 + def.idx) : Math.sin(time * 10) > 0 ? 1 : 0.15;
    cLed.set(BELT[key] || BELT.healthy).multiplyScalar(1.4 * blink);
    let ledDirty = false;
    for (let i = 0; i < role.length; i++) if (role[i] === R.led) { colors.setXYZ(i, cLed.r, cLed.g, cLed.b); ledDirty = true; }
    if (ledDirty) colors.needsUpdate = true;
    lit = lerp(lit, look.lens === 'thermal' ? 1 : 0, damp(8, dt || 0.016));
    coatMat.emissive.setScalar(0.9 * lit); coatMat.color.setScalar(1 - 0.9 * lit);
    trimMat.emissive.setScalar(0.9 * lit); trimMat.color.setScalar(1 - 0.9 * lit);
    const t = frac(time * 0.45 + def.idx * 0.2);
    bone.bell.getWorldPosition(hipW);
    ping.visible = true; ping.position.set(hipW.x, hipW.y + 0.5 + t * 0.6, hipW.z); ping.scale.setScalar(1 + t * 2.2);
    pingMat.opacity = (1 - t) * 0.42; pingMat.color.set(BELT[key] || BELT.healthy);
    const wantRing = key !== 'healthy' ? 0.55 + 0.35 * Math.sin(time * 6) : selected ? 0.85 : 0;
    ringMat.opacity = lerp(ringMat.opacity, wantRing, damp(12, dt || 0.016));
    ring.visible = ringMat.opacity > 0.01;
    ringMat.color.set(key !== 'healthy' ? BELT[key] : '#ffffff');
  }

  return { group, hit, update, id: def.id, mesh, root };
}
