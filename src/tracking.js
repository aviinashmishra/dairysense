// GPS layer of the 3D model: the geofence, the virtual grazing fence, each
// belt's breadcrumb trail and locator beam, grass cover per cell, the side gate.
import * as THREE from 'three';
import { glow, mesh, box, pipe, canvasTex, lerp, damp, mergeStatic } from './kit.js';
import { SHED, PADDOCK, GATE, SPLIT_X, LANE_Z, SIDE_GATE } from './layout.js';

// One fixed identity colour per animal, shared with the phone map. Colour is
// never the only cue: every dot and trail is also labelled with her name.
export const TRACK_COLORS = ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4'];
const TRAIL_MAX = 60;

export function createTracking(scene, sim, state) {
  const g = new THREE.Group();
  scene.add(g);
  state.gpsView = false;
  state.ring = null;          // { id, t }: "ring her belt" locator

  // ---- grass cover: each grazing cell is tinted by how much pasture is left
  const cells = {};
  const cw = SPLIT_X - PADDOCK.x0, cd = PADDOCK.z1 - LANE_Z;
  for (const [name, cx] of [['west', (PADDOCK.x0 + SPLIT_X) / 2], ['east', (SPLIT_X + PADDOCK.x1) / 2]]) {
    const m = new THREE.MeshLambertMaterial({ color: '#7dbb57' });
    const plane = mesh(new THREE.PlaneGeometry(cw - 0.3, cd - 0.3), m, cx, 0.085, LANE_Z + cd / 2, false);
    plane.rotation.x = -Math.PI / 2; plane.receiveShadow = true;
    g.add(plane);
    cells[name] = m;
  }
  const lush = new THREE.Color('#6fc04a'), worn = new THREE.Color('#c9b673'), tmp = new THREE.Color();

  // ---- virtual fence: a curtain of light where the belts turn the herd back
  const veilTex = canvasTex(64, 64, (c) => {
    const gr = c.createLinearGradient(0, 0, 0, 64);
    gr.addColorStop(0, 'rgba(120,235,255,0)'); gr.addColorStop(1, 'rgba(120,235,255,0.9)');
    c.fillStyle = gr; c.fillRect(0, 0, 64, 64);
    c.clearRect(26, 0, 12, 64);
  });
  veilTex.wrapS = THREE.RepeatWrapping;
  const veilMat = new THREE.MeshBasicMaterial({ map: veilTex, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, toneMapped: false });
  const veil = (len) => { const m = mesh(new THREE.PlaneGeometry(len, 1.5), veilMat, 0, 0.85, 0, false); g.add(m); return m; };
  const veilSplit = veil(cd); veilSplit.rotation.y = Math.PI / 2; veilSplit.position.set(SPLIT_X, 0.85, LANE_Z + cd / 2);
  const veilLane = veil(cw);
  const closedMat = glow('#1d4f6e', { transparent: true, opacity: 0, depthWrite: false });
  const closed = mesh(new THREE.PlaneGeometry(cw - 0.3, cd - 0.3), closedMat, 0, 0.1, LANE_Z + cd / 2, false);
  closed.rotation.x = -Math.PI / 2; g.add(closed);

  // ---- geofence: outline of the safe zone (shed + paddock)
  const m = 0.35, y = 0.34;
  const fenceMat = glow('#35c46b', { transparent: true, opacity: 0, depthWrite: false });
  const outline = pipe([
    [PADDOCK.x0 - m, y, PADDOCK.z1 + m], [PADDOCK.x1 + m, y, PADDOCK.z1 + m], [PADDOCK.x1 + m, y, GATE.z], [SHED.x1 + m, y, GATE.z],
    [SHED.x1 + m, y, SHED.z0 - m], [PADDOCK.x0 - m, y, SHED.z0 - m], [PADDOCK.x0 - m, y, PADDOCK.z1 + m],
  ], 0.06, fenceMat, false);
  mergeStatic(outline, { transparent: true });
  g.add(outline);

  // ---- side gate in the right-hand fence (left open in the "stray" scenario)
  const gate = new THREE.Group();
  const stick = new THREE.MeshLambertMaterial({ color: '#e6c58f', flatShading: true });
  const gl = SIDE_GATE.z1 - SIDE_GATE.z0;
  for (let i = 0; i <= 3; i++) gate.add(box(0.07, 1.35, 0.22, stick, 0, 0.72, (i / 3) * gl));
  gate.add(box(0.06, 0.13, gl + 0.1, stick, 0, 0.5, gl / 2), box(0.06, 0.13, gl + 0.1, stick, 0, 1.05, gl / 2));
  const brace = box(0.05, 0.11, gl * 1.15, stick, 0, 0.78, gl / 2); brace.rotation.x = 0.32; gate.add(brace);
  mergeStatic(gate);
  gate.position.set(SIDE_GATE.x, 0, SIDE_GATE.z0);
  g.add(gate);

  // ---- breadcrumb trails: one instanced dot per GPS crumb
  const n = sim.animals.length;
  const crumbs = new THREE.InstancedMesh(new THREE.CircleGeometry(0.16, 10), glow('#ffffff', { transparent: true, opacity: 0.85, depthWrite: false }), n * TRAIL_MAX);
  crumbs.frustumCulled = false; crumbs.rotation.x = 0;
  g.add(crumbs);
  const col = new THREE.Color();
  sim.animals.forEach((a, i) => { col.set(TRACK_COLORS[i]); for (let k = 0; k < TRAIL_MAX; k++) crumbs.setColorAt(i * TRAIL_MAX + k, col); });
  crumbs.instanceColor.needsUpdate = true;
  const flat = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
  const m4 = new THREE.Matrix4(), p3 = new THREE.Vector3(), s3 = new THREE.Vector3();

  // ---- locator beams: a column of light over every belt
  const beams = sim.animals.map((a, i) => {
    const mat = glow(TRACK_COLORS[i], { transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
    const beam = mesh(new THREE.CylinderGeometry(0.03, 0.2, 9, 8, 1, true), mat, a.x, 6.6, a.z, false);
    const ringM = glow(TRACK_COLORS[i], { transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
    const ring = mesh(new THREE.RingGeometry(0.85, 1, 36), ringM, a.x, 0.18, a.z, false);
    ring.rotation.x = -Math.PI / 2;
    g.add(beam, ring);
    return { beam, mat, ring, ringM, x: a.x, z: a.z };
  });

  let veilOp = 0, fenceOp = 0, gateA = 0, crumbT = 0, show = 0;

  function update(dt, time) {
    const pa = sim.pasture, k = damp(4, dt);
    // pasture tint
    for (const name of ['west', 'east']) cells[name].color.lerp(tmp.copy(worn).lerp(lush, Math.min(1, pa.cover[name] / 0.85)), damp(2, dt));
    // virtual fence
    const on = pa.mode !== 'whole';
    veilOp = lerp(veilOp, on ? (state.gpsView ? 0.75 : 0.34) : 0, k);
    veilMat.opacity = veilOp * (0.8 + 0.2 * Math.sin(time * 3));
    veilTex.offset.x = (time * 0.15) % 1;
    veilSplit.visible = veilLane.visible = veilOp > 0.01;
    const closedX = pa.mode === 'west' ? (SPLIT_X + PADDOCK.x1) / 2 : (PADDOCK.x0 + SPLIT_X) / 2;
    veilLane.position.set(closedX, 0.85, LANE_Z);
    closed.position.x = closedX;
    closedMat.opacity = lerp(closedMat.opacity, on ? (state.gpsView ? 0.2 : 0.09) : 0, k);
    closed.visible = closedMat.opacity > 0.01;
    // geofence: quiet green in GPS view, pulsing red while anyone is outside
    const breach = sim.geo.outside > 0;
    fenceOp = lerp(fenceOp, breach ? 0.95 : state.gpsView ? 0.6 : 0, k);
    fenceMat.opacity = fenceOp * (breach ? 0.55 + 0.45 * Math.sin(time * 9) : 1);
    fenceMat.color.set(breach ? '#ff3b30' : '#35c46b');
    outline.visible = fenceOp > 0.01;
    gateA = lerp(gateA, sim.geo.sideGate ? 1.35 : 0, damp(3, dt));
    gate.rotation.y = gateA;

    // trails: every animal in GPS view, otherwise only the selected one
    show = lerp(show, state.gpsView ? 1 : 0, k);
    crumbT -= dt;
    if (crumbT <= 0) {
      crumbT = 0.15;
      sim.animals.forEach((a, i) => {
        const vis = state.gpsView || state.selected === a.id || a.outside;
        const len = a.trail.length;
        for (let c = 0; c < TRAIL_MAX; c++) {
          const pt = vis ? a.trail[len - 1 - c] : null;
          if (pt) m4.compose(p3.set(pt.x, 0.24, pt.z), flat, s3.setScalar(1 - 0.75 * (c / TRAIL_MAX)));
          else m4.compose(p3.set(0, -9, 0), flat, s3.setScalar(0.001));
          crumbs.setMatrixAt(i * TRAIL_MAX + c, m4);
        }
      });
      crumbs.instanceMatrix.needsUpdate = true;
    }

    // locator beams follow each belt
    if (state.ring) { state.ring.t -= dt; if (state.ring.t <= 0) state.ring = null; }
    sim.animals.forEach((a, i) => {
      const b = beams[i], ringing = state.ring && state.ring.id === a.id;
      b.x = lerp(b.x, a.x, damp(12, dt)); b.z = lerp(b.z, a.z, damp(12, dt));
      const want = ringing ? 0.95 : a.outside ? 0.8 : state.gpsView ? 0.34 : 0;
      b.mat.opacity = lerp(b.mat.opacity, want * (ringing || a.outside ? 0.65 + 0.35 * Math.sin(time * 12) : 1), damp(6, dt));
      b.mat.color.set(a.outside ? '#ff3b30' : TRACK_COLORS[i]);
      b.beam.visible = b.mat.opacity > 0.01;
      b.beam.position.set(b.x, 6.6, b.z);
      const pulse = ringing || a.outside ? (time * 1.3) % 1 : 0;
      b.ringM.opacity = ringing || a.outside ? (1 - pulse) * 0.9 : 0;
      b.ringM.color.copy(b.mat.color);
      b.ring.visible = b.ringM.opacity > 0.01;
      b.ring.position.set(b.x, 0.18, b.z);
      b.ring.scale.setScalar(1 + pulse * 4);
    });
  }
  return { update, group: g };
}
