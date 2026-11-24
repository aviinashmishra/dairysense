// Cows, buffaloes (each wearing the AI health belt) and the dung-collector rover.
import * as THREE from 'three';
import { mat, glow, mesh, box, cyl, ball, canvasTex, lerp, lerpAngle, damp, mergeStatic } from './kit.js';

const blobs = (base, spot, n, size) => canvasTex(256, 128, (g, w, h) => {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  g.fillStyle = spot;
  let seed = n * 97 + size;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < n; i++) {
    g.beginPath();
    g.ellipse(r() * w, r() * h, size * (0.5 + r()), size * (0.4 + r() * 0.7), r() * 3, 0, 7);
    g.fill();
  }
});

const COATS = {
  holstein: () => ({ body: mat('#ffffff', { map: blobs('#f7f5ef', '#1d1d1f', 9, 26) }), head: mat('#1f1f22'), leg: mat('#f1eee6'), muzzle: '#e9b3a6' }),
  sahiwal: () => ({ body: mat('#a6562f'), head: mat('#9a4d29'), leg: mat('#8f4826'), muzzle: '#5a3a30' }),
  gir: () => ({ body: mat('#ffffff', { map: blobs('#efe6d8', '#a8552f', 26, 9) }), head: mat('#b96a3f'), leg: mat('#e7dccb'), muzzle: '#4a332c' }),
  murrah: () => ({ body: mat('#2c2c31'), head: mat('#242428'), leg: mat('#222226'), muzzle: '#151517' }),
  murrah2: () => ({ body: mat('#3b3431'), head: mat('#2f2a28'), leg: mat('#2a2523'), muzzle: '#171514' }),
};

const BELT_COLOR = { healthy: '#3fa9ff', fever: '#ff3b30', heat: '#ffb020', estrus: '#ff5fd2' };
export const STATUS_COLOR = { healthy: '#2e7d3c', fever: '#c0392b', heat: '#d9652b', estrus: '#b0389a' };

