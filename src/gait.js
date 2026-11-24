// The walking puppet. The cow picture is cut into a fine mesh with joints at
// her shoulders, knees, hips, hocks, neck, ears, jaw and tail, the way a paper
// puppet is pinned. Every frame the joints are posed and the mesh is bent on
// the CPU, so the same coloured picture walks, grazes, chews and lies down.
//
//  - Walk: the four-beat lateral walk of cattle (left hind, left fore, right
//    hind, right fore), each hoof on the ground ~64 % of the stride. The cycle
//    is driven by the distance she actually moves, so planted hooves do not
//    skate, and two-bone IK keeps each hoof on its line.
//  - Her belt data shows in how she moves: a lame animal limps and bobs her
//    head up on the sore foot, a feverish one walks short with her head and
//    ears down, heat stress makes her swish her tail and pant, rumination
//    shows as side-to-side cud chewing, and an animal in heat raises her tail.
//  - Cattle lie down front end first and get up hind end first; so does she.
//  - Each hoof that lands leaves a cloven print that fades.
import * as THREE from 'three';
import { GATE } from './layout.js';

// ---- the rig, on the picture: u from the left, v from the top, 0..1 -------
// Knee points sit just on the bending side of each leg's line, which makes
// the rest pose an exact solution of the leg IK (no pop when she stops).
const LEGS = [
  { hip: [0.300, 0.650], knee: [0.280, 0.820], hoof: [0.283, 0.975], top: 0.69, full: 0.78, front: true, near: true, z: 0.008, beat: 0.25 },
  { hip: [0.512, 0.670], knee: [0.491, 0.820], hoof: [0.492, 0.985], top: 0.71, full: 0.79, front: true, near: false, z: -0.006, beat: 0.75, bias: -0.012 },
  { hip: [0.645, 0.720], knee: [0.630, 0.835], hoof: [0.594, 0.945], top: 0.785, full: 0.83, front: false, near: false, z: -0.012, beat: 0.5, bias: 0.012 },
  { hip: [0.800, 0.640], knee: [0.853, 0.800], hoof: [0.882, 0.960], top: 0.70, full: 0.78, front: false, near: true, z: 0.008, beat: 0 },
];
const LAME_LEG = 0;                      // the near fore: the one the audience sees best
const HEAD = { pivot: [0.44, 0.40], v0: 0.35, v1: 0.45, u0: 0.60, u1: 0.72, z: 0.012 };
const EARS = [
  { base: [0.205, 0.270], tip: [0.020, 0.310], c: [0.110, 0.285], r: [0.120, 0.080], dir: 1 },
  { base: [0.480, 0.145], tip: [0.640, 0.095], c: [0.560, 0.120], r: [0.105, 0.075], dir: -1 },
];
const JAW = { c: [0.470, 0.362], r: [0.075, 0.036], v0: 0.335, v1: 0.36, z: 0.002 };
const TAIL = { base: [0.775, 0.470], mid: [0.865, 0.545], tip: [0.950, 0.585], tuft: [0.945, 0.570, 0.058, 0.072], u0: 0.78, u1: 0.81, s0: 0.835, s1: 0.885, z: -0.004 };
const UDDER = [0.67, 0.745, 0.10, 0.065];
const BELL_U = 0.331;
const CUT = 0.84;                        // below this the legs are separate pieces of card
const COLS = 58, ROWS = 72;
// bone slots: legs 0..7 (upper, lower per leg), then these
const HEAD_B = 8, EAR_B = [9, 10], JAW_B = 11, TAIL1 = 12, TAIL2 = 13, NB = 14;

// ---- walk numbers (heights are in units of her own height) ----------------
const DUTY = 0.64, STRIDE = 0.085, HIND = 0.8, LIFT_F = 0.07, LIFT_H = 0.05, MAX_HZ = 2.4;
const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const frac = (x) => x - Math.floor(x);
const damp = (rate, dt) => 1 - Math.exp(-rate * dt);

function segDist(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay, t = clamp(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1));
  return Math.hypot(px - ax - t * dx, py - ay - t * dy);
}
const ellipse = (u, v, [cu, cv, ru, rv]) => ((u - cu) / ru) ** 2 + ((v - cv) / rv) ** 2;

