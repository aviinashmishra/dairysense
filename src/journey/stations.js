// Everything the cow walks past on the Cow Flow page, in the order the farm's
// resources really move: shed and milking, wash water recycling, the IR gate,
// solar power, the paddock, dung collection, biogas, cooling and monitoring,
// compost-grown fodder, and home again. Built at 1 unit = 1 metre.
import * as THREE from 'three';
import { mesh, box, cyl, ball, pipe, canvasTex, bezier, mergeStatic, Polyline, lerp, damp } from '../kit.js';
import { createFlows } from '../flows.js';
import { buildCow } from '../cow.js';
import { thiBand } from '../sim.js';
import { pathZ } from './scene.js';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
const P = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0, ...o });
const E = (color, k = 2, o = {}) => new THREE.MeshStandardMaterial({ color: '#0b0b0b', emissive: color, emissiveIntensity: k, roughness: 0.4, ...o });
function rng(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

export const PADS = [
  [5, -3.4, 9.6, 5.35], [132, -3.4, 9.6, 5.35], [21.6, -5.8, 6.3, 2.1], [46.5, -8.2, 4.4, 1.5], [51, -5, 1.1, 0.8], [77.5, -3.6, 0.9, 0.8], [82.4, -4.4, 1.2, 1.1],
  [83.5, -9, 1.2, 0.9], [87.5, -6.8, 2.7, 2.7], [92, -3.8, 1.5, 1.2], [93.5, -8.2, 1.7, 1.4], [100.3, pathZ(100.3) - 0.95, 1.6, 0.55], [103.5, -6, 2.9, 2.4], [118, -8.5, 6.7, 4.7],
];

export function createStations(scene, env) {
  const R = rng(77);
  const root = new THREE.Group(); scene.add(root);
  const add = (...o) => { root.add(...o); return o[0]; };
  const noise = (base, dots, n = 2400, rep = [4, 4]) => { const t = canvasTex(256, 256, (g, w, h) => { const r = rng(n); g.fillStyle = base; g.fillRect(0, 0, w, h); for (let i = 0; i < n; i++) { g.fillStyle = dots[i % dots.length]; g.globalAlpha = 0.5; g.fillRect(r() * w, r() * h, 1 + r() * 3, 1 + r() * 3); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); return t; };
  const stripes = (a, b, c, n, rep) => { const t = canvasTex(256, 64, (g, w, h) => { for (let x = 0; x < w; x += w / n) { const gr = g.createLinearGradient(x, 0, x + w / n, 0); gr.addColorStop(0, a); gr.addColorStop(0.5, b); gr.addColorStop(1, c); g.fillStyle = gr; g.fillRect(x, 0, w / n + 1, h); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); return t; };

  const M = {
    concrete: P('#ffffff', { map: noise('#b9b4a8', ['#a9a498', '#c6c1b5', '#9f9a8f'], 2600, [6, 4]), roughness: 0.92 }),
    wood: P('#ffffff', { map: stripes('#8b6a45', '#a17c52', '#7c5d3b', 6, [1, 1]), roughness: 0.9 }),
    woodDark: P('#5d4630', { roughness: 0.92 }),
    roof: P('#ffffff', { map: stripes('#8d979e', '#d3dade', '#8d979e', 16, [5, 1]), metalness: 0.65, roughness: 0.42, side: THREE.DoubleSide }),
    steel: P('#c3cad0', { metalness: 0.9, roughness: 0.28 }), galv: P('#aab2b8', { metalness: 0.7, roughness: 0.45 }),
    dark: P('#22262a', { roughness: 0.6 }), rubber: P('#16181a', { roughness: 0.9 }), pvc: P('#e6e9eb', { roughness: 0.5 }),
    blue: P('#1f5fc4', { roughness: 0.45, metalness: 0.2 }), yellow: P('#f0be28', { roughness: 0.5 }), green: P('#2f8f52', { roughness: 0.5, metalness: 0.35 }), orange: P('#e06f2a', { roughness: 0.55 }),
    glass: P('#d8f0fb', { transparent: true, opacity: 0.22, roughness: 0.05, metalness: 0, depthWrite: false }),
    poly: P('#dfe9ee', { transparent: true, opacity: 0.42, roughness: 0.35, depthWrite: false }),
    water: P('#2f8fcc', { transparent: true, opacity: 0.82, roughness: 0.08, metalness: 0.1 }), grey: P('#6f8a84', { transparent: true, opacity: 0.9, roughness: 0.15 }),
    milk: P('#fbf8f0', { roughness: 0.35 }), straw: P('#ffffff', { map: noise('#b3924a', ['#c9aa5c', '#9c7c3a', '#d4b96e', '#8a6c30'], 5200, [3, 2]), roughness: 1 }), fodder: P('#4d9a36', { roughness: 0.95 }), dung: P('#4a3320', { roughness: 0.95 }),
    soil: P('#ffffff', { map: noise('#4b3523', ['#3d2a1a', '#5a4230', '#33231a'], 3000, [5, 4]), roughness: 1 }), brick: P('#ffffff', { map: stripes('#9a5a3e', '#b06a4a', '#8a4f36', 8, [3, 6]), roughness: 0.9 }),
    gravel: P('#ffffff', { map: noise('#9b958a', ['#807a70', '#b3ada2', '#6d675e'], 3000, [3, 2]), roughness: 1 }),
  };
  // Two real lamps only, moved to whichever shed she is in: a light that is
  // switched off still costs every pixel, and adding or removing one would
  // rebuild every shader.
  const bulbM = E('#ffd9a0', 0.05), lampLights = [0, 1].map(() => { const l = new THREE.PointLight('#ffcf8f', 0, 19, 1.7); scene.add(l); return l; });
  const fence = (ax, az, bx, bz) => {
    const len = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.round(len / 2.4)), ang = -Math.atan2(bz - az, bx - ax);
    for (let i = 0; i <= n; i++) add(box(0.12, 1.3, 0.12, M.woodDark, lerp(ax, bx, i / n), 0.65, lerp(az, bz, i / n)));
    for (const y of [0.45, 0.82, 1.18]) { const r = box(len, 0.09, 0.035, M.wood, (ax + bx) / 2, y, (az + bz) / 2); r.rotation.y = ang; add(r); }
  };
  const spray = (count, emitters, { spread = 1.5, up = 0, size = 0.09, life = 0.8, grav = 6, color = '#dceefc', opacity = 0.7 } = {}) => {
    const geo = new THREE.BufferGeometry(), pos = new Float32Array(count * 3).fill(-90), vel = new Float32Array(count * 3), age = new Float32Array(count);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color, size, map: env.softDot, transparent: true, opacity, depthWrite: false }));
    pts.frustumCulled = false; scene.add(pts);
    return (dt, on) => {
      for (let i = 0; i < count; i++) {
        const k = i * 3; age[i] -= dt;
        if (age[i] <= 0) {
          if (!on || Math.random() > 0.25) { pos[k + 1] = -90; continue; }
          const e = emitters[(Math.random() * emitters.length) | 0];
          pos[k] = e[0]; pos[k + 1] = e[1]; pos[k + 2] = e[2];
          vel[k] = (Math.random() - 0.5) * spread; vel[k + 1] = up * (0.6 + Math.random() * 0.8); vel[k + 2] = (Math.random() - 0.5) * spread;
          age[i] = life * (0.5 + Math.random());
        } else { vel[k + 1] -= grav * dt; pos[k] += vel[k] * dt; pos[k + 1] = Math.max(0.05, pos[k + 1] + vel[k + 1] * dt); pos[k + 2] += vel[k + 2] * dt; }
      }
      geo.attributes.position.needsUpdate = true;
    };
  };
  const screen = (w, h, pw, ph) => { const c = document.createElement('canvas'); c.width = w; c.height = h; const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); return { c, t, m, g: c.getContext('2d') }; };
  const D = {};      // handles to the parts that move

  // ------------------------------------------------------------- the sheds
  function shed(x0, milking) {
    const cx = x0 + 5, S = {};
    add(box(19.2, 0.08, 10.7, M.concrete, cx, 0.04, -3.4));
    for (const x of [x0 - 4.3, x0 + 5, x0 + 14.6]) add(box(0.18, 4.05, 0.18, M.woodDark, x, 2.02, 2.3));
    for (const x of [x0 - 4.3, x0 + 1.9, x0 + 8.1, x0 + 14.3]) {
      add(box(0.18, 2.75, 0.18, M.woodDark, x, 1.37, -8.5));
      const raf = box(0.12, 0.2, 11.6, M.woodDark, x, 3.34, -3.4); raf.rotation.x = Math.atan2(1.25, 11.3); add(raf);
    }
    const roof = box(20, 0.05, 11.9, M.roof, cx, 3.5, -3.4); roof.rotation.x = Math.atan2(1.25, 11.3); add(roof);
    add(box(18.8, 2.3, 0.08, M.wood, cx, 1.2, -8.55), box(0.08, 1.5, 6.2, M.wood, x0 - 4.35, 0.8, -5.5));
    for (const bx of milking ? [x0 + 0.1] : [x0 + 11]) {                                  // straw bedding where she lies
      const bed = cyl(1, 1.04, 0.07, M.straw, bx, 0.115, pathZ(bx) - 0.2, 40); bed.scale.set(2.3, 1, 1.45); bed.castShadow = false; add(bed);
      for (let i = 0; i < 14; i++) { const s = ball(1, M.straw, bx - 2 + R() * 4, 0.13, pathZ(bx) - 1.3 + R() * 2.2, 14, 8); s.scale.set(0.35 + R() * 0.5, 0.04 + R() * 0.04, 0.3 + R() * 0.4); s.castShadow = false; add(s); }
    }
    // feed fence: a long manger beside the walkway
    const tz = pathZ(x0 + 8.7) - 0.95;
    add(box(6.2, 0.42, 0.62, M.concrete, x0 + 8.5, 0.29, tz), box(6.2, 0.2, 0.06, M.concrete, x0 + 8.5, 0.6, tz - 0.3));
    S.fodder = add(box(5.9, 0.16, 0.5, M.fodder, x0 + 8.5, 0.56, tz)); S.fodder.userData.dyn = true;
    // lamps under the eave
    for (const x of [x0 - 1.5, x0 + 5, x0 + 11.5]) { add(cyl(0.012, 0.012, 0.5, M.dark, x, 3.25, -1.2, 5), ball(0.075, bulbM, x, 2.96, -1.2, 10, 8, false)); }
    // sprinkler line that washes the floor
    add(pipe([[x0 - 4, 3.05, -2.2], [x0 + 14, 3.05, -2.2]], 0.03, M.pvc, false));
    S.nozzles = []; for (let x = x0 - 3; x < x0 + 14; x += 1.7) { add(cyl(0.02, 0.04, 0.08, M.dark, x, 2.98, -2.2, 6)); S.nozzles.push([x, 2.92, -2.2]); }
    if (milking) {
      const z = pathZ(x0 + 9), sx = x0 + 9;
      for (const dz of [0.62, -0.62]) add(pipe([[sx - 1.5, 0.08, z + dz], [sx - 1.5, 1.08, z + dz], [sx + 1.35, 1.08, z + dz], [sx + 1.35, 0.08, z + dz]], 0.028, M.galv));
      add(cyl(0.035, 0.035, 1.05, M.galv, sx - 1.95, 0.6, z - 0.85, 8), box(0.3, 0.03, 0.3, M.galv, sx - 1.95, 1.1, z - 0.85));
      add(cyl(0.17, 0.17, 0.52, M.glass, sx - 1.95, 1.38, z - 0.85, 20, false), cyl(0.18, 0.18, 0.03, M.steel, sx - 1.95, 1.65, z - 0.85, 20));
      S.jar = add(cyl(0.155, 0.155, 0.5, M.milk, sx - 1.95, 1.12, z - 0.85, 20, false)); S.jar.userData.dyn = true;
      add(pipe(bezier([sx - 0.5, 0.42, z], [sx - 1.2, 0.2, z - 0.5], [sx - 1.95, 1.66, z - 0.85], 14), 0.014, M.rubber, false));
      S.cluster = new THREE.Group(); S.cluster.position.set(sx - 0.45, 0.4, z); S.cluster.userData.dyn = true;
      for (const [dx, dz] of [[0.1, 0.085], [0.1, -0.085], [-0.09, 0.085], [-0.09, -0.085]]) S.cluster.add(cyl(0.022, 0.018, 0.13, M.steel, dx, 0, dz, 8));
      S.cluster.add(ball(0.04, M.steel, 0, -0.1, 0, 8, 6)); add(S.cluster);
      // bulk milk chiller
      const tank = cyl(0.62, 0.62, 2.3, M.steel, x0 + 4.5, 1.0, -7.3, 24); tank.rotation.z = Math.PI / 2; add(tank);
      for (const dx of [-0.8, 0.8]) add(box(0.08, 0.5, 1.0, M.galv, x0 + 4.5 + dx, 0.25, -7.3));
      add(box(0.5, 0.36, 0.3, M.dark, x0 + 4.5, 1.78, -7.3)); S.chill = add(ball(0.035, E('#35c46b', 2), x0 + 4.5, 1.78, -7.13, 8, 6, false)); S.chill.userData.dyn = true;
      add(pipe([[sx - 1.95, 1.12, z - 0.9], [sx - 1.95, 0.12, z - 1.2], [x0 + 5.6, 0.12, -6.6], [x0 + 5.6, 1.0, -6.75]], 0.022, M.steel));
      for (const [dx, dz] of [[3.1, -6.2], [3.55, -6.6]]) { add(cyl(0.16, 0.18, 0.5, M.steel, x0 + dx, 0.33, dz, 14), cyl(0.1, 0.16, 0.14, M.steel, x0 + dx, 0.65, dz, 14)); }
    }
    return S;
  }
  D.shed1 = shed(0, true); D.shed2 = shed(127, false);
  D.washSpray = spray(420, D.shed1.nozzles, { spread: 2.4, up: -0.6, size: 0.08, life: 0.75, grav: 8 });

  // ------------------------------------------------------- water recycling
  {
    add(box(12.6, 0.06, 4.2, M.gravel, 21.6, 0.03, -5.8));
    add(box(10, 0.03, 0.34, M.dark, 9, 0.085, -5.9));                                   // floor drain grate
    const wall = M.concrete, s = [17.5, -5.5];
    add(box(2.7, 1.1, 0.14, wall, s[0], 0.55, s[1] - 1.05), box(2.7, 1.1, 0.14, wall, s[0], 0.55, s[1] + 1.05), box(0.14, 1.1, 2.1, wall, s[0] - 1.3, 0.55, s[1]), box(0.14, 1.1, 2.1, wall, s[0] + 1.3, 0.55, s[1]));
    D.sump = add(box(2.46, 1, 1.96, M.grey, s[0], 0.1, s[1], false)); D.sump.userData.dyn = true;
    const f = [20.6, -5.5];
    add(cyl(0.66, 0.7, 0.2, M.dark, f[0], 0.16, f[1], 20), cyl(0.62, 0.62, 0.1, M.dark, f[0], 2.72, f[1], 20));
    add(cyl(0.5, 0.5, 0.55, P('#8a8c8e', { roughness: 1 }), f[0], 0.54, f[1], 18), cyl(0.5, 0.5, 0.6, P('#d6bd86', { roughness: 1 }), f[0], 1.12, f[1], 18), cyl(0.5, 0.5, 0.5, P('#1c1c1f', { roughness: 1 }), f[0], 1.67, f[1], 18));
    add(cyl(0.5, 0.5, 0.72, M.water, f[0], 2.28, f[1], 18, false), cyl(0.56, 0.56, 2.5, M.glass, f[0], 1.5, f[1], 24, false));
    const p = [22.7, -5.5];
    D.pump = new THREE.Group(); D.pump.position.set(p[0], 0.06, p[1]); D.pump.userData.dyn = true;
    D.pump.add(box(1.1, 0.1, 0.6, M.dark, 0, 0.08, 0));
    const motor = cyl(0.2, 0.2, 0.6, M.blue, 0.12, 0.36, 0, 18); motor.rotation.z = Math.PI / 2; D.pump.add(motor);
    const vol = cyl(0.26, 0.26, 0.16, M.blue, -0.32, 0.36, 0, 18); vol.rotation.z = Math.PI / 2; D.pump.add(vol);
    D.pumpFan = new THREE.Group(); D.pumpFan.position.set(0.45, 0.36, 0);
    for (let i = 0; i < 4; i++) { const h = new THREE.Group(); h.rotation.x = (i * Math.PI) / 2; h.add(box(0.03, 0.16, 0.06, P('#d0483a'), 0, 0.09, 0)); D.pumpFan.add(h); }
    D.pump.add(D.pumpFan); add(D.pump);
    const t = [25.6, -6.2];
    for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(box(0.14, 3.0, 0.14, M.galv, t[0] + dx, 1.5, t[1] + dz));
    for (const [a, b] of [[[-1, -1], [1, 1]], [[1, -1], [-1, 1]]]) add(pipe([[t[0] + a[0], 0.4, t[1] + a[1]], [t[0] + b[0], 2.6, t[1] + b[1]]], 0.025, M.galv));
    add(box(2.7, 0.12, 2.7, M.galv, t[0], 3.06, t[1]));
    D.tank = add(cyl(1.14, 1.14, 1, M.water, t[0], 3.2, t[1], 28, false)); D.tank.userData.dyn = true;
    add(cyl(1.2, 1.2, 2.4, M.poly, t[0], 4.33, t[1], 28, false), cyl(1.24, 1.0, 0.25, M.blue, t[0], 5.66, t[1], 28), cyl(0.28, 0.28, 0.1, M.dark, t[0], 5.83, t[1], 14));
    D.wp = {
      drain: [[4, 0.12, -5.9], [14.2, 0.12, -5.9], [16.2, 0.3, -5.5]],
      loop: [[s[0] + 1.3, 0.3, s[1]], [f[0] - 0.6, 0.3, f[1]], [f[0], 0.3, f[1]], [p[0] - 0.4, 0.4, p[1]], [p[0] + 0.5, 0.4, p[1]], [24.2, 0.4, p[1]], [24.2, 5.95, p[1]], [t[0], 5.95, p[1] - 0.2], [t[0], 5.9, t[1]]],
      shed: [[t[0], 3.1, t[1] - 0.6], [t[0], 0.16, t[1] - 0.6], [14.6, 0.16, -7.6], [14.6, 3.05, -2.2], [-4, 3.05, -2.2]],
      rain: [[-4.5, 2.8, -9.3], [14.8, 2.7, -9.3], [s[0], 2.7, -9.3], [s[0], 2.7, s[1] - 0.8], [s[0], 1.2, s[1] - 0.8]],
      plot: [[t[0] + 0.6, 3.1, t[1]], [t[0] + 0.6, 0.16, t[1]], [29, 0.16, -9.5]],
    };
    add(pipe(D.wp.drain.slice(1), 0.07, M.dark), pipe(D.wp.loop, 0.055, M.pvc), pipe(D.wp.shed.slice(0, 4), 0.045, M.pvc), pipe(D.wp.rain, 0.06, M.pvc), pipe(D.wp.plot, 0.045, M.pvc));
    D.tankSpray = spray(50, [[t[0], 5.6, t[1]]], { spread: 0.5, up: -0.5, size: 0.07, life: 0.5 });
  }

  // ---------------------------------------------------------------- IR gate
  {
    const gx = 34, gz = pathZ(34);
    add(box(0.2, 2.9, 0.2, M.woodDark, gx, 1.45, gz - 1.75), box(0.2, 2.9, 0.2, M.woodDark, gx, 1.45, gz + 1.75), box(0.16, 0.2, 3.9, M.woodDark, gx, 2.9, gz));
    add(box(0.12, 0.2, 0.1, M.blue, gx, 1.15, gz - 1.6), box(0.12, 0.2, 0.1, M.dark, gx, 1.15, gz + 1.6));
    D.beamM = new THREE.MeshBasicMaterial({ color: '#ff3b30', transparent: true, opacity: 0.5, toneMapped: false });
    const beam = cyl(0.012, 0.012, 3.2, D.beamM, gx, 1.15, gz, 6, false); beam.rotation.x = Math.PI / 2; add(beam);
    D.gateLedM = E('#ff3b30', 0.1);
    add(cyl(0.05, 0.07, 0.12, M.dark, gx, 3.06, gz - 1.75, 8), ball(0.11, D.gateLedM, gx, 3.2, gz - 1.75, 12, 8, false));
    D.counter = screen(384, 160, 1.15, 0.48); D.counter.m.position.set(gx + 0.12, 2.52, gz - 0.35); D.counter.m.rotation.y = 0.95; add(D.counter.m);
    add(box(0.06, 0.58, 1.3, M.dark, gx + 0.04, 2.52, gz - 0.35)).rotation.y = 0.95 - Math.PI / 2;
    fence(gx, gz - 1.75, gx, -30); fence(gx, gz + 1.75, gx, 15);
  }

  // ------------------------------------------------------------ solar array
  {
    add(box(8.8, 0.05, 3, M.gravel, 46.5, 0.025, -8.2));
    const cells = canvasTex(256, 512, (g, w, h) => {
      g.fillStyle = '#0d1b3d'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 6; i++) for (let j = 0; j < 12; j++) { const gr = g.createLinearGradient(i * w / 6, j * h / 12, (i + 1) * w / 6, (j + 1) * h / 12); gr.addColorStop(0, '#1d3f93'); gr.addColorStop(1, '#122a66'); g.fillStyle = gr; g.fillRect(i * w / 6 + 2, j * h / 12 + 2, w / 6 - 4, h / 12 - 4); }
      g.strokeStyle = 'rgba(210,220,235,0.5)'; g.lineWidth = 1; for (let i = 1; i < 6; i++) { g.beginPath(); g.moveTo(i * w / 6 - w / 12, 0); g.lineTo(i * w / 6 - w / 12, h); g.stroke(); }
    });
    D.cellM = P('#ffffff', { map: cells, metalness: 0.55, roughness: 0.16, emissive: '#2a5bd0', emissiveIntensity: 0 });
    const rack = new THREE.Group(); rack.position.set(46.5, 0, -8.2);
    for (let i = 0; i < 8; i++) {
      const pnl = new THREE.Group(); pnl.position.set(-3.68 + i * 1.05, 1.35, 0); pnl.rotation.x = 0.5;
      pnl.add(box(1.0, 0.04, 1.75, M.galv, 0, 0, 0)); const face = mesh(new THREE.PlaneGeometry(0.95, 1.7), D.cellM, 0, 0.022, 0); face.rotation.x = -Math.PI / 2; pnl.add(face); rack.add(pnl);
    }
    for (const x of [-3.9, -1.3, 1.3, 3.9]) { rack.add(box(0.07, 1.78, 0.07, M.galv, x, 0.89, -0.72), box(0.07, 0.95, 0.07, M.galv, x, 0.47, 0.75)); const b = box(0.06, 0.06, 1.85, M.galv, x, 1.3, 0); b.rotation.x = 0.5; rack.add(b); }
    add(rack);
    add(box(1.0, 1.8, 0.6, P('#e9e6dc', { roughness: 0.5, metalness: 0.2 }), 51, 0.95, -5), box(1.12, 0.06, 0.72, M.dark, 51, 1.88, -5), box(0.5, 0.6, 0.2, P('#d24a2f', { roughness: 0.5 }), 52, 1.25, -5), box(0.06, 1.3, 0.06, M.galv, 52, 0.65, -5));
    D.bars = []; for (let i = 0; i < 5; i++) { const m = E('#46e06b', 0.02); D.bars.push(m); add(box(0.34, 0.09, 0.02, m, 51.18, 0.62 + i * 0.15, -4.69, false)); }
    add(mesh(new THREE.PlaneGeometry(0.3, 0.3), new THREE.MeshBasicMaterial({ transparent: true, toneMapped: false, map: canvasTex(64, 64, (g) => { g.fillStyle = '#f2b632'; g.beginPath(); g.moveTo(38, 4); g.lineTo(14, 36); g.lineTo(30, 36); g.lineTo(24, 60); g.lineTo(50, 26); g.lineTo(34, 26); g.closePath(); g.fill(); }) }), 50.78, 1.0, -4.695, false));
    add(box(0.14, 5.2, 0.14, M.woodDark, 53.2, 2.6, -5), box(1.2, 0.08, 0.08, M.woodDark, 53.2, 4.9, -5));
    D.ep = { panel: [[45.2, 1.0, -7.6], [45.2, 0.1, -6.6], [50.5, 0.1, -6.6], [50.5, 0.1, -5.2]], out: [[51.5, 1.9, -5], [53.2, 4.95, -5], [60, 4.4, -6.5], [68, 4.9, -8]] };
    add(pipe(D.ep.panel, 0.022, M.dark, false), pipe([[51.5, 1.9, -5], [53.2, 4.95, -5]], 0.014, M.dark, false));
    add(pipe(bezier([53.2, 4.95, -5], [60, 3.9, -6.5], [68, 4.9, -8], 12), 0.012, M.dark, false), box(0.14, 5.2, 0.14, M.woodDark, 68, 2.6, -8));
  }

  // -------------------------------------------------------------- the herd
  D.mates = [
    { c: buildCow({ coat: 'sahiwal', idx: 1 }), x: 56.5, z: -8.5, h: 0.5, t: 0 }, { c: buildCow({ coat: 'gir', idx: 2 }), x: 66.5, z: -12.5, h: 2.6, t: 2 },
    { c: buildCow({ coat: 'murrah', kind: 'buffalo', idx: 3 }), x: 70.5, z: -6.2, h: -0.5, t: 4 }, { c: buildCow({ coat: 'murrah2', kind: 'buffalo', idx: 4 }), x: 52, z: -16, h: 1.4, t: 1 },
  ];
  for (const m of D.mates) { m.c.group.position.set(m.x, 0, m.z); m.c.group.rotation.y = m.h; scene.add(m.c.group); }
  add(cyl(0.2, 0.24, 0.18, P('#d8d2c4', { roughness: 0.7 }), 61.2, 0.12, pathZ(61.2) - 2.2, 10));   // mineral lick

  // ------------------------------------------------ dung, rover, biogas
  {
    D.pat = ball(0.2, M.dung, 71.6, 0.05, pathZ(71.6), 12, 6); D.pat.scale.set(1, 0.3, 1); D.pat.userData.dyn = true; add(D.pat);
    add(box(1.5, 0.06, 1.3, M.concrete, 77.5, 0.03, -3.6), box(0.06, 0.9, 0.06, M.galv, 78.1, 0.45, -4.1));
    const mini = box(0.7, 0.03, 0.5, D.cellM, 78.1, 0.95, -4.1); mini.rotation.x = 0.5; add(mini);
    const rv = new THREE.Group(); rv.userData.dyn = true;
    rv.add(box(0.95, 0.26, 0.6, M.yellow, 0, 0.33, 0), box(0.6, 0.03, 0.46, D.cellM, -0.1, 0.475, 0));
    const scoop = box(0.1, 0.26, 0.7, M.dark, 0.55, 0.24, 0); scoop.rotation.z = -0.4; rv.add(scoop);
    for (const [x, z] of [[0.3, 0.34], [0.3, -0.34], [-0.3, 0.34], [-0.3, -0.34]]) { const w = cyl(0.16, 0.16, 0.1, M.rubber, x, 0.16, z, 14); w.rotation.x = Math.PI / 2; rv.add(w); }
    D.roverLoad = box(0.42, 0.14, 0.4, M.dung, -0.12, 0.55, 0); D.roverLoad.userData.dyn = true; rv.add(D.roverLoad);
    D.roverLampM = E('#39d353', 2); rv.add(ball(0.045, D.roverLampM, 0.36, 0.5, 0.2, 8, 6, false));
    mergeStatic(rv); scene.add(rv); D.rover = rv;
    // dock -> round behind her to the pat -> digester inlet -> dock
    D.roverPath = new Polyline([[77.5, 0, -3.6], [74.5, 0, -3.2], [71.0, 0, -2.25], [71.3, 0, -0.85], [71.3, 0, -0.85], [72.5, 0, -2.6], [79.5, 0, -4.4], [80.6, 0, -4.4], [80.6, 0, -4.4], [79, 0, -3.4], [77.5, 0, -3.6]]);

    const h = [82.4, -4.4];
    add(box(1.7, 0.9, 0.12, M.concrete, h[0], 0.45, h[1] - 0.8), box(1.7, 0.9, 0.12, M.concrete, h[0], 0.45, h[1] + 0.8), box(0.12, 0.9, 1.6, M.concrete, h[0] - 0.85, 0.45, h[1]), box(0.12, 0.9, 1.6, M.concrete, h[0] + 0.85, 0.45, h[1]));
    D.inlet = add(box(1.58, 1, 1.48, M.dung, h[0], 0.1, h[1])); D.inlet.userData.dyn = true;
    const ramp = box(1.1, 0.06, 1.0, M.wood, h[0] - 1.3, 0.48, h[1]); ramp.rotation.z = 0.62; add(ramp);
    const d = [87.5, -6.8];
    add(box(5.6, 0.06, 5.6, M.gravel, d[0], 0.03, d[1]), cyl(2.2, 2.25, 1.2, M.brick, d[0], 0.6, d[1], 32));
    add(mesh(new THREE.TorusGeometry(2.2, 0.1, 8, 36), M.concrete, d[0], 1.2, d[1])).rotation.x = Math.PI / 2;
    add(box(0.14, 4.4, 0.14, M.galv, d[0] - 2.35, 2.2, d[1]), box(0.14, 4.4, 0.14, M.galv, d[0] + 2.35, 2.2, d[1]), box(4.9, 0.12, 0.12, M.galv, d[0], 4.4, d[1]));
    D.drum = new THREE.Group(); D.drum.userData.dyn = true;
    D.drum.add(cyl(1.9, 1.9, 1.7, M.green, 0, 0.85, 0, 36));
    const dome = mesh(new THREE.SphereGeometry(1.9, 36, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.green, 0, 1.7, 0); dome.scale.y = 0.4; D.drum.add(dome);
    D.drum.add(cyl(0.07, 0.07, 0.3, M.yellow, 0, 2.55, 0, 8));
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; D.drum.add(box(0.05, 1.7, 0.05, P('#267a45', { metalness: 0.35, roughness: 0.5 }), Math.cos(a) * 1.91, 0.85, Math.sin(a) * 1.91)); }
    D.drum.position.set(d[0], 0.4, d[1]); add(D.drum);
    D.hose = add(cyl(0.035, 0.035, 1, M.yellow, d[0], 3.6, d[1], 6, false)); D.hose.userData.dyn = true;
    const g = [83.5, -9];
    D.gen = new THREE.Group(); D.gen.userData.dyn = true; D.gen.position.set(g[0], 0.05, g[1]);
    D.gen.add(box(1.5, 0.75, 0.9, M.orange, 0, 0.6, 0), box(1.7, 0.1, 1.05, M.dark, 0, 0.16, 0), cyl(0.2, 0.2, 0.4, M.dark, -0.35, 1.1, 0, 12), cyl(0.05, 0.05, 0.7, M.galv, 0.5, 1.3, 0.2, 8));
    D.genLedM = E('#46e06b', 0.05); D.gen.add(ball(0.05, D.genLedM, 0.55, 0.8, 0.46, 8, 6, false)); add(D.gen);
    const st = [92, -3.8];
    add(box(2.8, 0.06, 2.3, M.concrete, st[0], 0.03, st[1]), box(1.6, 0.85, 0.75, M.brick, st[0], 0.45, st[1]), box(1.7, 0.05, 0.85, M.concrete, st[0], 0.9, st[1]));
    add(mesh(new THREE.TorusGeometry(0.13, 0.025, 6, 16), M.dark, st[0] - 0.3, 0.95, st[1])).rotation.x = Math.PI / 2;
    D.flame = add(mesh(new THREE.ConeGeometry(0.11, 0.2, 10), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.5, 1.4, 4), transparent: true, opacity: 0.9, toneMapped: false }), st[0] - 0.3, 1.06, st[1], false)); D.flame.userData.dyn = true;
    add(cyl(0.22, 0.19, 0.24, M.steel, st[0] - 0.3, 1.3, st[1], 18), cyl(0.23, 0.23, 0.02, M.steel, st[0] - 0.3, 1.43, st[1], 18));
    for (const [dx, dz] of [[-0.95, -0.9], [0.95, -0.9], [-0.95, 0.9], [0.95, 0.9]]) add(box(0.1, 2.5, 0.1, M.woodDark, st[0] + dx, 1.25, st[1] + dz));
    const kr = box(2.5, 0.04, 2.5, M.roof, st[0], 2.55, st[1]); kr.rotation.x = 0.12; add(kr);
    const c = [93.5, -8.2];
    add(box(3.0, 0.5, 0.1, M.woodDark, c[0], 0.27, c[1] - 1.2), box(3.0, 0.5, 0.1, M.woodDark, c[0], 0.27, c[1] + 1.2), box(0.1, 0.5, 2.4, M.woodDark, c[0] - 1.5, 0.27, c[1]), box(0.1, 0.5, 2.4, M.woodDark, c[0] + 1.5, 0.27, c[1]));
    D.heap = add(mesh(new THREE.SphereGeometry(1.25, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), P('#3a281a', { roughness: 1 }), c[0], 0.05, c[1])); D.heap.userData.dyn = true;
    D.steam = spray(70, [[c[0], 0.8, c[1]], [c[0] + 0.4, 0.7, c[1] - 0.3], [st[0] - 0.3, 1.5, st[1]]], { spread: 0.18, up: 0.5, size: 0.3, life: 2.4, grav: -0.25, color: '#ffffff', opacity: 0.12 });
    D.bp = {
      feed: [[h[0] + 0.85, 0.3, h[1]], [84.4, 0.3, h[1]], [d[0] - 2.0, 0.4, d[1] + 0.9]],
      slurry: [[d[0] + 2.2, 0.3, d[1] - 0.5], [91, 0.3, c[1]], [c[0] - 1.5, 0.4, c[1]]],
      stove: [[d[0], 4.4, d[1]], [d[0] + 2.35, 4.4, d[1]], [d[0] + 2.35, 0.14, d[1]], [d[0] + 2.35, 0.14, st[1] - 0.6], [st[0] - 0.3, 0.14, st[1] - 0.6], [st[0] - 0.3, 0.9, st[1] - 0.2]],
      gen: [[d[0], 4.4, d[1]], [d[0] - 2.35, 4.4, d[1]], [d[0] - 2.35, 0.14, d[1]], [d[0] - 2.35, 0.14, g[1]], [g[0] + 0.85, 0.14, g[1]], [g[0] + 0.85, 0.5, g[1]]],
      cable: [[g[0] - 0.8, 0.3, g[1]], [80, 0.1, g[1]], [70, 0.1, -8.6], [68, 0.1, -8.2]],
    };
    add(pipe(D.bp.feed, 0.1, P('#6a4f33', { roughness: 0.7 })), pipe(D.bp.slurry, 0.09, P('#6a4f33', { roughness: 0.7 })), pipe(D.bp.stove.slice(1), 0.03, M.yellow), pipe(D.bp.gen.slice(1), 0.03, M.yellow), pipe(D.bp.cable, 0.02, M.dark, false));
  }

  // --------------------------------- cooling bay, trough and smart monitoring
  {
    const tx = 100.3, tz = pathZ(tx) - 0.95;
    add(box(3.0, 0.5, 0.7, M.galv, tx, 0.3, tz), box(3.2, 0.05, 1.1, M.concrete, tx, 0.025, tz));
    D.troughWater = add(box(2.86, 0.04, 0.58, M.water, tx, 0.5, tz, false)); D.troughWater.userData.dyn = true;
    D.fresh = [[tx + 3.4, 0.1, tz - 2.6], [tx + 1.75, 0.1, tz - 2.6], [tx + 1.75, 0.1, tz], [tx + 1.75, 0.75, tz], [tx + 1.4, 0.75, tz], [tx + 1.4, 0.56, tz]];
    add(pipe(D.fresh, 0.03, P('#4fb0ea', { roughness: 0.5 })), ball(0.06, M.orange, tx + 1.2, 0.58, tz, 10, 8));
    const b = [103.5, -6];
    add(box(5.6, 0.06, 4.6, M.concrete, b[0], 0.03, b[1]));
    for (const [dx, dz] of [[-2.6, -2], [2.6, -2], [-2.6, 2], [2.6, 2]]) add(box(0.14, dz < 0 ? 2.9 : 3.3, 0.14, M.galv, b[0] + dx, dz < 0 ? 1.45 : 1.65, b[1] + dz));
    const rf = box(6.2, 0.05, 5.2, M.roof, b[0], 3.16, b[1]); rf.rotation.x = Math.atan2(0.4, 4); add(rf);
    add(box(5.3, 0.08, 0.08, M.galv, b[0], 2.55, b[1] - 1.9));
    D.fans = [];
    for (const dx of [-1.4, 1.4]) {
      add(mesh(new THREE.TorusGeometry(0.5, 0.035, 8, 28), M.dark, b[0] + dx, 2.0, b[1] - 1.85), cyl(0.09, 0.09, 0.2, M.dark, b[0] + dx, 2.0, b[1] - 1.95, 10)).rotation.x = 0;
      const bl = new THREE.Group(); bl.userData.dyn = true; bl.position.set(b[0] + dx, 2.0, b[1] - 1.82);
      for (let i = 0; i < 3; i++) { const hgl = new THREE.Group(); hgl.rotation.z = (i * Math.PI * 2) / 3; const bd = box(0.42, 0.13, 0.02, M.steel, 0.24, 0, 0); bd.rotation.x = 0.3; hgl.add(bd); bl.add(hgl); }
      add(bl); D.fans.push(bl);
    }
    add(pipe([[b[0] - 2.6, 2.85, b[1] + 1.6], [b[0] + 2.6, 2.85, b[1] + 1.6]], 0.02, M.pvc, false));
    const mistAt = []; for (let x = b[0] - 2.2; x <= b[0] + 2.2; x += 0.9) mistAt.push([x, 2.8, b[1] + 1.6]);
    D.mist = spray(260, mistAt, { spread: 0.9, up: -0.1, size: 0.34, life: 1.6, grav: 0.9, color: '#eaf6ff', opacity: 0.16 });
    add(box(0.16, 0.22, 0.08, M.blue, b[0] - 2.6, 2.3, b[1] + 2.1), box(0.16, 0.04, 0.09, M.dark, b[0] - 2.6, 2.17, b[1] + 2.1));     // DHT11
    const k = new THREE.Group(); k.position.set(97.1, 0, -3.5); k.rotation.y = 0.5;
    k.add(box(0.12, 1.5, 0.12, M.woodDark, -0.55, 0.75, 0), box(0.12, 1.5, 0.12, M.woodDark, 0.55, 0.75, 0), box(1.5, 1.25, 0.06, M.wood, 0, 1.7, 0));
    const kroof = box(1.8, 0.04, 0.6, M.roof, 0, 2.42, 0.12); kroof.rotation.x = 0.2; k.add(kroof);
    D.lcd = screen(512, 176, 1.05, 0.36); D.lcd.m.position.set(0, 2.0, 0.045); k.add(D.lcd.m); k.add(box(1.15, 0.46, 0.04, M.dark, 0, 2.0, 0.02));
    k.add(box(0.42, 0.3, 0.03, P('#167f8a', { roughness: 0.5 }), -0.42, 1.42, 0.04), box(0.34, 0.24, 0.03, P('#f1efe8'), 0.06, 1.42, 0.04), box(0.16, 0.08, 0.04, P('#141416'), 0.06, 1.42, 0.06), box(0.2, 0.34, 0.03, P('#17336e', { roughness: 0.5 }), 0.46, 1.42, 0.04), box(0.14, 0.14, 0.04, M.steel, 0.46, 1.37, 0.06));
    D.espLedM = E('#35c46b', 2); k.add(ball(0.018, D.espLedM, 0.52, 1.55, 0.06, 6, 5, false));
    ['#e04a3a', '#f2b632', '#35c46b', '#3aa0e0'].forEach((cc, i) => k.add(pipe(bezier([-0.24 + i * 0.03, 1.5 - i * 0.05, 0.06], [0.1, 1.75 - i * 0.04, 0.2], [0.4, 1.52 - i * 0.05, 0.06], 8), 0.007, P(cc), false)));
    k.add(cyl(0.012, 0.012, 0.5, M.dark, 0.66, 2.6, 0, 6));
    D.rings = [];
    for (let i = 0; i < 3; i++) { const m = new THREE.MeshBasicMaterial({ color: '#35c46b', transparent: true, opacity: 0, toneMapped: false, depthWrite: false }); const r = mesh(new THREE.TorusGeometry(0.14 + i * 0.12, 0.014, 6, 20, Math.PI / 2), m, 0.66, 2.86, 0, false); r.rotation.z = Math.PI / 4; r.userData.dyn = true; k.add(r); D.rings.push(m); }
    add(k);
    D.dp = { sensor: [[b[0] - 2.6, 2.3, b[1] + 2.15], [99, 2.6, -2.2], [97.3, 2.0, -3.3]], cloud: bezier([97.5, 2.9, -3.2], [101, 9, 2], [110, 9, 12], 16) };
  }

  // ------------------------------------------------------------ fodder plot
  {
    const c = [118, -8.5];
    add(box(13.2, 0.14, 9.2, M.soil, c[0], 0.07, c[1]));
    fence(111.2, -3.7, 124.8, -3.7); fence(124.8, -3.7, 124.8, -13.3); fence(111.2, -13.3, 124.8, -13.3); fence(111.2, -13.3, 111.2, -3.7);
    // one plant: a fan of arching leaves
    const pos = [], idx = [], nrm = [];
    for (let l = 0; l < 6; l++) {
      const a = (l / 6) * Math.PI * 2 + (l % 2) * 0.4, ca = Math.cos(a), sa = Math.sin(a), base = pos.length / 3, lean = 0.28 + (l % 3) * 0.14;
      for (let s = 0; s <= 5; s++) {
        const t = s / 5, out = lean * t * t * 1.5, y = t * (1 - 0.22 * t * t), wd = 0.055 * Math.sin(Math.PI * Math.min(1, t * 1.15 + 0.08));
        pos.push(ca * out - sa * wd, y, sa * out + ca * wd, ca * out + sa * wd, y, sa * out - ca * wd); nrm.push(ca * 0.4, 0.9, sa * 0.4, ca * 0.4, 0.9, sa * 0.4);
        if (s < 5) { const q = base + s * 2; idx.push(q, q + 1, q + 2, q + 1, q + 3, q + 2); }
      }
    }
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); pg.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3)); pg.setIndex(idx);
    D.seeds = []; for (let i = 0; i < 17; i++) for (let j = 0; j < 12; j++) D.seeds.push([112.1 + i * 0.74 + (R() - 0.5) * 0.16, -12.5 + j * 0.74 + (R() - 0.5) * 0.12, 0.8 + R() * 0.45, R() * 6]);
    D.plants = new THREE.InstancedMesh(pg, P('#4c9a33', { roughness: 0.8, side: THREE.DoubleSide }), D.seeds.length);
    D.plants.castShadow = D.plants.receiveShadow = true; D.plants.frustumCulled = false; scene.add(D.plants);
    add(pipe([[111.6, 0.2, -13], [111.6, 0.2, -4]], 0.03, M.dark, false));
    const em = []; for (let x = 113; x < 124.5; x += 2.2) for (const z of [-11.5, -8.5, -5.5]) { add(cyl(0.015, 0.015, 0.7, M.dark, x, 0.45, z, 5)); em.push([x, 0.82, z]); }
    D.irrigate = spray(320, em, { spread: 3.4, up: 2.2, size: 0.07, life: 0.75, grav: 8 });
    D.fp = { irr: [[108.6, 0.16, -9.5], [111.6, 0.2, -9.5], [111.6, 0.2, -4.2]], compost: bezier([94.6, 0.9, -8.2], [104, 6.5, -11], [113.5, 0.6, -8.5], 14), feed: bezier([122, 1.2, -6], [128, 6, -1], [135.5, 0.8, pathZ(135.7) - 0.95], 16) };
  }

  // lamp posts by the home shed
  D.lampM = E('#ffe2a6', 0.05);
  for (const [x, z] of [[120.8, -2.9], [143.6, -2.9], [-6.2, -2.9]]) {
    add(cyl(0.05, 0.07, 3.6, M.dark, x, 1.8, z, 10), box(0.5, 0.05, 0.05, M.dark, x + 0.22, 3.6, z), ball(0.13, D.lampM, x + 0.45, 3.5, z, 12, 8, false));
  }

  for (const o of [D.counter.m]) o.userData.dyn = true;
  mergeStatic(root);

  // -------------------------------------------------------- resource beads
  const flows = createFlows(scene, [
    { type: 'water', pts: D.wp.drain, active: (S) => +S.r.washing, speed: 2 },
    { type: 'water', pts: D.wp.loop, active: (S) => +S.r.pump, speed: 3 },
    { type: 'water', pts: D.wp.shed, active: (S) => +(S.r.washing || S.r.fogging), speed: 3 },
    { type: 'water', pts: D.wp.rain, active: (S) => +S.r.raining, speed: 3 },
    { type: 'water', pts: D.wp.plot, active: (S) => +S.r.irrigating },
    { type: 'water', pts: D.fp.irr, active: (S) => +S.r.irrigating },
    { type: 'water', pts: D.fresh, active: (S) => +(S.cur === 'heat' && S.a > 0.2), speed: 1.6, n: 5 },
    { type: 'energy', pts: D.ep.panel, active: (S) => S.r.solarW / 400, speed: 3 },
    { type: 'energy', pts: D.ep.out, active: (S) => S.r.loadW / 300, speed: 4 },
    { type: 'energy', pts: D.bp.cable, active: (S) => +S.r.gen, speed: 4 },
    { type: 'waste', pts: D.bp.feed, active: (S) => +(S.at('dung') > 0.86 && S.at('biogas') < 0.6), speed: 0.9, size: 1.3 },
    { type: 'waste', pts: D.bp.slurry, active: (S) => (S.r.substrate > 5 ? 0.5 : 0), speed: 0.6, size: 1.2 },
    { type: 'gas', pts: D.bp.stove, active: (S) => +S.r.stove, speed: 2.4, size: 0.8 },
    { type: 'gas', pts: D.bp.gen, active: (S) => +S.r.gen, speed: 2.4, size: 0.8 },
    { type: 'data', pts: D.dp.sensor, active: () => 0.7, speed: 2, size: 0.6 },
    { type: 'data', pts: D.dp.cloud, active: () => 0.7, speed: 4, size: 0.8 },
    { type: 'fodder', pts: D.fp.compost, active: (S) => +(S.cur === 'fodder' && S.a < 0.4), speed: 3, size: 1.2 },
    { type: 'fodder', pts: D.fp.feed, active: (S) => +(S.cur === 'home' && S.a < 0.5), speed: 4, size: 1.3 },
  ]);

  // ----------------------------------------------------------------- update
  const m4 = new THREE.Matrix4(), q0 = new THREE.Quaternion(), e0 = new THREE.Euler(), v3 = new THREE.Vector3(), sc = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  let lampK = 0, spin = 0, fan = 0, gateK = 0, screenT = 0, crossings = -1, lcdThi = 0;
  const level = (m, f, base, full) => { m.scale.y = Math.max(0.02, f * full); m.position.y = base + m.scale.y / 2; };

  function drawScreens(S) {
    const r = S.r, g = D.lcd.g, band = thiBand(r.thi);
    g.fillStyle = '#1c3fd0'; g.fillRect(0, 0, 512, 176); g.fillStyle = '#2a52e6'; g.fillRect(8, 8, 496, 160);
    g.fillStyle = '#eef4ff'; g.font = 'bold 52px Consolas, "Courier New", monospace'; g.textBaseline = 'middle';
    g.fillText(`Temp:${r.shedT.toFixed(1)}°C`, 22, 54); g.fillText(`Hum:${r.shedRH.toFixed(0)}% THI${r.thi.toFixed(0)}`, 22, 122);
    g.font = 'bold 30px Consolas, monospace'; g.fillStyle = band.key === 'good' ? '#9dffb0' : '#ffd36b'; g.fillText(r.cooling ? 'COOL' : r.pump ? 'PUMP' : '', 410, 54);
    D.lcd.t.needsUpdate = true;
    const c = D.counter.g, inS = Math.round(r.inShed);
    c.fillStyle = '#0c1410'; c.fillRect(0, 0, 384, 160); c.fillStyle = gateK > 0.3 ? '#ff5a4a' : '#57e389'; c.font = 'bold 34px Consolas, monospace'; c.textBaseline = 'middle';
    c.fillText(`IN SHED   ${inS}`, 22, 44); c.fillText(`PADDOCK   ${5 - inS}`, 22, 86); c.fillStyle = '#c9d6cc'; c.font = '24px Consolas, monospace'; c.fillText(`crossings today ${Math.round(r.crossings)}`, 22, 130);
    D.counter.t.needsUpdate = true;
  }

  function update(S) {
    const { r, dt, time } = S, night = env.state.night;
    lampK = lerp(lampK, r.lights ? 1 : 0, damp(2.5, dt));
    bulbM.emissiveIntensity = 0.05 + 9 * lampK; D.lampM.emissiveIntensity = 0.05 + 9 * lampK;
    const sx = S.cowX < 64 ? 0 : 127;
    lampLights[0].position.set(sx + 1, 2.8, -0.8); lampLights[1].position.set(sx + 10.5, 2.8, -0.8);
    lampLights.forEach((l) => { l.intensity = 30 * lampK; });

    // shed, milking, feed
    for (const s of [D.shed1, D.shed2]) level(s.fodder, 0.2 + 0.8 * (r.feedTrough / 50), 0.48, 0.22);
    const mk = S.at('milk');
    level(D.shed1.jar, smooth(mk), 1.12, 0.5); D.shed1.jar.visible = mk > 0.01;
    D.shed1.cluster.visible = S.cur === 'milk' && S.a > 0.03 && S.a < 0.985 && S.settled;
    D.shed1.cluster.position.y = 0.4 + Math.sin(time * 9) * 0.004;
    D.shed1.chill.material.emissiveIntensity = mk > 0.5 ? 2.5 : 0.2;
    D.washSpray(dt, r.washing && (S.cur === 'wash' || S.cur === 'milk' || S.cur === 'gate'));

    // water
    level(D.sump, r.collection / 800, 0.1, 0.95); level(D.tank, r.storage / 1000, 3.14, 2.3);
    spin = lerp(spin, r.pump ? 1 : 0, damp(3, dt)); D.pumpFan.rotation.x += dt * 34 * spin; D.pump.position.y = 0.06 + (r.pump ? Math.sin(time * 70) * 0.004 : 0);
    D.tankSpray(dt, r.pump);

    // gate: her body breaks the beam
    const broken = Math.abs(S.cowX - 34) < 1.25;
    gateK = lerp(gateK, broken ? 1 : 0, damp(broken ? 30 : 4, dt));
    D.gateLedM.emissiveIntensity = 0.1 + 10 * gateK * (0.6 + 0.4 * Math.sin(time * 20)); D.beamM.opacity = 0.55 * (1 - gateK);

    // solar
    D.cellM.emissiveIntensity = 0.12 * clamp(r.solarW / 800);
    D.bars.forEach((m, i) => { const on = r.bat > i / 5 + 0.02; m.emissive.set(r.bat < 0.25 ? '#ff5a3c' : '#46e06b'); m.emissiveIntensity = on ? 2.4 : 0.03; });

    // herd mates graze and loaf in the paddock
    for (const m of D.mates) {
      const t = (time * 0.05 + m.t * 0.21) % 1, grazing = t < 0.62, rest = night > 0.6;
      m.c.update(dt, time, { phase: 0, walk: 0, reach: grazing && !rest ? 1 : 0, reachY: 0.14, chew: 1, lie: rest ? 1 : 0, yaw: grazing ? 0 : 0.5 * Math.sin(time * 0.3 + m.t), key: 'healthy', ledPower: 2.5 });
    }

    // dung pat, rover, digester
    const dg = S.at('dung');
    const rp = dg <= 0.3 ? 0 : dg >= 1 ? 1 : smooth((dg - 0.3) / 0.66);
    D.pat.visible = dg > 0.24 && rp < 0.37; D.pat.scale.setScalar(1).multiply(v3.set(1, 0.3, 1)).multiplyScalar(smooth((dg - 0.24) / 0.05));
    D.roverPath.at(rp, v3); const ax = v3.x, az = v3.z; D.roverPath.at(Math.min(1, rp + 0.01), v3);
    D.rover.position.set(ax, 0, az);
    if (rp > 0.001 && rp < 0.985 && Math.hypot(v3.x - ax, v3.z - az) > 1e-4) D.rover.rotation.y = -Math.atan2(v3.z - az, v3.x - ax); else if (rp < 0.001 || rp > 0.985) D.rover.rotation.y = Math.PI;
    D.roverLoad.visible = rp > 0.37 && rp < 0.845;
    D.roverLampM.emissive.set(rp > 0.001 && rp < 0.999 ? (Math.sin(time * 12) > 0 ? '#ffb020' : '#5a3c00') : '#39d353');
    level(D.inlet, clamp(r.inlet / 30 + (rp > 0.845 ? 0.25 : 0.1)), 0.1, 0.8);
    const lift = 0.3 + 1.15 * clamp(r.gas / 3);
    D.drum.position.y = lerp(D.drum.position.y, lift, damp(2, dt));
    const topY = D.drum.position.y + 2.7, gap = Math.max(0.05, 4.34 - topY); D.hose.scale.y = gap; D.hose.position.y = topY + gap / 2;
    D.flame.visible = r.stove; D.flame.scale.set(1 + Math.sin(time * 23) * 0.12, 1 + Math.sin(time * 31) * 0.22, 1 + Math.cos(time * 19) * 0.12);
    D.gen.position.y = 0.05 + (r.gen ? Math.abs(Math.sin(time * 55)) * 0.008 : 0); D.genLedM.emissiveIntensity = r.gen ? 3 : 0.05;
    const heap = 0.2 + clamp(r.compost / 30); D.heap.scale.set(0.6 + heap * 0.5, heap * 0.75, 0.55 + heap * 0.4);
    D.steam(dt, env.state.rain < 0.5);

    // cooling bay, trough, kiosk
    D.troughWater.position.y = 0.3 + 0.24 * clamp(r.trough / 120);
    fan = lerp(fan, r.cooling ? 1 : 0, damp(1.5, dt)); for (const f of D.fans) f.rotation.z -= dt * 26 * fan;
    D.mist(dt, r.fogging);
    D.rings.forEach((m, i) => { m.opacity = clamp(Math.sin(time * 4 - i * 0.9)) * 0.9; });
    D.espLedM.emissiveIntensity = Math.sin(time * 8) > 0 ? 3 : 0.2;

    // fodder
    D.seeds.forEach(([x, z, v, a], i) => {
      const h = Math.max(0.1, r.biomass * v * 1.7), sway = Math.sin(time * 1.4 + x * 0.6 + z * 0.4) * 0.04;
      m4.compose(v3.set(x, 0.14, z), q0.setFromEuler(e0.set(sway, a, sway * 0.6)), sc.set(0.5 + h * 0.75, h, 0.5 + h * 0.75));
      D.plants.setMatrixAt(i, m4);
    });
    D.plants.instanceMatrix.needsUpdate = true;
    D.irrigate(dt, r.irrigating);

    screenT -= dt;
    if (screenT <= 0 || Math.round(r.crossings) !== crossings || Math.abs(r.thi - lcdThi) > 0.6) { screenT = 0.4; crossings = Math.round(r.crossings); lcdThi = r.thi; drawScreens(S); }
    flows.update(dt, S, false, S.flow || null, 0.42);
  }
  return { update, D };
}
