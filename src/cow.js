// A sculpted, fully articulated cow (or buffalo). The body, neck and head are
// lofted skins rather than boxes; each leg is a two-bone chain solved with
// inverse kinematics so the hooves plant on the ground and never slide; the
// walk is the real four-beat lateral-sequence gait of cattle. 1 unit = 1 metre,
// the animal faces +X and stands on y = 0.
import * as THREE from 'three';
import { mergeStatic } from './kit.js';

const TAU = Math.PI * 2;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (rate, dt) => 1 - Math.exp(-rate * dt);
const smooth = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
const frac = (v) => v - Math.floor(v);
function rng(a) {
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export const COATS = {
  holstein: { base: '#f1eee6', spot: '#18181b', blobs: 10, size: [44, 92], head: '#18181b', blaze: '#f1eee6', leg: '#ece8df', muzzle: '#d6a498', hoof: '#3b3530', tuft: '#e9e5dc', horns: 'none', udder: 1 },
  sahiwal: { base: '#8e4a2a', mottle: '#733a20', head: '#86441f', leg: '#7c3f22', muzzle: '#473028', hoof: '#2a221e', tuft: '#2a1a13', horns: 'short', hump: 1, udder: 0.9 },
  gir: { base: '#e4d8c3', spot: '#a2532f', blobs: 70, size: [5, 15], head: '#b3663d', leg: '#d9ccb6', muzzle: '#3d2a24', hoof: '#2a221e', tuft: '#2a1a13', horns: 'short', hump: 1, udder: 0.9 },
  murrah: { base: '#26262a', mottle: '#1b1b1e', head: '#1f1f23', leg: '#1d1d21', muzzle: '#111113', hoof: '#0f0f10', tuft: '#0d0d0e', horns: 'curl', udder: 0.8, sheen: 0.62, bulk: 1.08 },
  murrah2: { base: '#322c29', mottle: '#231f1d', head: '#2a2523', leg: '#262120', muzzle: '#141211', hoof: '#0f0f10', tuft: '#0d0d0e', horns: 'curl', udder: 0.8, sheen: 0.62, bulk: 1.06 },
};
export const BELT_COLOR = { healthy: '#35a8ff', fever: '#ff3b30', heat: '#ffb020', estrus: '#ff5fd2' };

function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
// Coat: u runs nose-to-tail, v runs around the barrel starting at the belly, so
// patches stay off the belly seam the way they do on a real animal.
function coatTexture(spec, seed) {
  return canvasTexture(512, 256, (g, w, h) => {
    const r = rng(seed);
    g.fillStyle = spec.base; g.fillRect(0, 0, w, h);
    if (spec.mottle) for (let i = 0; i < 40; i++) {
      g.fillStyle = spec.mottle; g.globalAlpha = 0.1 + r() * 0.16;
      g.beginPath(); g.ellipse(r() * w, r() * h, 30 + r() * 70, 14 + r() * 30, r() * 3, 0, 7); g.fill();
    }
    g.globalAlpha = 1;
    if (spec.spot) for (let i = 0; i < spec.blobs; i++) {
      const cx = r() * w, cy = h * (0.2 + r() * 0.6), s = spec.size[0] + r() * (spec.size[1] - spec.size[0]);
      g.fillStyle = spec.spot;
      for (let k = 0; k < 6; k++) {
        g.beginPath(); g.ellipse(cx + (r() - 0.5) * s * 1.3, cy + (r() - 0.5) * s * 0.7, s * (0.35 + r() * 0.5), s * (0.25 + r() * 0.4), r() * 3, 0, 7); g.fill();
      }
    }
    // hair grain and a little dust toward the belly
    for (let i = 0; i < 5200; i++) {
      g.fillStyle = r() < 0.5 ? 'rgba(255,255,255,0.045)' : 'rgba(0,0,0,0.06)';
      g.fillRect(r() * w, r() * h, 1 + r() * 5, 1);
    }
    const dust = g.createLinearGradient(0, 0, 0, h);
    dust.addColorStop(0, 'rgba(120,96,60,0.20)'); dust.addColorStop(0.16, 'rgba(120,96,60,0)');
    dust.addColorStop(0.84, 'rgba(120,96,60,0)'); dust.addColorStop(1, 'rgba(120,96,60,0.20)');
    g.fillStyle = dust; g.fillRect(0, 0, w, h);
  });
}
function headTexture(spec, seed) {
  return canvasTexture(256, 128, (g, w, h) => {
    const r = rng(seed + 7);
    g.fillStyle = spec.head; g.fillRect(0, 0, w, h);
    if (spec.blaze) {
      g.fillStyle = spec.blaze; g.beginPath();
      g.moveTo(w * 0.18, h * 0.5); g.bezierCurveTo(w * 0.4, h * 0.36, w * 0.7, h * 0.4, w, h * 0.3);
      g.lineTo(w, h * 0.7); g.bezierCurveTo(w * 0.7, h * 0.6, w * 0.4, h * 0.63, w * 0.18, h * 0.5); g.fill();
    }
    for (let i = 0; i < 1600; i++) { g.fillStyle = r() < 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.07)'; g.fillRect(r() * w, r() * h, 1 + r() * 4, 1); }
  });
}
let furBump = null;
const bump = () => (furBump ||= (() => {
  const t = canvasTexture(128, 128, (g, w, h) => {
    const r = rng(5); g.fillStyle = '#808080'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { const v = 90 + r() * 90; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(r() * w, r() * h, 2 + r() * 6, 1); }
  });
  t.colorSpace = THREE.NoColorSpace; t.repeat.set(5, 3); return t;
})());

// A skin stretched over a row of cross-sections: [x, centreY, top, bottom, halfWidth].
function loft(rings, { radial = 22, sub = 4, sq = 2.3 } = {}) {
  const cr = (a, b, c, d, t) => 0.5 * (2 * b + (c - a) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (3 * b - a - 3 * c + d) * t * t * t);
  const R = [];
  for (let i = 0; i < rings.length - 1; i++) {
    const a = rings[Math.max(0, i - 1)], b = rings[i], c = rings[i + 1], d = rings[Math.min(rings.length - 1, i + 2)];
    for (let s = 0; s < sub; s++) {
      const t = s / sub;
      R.push([lerp(b[0], c[0], t), cr(a[1], b[1], c[1], d[1], t), ...[2, 3, 4].map((k) => Math.max(0.004, cr(a[k], b[k], c[k], d[k], t)))]);
    }
  }
  R.push(rings[rings.length - 1]);
  const pos = [], uv = [], idx = [], n = R.length, x0 = R[0][0], x1 = R[n - 1][0], e = 2 / sq;
  for (const [x, cy, top, bot, hw] of R) for (let j = 0; j <= radial; j++) {
    const th = -Math.PI / 2 + (j / radial) * TAU, c = Math.cos(th), s = Math.sin(th);
    pos.push(x, cy + (s > 0 ? top : bot) * Math.sign(s) * Math.pow(Math.abs(s), e), hw * Math.sign(c) * Math.pow(Math.abs(c), e));
    uv.push((x - x0) / (x1 - x0), j / radial);
  }
  const W = radial + 1;
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < radial; j++) {
    const a = i * W + j, b = a + W, c = a + 1, d = b + 1;
    idx.push(a, b, c, b, d, c);
  }
  const c0 = pos.length / 3; pos.push(R[0][0], R[0][1], 0); uv.push(0, 0.5);
  const c1 = c0 + 1; pos.push(R[n - 1][0], R[n - 1][1], 0); uv.push(1, 0.5);
  for (let j = 0; j < radial; j++) { idx.push(c0, j, j + 1); idx.push(c1, (n - 1) * W + j + 1, (n - 1) * W + j); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  const nrm = geo.attributes.normal;          // weld the lighting across the belly seam
  for (let i = 0; i < n; i++) {
    const a = i * W, b = a + radial, v = new THREE.Vector3(nrm.getX(a) + nrm.getX(b), nrm.getY(a) + nrm.getY(b), nrm.getZ(a) + nrm.getZ(b)).normalize();
    nrm.setXYZ(a, v.x, v.y, v.z); nrm.setXYZ(b, v.x, v.y, v.z);
  }
  return geo;
}

const M = (geo, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; return m; };
const sphere = (mat, x, y, z, sx, sy, sz, ws = 14, hs = 10) => { const m = M(new THREE.SphereGeometry(1, ws, hs), mat, x, y, z); m.scale.set(sx, sy, sz); return m; };
const tube = (mat, rt, rb, h, x, y, z, seg = 12) => M(new THREE.CylinderGeometry(rt, rb, h, seg), mat, x, y, z);

// Leg geometry: [pivot x, pivot y, |z|, upper length, lower length, rest foot x, knee direction]
const FRONT = { px: 0.64, py: 1.18, pz: 0.175, l1: 0.68, l2: 0.54, fx: 0.66, bend: 1, lift: 0.12, lie: [1.0, -1.35] };
const HIND = { px: -0.62, py: 1.12, pz: 0.19, l1: 0.6, l2: 0.6, fx: -0.85, bend: -1, lift: 0.1, lie: [1.2, -1.25] };
const GAIT = [0.25, 0.75, 0, 0.5];      // front-left, front-right, hind-left, hind-right
export const STRIDE = 1.25, DUTY = 0.64;

export function buildCow(def = {}) {
  const spec = COATS[def.coat] || COATS.holstein, buffalo = def.kind === 'buffalo';
  const seed = def.seed ?? (def.idx ?? 0) * 31 + 3;
  const rough = spec.sheen ?? 0.86;
  const hair = (o) => new THREE.MeshStandardMaterial({ roughness: rough, metalness: 0, bumpMap: bump(), bumpScale: 0.6, ...o });
  const coat = hair({ map: coatTexture(spec, seed) });
  const headM = hair({ map: headTexture(spec, seed) });
  const legM = hair({ color: spec.leg }), plain = hair({ color: spec.head });
  const skin = new THREE.MeshStandardMaterial({ color: spec.muzzle, roughness: 0.55 });
  const udderM = new THREE.MeshStandardMaterial({ color: buffalo ? '#3a3033' : '#e3b1a6', roughness: 0.6 });
  const hoofM = new THREE.MeshStandardMaterial({ color: spec.hoof, roughness: 0.45 });
  const eyeM = new THREE.MeshStandardMaterial({ color: '#0a0806', roughness: 0.08, metalness: 0.2 });
  const hornM = new THREE.MeshStandardMaterial({ color: buffalo ? '#2c2c2e' : '#d8cfb8', roughness: 0.5 });
  const tuftM = hair({ color: spec.tuft });
  const strapM = new THREE.MeshStandardMaterial({ color: '#1b2633', roughness: 0.6 });
  const podM = new THREE.MeshStandardMaterial({ color: '#10161d', roughness: 0.35, metalness: 0.3 });
  const tagM = new THREE.MeshStandardMaterial({ color: '#f2c230', roughness: 0.6, side: THREE.DoubleSide });
  const ledM = new THREE.MeshStandardMaterial({ color: '#04070a', emissive: BELT_COLOR.healthy, emissiveIntensity: 3, roughness: 0.3 });

  const root = new THREE.Group(), rig = new THREE.Group();
  root.add(rig);
  const bulk = spec.bulk || 1;
  rig.scale.set(1, 1, bulk);

  // ---- trunk
  const body = M(loft([
    [-1.03, 1.27, 0.03, 0.04, 0.03], [-0.98, 1.22, 0.17, 0.24, 0.21], [-0.84, 1.17, 0.25, 0.37, 0.31], [-0.6, 1.13, 0.31, 0.44, 0.365],
    [-0.3, 1.1, 0.315, 0.48, 0.395], [0, 1.1, 0.3, 0.49, 0.4], [0.3, 1.12, 0.3, 0.475, 0.375], [0.55, 1.14, 0.325, 0.46, 0.335],
    [0.75, 1.18, 0.32, 0.43, 0.295], [0.9, 1.2, 0.25, 0.37, 0.225], [0.99, 1.2, 0.12, 0.21, 0.12], [1.02, 1.2, 0.03, 0.04, 0.03],
  ], { radial: 26 }), coat);
  body.userData.dyn = true;
  rig.add(body);
  for (const s of [-1, 1]) rig.add(sphere(coat, -0.66, 1.37, 0.2 * s, 0.13, 0.07, 0.1));   // hook bones
  if (spec.hump) rig.add(sphere(plain, 0.6, 1.5, 0, 0.2, 0.13, 0.13));
  const udder = new THREE.Group();
  udder.position.set(-0.45, 0.66, 0);
  if (!def.bull) {
    const us = spec.udder || 1;
    udder.add(sphere(udderM, 0, 0, 0, 0.25 * us, 0.17 * us, 0.2 * us));
    for (const [x, z] of [[0.1, 0.085], [0.1, -0.085], [-0.09, 0.085], [-0.09, -0.085]]) udder.add(tube(udderM, 0.022, 0.014, 0.085, x * us, -0.17 * us, z * us, 8));
  }
  rig.add(udder);

  // ---- neck, head
  const neck = new THREE.Group(); neck.position.set(0.8, 1.24, 0); rig.add(neck);
  const neckSkin = M(loft([[-0.14, -0.02, 0.26, 0.37, 0.2], [0.1, -0.02, 0.24, 0.34, 0.185], [0.35, 0, 0.19, 0.275, 0.15], [0.55, 0.01, 0.16, 0.21, 0.125], [0.7, 0.02, 0.14, 0.17, 0.115], [0.77, 0.02, 0.06, 0.08, 0.05]], { radial: 18 }), coat);
  neck.add(neckSkin);
  const collar = new THREE.Group(); collar.position.set(0.42, -0.035, 0); neck.add(collar);
  const strap = M(new THREE.TorusGeometry(0.222, 0.026, 8, 30), strapM); strap.rotation.y = Math.PI / 2; strap.scale.set(0.7, 1, 1.7); collar.add(strap);
  collar.add(M(new THREE.BoxGeometry(0.1, 0.075, 0.14), podM, 0, -0.275, 0));
  collar.add(M(new THREE.BoxGeometry(0.06, 0.05, 0.05), podM, 0, 0.225, 0));           // counterweight / GPS patch
  const led = M(new THREE.SphereGeometry(0.011, 10, 8), ledM, 0.052, -0.265, 0); led.castShadow = false; collar.add(led);
  const led2 = M(new THREE.SphereGeometry(0.009, 8, 6), ledM, 0, -0.275, 0.072); led2.castShadow = false; collar.add(led2);
  const led3 = M(new THREE.SphereGeometry(0.009, 8, 6), ledM, 0, -0.275, -0.072); led3.castShadow = false; collar.add(led3);
  collar.add(tube(podM, 0.004, 0.004, 0.09, -0.03, -0.2, 0.06, 5));                      // antenna

  const head = new THREE.Group(); head.position.set(0.7, 0.03, 0); neck.add(head);
  head.add(M(loft([[-0.07, 0, 0.06, 0.08, 0.06], [0, 0, 0.135, 0.15, 0.125], [0.12, 0.005, 0.14, 0.155, 0.136], [0.26, -0.01, 0.105, 0.13, 0.105], [0.4, -0.025, 0.082, 0.105, 0.088], [0.5, -0.03, 0.076, 0.096, 0.09], [0.555, -0.035, 0.045, 0.06, 0.06]], { radial: 16 }), headM));
  head.add(sphere(skin, 0.535, -0.04, 0, 0.045, 0.07, 0.082, 12, 8));
  for (const s of [-1, 1]) {
    head.add(sphere(eyeM, 0.14, 0.062, 0.124 * s, 0.027, 0.027, 0.02, 10, 8));
    head.add(sphere(eyeM, 0.572, -0.012, 0.034 * s, 0.013, 0.017, 0.013, 6, 5));
    if (spec.horns === 'short') { const h = tube(hornM, 0.004, 0.028, 0.16, 0.0, 0.17, 0.09 * s, 8); h.rotation.set(0.45 * s, 0, 0.25); head.add(h); }
    if (spec.horns === 'curl') { const h = M(new THREE.TorusGeometry(0.15, 0.03, 7, 14, Math.PI * 1.05), hornM, -0.03, 0.13, 0.19 * s); h.rotation.set(s > 0 ? 1.25 : -1.25, s > 0 ? 0.2 : -0.2, s > 0 ? 2.6 : 0.54); head.add(h); }
  }
  const jaw = new THREE.Group(); jaw.position.set(0.06, -0.085, 0); head.add(jaw);
  jaw.add(sphere(headM, 0.21, -0.03, 0, 0.21, 0.04, 0.066, 10, 6));
  jaw.userData.dyn = true;
  const ears = [-1, 1].map((s) => {
    const e = new THREE.Group(); e.position.set(0.015, 0.085, 0.115 * s);
    e.add(sphere(plain, -0.008, 0.0, 0.08 * s, 0.022, 0.048, 0.088, 10, 6));
    e.add(sphere(skin, 0.008, 0.0, 0.08 * s, 0.008, 0.03, 0.062, 8, 5));
    if (s > 0 || def.twoTags) { const t = M(new THREE.PlaneGeometry(0.034, 0.042), tagM, 0.026, -0.03, 0.085 * s); t.rotation.y = Math.PI / 2; e.add(t); }
    e.rotation.x = -0.25 * s; e.userData.dyn = true; mergeStatic(e); head.add(e); return e;
  });
  const muzzle = new THREE.Object3D(); muzzle.position.set(0.56, -0.06, 0); head.add(muzzle);
  mergeStatic(head); mergeStatic(collar);
  collar.userData.dyn = head.userData.dyn = neck.userData.dyn = true;

  // ---- tail
  const tail = []; let parent = rig;
  for (let i = 0; i < 5; i++) {
    const g = new THREE.Group();
    g.position.set(i ? 0 : -1.0, i ? -0.19 : 1.37, 0);
    if (i < 4) g.add(tube(i < 3 ? coat : tuftM, 0.026 - i * 0.004, 0.022 - i * 0.004, 0.2, 0, -0.095, 0, 7));
    else g.add(sphere(tuftM, 0, -0.1, 0, 0.034, 0.13, 0.034, 8, 6));
    parent.add(g); tail.push(g); parent = g;
  }
  tail[0].userData.dyn = true;

  // ---- legs
  const legs = [];
  for (let i = 0; i < 4; i++) {
    const front = i < 2, s = i % 2 ? -1 : 1, L = front ? FRONT : HIND;
    const upper = new THREE.Group(); upper.position.set(L.px, L.py, L.pz * s);
    if (front) {
      upper.add(sphere(coat, 0.03, -0.2, 0.02 * s, 0.16, 0.3, 0.1));
      upper.add(tube(legM, 0.088, 0.058, 0.44, 0, -0.46, 0));
    } else {
      upper.add(sphere(coat, 0.07, -0.2, 0.01 * s, 0.22, 0.36, 0.125));
      upper.add(tube(legM, 0.1, 0.06, 0.36, 0.0, -0.43, 0));
    }
    upper.add(sphere(legM, 0, -L.l1, 0, 0.062, 0.07, 0.06, 10, 8));
    const lower = new THREE.Group(); lower.position.set(0, -L.l1, 0); upper.add(lower);
    const cannon = L.l2 - 0.17;
    lower.add(tube(legM, 0.05, 0.041, cannon, 0, -cannon / 2, 0, 10));
    lower.add(sphere(legM, 0, -cannon, 0, 0.05, 0.055, 0.05, 10, 8));
    lower.add(tube(legM, 0.044, 0.05, 0.1, 0.008, -cannon - 0.05, 0, 10));
    const hoof = new THREE.Group(); hoof.position.set(0, -L.l2 + 0.075, 0); lower.add(hoof);
    hoof.add(tube(hoofM, 0.05, 0.066, 0.075, 0.014, -0.0375, 0, 10));
    hoof.userData.dyn = lower.userData.dyn = upper.userData.dyn = true;
    mergeStatic(lower); mergeStatic(upper);
    rig.add(upper);
    legs.push({ ...L, s, upper, lower, hoof, off: GAIT[i], a1: 0, a2: 0 });
  }
  mergeStatic(rig);

  // ---- selection ring and belt radio ping (used by the live twin)
  const ringM = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.28, 1.42, 48), ringM); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03; ring.visible = false; root.add(ring);
  const pingM = new THREE.MeshBasicMaterial({ color: BELT_COLOR.healthy, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
  const ping = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.235, 36), pingM); ping.rotation.x = -Math.PI / 2; ping.visible = false; root.add(ping);

  const P = { walk: 0, reach: 0, reachY: 0.14, lie: 0, yaw: 0, sleep: 0, chew: 0, alert: 0 };
  const earT = [1 + Math.random() * 3, 2 + Math.random() * 4], earV = [0, 0];
  let flick = 0, flickT = 2 + Math.random() * 5, phase = Math.random();
  const ledC = new THREE.Color(), tmp = new THREE.Vector3();

  // Two-bone IK in the leg's own plane. Angles are measured from straight down.
  function solve(L, tx, ty) {
    const dx = tx - L.px, dy = L.py - ty, d = clamp(Math.hypot(dx, dy), Math.abs(L.l1 - L.l2) + 0.02, L.l1 + L.l2 - 0.002);
    const base = Math.atan2(dx, dy), A = Math.acos(clamp((L.l1 * L.l1 + d * d - L.l2 * L.l2) / (2 * L.l1 * d), -1, 1));
    const a1 = base + L.bend * A, kx = L.px + L.l1 * Math.sin(a1), ky = L.py - L.l1 * Math.cos(a1);
    return [a1, Math.atan2(L.px + (dx / Math.hypot(dx, dy)) * d - kx, ky - (L.py - (dy / Math.hypot(dx, dy)) * d))];
  }

  // st: { phase (strides walked), walk 0..1, reach 0..1 + reachY (muzzle height), lie, yaw (look), sleep, chew, key, alert, selected, ping }
  function update(dt, time, st = {}) {
    const k = damp(st.rate || 5, dt);
    for (const key of ['walk', 'reach', 'lie', 'yaw', 'sleep', 'chew', 'alert']) P[key] = lerp(P[key], st[key] || 0, key === 'walk' ? damp(7, dt) : k);
    if (st.reachY != null) P.reachY = lerp(P.reachY, st.reachY, k);
    if (st.phase != null) phase = st.phase;
    const w = P.walk * (1 - P.lie), lie = smooth(P.lie), two = Math.sin(phase * TAU * 2), one = Math.sin(phase * TAU);

    // trunk: weight shift, the small rise and fall of each step, settling down to rest
    const bob = -0.02 * w * (0.5 + 0.5 * Math.cos(phase * TAU * 2 + 0.6));
    const grazeDrop = P.reach * clamp((1.1 - P.reachY) / 0.96) * (1 - lie);
    rig.position.set(0, bob - 0.6 * lie - 0.012 * grazeDrop, 0.016 * w * one);
    rig.rotation.set(0.022 * w * one + 0.13 * lie, 0, -0.045 * grazeDrop + 0.008 * w * two);
    const breath = Math.sin(time * (1.5 + 2.2 * (st.effort || 0)) + seed);
    body.scale.set(1, 1 + breath * 0.006, 1 + breath * (0.012 + 0.02 * (st.effort || 0)));

    // legs
    const pitch = rig.rotation.z, cp = Math.cos(-pitch), sp = Math.sin(-pitch);
    const sweep = STRIDE * DUTY * w;
    for (const L of legs) {
      const ph = frac(phase + L.off);
      let fx = L.fx, fy = 0, toe = 0;
      if (ph < DUTY) { const t = ph / DUTY; fx += sweep * (0.5 - t); toe = -0.42 * smooth((t - 0.78) / 0.22) * w; }
      else { const t = (ph - DUTY) / (1 - DUTY); fx += sweep * (smooth(t) - 0.5); fy = L.lift * w * Math.sin(Math.PI * Math.pow(t, 0.85)); toe = -0.42 * w * (1 - smooth(t / 0.55)) - 0.25 * w * Math.sin(Math.PI * t); }
      // foot target from ground space into the tilted, bobbing trunk
      const gx = fx, gy = fy - rig.position.y, lx = gx * cp - (gy - 0) * sp, ly = gx * sp + gy * cp;
      let [a1, a2] = solve(L, lx, ly);
      if (lie > 0.001) { a1 = lerp(a1, L.lie[0], lie); a2 = lerp(a2, L.lie[1], lie); }
      L.upper.rotation.z = a1; L.lower.rotation.z = a2 - a1; L.hoof.rotation.z = -a2 - pitch * (1 - lie) + toe * (1 - lie) + 0.9 * lie;
      L.upper.rotation.x = -0.1 * lie * L.s;
    }

    // neck and head: carriage, the nod of the walk, reaching down to graze or drink
    const down = P.reach * clamp((1.1 - P.reachY) / 0.96) * (1 - 0.75 * lie);
    const chew = P.chew * Math.sin(time * 7.2 + seed);
    const nod = 0.05 * w * Math.sin(phase * TAU * 2 + 1.3);
    neck.rotation.z = lerp(0.25 + 0.08 * P.alert, -1.08, down) + nod + 0.28 * lie * (1 - down) - 0.45 * P.sleep + 0.012 * breath;
    neck.rotation.y = P.yaw * 0.55 + 1.05 * P.sleep + 0.03 * w * one;
    head.rotation.z = lerp(-1.0 + 0.12 * P.alert, -0.4, down) - nod * 0.6 - 0.3 * P.sleep + (down > 0.5 ? 0.05 * Math.sin(time * 3.1 + seed) * P.chew : 0);
    head.rotation.y = P.yaw * 0.5 + 0.4 * P.sleep;
    head.rotation.x = 0.1 * P.yaw + (down > 0.5 ? 0.06 * Math.sin(time * 1.7 + seed) * P.chew : 0);
    jaw.rotation.z = -0.05 - 0.07 * Math.max(0, chew); jaw.position.z = 0.012 * Math.sin(time * 7.2 + seed + 1.2) * P.chew;

    // ears flick on their own now and then
    for (let i = 0; i < 2; i++) {
      earT[i] -= dt;
      if (earT[i] <= 0) { earT[i] = 1.5 + Math.random() * 5; earV[i] = 1; }
      earV[i] = Math.max(0, earV[i] - dt * 4);
      const s = i ? 1 : -1;
      ears[i].rotation.x = (-0.25 - 0.2 * P.alert + 0.35 * P.sleep) * s + Math.sin(earV[i] * 9) * 0.5 * earV[i] * s;
      ears[i].rotation.y = -0.25 * P.alert * s + Math.sin(earV[i] * 7) * 0.3 * earV[i];
    }

    // tail: a pendulum with a lazy swing and the odd fly-swat
    flickT -= dt;
    if (flickT <= 0) { flickT = 2.5 + Math.random() * 6; flick = 1; }
    flick = Math.max(0, flick - dt * 1.6);
    const sw = 0.1 + 0.1 * w + 0.5 * flick;
    tail.forEach((g, i) => {
      g.rotation.x = Math.sin(time * (2.1 + 3 * flick) + seed - i * 0.75) * sw * (0.5 + i * 0.35) * (1 - 0.7 * lie);
      g.rotation.z = (i === 0 ? -0.5 - 0.5 * lie : -0.07 + 0.1 * w * Math.sin(phase * TAU * 2 - i)) + (i === 1 ? 0.3 * lie : 0);
    });

    // belt LED, radio ping, selection ring
    const key = st.key || 'healthy';
    const blink = key === 'healthy' ? 0.55 + 0.45 * Math.sin(time * 2.2 + seed) : Math.sin(time * 10) > 0 ? 1 : 0.12;
    ledM.emissive.set(BELT_COLOR[key] || BELT_COLOR.healthy); ledM.emissiveIntensity = (st.ledPower ?? 3) * blink;
    if (st.ping) {
      const t = frac(time * 0.45 + seed * 0.13);
      collar.getWorldPosition(tmp); root.worldToLocal(tmp);
      ping.visible = true; ping.position.set(tmp.x, tmp.y + 0.3 + t * 0.45, tmp.z); ping.scale.setScalar(1 + t * 2.2);
      pingM.opacity = (1 - t) * 0.5; pingM.color.set(BELT_COLOR[key] || BELT_COLOR.healthy);
    } else ping.visible = false;
    const want = st.flagged ? 0.55 + 0.35 * Math.sin(time * 6) : st.selected ? 0.85 : 0;
    ringM.opacity = lerp(ringM.opacity, want, damp(12, dt || 0.016));
    ring.visible = ringM.opacity > 0.01;
    ringM.color.copy(ledC.set(st.flagged ? BELT_COLOR[key] : '#ffffff'));
  }

  return { group: root, rig, update, anchors: { muzzle, collar, udder, head, neck, tail: tail[0] }, pose: P, ledMaterial: ledM };
}