// ---- the mesh: built once per picture, shared by every animal ------------
const templates = new WeakMap();
function template(art) {
  if (templates.has(art)) return templates.get(art);
  const A = art.aspect, X = (u) => (u - 0.5) * A, Y = (v) => 1 - v;
  const legs = LEGS.map((L) => {
    const H = [X(L.hip[0]), Y(L.hip[1])], K = [X(L.knee[0]), Y(L.knee[1])], F = [X(L.hoof[0]), Y(L.hoof[1])];
    const u0 = Math.atan2(K[1] - H[1], K[0] - H[0]), l0 = Math.atan2(F[1] - K[1], F[0] - K[0]);
    const base = Math.atan2(F[1] - H[1], F[0] - H[0]);
    let bend = u0 - base; bend = Math.atan2(Math.sin(bend), Math.cos(bend));
    return { ...L, H, K, F, L1: Math.hypot(K[0] - H[0], K[1] - H[1]), L2: Math.hypot(F[0] - K[0], F[1] - K[1]), u0, l0, bend: Math.sign(bend) || 1 };
  });

  // which cells of the grid hold any of her (plus a rim, for texture filtering)
  const { w, h } = art, alpha = art.src.alpha;
  const opaque = (u0, v0, u1, v1) => {
    const x0 = Math.max(0, Math.floor(u0 * w) - 3), x1 = Math.min(w - 1, Math.ceil(u1 * w) + 3);
    const y0 = Math.max(0, Math.floor(v0 * h) - 3), y1 = Math.min(h - 1, Math.ceil(v1 * h) + 3);
    for (let y = y0; y <= y1; y += 1) for (let x = x0; x <= x1; x += 1) if (alpha[y * w + x] > 8) return true;
    return false;
  };
  const nearestLeg = (u, v) => {
    let best = 0, bd = 1e9;
    legs.forEach((L, i) => {
      const px = X(u), py = Y(v);
      const d = Math.min(segDist(px, py, ...L.H, ...L.K), segDist(px, py, ...L.K, ...L.F));
      const db = d + (L.bias || 0);
      if (db < bd) { bd = db; best = i; }
    });
    return best;
  };

  // weights: up to two bones per vertex; what is left goes with the body
  function weigh(u, v, owner) {
    const px = X(u), py = Y(v);
    let leg = -1, wl = 0;
    if (owner >= 0) { leg = owner; wl = ss(legs[owner].top, legs[owner].full, v); }
    else if (v > 0.6) {
      const udder = 1 - ss(0.7, 1, ellipse(u, v, UDDER));
      legs.forEach((L, i) => {
        const d = Math.min(segDist(px, py, ...L.H, ...L.K), segDist(px, py, ...L.K, ...L.F));
        const wi = ss(L.top, L.full, v) * (1 - ss(0.04, 0.06, d)) * (1 - udder);
        if (wi > wl) { wl = wi; leg = i; }
      });
    }
    if (leg >= 0 && wl > 0.001) {
      const L = legs[leg], s = ss(L.knee[1] - 0.045, L.knee[1] + 0.045, v);
      return [2 * leg, wl * (1 - s), 2 * leg + 1, wl * s, wl * L.z];
    }
    const wh = (1 - ss(HEAD.v0, HEAD.v1, v)) * (1 - ss(HEAD.u0, HEAD.u1, u));
    if (wh > 0.001) {
      let sub = -1, ws = 0;
      EARS.forEach((E, i) => {
        const bx = X(E.base[0]), by = Y(E.base[1]), tx = X(E.tip[0]) - bx, ty = Y(E.tip[1]) - by;
        const t = ((px - bx) * tx + (py - by) * ty) / (tx * tx + ty * ty);
        const we = ss(0.05, 0.45, t) * (1 - ss(0.75, 1, ellipse(u, v, [...E.c, ...E.r])));
        if (we > ws) { ws = we; sub = EAR_B[i]; }
      });
      const wj = (1 - ss(0.6, 1, ellipse(u, v, [...JAW.c, ...JAW.r]))) * ss(JAW.v0, JAW.v1, v);
      if (wj > ws) { ws = wj; sub = JAW_B; }
      return [HEAD_B, wh * (1 - ws), sub, wh * ws, wh * (HEAD.z + (sub === JAW_B ? ws * JAW.z : 0))];
    }
    const tx = X(u), ty = Y(v);
    const near = Math.min(segDist(tx, ty, X(TAIL.base[0]), Y(TAIL.base[1]), X(TAIL.mid[0]), Y(TAIL.mid[1])),
      segDist(tx, ty, X(TAIL.mid[0]), Y(TAIL.mid[1]), X(TAIL.tip[0]), Y(TAIL.tip[1])));
    const wt = Math.max(1 - ss(0.03, 0.05, near), 1 - ss(0.75, 1, ellipse(u, v, TAIL.tuft))) * ss(TAIL.u0, TAIL.u1, u);
    if (wt > 0.001) { const s = ss(TAIL.s0, TAIL.s1, u); return [TAIL1, wt * (1 - s), TAIL2, wt * s, wt * TAIL.z]; }
    return [-1, 0, -1, 0, 0];
  }

  const pos = [], uv = [], ia = [], wa = [], ib = [], wb = [], z = [], tsink = [], idx = [], keys = new Map();
  const vert = (ix, iy, owner) => {
    const key = (iy * (COLS + 1) + ix) * 8 + owner + 1;
    let k = keys.get(key);
    if (k !== undefined) return k;
    const u = ix / COLS, v = iy / ROWS, wgt = weigh(u, v, owner);
    k = pos.length / 2;
    pos.push(X(u), Y(v)); uv.push(u, v);
    ia.push(wgt[0]); wa.push(wgt[1]); ib.push(wgt[2]); wb.push(wgt[3]); z.push(wgt[4]);
    tsink.push(ss(0.28, 0.88, u));
    keys.set(key, k);
    return k;
  };
  for (let iy = 0; iy < ROWS; iy++) for (let ix = 0; ix < COLS; ix++) {
    const u0 = ix / COLS, v0 = iy / ROWS, u1 = (ix + 1) / COLS, v1 = (iy + 1) / ROWS;
    if (!opaque(u0, v0, u1, v1)) continue;
    // below the cut each leg is its own piece, so legs that touch in the picture can part
    const owner = (v0 + v1) / 2 > CUT ? nearestLeg((u0 + u1) / 2, (v0 + v1) / 2) : -1;
    const tl = vert(ix, iy, owner), tr = vert(ix + 1, iy, owner), bl = vert(ix, iy + 1, owner), br = vert(ix + 1, iy + 1, owner);
    idx.push(tl, bl, br, tl, br, tr);
  }
  const n = pos.length / 2, normal = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) normal[i * 3 + 1] = 1;     // lit like the ground, as the flat card was
  const T = {
    n, A, legs, rest: new Float32Array(pos), z: new Float32Array(z), tsink: new Float32Array(tsink),
    ia: new Int8Array(ia), wa: new Float32Array(wa), ib: new Int8Array(ib), wb: new Float32Array(wb),
    uv: new THREE.BufferAttribute(new Float32Array(uv), 2), normal: new THREE.BufferAttribute(normal, 3),
    index: new THREE.BufferAttribute(n > 65535 ? new Uint32Array(idx) : new Uint16Array(idx), 1),
    pt: (u, v) => [X(u), Y(v)],
  };
  templates.set(art, T);
  return T;
}