export function buildAnimal(def) {
  const buffalo = def.kind === 'buffalo';
  const coat = COATS[def.coat]();
  const dark = mat('#2a2622'), hornMat = mat(buffalo ? '#3a3a3d' : '#e8dfc8'), pink = mat(coat.muzzle);
  const g = new THREE.Group();
  const rig = new THREE.Group();
  g.add(rig);
  rig.scale.setScalar(buffalo ? 1.08 : 1);

  const torso = mesh(new THREE.CapsuleGeometry(0.52, 1.15, 4, 10), coat.body, 0, 1.3, 0);
  torso.rotation.z = Math.PI / 2;
  torso.scale.set(1, 1, 0.92);
  rig.add(torso);
  if (def.coat === 'sahiwal' || def.coat === 'gir') { // the zebu hump
    const hump = ball(0.3, coat.head, 0.55, 1.82, 0); hump.scale.set(1.2, 0.8, 0.9); rig.add(hump);
  }
  if (!buffalo) rig.add(ball(0.22, pink, -0.55, 0.8, 0));

  const head = new THREE.Group();
  head.position.set(0.95, 1.5, 0);
  rig.add(head);
  head.add(box(0.6, 0.5, 0.45, coat.head, 0.2, 0.05, 0));
  head.add(box(0.6, 0.46, 0.5, coat.head, 0.68, 0.16, 0));
  if (def.coat === 'holstein') head.add(box(0.5, 0.06, 0.16, mat('#f7f5ef'), 0.72, 0.4, 0));
  const muzzle = box(0.22, 0.3, 0.4, pink, 1.05, 0.08, 0);
  head.add(muzzle);
  const eyeM = mat('#0c0c0c');
  for (const s of [-1, 1]) {
    head.add(ball(0.05, eyeM, 0.86, 0.26, 0.26 * s, 6, 5));
    const ear = box(0.09, 0.16, 0.3, coat.head, 0.5, 0.32, 0.38 * s);
    ear.rotation.x = -0.35 * s; head.add(ear);
    if (buffalo) {
      const horn = mesh(new THREE.TorusGeometry(0.3, 0.06, 6, 10, Math.PI * 0.85), hornMat, 0.42, 0.5, 0.3 * s);
      horn.rotation.set(Math.PI / 2, 0, s > 0 ? -0.5 : Math.PI + 0.5);
      head.add(horn);
    } else {
      const horn = mesh(new THREE.ConeGeometry(0.06, 0.26, 6), hornMat, 0.5, 0.52, 0.2 * s);
      horn.rotation.x = 0.5 * s; head.add(horn);
    }
  }
  // The AI health belt: collar, sensor pod and status LED.
  const collar = mesh(new THREE.TorusGeometry(0.37, 0.075, 6, 16), mat('#1c2530', { roughness: 0.5 }), 0.18, 0.04, 0);
  collar.rotation.y = Math.PI / 2;
  head.add(collar);
  head.add(box(0.24, 0.26, 0.34, mat('#111820', { roughness: 0.4 }), 0.18, -0.36, 0));
  const ledMat = glow(BELT_COLOR.healthy);
  head.add(ball(0.075, ledMat, 0.31, -0.36, 0, 8, 6, false));

  const legs = [];
  for (const [x, z] of [[0.68, 0.27], [0.68, -0.27], [-0.68, 0.27], [-0.68, -0.27]]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.95, z);
    leg.add(box(0.2, 0.82, 0.2, coat.leg, 0, -0.41, 0));
    leg.add(box(0.22, 0.14, 0.22, dark, 0, -0.88, 0));
    rig.add(leg); legs.push(leg);
  }
  const tail = new THREE.Group();
  tail.position.set(-1.08, 1.6, 0);
  tail.add(box(0.07, 0.8, 0.07, coat.leg, 0, -0.4, 0));
  tail.add(box(0.13, 0.22, 0.13, dark, 0, -0.86, 0));
  rig.add(tail);

  const ringMat = glow('#ffffff', { transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
  const ring = mesh(new THREE.RingGeometry(1.55, 1.8, 40), ringMat, 0, 0.06, 0, false);
  ring.rotation.x = -Math.PI / 2;
  g.add(ring);
  const pingMat = glow('#3fa9ff', { transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
  const ping = mesh(new THREE.RingGeometry(0.42, 0.5, 28), pingMat, 0.95, 2.3, 0, false);
  ping.rotation.x = -Math.PI / 2;
  g.add(ping);

  const hit = mesh(new THREE.BoxGeometry(2.9, 2.3, 1.5), new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }), 0.1, 1.15, 0, false);
  hit.userData.animalId = def.id;
  hit.visible = false;                 // still raycast for clicks, never drawn
  g.add(hit);
  // one mesh per moving part instead of one per box
  torso.userData.dyn = head.userData.dyn = tail.userData.dyn = true;
  for (const leg of legs) { leg.userData.dyn = true; mergeStatic(leg); }
  mergeStatic(head); mergeStatic(tail); mergeStatic(rig);

  let phase = Math.random() * 6, lie = 0, down = 0, first = true;
  const tmp = new THREE.Color();

  function update(a, dt, time, selected) {
    // ease toward the simulated position so avoidance nudges never show as jitter
    const far = Math.abs(a.x - g.position.x) + Math.abs(a.z - g.position.z) > 4;
    if (first || far) g.position.set(a.x, 0.1, a.z);
    else { const p = damp(14, dt); g.position.x = lerp(g.position.x, a.x, p); g.position.z = lerp(g.position.z, a.z, p); }
    g.rotation.y = first ? -a.heading : lerpAngle(g.rotation.y, -a.heading, damp(7, dt));
    first = false;
    const walking = a.state === 'walk';
    if (walking) phase += dt * 7 * (1 - 0.4 * a.sick);
    const k = damp(4, dt), kl = damp(20, dt);
    lie = lerp(lie, a.state === 'rest' ? 1 : 0, k);
    const wantDown = a.state === 'graze' || a.state === 'eat' || a.state === 'drink' ? 1 : a.state === 'rest' ? 0.2 : 0.05 + 0.5 * a.sick;
    down = lerp(down, wantDown, k);
    rig.position.y = -0.62 * lie;
    const sw = walking ? Math.sin(phase) * 0.5 : 0;
    legs.forEach((leg, i) => {
      leg.rotation.z = lerp(leg.rotation.z, (i === 0 || i === 3 ? sw : -sw) + lie * (i < 2 ? 1.25 : -1.25), kl);
      leg.scale.y = 1 - 0.5 * lie;
    });
    const chew = a.state === 'rest' || a.state === 'eat' || a.state === 'graze' ? Math.sin(time * 9 + a.idx) * 0.03 : 0;
    head.rotation.z = -0.95 * down + (walking ? Math.sin(phase * 2) * 0.04 : 0) + chew;
    tail.rotation.x = Math.sin(time * 2.6 + a.idx * 1.7) * 0.45;
    tail.rotation.z = -0.15 - lie * 0.4;
    torso.scale.y = 1 + Math.sin(time * 1.8 + a.idx) * 0.012 * (1 + a.stress * 3);

    const key = a.ai.flagged ? a.ai.key : 'healthy';
    const blink = key === 'healthy' ? 0.65 + 0.35 * Math.sin(time * 2 + a.idx) : Math.sin(time * 10) > 0 ? 1 : 0.15;
    ledMat.color.set(BELT_COLOR[key]).multiplyScalar(blink);
    // Belt radio ping: a ring that leaves the collar every few seconds.
    const t = (time * 0.45 + a.idx * 0.2) % 1;
    ping.scale.setScalar(1 + t * 2.1);
    pingMat.opacity = (1 - t) * 0.42;
    pingMat.color.set(BELT_COLOR[key]);
    ping.position.y = 2.25 - 0.62 * lie + t * 0.5;
    const want = a.ai.flagged ? 0.55 + 0.35 * Math.sin(time * 6) : selected ? 0.85 : 0;
    ringMat.opacity = lerp(ringMat.opacity, want, damp(12, dt || 0.016));
    ring.visible = ringMat.opacity > 0.01;
    ringMat.color.copy(tmp.set(a.ai.flagged ? BELT_COLOR[key] : '#ffffff'));
  }
  return { group: g, hit, update, id: def.id };
}

export function buildRover() {
  const g = new THREE.Group();
  const bodyM = mat('#f2b632', { roughness: 0.6 }), darkM = mat('#2b2f33');
  g.add(box(1.15, 0.34, 0.8, bodyM, 0, 0.42, 0));
  const tile = box(0.75, 0.05, 0.6, mat('#1e3f8f', { roughness: 0.3, metalness: 0.3 }), -0.1, 0.62, 0);
  g.add(tile);
  const scoop = box(0.14, 0.3, 0.95, darkM, 0.68, 0.3, 0);
  scoop.rotation.z = -0.35; g.add(scoop);
  for (const [x, z] of [[0.38, 0.45], [0.38, -0.45], [-0.38, 0.45], [-0.38, -0.45]]) {
    const w = cyl(0.2, 0.2, 0.14, darkM, x, 0.22, z, 10);
    w.rotation.x = Math.PI / 2; g.add(w);
  }
  const load = box(0.5, 0.2, 0.5, mat('#5b3d22'), -0.15, 0.7, 0);
  g.add(load);
  const lamp = ball(0.07, glow('#39d353'), 0.5, 0.64, 0.3, 6, 5, false);
  g.add(lamp);
  load.userData.dyn = lamp.userData.dyn = true;
  mergeStatic(g);
  let first = true;
  function update(r, dt, time) {
    const far = Math.abs(r.x - g.position.x) + Math.abs(r.z - g.position.z) > 5;
    if (first || far) g.position.set(r.x, 0.08, r.z);
    else { const p = damp(14, dt); g.position.x = lerp(g.position.x, r.x, p); g.position.z = lerp(g.position.z, r.z, p); }
    g.rotation.y = first ? -r.heading : lerpAngle(g.rotation.y, -r.heading, damp(9, dt));
    first = false;
    load.visible = r.load > 0.1;
    load.scale.y = 0.4 + Math.min(1.6, r.load / 6);
    load.position.y = 0.66 + load.scale.y * 0.1;
    lamp.material.color.set(r.state === 'dock' ? '#39d353' : Math.sin(time * 12) > 0 ? '#ffb020' : '#5a3c00');
  }
  return { group: g, update };
}
