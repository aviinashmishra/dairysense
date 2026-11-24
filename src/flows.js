// Animated resource flows: beads that travel along the model's pipes, wires
// and radio links whenever that resource is really moving in the simulation.
import * as THREE from 'three';
import { Polyline, pipe, glow, lerp, damp, mergeStatic } from './kit.js';

export const FLOW_COLORS = {
  energy: '#f2b632', water: '#3aa0e0', data: '#35c46b', waste: '#8b5a2b', gas: '#ff7a3d', fodder: '#8fd14f',
};

export function createFlows(scene, defs) {
  const flows = defs.map((d) => {
    const line = new Polyline(d.pts);
    return { ...d, line, n: d.n || Math.max(2, Math.round(line.total / 1.25)), level: 0, phase: Math.random() };
  });
  const total = flows.reduce((t, f) => t + f.n, 0);
  const beads = new THREE.InstancedMesh(new THREE.SphereGeometry(0.13, 8, 6), glow('#ffffff'), total);
  beads.frustumCulled = false;
  scene.add(beads);
  const guides = new THREE.Group();
  guides.visible = false;
  scene.add(guides);
  const color = new THREE.Color();
  let idx = 0;
  for (const f of flows) {
    f.start = idx;
    color.set(FLOW_COLORS[f.type]);
    for (let i = 0; i < f.n; i++) beads.setColorAt(idx++, color);
    const guide = pipe(f.pts, 0.045, glow(FLOW_COLORS[f.type], { transparent: true, opacity: 0.4, depthWrite: false }), false);
    mergeStatic(guide, { transparent: true });
    guides.add(guide);
  }
  beads.instanceColor.needsUpdate = true;
  const m = new THREE.Matrix4(), v = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();

  // showAll lights every loop (the "how it connects" view); highlight lights one type.
  function update(dt, sim, showAll, highlight, zoom = 1) {
    guides.visible = showAll || !!highlight;
    flows.forEach((f, fi) => {
      const lit = showAll || highlight === f.type;
      guides.children[fi].visible = lit;
      let a = Math.min(1, Math.max(0, f.active(sim)));
      if (lit) a = Math.max(a, 0.55);
      f.level = lerp(f.level, a, damp(5, dt));
      f.phase = (f.phase + (dt * (f.speed || 2.6) * (0.5 + 0.5 * f.level)) / f.line.total) % 1;
      const size = f.level < 0.03 ? 0 : (f.size || 1) * (0.55 + 0.55 * f.level) * zoom;
      for (let i = 0; i < f.n; i++) {
        f.line.at((f.phase + i / f.n) % 1, v);
        m.compose(v, q, s.setScalar(size));
        beads.setMatrixAt(f.start + i, m);
      }
    });
    beads.instanceMatrix.needsUpdate = true;
  }
  return { update, guides };
}