// ---- hoof prints: one shared instanced layer for the whole herd ----------
const PRINTS = { mesh: null, life: null, next: 0, max: 420, tick: -1, m: new THREE.Matrix4(), q: new THREE.Quaternion(), v: new THREE.Vector3(), s: new THREE.Vector3(1, 1, 1), up: new THREE.Vector3(0, 1, 0) };
export function printLayer() {
  if (PRINTS.mesh) return PRINTS.mesh;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#fff'; g.shadowColor = '#fff'; g.shadowBlur = 5;
  for (const y of [20, 44]) { g.beginPath(); g.ellipse(32, y, 22, 10.5, 0, 0, Math.PI * 2); g.fill(); }   // two claws, toes toward +x
  const tex = new THREE.CanvasTexture(c);
  const geo = new THREE.PlaneGeometry(0.2, 0.2);
  geo.rotateX(-Math.PI / 2);
  PRINTS.life = new THREE.InstancedBufferAttribute(new Float32Array(PRINTS.max), 1);
  PRINTS.life.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('aLife', PRINTS.life);
  const mat = new THREE.MeshBasicMaterial({ map: tex, color: '#3a2716', transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = 'attribute float aLife;\nvarying float vLife;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvLife = aLife;');
    sh.fragmentShader = 'varying float vLife;\n' + sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\ndiffuseColor.a *= vLife;');
  };
  mat.customProgramCacheKey = () => 'dairy-sense-hoofprint';
  const mesh = new THREE.InstancedMesh(geo, mat, PRINTS.max);
  mesh.frustumCulled = false;
  mesh.userData.dyn = true;
  const hide = new THREE.Matrix4().makeScale(0, 0, 0);
  for (let i = 0; i < PRINTS.max; i++) mesh.setMatrixAt(i, hide);
  PRINTS.mesh = mesh;
  return mesh;
}
export function stampPrint(x, z, heading, strength) {
  const P = PRINTS, i = P.next;
  P.next = (i + 1) % P.max;
  P.q.setFromAxisAngle(P.up, -heading);
  P.m.compose(P.v.set(x, 0.1, z), P.q, P.s);
  P.mesh.setMatrixAt(i, P.m);
  P.mesh.instanceMatrix.needsUpdate = true;
  P.life.array[i] = strength;
}
export function tickPrints(dt, time) {
  if (!PRINTS.mesh || PRINTS.tick === time) return;
  PRINTS.tick = time;
  const a = PRINTS.life.array, k = dt / 22;            // a print fades over ~20 seconds of farm play
  let any = false;
  for (let i = 0; i < a.length; i++) if (a[i] > 0) { a[i] = Math.max(0, a[i] - k); any = true; }
  if (any) PRINTS.life.needsUpdate = true;
}
// where each hoof lands, relative to her centre: forward along her heading, sideways
const FOOT = [[0.62, 0.2], [0.62, -0.2], [-0.62, -0.2], [-0.62, 0.2]];

// ---- one animal's puppet -------------------------------------------------
export function createGait(art, { sink: sink0 = 0.27, height = 2.7 } = {}) {
  const sink = sink0 * 0.86;            // she settles onto her folded legs rather than into the ground
  const T = template(art), A = T.A, n = T.n;
  const geometry = new THREE.BufferGeometry();
  const out = new Float32Array(n * 3);
  const posAttr = new THREE.BufferAttribute(out, 3);
  posAttr.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute('position', posAttr);
  geometry.setAttribute('normal', T.normal);
  geometry.setAttribute('uv', T.uv);
  geometry.setIndex(T.index);
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.5, 0), 0.95);
  geometry.boundingBox = new THREE.Box3(new THREE.Vector3(-0.8, -0.4, -0.1), new THREE.Vector3(0.8, 1.2, 0.1));

  const bone = new Float32Array(NB * 6);          // 2D affine per bone: X' = a X + b Y + e, Y' = c X + d Y + f
  const setRot = (i, th, px, py, tx = 0, ty = 0, s = 1) => {
    const c = Math.cos(th) * s, sn = Math.sin(th) * s, o = i * 6;
    bone[o] = c; bone[o + 1] = -sn; bone[o + 2] = sn; bone[o + 3] = c;
    bone[o + 4] = px - c * px + sn * py + tx; bone[o + 5] = py - sn * px - c * py + ty;
  };
  const compose = (i, parent) => {          // bone i := parent o bone i
    const p = parent * 6, o = i * 6, [a, b, c, d, e, f] = bone.subarray(o, o + 6);
    const pa = bone[p], pb = bone[p + 1], pc = bone[p + 2], pd = bone[p + 3], pe = bone[p + 4], pf = bone[p + 5];
    bone[o] = pa * a + pb * c; bone[o + 1] = pa * b + pb * d; bone[o + 2] = pc * a + pd * c; bone[o + 3] = pc * b + pd * d;
    bone[o + 4] = pa * e + pb * f + pe; bone[o + 5] = pc * e + pd * f + pf;
  };

  // two-bone IK for leg i toward hoof target (tx, ty); stretches a little if out of reach
  function solveLeg(i, tx, ty) {
    const L = T.legs[i], [hx, hy] = L.H, dx = tx - hx, dy = ty - hy, d = Math.hypot(dx, dy) || 1e-6;
    const reach = L.L1 + L.L2, base = Math.atan2(dy, dx);
    let up, kx, ky, s = 1;
    if (d >= reach * 0.9995) { s = d / reach; up = base; }
    else up = base + L.bend * Math.acos(clamp((L.L1 * L.L1 + d * d - L.L2 * L.L2) / (2 * L.L1 * d), -1, 1));
    kx = hx + Math.cos(up) * L.L1 * s; ky = hy + Math.sin(up) * L.L1 * s;
    const lo = Math.atan2(ty - ky, tx - kx);
    setRot(2 * i, up - L.u0, hx, hy, 0, 0, s);
    // lower bone: turn about the rest knee, then carry the rest knee to the new knee
    const [rkx, rky] = L.K, th = lo - L.l0, c = Math.cos(th) * s, sn = Math.sin(th) * s, o = (2 * i + 1) * 6;
    bone[o] = c; bone[o + 1] = -sn; bone[o + 2] = sn; bone[o + 3] = c;
    bone[o + 4] = kx - c * rkx + sn * rky; bone[o + 5] = ky - sn * rkx - c * rky;
  }

  const [hpx, hpy] = T.pt(...HEAD.pivot), ears = EARS.map((E) => T.pt(...E.base));
  const [t1x, t1y] = T.pt(...TAIL.base), [t2x, t2y] = T.pt(...TAIL.mid);
  const st = {
    phase: Math.random(), amp: 0, last: null, sinkF: 0, sinkH: 0,
    head: { rot: 0, tx: 0, ty: 0 }, ear: [0, 0], flick: [0, 0], flickT: [1 + Math.random() * 4, 2 + Math.random() * 5],
    tail: [0, 0, 0, 0], swishT: 1 + Math.random() * 3, jaw: Math.random() * 6, chew: 0,
    shuffle: { leg: -1, s: 0, dir: 1, t: 2 + Math.random() * 4 }, stance: [true, true, true, true],
  };

  function update(a, dt, time, group, selected) {
    const g = group.position;
    if (PRINTS.mesh && !PRINTS.mesh.parent && group.parent) group.parent.add(PRINTS.mesh);
    else if (!PRINTS.mesh && group.parent) group.parent.add(printLayer());
    tickPrints(dt, time);

    // ---- how far she really moved this frame drives the stride
    let dist = 0;
    if (st.last) { dist = Math.hypot(g.x - st.last.x, g.z - st.last.z); if (dist > 2) dist = 0; }
    st.last = { x: g.x, z: g.z };
    const speed = dt > 0 ? dist / dt : 0;
    const lying = a.state === 'rest';
    const wantAmp = lying ? 0 : clamp((speed - 0.12) / 0.6);
    st.amp += (wantAmp - st.amp) * damp(wantAmp > st.amp ? 7 : 4, dt);
    const amp = st.amp, sick = a.sick || 0, lame = a.lame || 0, stress = a.stress || 0, estrus = a.cond === 'estrus';
    const stride = STRIDE * (1 - 0.35 * sick) * (estrus ? 1.1 : 1) * (1 - 0.15 * lame);
    const cycle = (2 * stride * height) / DUTY;          // world distance per full stride
    st.phase = frac(st.phase + Math.min(dist / cycle, MAX_HZ * dt));
    const ph = st.phase;

    // ---- lying down front first, standing up hind first
    const k = damp(3.2, dt);
    if (lying) { st.sinkF += (1 - st.sinkF) * k; st.sinkH += ((st.sinkF > 0.5 ? 1 : 0) - st.sinkH) * k; }
    else { st.sinkH += (0 - st.sinkH) * k; st.sinkF += ((st.sinkH < 0.5 ? 0 : 1) - st.sinkF) * k; }
    const tb = ss(0.28, 0.88, BELL_U), sinkBell = st.sinkF + (st.sinkH - st.sinkF) * tb;

    // ---- body: a small dip twice a stride, a gentle rock, and the limp
    const bob = amp * 0.005 * (Math.cos(4 * Math.PI * ph) - 1);
    let roll = amp * 0.012 * Math.sin(2 * Math.PI * ph);
    const L0 = LEGS[LAME_LEG], dutyLame = DUTY * (1 - 0.3 * lame);
    const sLame = frac(ph - L0.beat), lameLoad = sLame < dutyLame ? Math.sin((Math.PI * sLame) / dutyLame) : 0;
    roll -= amp * lame * 0.035 * lameLoad;                 // she keeps weight off the sore foot

    // ---- an occasional step while standing or grazing (weight shifts)
    const sh = st.shuffle;
    if (sh.leg >= 0) { sh.s += dt / 0.5; if (sh.s >= 1) { sh.leg = -1; sh.s = 0; } }
    else if (amp < 0.08 && st.sinkF < 0.05) {
      sh.t -= dt;
      if (sh.t <= 0) { sh.leg = Math.floor(Math.random() * 4); sh.dir = Math.random() < 0.5 ? -1 : 1; sh.t = (a.state === 'graze' ? 2.2 : 4.5) + Math.random() * 4; }
    }

    // ---- legs
    for (let i = 0; i < 4; i++) {
      const L = T.legs[i], dutyI = i === LAME_LEG ? dutyLame : DUTY, s = frac(ph - L.beat);
      const amI = stride * (L.front ? 1 : HIND) * (i === LAME_LEG ? 1 - 0.3 * lame : 1);
      let qf, lift = 0;
      const inStance = s < dutyI;
      if (inStance) qf = amI * (1 - (2 * s) / dutyI);
      else {
        const t = (s - dutyI) / (1 - dutyI), e = t * t * (3 - 2 * t);
        qf = amI * (-1 + 2 * e);
        lift = (L.front ? LIFT_F : LIFT_H) * Math.sin(Math.PI * t) * (i === LAME_LEG ? 1 - 0.45 * lame : 1) * (1 - 0.4 * sick);
      }
      if (inStance && !st.stance[i] && amp > 0.35 && group.parent && dt > 0) {
        const hd = a.heading, f = FOOT[i], fx = Math.cos(hd), fz = Math.sin(hd);
        const px = g.x + fx * (f[0] + 0.18) - fz * f[1], pz = g.z + fz * (f[0] + 0.18) + fx * f[1];
        stampPrint(px, pz, hd, (pz < GATE.z ? 0.35 : 0.62) * (i === LAME_LEG ? 1 - 0.4 * lame : 1));
      }
      st.stance[i] = inStance;
      let tx = L.F[0] - qf * amp, ty = L.F[1] + lift * amp - bob;
      if (sh.leg === i) { const b = Math.sin(Math.PI * sh.s); ty += 0.04 * b; tx -= 0.012 * b * sh.dir; }
      // folding up to lie down: forelegs tuck back under the chest, hind legs fold forward under the belly
      const fold = L.front ? st.sinkF : st.sinkH;
      if (fold > 0.001) { const f = fold * fold * (3 - 2 * fold); tx += (L.front ? 0.11 : -0.1) * f; ty += (L.front ? 0.215 : 0.19) * f; }
      solveLeg(i, tx, ty);
    }

    // ---- head: down to graze with bites, low when ill, up when watched, nod at the walk
    const eating = a.state === 'graze' || a.state === 'eat' || a.state === 'drink';
    const look = Math.sin(time * 0.37 + a.idx * 2.1) * Math.sin(time * 0.23 + a.idx) * 0.05 * (1 - amp);
    const wantRot = (eating ? 0.42 : 0) + 0.15 * sick + (lying ? 0.07 : 0) - (selected && !eating ? 0.08 : 0) + look;
    const H = st.head, kh = damp(3.5, dt);
    H.rot += (wantRot - H.rot) * kh;
    H.tx += ((eating ? -0.05 : 0) - H.tx) * kh;
    H.ty += ((eating ? -0.13 : 0) - H.ty) * kh;
    const bite = eating ? 0.045 * Math.max(0, Math.sin(time * 4.6 + a.idx)) : 0;
    const nod = amp * 0.045 * Math.sin(4 * Math.PI * ph - 0.6) - amp * lame * 0.16 * lameLoad;   // a lame cow's head goes UP on the sore foot
    setRot(HEAD_B, H.rot + bite + nod, hpx, hpy, H.tx, H.ty);

    // ---- ears: droop with fever, perk when watched or in heat, flick now and then
    for (let i = 0; i < 2; i++) {
      st.flickT[i] -= dt;
      if (st.flickT[i] <= 0) { st.flick[i] = 1; st.flickT[i] = 2.5 + Math.random() * 6; }
      st.flick[i] = Math.max(0, st.flick[i] - dt / 0.28);
      const want = 0.32 * sick + (lying ? 0.1 : 0) - ((estrus || selected) ? 0.12 : 0);
      st.ear[i] += (want - st.ear[i]) * damp(3, dt);
      const ang = st.ear[i] - 0.38 * Math.sin(Math.PI * st.flick[i]) + amp * 0.05 * Math.sin(4 * Math.PI * ph + 1.2 + i);
      setRot(EAR_B[i], EARS[i].dir * ang, ...ears[i]);
      compose(EAR_B[i], HEAD_B);
    }

    // ---- jaw: cud chewing (side to side) when ruminating, chewing while eating, panting in heat
    const ruminating = (lying || a.state === 'idle') && (a.rum || 0) > 12;
    st.chew += ((ruminating || eating ? 1 : 0) - st.chew) * damp(4, dt);
    st.jaw += dt * Math.PI * 2 * (eating ? 1.5 : 1.15);
    const pant = clamp((stress - 0.5) / 0.3) * (1 - st.chew);
    const jx = st.chew * 0.005 * Math.sin(st.jaw), jy = st.chew * 0.012 * (0.5 - 0.5 * Math.cos(st.jaw)) - pant * 0.009 * (0.6 + 0.4 * Math.sin(time * 13));
    setRot(JAW_B, 0, 0, 0, jx, jy);
    compose(JAW_B, HEAD_B);

    // ---- tail: a springy two-piece whip; swishes at flies, more when hot; raised in heat
    st.swishT -= dt;
    if (st.swishT <= 0 && !lying) {
      st.tail[1] += (Math.random() < 0.5 ? -1 : 1) * (2.8 + 4 * stress);
      st.swishT = (1 / (0.12 + 0.6 * stress + (eating ? 0.1 : 0))) * (0.4 + Math.random() * 1.2);
    }
    const tailWant = (estrus ? 0.3 : 0) + amp * 0.1 * Math.sin(2 * Math.PI * ph) - 0.06 * sick;
    for (let left = dt; left > 1e-6; left -= 1 / 120) {
      const h = Math.min(left, 1 / 120), tl = st.tail;
      tl[1] += (60 * (tailWant - tl[0]) - 7 * tl[1]) * h; tl[0] = clamp(tl[0] + tl[1] * h, -0.7, 0.7);
      tl[3] += (90 * (-0.09 * tl[1] - tl[2]) - 9 * tl[3]) * h; tl[2] = clamp(tl[2] + tl[3] * h, -0.9, 0.9);
    }
    setRot(TAIL1, st.tail[0], t1x, t1y);
    setRot(TAIL2, st.tail[2], t2x, t2y);
    compose(TAIL2, TAIL1);

    // ---- bend the card
    const R = T.rest, Z = T.z, IA = T.ia, WA = T.wa, IB = T.ib, WB = T.wb, TS = T.tsink;
    const dS = (st.sinkH - st.sinkF) * sink;
    for (let i = 0; i < n; i++) {
      const x = R[2 * i], y = R[2 * i + 1];
      let ox = x, oy = y;
      const wa = WA[i], wb = WB[i];
      if (wa > 0 || wb > 0) {
        const keep = 1 - wa - wb;
        ox = x * keep; oy = y * keep;
        if (wa > 0) { const o = IA[i] * 6; ox += wa * (bone[o] * x + bone[o + 1] * y + bone[o + 4]); oy += wa * (bone[o + 2] * x + bone[o + 3] * y + bone[o + 5]); }
        if (wb > 0) { const o = IB[i] * 6; ox += wb * (bone[o] * x + bone[o + 1] * y + bone[o + 4]); oy += wb * (bone[o + 2] * x + bone[o + 3] * y + bone[o + 5]); }
      }
      oy -= dS * (TS[i] - tb);                          // front and hind ends go down at different times
      out[3 * i] = ox / A; out[3 * i + 1] = oy; out[3 * i + 2] = Z[i];
    }
    posAttr.needsUpdate = true;
    return { y: bob - sinkBell * sink, roll, lie: sinkBell };
  }
  return { geometry, update };
}
