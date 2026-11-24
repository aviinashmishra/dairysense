// Builds the Dairy Sense tabletop model and keeps it in step with the simulation.
import * as THREE from 'three';
import { mat, glow, mesh, box, cyl, ball, pipe, canvasTex, bezier, lerp, clamp01, damp, mergeStatic } from './kit.js';
import { BOARD, SHED, PADDOCK, GATE, FEED, TROUGH, PT, PLOT, SIDE_GATE } from './layout.js';
import { buildRover } from './animals.js';
import { buildAnimal3D } from './herd3d.js';   // the herd in full 3D (the picture standees live on in the phone portraits)
import { createFlows } from './flows.js';
import { createTracking } from './tracking.js';
import { thiBand } from './sim.js';

const C = {
  wood: '#c9a36b', woodDark: '#9c7646', stick: '#e6c58f', grass: '#6fae4a', concrete: '#c9c2b4',
  steel: '#b9c2c9', pvc: '#d7dbde', dark: '#2b2f33', roof: '#d6453d', water: '#3aa0e0', grey: '#8f989e',
};

export function createWorld(scene, sim, look) {
  const M = {
    wood: mat(C.wood), woodDark: mat(C.woodDark), stick: mat(C.stick), concrete: mat(C.concrete),
    steel: mat(C.steel, { roughness: 0.35, metalness: 0.6 }), pvc: mat(C.pvc, { roughness: 0.6 }),
    dark: mat(C.dark), water: mat(C.water, { roughness: 0.15, transparent: true, opacity: 0.85 }),
    glass: mat('#cfe9f7', { transparent: true, opacity: 0.28, roughness: 0.1, depthWrite: false }),
    leaf: mat('#3f8f3a'), leaf2: mat('#5fae45'), soil: mat('#6b4a2e'), dung: mat('#5b3d22'),
  };
  const root = new THREE.Group();
  scene.add(root);
  const add = (...o) => { root.add(...o); return o[0]; };
  const pickables = [];

  // ------------------------------------------------------------------ base
  const table = box(140, 1, 110, mat('#b88a5c'), 0, -1.1, 0);
  table.castShadow = false; add(table);
  add(box(BOARD.w + 0.8, 0.6, BOARD.d + 0.8, mat('#dcb97f'), 0, -0.3, 0));
  const grassTex = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = C.grass; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 5000; i++) {
      g.fillStyle = ['#69a646', '#76b651', '#65a143', '#7cbb56'][i % 4];
      g.beginPath(); g.arc(Math.random() * w, Math.random() * h, 1 + Math.random() * 2.2, 0, 7); g.fill();
    }
  });
  grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping; grassTex.repeat.set(3, 2);
  add(box(BOARD.w, 0.12, BOARD.d, mat('#ffffff', { map: grassTex }), 0, 0, 0));
  const flat = (w, d, color, x, z, y = 0.07) => add(box(w, 0.02, d, mat(color), x, y, z, false)).receiveShadow = true;
  flat(PADDOCK.x1 - PADDOCK.x0, PADDOCK.z1 - PADDOCK.z0, '#7dbb57', (PADDOCK.x0 + PADDOCK.x1) / 2, (PADDOCK.z0 + PADDOCK.z1) / 2);
  flat(3.4, 2.6, '#bfa272', GATE.x, GATE.z + 0.6, 0.075);
  flat(13.6, 1.1, '#d9c59a', 9.2, -0.3);    // sandy service paths
  flat(1.1, 9.5, '#d9c59a', 6.9, -5.4);
  flat(1.1, 11, '#d9c59a', 11.4, 5.4);
  flat(18.6, 6.4, '#b9d58a', 8.2, -8.3, 0.068);

  // grass tufts for a model-making feel
  {
    const tuft = new THREE.InstancedMesh(new THREE.ConeGeometry(0.06, 0.24, 4), mat('#9fd670'), 260);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p = new THREE.Vector3();
    let n = 0;
    while (n < 260) {
      const x = (Math.random() - 0.5) * 35, z = (Math.random() - 0.5) * 23;
      if (x > SHED.x0 - 0.5 && x < SHED.x1 + 0.5 && z < SHED.z1 + 0.6) continue;
      if (x > PLOT.x0 - 0.4 && z > PLOT.z0 - 0.4) continue;
      sc.setScalar(0.6 + Math.random() * 0.9);
      m4.compose(p.set(x, 0.2, z), q, sc); tuft.setMatrixAt(n++, m4);
    }
    tuft.receiveShadow = true; add(tuft);
  }

  // ---------------------------------------------------------------- fences
  {
    const slats = [], rails = new THREE.Group();
    const fence = (ax, az, bx, bz) => {
      const len = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.round(len / 0.62));
      for (let i = 0; i <= n; i++) slats.push([lerp(ax, bx, i / n), lerp(az, bz, i / n), Math.atan2(bz - az, bx - ax)]);
      for (const y of [0.5, 1.05]) {
        const r = box(len + 0.2, 0.13, 0.07, M.stick, (ax + bx) / 2, y, (az + bz) / 2);
        r.rotation.y = -Math.atan2(bz - az, bx - ax); rails.add(r);
      }
    };
    const P = PADDOCK, gl = GATE.x - GATE.w / 2, gr = GATE.x + GATE.w / 2;
    fence(P.x0, P.z1, P.x1, P.z1);
    fence(P.x0, SHED.z1, P.x0, P.z1);
    fence(P.x1, P.z0, P.x1, SIDE_GATE.z0);            // gap: the side gate (see tracking.js)
    fence(P.x1, SIDE_GATE.z1, P.x1, PT.dock.z - 0.7);
    fence(P.x1, PT.dock.z + 0.7, P.x1, P.z1);
    fence(P.x0, P.z0, gl, P.z0);
    fence(gr, P.z0, P.x1, P.z0);
    fence(PLOT.x0 - 0.25, PLOT.z0 - 0.25, PLOT.x0 - 0.25, PLOT.z1 + 0.2);
    const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(0.07, 1.35, 0.24), M.stick, slats.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), one = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
    slats.forEach(([x, z, a], i) => { m4.compose(p.set(x, 0.72, z), q.setFromEuler(e.set(0, -a, 0)), one); inst.setMatrixAt(i, m4); });
    inst.castShadow = inst.receiveShadow = true;
    add(inst, rails);
  }

  // ------------------------------------------------------------------ shed
  const shed = { roofMat: null };
  {
    const cx = (SHED.x0 + SHED.x1) / 2, w = SHED.x1 - SHED.x0;
    add(box(w + 0.5, 0.14, SHED.z1 - SHED.z0 + 0.5, M.concrete, cx, 0.09, (SHED.z0 + SHED.z1) / 2));
    for (let x = SHED.x0; x <= SHED.x1; x += 4) {
      add(box(0.3, SHED.hFront, 0.3, M.wood, x, SHED.hFront / 2, SHED.z1));
      add(box(0.3, SHED.hBack, 0.3, M.wood, x, SHED.hBack / 2, SHED.z0));
    }
    const plank = canvasTex(256, 64, (g, W, H) => {
      g.fillStyle = '#c69c63'; g.fillRect(0, 0, W, H);
      g.strokeStyle = '#a57a45'; g.lineWidth = 3;
      for (let x = 0; x < W; x += 21) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    });
    add(box(w, 2.2, 0.14, mat('#ffffff', { map: plank }), cx, 1.2, SHED.z0));
    add(box(0.14, 1.5, 6.3, M.wood, SHED.x0, 0.85, (SHED.z0 + SHED.z1) / 2));
    add(box(0.14, 1.5, 5.2, M.wood, SHED.x1, 0.85, SHED.z0 + 2.7));
    const roofTex = canvasTex(256, 64, (g, W, H) => {
      for (let x = 0; x < W; x += 16) {
        const gr = g.createLinearGradient(x, 0, x + 16, 0);
        gr.addColorStop(0, '#b9342f'); gr.addColorStop(0.5, '#ea5a50'); gr.addColorStop(1, '#b9342f');
        g.fillStyle = gr; g.fillRect(x, 0, 16, H);
      }
    });
    roofTex.wrapS = THREE.RepeatWrapping; roofTex.repeat.set(4, 1);
    shed.roofMat = mat('#ffffff', { map: roofTex, transparent: true, opacity: 1, flatShading: false });
    const depth = SHED.z1 - SHED.z0 + 1.2, rise = SHED.hFront - SHED.hBack;
    const roof = box(w + 1, 0.16, Math.hypot(depth, rise * 1.1), shed.roofMat, cx, (SHED.hFront + SHED.hBack) / 2 + 0.12, (SHED.z0 + SHED.z1) / 2);
    roof.rotation.x = -Math.atan2(rise * 1.1, depth);
    add(roof);
    // feed and water troughs
    const fx = (FEED.x0 + FEED.x1) / 2, fw = FEED.x1 - FEED.x0;
    add(box(fw, 0.6, 0.95, M.woodDark, fx, 0.46, FEED.z));
    shed.fodder = add(box(fw - 0.3, 0.3, 0.7, mat('#58a83c'), fx, 0.8, FEED.z));
    const tx = (TROUGH.x0 + TROUGH.x1) / 2, tw = TROUGH.x1 - TROUGH.x0;
    add(box(tw, 0.6, 0.95, mat('#9aa3aa'), tx, 0.46, TROUGH.z));
    shed.troughWater = add(box(tw - 0.25, 0.06, 0.7, M.water, tx, 0.7, TROUGH.z, false));
    // sprinkler line fed from the recycled-water tank
    add(pipe([[SHED.x1 + 0.3, 3.0, -6.4], [SHED.x0 + 0.6, 3.0, -6.4]], 0.07, M.pvc));
    shed.nozzles = [];
    for (let x = SHED.x0 + 1.4; x < SHED.x1; x += 2.3) { add(cyl(0.05, 0.12, 0.2, M.dark, x, 2.86, -6.4, 6)); shed.nozzles.push([x, 2.75, -6.4]); }
    // cooling fans on the back wall
    shed.fans = [];
    for (const x of [-13, -7]) {
      add(mesh(new THREE.TorusGeometry(0.55, 0.06, 6, 18), M.dark, x, 1.75, SHED.z0 + 0.25));
      const blades = new THREE.Group();
      for (let i = 0; i < 3; i++) { const b = box(0.5, 0.16, 0.04, M.steel, 0.25, 0, 0); const h = new THREE.Group(); h.rotation.z = (i * Math.PI * 2) / 3; h.add(b); blades.add(h); }
      blades.position.set(x, 1.75, SHED.z0 + 0.27); add(blades); shed.fans.push(blades);
    }
    // string lights along the eave, like the craft model
    shed.bulbMat = glow('#4a3a1a');
    const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.09, 6, 5), shed.bulbMat, 20);
    const m4 = new THREE.Matrix4();
    for (let i = 0; i < 20; i++) bulbs.setMatrixAt(i, m4.makeTranslation(SHED.x0 + 0.3 + i * 0.6, SHED.hFront - 0.25 - Math.sin((i % 7) / 6 * Math.PI) * 0.18, SHED.z1 + 0.2));
    add(bulbs);
    shed.light = new THREE.PointLight('#ffd9a0', 0, 16, 1.6);
    shed.light.position.set(cx, 3, -7); add(shed.light);
    // DHT11 temperature + humidity sensor on the front post
    add(box(0.42, 0.55, 0.2, mat('#2f7fd6'), SHED.x1, 2.7, SHED.z1 + 0.25));
    add(box(0.42, 0.1, 0.22, M.dark, SHED.x1, 2.38, SHED.z1 + 0.25));
    // roof gutter (rainwater harvesting) and floor drain to the collection tank
    add(pipe([[SHED.x0 - 0.4, 2.5, SHED.z0 - 0.62], [SHED.x1 + 0.6, 2.4, SHED.z0 - 0.62], [-1.0, 2.4, SHED.z0 - 0.62], [-1.0, 2.4, -10.1], [-1.0, 1.35, -10.1]], 0.1, M.pvc));
    add(pipe([[SHED.x1 - 0.2, 0.22, -8.6], [-2.5, 0.22, -8.6]], 0.13, mat('#7d858b')));
    // milk chiller and cans
    add(cyl(0.72, 0.72, 1.3, M.steel, -2.85, 0.8, -5.5, 16));
    add(cyl(0.3, 0.72, 0.25, M.steel, -2.85, 1.57, -5.5, 16));
    for (const [x, z] of [[-2.2, -4.2], [-3.1, -4.1]]) { add(cyl(0.27, 0.3, 0.75, M.steel, x, 0.5, z, 10)); add(cyl(0.16, 0.25, 0.22, M.steel, x, 0.98, z, 10)); }
  }

  // --------------------------------------------------------------- IR gate
  const gate = {};
  {
    const gl = GATE.x - GATE.w / 2, gr = GATE.x + GATE.w / 2;
    add(box(0.3, 3.3, 0.3, M.wood, gl, 1.65, GATE.z), box(0.3, 3.3, 0.3, M.wood, gr, 1.65, GATE.z));
    add(box(GATE.w + 0.6, 0.26, 0.3, M.wood, GATE.x, 3.3, GATE.z));
    add(box(0.7, 0.42, 0.3, mat('#1f5fc4'), GATE.x, 2.95, GATE.z + 0.1));
    add(cyl(0.09, 0.09, 0.1, M.dark, GATE.x - 0.16, 2.9, GATE.z + 0.28, 8)).rotation.x = Math.PI / 2;
    add(cyl(0.09, 0.09, 0.1, glow('#e8f4ff'), GATE.x + 0.16, 2.9, GATE.z + 0.28, 8)).rotation.x = Math.PI / 2;
    gate.led = add(ball(0.22, glow('#4a0d0a'), gr, 3.6, GATE.z, 10, 8, false));
    gate.beam = add(cyl(0.03, 0.03, GATE.w, glow('#ff3b30', { transparent: true, opacity: 0.35 }), GATE.x, 1.15, GATE.z, 6, false));
    gate.beam.rotation.z = Math.PI / 2;
  }

  // ----------------------------------------------------------------- solar
  const solar = {};
  {
    const { x, z } = PT.panel, alu = mat('#aeb6bd', { roughness: 0.4, metalness: 0.5 });
    for (const sx of [-2.6, 2.6]) { add(box(0.18, 3.5, 0.18, alu, x + sx, 1.75, z - 1.25)); add(box(0.18, 1.25, 0.18, alu, x + sx, 0.62, z + 1.35)); }
    const cells = canvasTex(512, 256, (g, W, H) => {
      g.fillStyle = '#16337a'; g.fillRect(0, 0, W, H);
      for (let i = 0; i < 12; i++) for (let j = 0; j < 6; j++) {
        const gr = g.createLinearGradient(i * W / 12, j * H / 6, (i + 1) * W / 12, (j + 1) * H / 6);
        gr.addColorStop(0, '#2450b8'); gr.addColorStop(1, '#17357f');
        g.fillStyle = gr; g.fillRect(i * W / 12 + 3, j * H / 6 + 3, W / 12 - 6, H / 6 - 6);
      }
      g.strokeStyle = '#dfe7f1'; g.lineWidth = 4; g.strokeRect(2, 2, W - 4, H - 4);
      g.beginPath(); g.moveTo(W / 2, 0); g.lineTo(W / 2, H); g.stroke();
    });
    const panel = new THREE.Group();
    panel.add(box(6.8, 0.16, 3.7, alu, 0, 0, 0));
    solar.face = mesh(new THREE.PlaneGeometry(6.6, 3.5), mat('#ffffff', { map: cells, roughness: 0.2, metalness: 0.4, flatShading: false, emissive: '#2a5bd0', emissiveIntensity: 0 }), 0, 0.09, 0);
    solar.face.rotation.x = -Math.PI / 2; panel.add(solar.face);
    panel.position.set(x, 2.45, z); panel.rotation.x = 0.72; add(panel);
    // battery + inverter cabinet with a charge bar
    const b = PT.battery;
    add(box(2.0, 1.7, 1.05, mat('#efe6cf'), b.x, 0.95, b.z), box(2.2, 0.12, 1.25, M.dark, b.x, 1.86, b.z));
    add(mesh(new THREE.PlaneGeometry(0.6, 0.6), new THREE.MeshBasicMaterial({ transparent: true, map: canvasTex(64, 64, (g) => { g.fillStyle = '#f2b632'; g.beginPath(); g.moveTo(38, 4); g.lineTo(14, 36); g.lineTo(30, 36); g.lineTo(24, 60); g.lineTo(50, 26); g.lineTo(34, 26); g.closePath(); g.fill(); }) }), b.x - 0.55, 1.0, b.z + 0.535, false));
    solar.bars = [];
    for (let i = 0; i < 5; i++) solar.bars.push(add(box(0.5, 0.17, 0.04, glow('#1c2a1c'), b.x + 0.45, 0.52 + i * 0.24, b.z + 0.54, false)));
    add(pipe([[x - 1.2, 1.3, z + 0.2], [x - 1.2, 0.14, z + 2.0], [b.x + 1.0, 0.14, b.z]], 0.05, M.dark));
    add(pipe([[b.x, 1.9, b.z], [b.x, 5.0, b.z], [SHED.x1, SHED.hFront + 0.3, SHED.z1]], 0.035, M.dark, false)); // overhead line to the shed
    add(box(0.16, 5.0, 0.16, M.woodDark, b.x, 2.5, b.z - 0.62));
  }

  // lamp posts: glowing bulbs with a soft pool of light on the ground. (Real
  // point lights would be paid for by every pixel on screen, day and night.)
  const lampBulb = glow('#d9d2bd');
  const poolMat = new THREE.MeshBasicMaterial({
    transparent: true, opacity: 0, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending,
    map: canvasTex(128, 128, (g) => {
      const r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
      r.addColorStop(0, 'rgba(255,214,150,1)'); r.addColorStop(0.4, 'rgba(255,200,120,0.45)'); r.addColorStop(1, 'rgba(255,190,100,0)');
      g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    }),
  });
  const pools = new THREE.Group();
  const pool = (x, z, r) => { const m = mesh(new THREE.PlaneGeometry(r * 2, r * 2), poolMat, x, 0.21, z, false); m.rotation.x = -Math.PI / 2; pools.add(m); };
  for (const [x, z] of [[-17.3, 11.2], [8.9, 11.2], [17.3, -4.6], [7.4, 1.4]]) {
    const bx = x + (x > 0 ? -0.42 : 0.42);
    add(cyl(0.08, 0.1, 3.6, M.dark, x, 1.8, z, 8), box(0.5, 0.08, 0.08, M.dark, x + (x > 0 ? -0.2 : 0.2), 3.6, z));
    add(ball(0.26, lampBulb, bx, 3.5, z, 10, 8, false));
    pool(bx, z, 6.5);
  }
  pool(-10, -1.6, 7.5); pool(PT.kiosk.x, PT.kiosk.z + 1.2, 4);
  add(pools);
  let lampGlow = 0;

  // ----------------------------------------------------- water recycling
  const water = {};
  {
    const c = PT.collection, wall = mat('#9fb0b6');
    add(box(3.1, 1.3, 0.14, wall, c.x, 0.7, c.z - 1.2), box(3.1, 1.3, 0.14, wall, c.x, 0.7, c.z + 1.2));
    add(box(0.14, 1.3, 2.4, wall, c.x - 1.5, 0.7, c.z), box(0.14, 1.3, 2.4, wall, c.x + 1.5, 0.7, c.z));
    water.collection = add(box(2.86, 1, 2.26, mat('#7c9a94', { roughness: 0.2, transparent: true, opacity: 0.9 }), c.x, 0.1, c.z, false));
    const f = PT.filter;   // gravel / sand / charcoal filter column
    add(cyl(0.7, 0.75, 0.25, M.dark, f.x, 0.2, f.z, 16), cyl(0.68, 0.68, 0.14, M.dark, f.x, 2.82, f.z, 16));
    add(cyl(0.5, 0.5, 0.55, mat('#8d8f92'), f.x, 0.6, f.z, 12), cyl(0.5, 0.5, 0.6, mat('#d8c08a'), f.x, 1.18, f.z, 12), cyl(0.5, 0.5, 0.5, mat('#26262a'), f.x, 1.73, f.z, 12));
    water.filterTop = add(cyl(0.5, 0.5, 0.7, M.water, f.x, 2.35, f.z, 12, false));
    add(cyl(0.6, 0.6, 2.5, M.glass, f.x, 1.55, f.z, 16, false));
    const p = PT.pump, blue = mat('#1f5fc4', { roughness: 0.45 });
    water.pump = new THREE.Group();
    water.pump.add(box(1.5, 0.16, 0.9, M.dark, 0, 0.16, 0));
    const motor = cyl(0.36, 0.36, 0.95, blue, 0.15, 0.62, 0, 14); motor.rotation.z = Math.PI / 2; water.pump.add(motor);
    water.pump.add(ball(0.42, blue, -0.5, 0.62, 0, 12, 8));
    water.spin = new THREE.Group();
    water.spin.position.set(0.66, 0.62, 0);
    for (let i = 0; i < 4; i++) { const h = new THREE.Group(); h.rotation.x = (i * Math.PI) / 2; h.add(box(0.05, 0.3, 0.1, mat('#e04a3a'), 0, 0.16, 0)); water.spin.add(h); }
    water.pump.add(water.spin);
    water.pump.position.set(p.x, 0.06, p.z); add(water.pump);
    const s = PT.storage;
    for (const [dx, dz] of [[-1.2, -1.2], [1.2, -1.2], [-1.2, 1.2], [1.2, 1.2]]) add(box(0.2, 2.7, 0.2, M.woodDark, s.x + dx, 1.35, s.z + dz));
    add(box(3.0, 0.16, 3.0, M.wood, s.x, 2.75, s.z));
    water.storage = add(cyl(1.2, 1.2, 1, M.water, s.x, 2.85, s.z, 18, false));
    add(cyl(1.32, 1.32, 2.45, M.glass, s.x, 4.07, s.z, 18, false), cyl(1.4, 1.4, 0.14, mat('#2f7fd6'), s.x, 5.35, s.z, 18));
    water.paths = {
      loop: [[c.x + 1.5, 0.4, c.z], [f.x, 0.4, f.z], [p.x - 0.5, 0.5, p.z], [s.x, 0.5, p.z], [s.x, 0.5, -8.1], [s.x, 5.7, -8.1], [s.x, 5.7, -7.1], [s.x, 5.4, -7.1]],
      shed: [[s.x, 2.7, s.z], [s.x, 0.24, s.z], [SHED.x1 + 0.3, 0.24, -6.4], [SHED.x1 + 0.3, 3.0, -6.4], [SHED.x0 + 0.6, 3.0, -6.4]],
      plot: [[s.x, 0.24, s.z], [6.9, 0.24, s.z], [6.9, 0.24, -4.0], [14.7, 0.24, -4.0], [14.7, 0.5, PLOT.z0], [14.7, 0.5, PLOT.z1 - 0.3]],
      fresh: [[-3.3, 0.95, -11.9], [-3.3, 0.95, TROUGH.z], [TROUGH.x1 - 0.5, 0.95, TROUGH.z]],
      rain: [[SHED.x0 - 0.4, 2.5, SHED.z0 - 0.62], [-1.0, 2.4, SHED.z0 - 0.62], [-1.0, 2.4, -10.1], [-1.0, 1.35, -10.1]],
      drain: [[SHED.x1 - 0.2, 0.22, -8.6], [-2.5, 0.22, -8.6]],
    };
    add(pipe(water.paths.loop, 0.11, M.pvc), pipe(water.paths.shed.slice(0, 4), 0.09, M.pvc), pipe(water.paths.plot, 0.08, M.pvc));
    add(pipe(water.paths.fresh, 0.09, mat('#58b7ee', { roughness: 0.5 })));
  }

  // -------------------------------------------- smart monitoring kiosk
  const kiosk = {};
  {
    const k = PT.kiosk, g = new THREE.Group();
    g.position.set(k.x, 0, k.z);
    g.add(box(0.28, 1.5, 0.28, M.woodDark, -1.0, 0.75, 0), box(0.28, 1.5, 0.28, M.woodDark, 1.0, 0.75, 0));
    g.add(box(3.1, 2.5, 0.16, M.wood, 0, 2.6, 0));
    const roof = box(3.6, 0.12, 1.3, mat(C.roof), 0, 3.98, 0.3); roof.rotation.x = 0.18; g.add(roof);
    kiosk.canvas = document.createElement('canvas');
    kiosk.canvas.width = 512; kiosk.canvas.height = 176;
    kiosk.tex = new THREE.CanvasTexture(kiosk.canvas);
    kiosk.tex.colorSpace = THREE.SRGBColorSpace;
    g.add(box(2.75, 1.06, 0.14, M.dark, 0, 3.15, 0.12));
    g.add(mesh(new THREE.PlaneGeometry(2.5, 0.86), new THREE.MeshBasicMaterial({ map: kiosk.tex, toneMapped: false }), 0, 3.15, 0.2, false));
    // Arduino, L293D on a breadboard, ESP8266 Wi-Fi module
    g.add(box(1.0, 0.72, 0.1, mat('#1b8f9a'), -0.9, 2.0, 0.13), box(0.3, 0.3, 0.14, M.steel, -1.2, 2.2, 0.16), box(0.75, 0.08, 0.14, M.dark, -0.85, 2.3, 0.16), box(0.75, 0.08, 0.14, M.dark, -0.85, 1.7, 0.16), box(0.34, 0.14, 0.14, M.dark, -0.75, 2.0, 0.17));
    g.add(box(0.78, 0.55, 0.08, mat('#f3f1ea'), 0.1, 1.95, 0.12), box(0.42, 0.18, 0.1, mat('#18181b'), 0.1, 1.95, 0.18));
    g.add(box(0.5, 0.8, 0.08, mat('#17336e'), 0.98, 2.0, 0.12), box(0.36, 0.36, 0.1, M.steel, 0.98, 1.88, 0.17));
    kiosk.led = ball(0.05, glow('#35c46b'), 1.12, 2.3, 0.18, 6, 5, false); g.add(kiosk.led);
    const wires = ['#e04a3a', '#f2b632', '#35c46b', '#3aa0e0'];
    wires.forEach((c, i) => g.add(pipe(bezier([-0.5 + i * 0.07, 2.25 - i * 0.12, 0.2], [0.2, 2.75 - i * 0.1, 0.5], [0.85, 2.25 - i * 0.12, 0.2], 8), 0.018, mat(c), false)));
    g.add(cyl(0.03, 0.03, 0.9, M.dark, 1.35, 4.2, 0, 6));
    kiosk.rings = [];
    for (let i = 0; i < 3; i++) {
      const r = mesh(new THREE.TorusGeometry(0.3 + i * 0.26, 0.045, 6, 18, Math.PI / 2), glow('#35c46b', { transparent: true, opacity: 0 }), 1.35, 4.62, 0, false);
      r.rotation.z = Math.PI / 4; g.add(r); kiosk.rings.push(r);
    }
    add(g);
  }

  // ------------------------------------------- waste, biogas, compost, plot
  const bio = {};
  {
    const w = PT.waste;
    add(box(2.5, 1.1, 0.14, M.woodDark, w.x, 0.6, w.z - 1.0), box(2.5, 1.1, 0.14, M.woodDark, w.x, 0.6, w.z + 1.0), box(0.14, 1.1, 2.0, M.woodDark, w.x - 1.2, 0.6, w.z), box(0.14, 1.1, 2.0, M.woodDark, w.x + 1.2, 0.6, w.z));
    bio.inlet = add(box(2.3, 1, 1.9, M.dung, w.x, 0.1, w.z));
    const ramp = box(1.5, 0.08, 1.2, M.wood, w.x - 1.75, 0.72, w.z); ramp.rotation.z = 0.5; add(ramp);
    const d = PT.digester, brown = mat('#7a5a3a', { roughness: 0.6 });
    bio.paths = {
      feed: [[w.x + 1.2, 0.4, w.z], [3.2, 0.4, 5.0], [d.x - 1.8, 0.5, d.z - 0.3]],
      slurry: [[d.x + 1.7, 0.4, d.z + 0.8], [8.2, 0.4, 8.0], [PT.compost.x - 1.0, 0.55, PT.compost.z]],
      stove: [[d.x, 4.5, d.z], [d.x + 2.1, 4.5, d.z], [d.x + 2.1, 0.28, d.z], [d.x + 2.1, 0.28, PT.stove.z], [PT.stove.x - 0.3, 0.28, PT.stove.z], [PT.stove.x - 0.3, 1.0, PT.stove.z]],
      gen: [[d.x, 4.5, d.z], [d.x + 2.1, 4.5, d.z], [d.x + 2.1, 0.28, d.z], [d.x + 2.1, 0.28, PT.generator.z], [PT.generator.x - 0.8, 0.28, PT.generator.z], [PT.generator.x - 0.8, 0.7, PT.generator.z]],
    };
    add(pipe(bio.paths.feed, 0.16, brown), pipe(bio.paths.slurry, 0.14, brown));
    const yellow = mat('#f2c230', { roughness: 0.5 });
    add(pipe(bio.paths.stove.slice(1), 0.07, yellow), pipe(bio.paths.gen.slice(3), 0.07, yellow));
    add(cyl(1.95, 2.05, 1.3, mat('#b9a78c'), d.x, 0.7, d.z, 20));
    add(mesh(new THREE.TorusGeometry(1.95, 0.12, 6, 24), mat('#a39279'), d.x, 1.35, d.z)).rotation.x = Math.PI / 2;
    add(box(0.18, 4.6, 0.18, M.steel, d.x - 2.1, 2.3, d.z), box(0.18, 4.6, 0.18, M.steel, d.x + 2.1, 2.3, d.z), box(4.4, 0.16, 0.16, M.steel, d.x, 4.55, d.z));
    bio.drum = new THREE.Group();
    const green = mat('#2f9a57', { roughness: 0.5, flatShading: false });
    bio.drum.add(cyl(1.62, 1.62, 1.5, green, 0, 0.75, 0, 20));
    const dome = mesh(new THREE.SphereGeometry(1.62, 20, 8, 0, Math.PI * 2, 0, Math.PI / 2), green, 0, 1.5, 0); dome.scale.y = 0.45; bio.drum.add(dome);
    bio.drum.add(cyl(0.1, 0.1, 0.3, yellow, 0, 2.3, 0, 8));
    bio.drum.position.set(d.x, 0.7, d.z); add(bio.drum);
    bio.hose = add(cyl(0.05, 0.05, 1, yellow, d.x, 3.8, d.z, 6, false));
    // stove with a blue biogas flame
    const st = PT.stove;
    add(box(1.5, 0.9, 1.1, mat('#b5653f'), st.x, 0.52, st.z));
    add(mesh(new THREE.TorusGeometry(0.24, 0.05, 6, 14), M.dark, st.x, 1.0, st.z)).rotation.x = Math.PI / 2;
    bio.flame = add(mesh(new THREE.ConeGeometry(0.22, 0.42, 8), glow('#4aa8ff', { transparent: true, opacity: 0.9 }), st.x, 1.2, st.z, false));
    bio.pot = add(cyl(0.42, 0.36, 0.4, M.steel, st.x, 1.62, st.z, 14));
    add(pipe([[st.x - 0.3, 1.38, st.z - 0.3], [st.x - 0.3, 1.38, st.z + 0.3]], 0.03, M.dark), pipe([[st.x + 0.3, 1.38, st.z - 0.3], [st.x + 0.3, 1.38, st.z + 0.3]], 0.03, M.dark));
    // biogas generator (backs up the battery)
    const ge = PT.generator;
    bio.gen = new THREE.Group();
    bio.gen.add(box(1.7, 0.9, 1.05, mat('#e8742c', { roughness: 0.6 }), 0, 0.7, 0), box(1.9, 0.14, 1.2, M.dark, 0, 0.18, 0), cyl(0.28, 0.28, 0.5, M.dark, -0.4, 1.3, 0, 10), cyl(0.07, 0.07, 0.7, M.steel, 0.55, 1.45, 0.25, 6));
    bio.genLed = ball(0.08, glow('#243024'), 0.6, 0.95, 0.54, 6, 5, false); bio.gen.add(bio.genLed);
    bio.gen.position.set(ge.x, 0.06, ge.z); add(bio.gen);
    bio.cable = [[ge.x, 0.14, ge.z - 0.6], [ge.x, 0.14, -3.2], [PT.battery.x, 0.14, -3.2], [PT.battery.x, 0.14, PT.battery.z + 0.5]];
    add(pipe(bio.cable, 0.05, M.dark));
    // compost pit
    const cp = PT.compost;
    add(box(2.9, 0.6, 0.12, M.woodDark, cp.x, 0.36, cp.z - 1.1), box(2.9, 0.6, 0.12, M.woodDark, cp.x, 0.36, cp.z + 1.1), box(0.12, 0.6, 2.2, M.woodDark, cp.x - 1.45, 0.36, cp.z), box(0.12, 0.6, 2.2, M.woodDark, cp.x + 1.45, 0.36, cp.z));
    bio.heap = add(mesh(new THREE.SphereGeometry(1.2, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat('#3f2c1d'), cp.x, 0.1, cp.z));
    // fodder plot grown on compost
    const px = (PLOT.x0 + PLOT.x1) / 2, pz = (PLOT.z0 + PLOT.z1) / 2;
    bio.soilMat = mat('#6b4a2e');
    add(box(PLOT.x1 - PLOT.x0, 0.3, PLOT.z1 - PLOT.z0, bio.soilMat, px, 0.2, pz));
    add(pipe([[14.7, 0.42, PLOT.z0], [14.7, 0.42, PLOT.z1 - 0.3]], 0.06, M.dark));
    bio.plants = new THREE.InstancedMesh(new THREE.ConeGeometry(0.2, 1.5, 5), mat('#4fae3c'), 5 * 13);
    bio.plants.castShadow = true; add(bio.plants);
    bio.plantSeeds = [];
    for (let i = 0; i < 5; i++) for (let j = 0; j < 13; j++) bio.plantSeeds.push([PLOT.x0 + 0.55 + i * 0.88 + (Math.random() - 0.5) * 0.2, PLOT.z0 + 0.6 + j * 0.72, 0.75 + Math.random() * 0.5]);
  }

  // dung pats (pooled) and the collector rover
  const pats = [];
  for (let i = 0; i < 18; i++) { const p = ball(0.26, M.dung, 0, -5, 0, 8, 5); p.scale.y = 0.4; add(p); pats.push(p); }
  const rover = buildRover(); add(rover.group);

  // herd
  const herd = sim.animals.map((a) => { const m = buildAnimal3D(a, look, sim); add(m.group); pickables.push(m.hit); return m; });

  // scenery
  const tree = (x, z, s = 1) => {
    add(cyl(0.14 * s, 0.2 * s, 1.6 * s, M.woodDark, x, 0.8 * s, z, 6));
    add(mesh(new THREE.IcosahedronGeometry(0.95 * s, 0), M.leaf, x, 2.0 * s, z), mesh(new THREE.IcosahedronGeometry(0.7 * s, 0), M.leaf2, x + 0.4 * s, 2.6 * s, z - 0.2 * s));
  };
  tree(-17.3, -11.2, 1.3); tree(6.9, -11.2, 1.1); tree(17.2, -0.8, 1.0); tree(2.2, 10.6, 0.9); tree(-17.4, -5, 0.8); tree(17.3, -11.3, 0.9);
  {
    const sign = canvasTex(1024, 128, (g, W, H) => {
      g.fillStyle = '#e3c089'; g.fillRect(0, 0, W, H);
      g.strokeStyle = '#b98f55'; g.lineWidth = 6; g.strokeRect(5, 5, W - 10, H - 10);
      g.fillStyle = '#1f4e2e'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.font = 'bold 66px Cambria, Georgia, serif'; g.fillText('Dairy Sense', W * 0.27, H / 2 + 2);
      g.font = '34px "Segoe UI", Calibri, sans-serif'; g.fillStyle = '#2e7d3c';
      g.fillText('Sustainable Smart Dairy Farm', W * 0.7, H / 2 + 2);
    });
    const plank = box(11, 1.4, 0.2, M.wood, 2.4, 0.9, 11.55); plank.rotation.x = -0.18; add(plank);
    const face = mesh(new THREE.PlaneGeometry(10.8, 1.3), mat('#ffffff', { map: sign, flatShading: false }), 2.4, 0.92, 11.67, false);
    face.rotation.x = -0.18; add(face);
  }

  // Everything that never moves is collapsed into a few merged meshes.
  for (const o of [shed.fodder, shed.troughWater, ...shed.fans, gate.led, gate.beam, water.collection, water.storage, water.pump,
    bio.inlet, bio.drum, bio.hose, bio.flame, bio.gen, bio.heap, pools, rover.group, ...pats, ...herd.map((m) => m.group)]) o.userData.dyn = true;
  bio.soilMat.userData.live = true;
  mergeStatic(root);

  // ------------------------------------------------------- sky and weather
  const hemi = new THREE.HemisphereLight('#cfe8ff', '#8a7a55', 1);
  const sun = new THREE.DirectionalLight('#fff3d6', 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -26, right: 26, top: 22, bottom: -22, near: 1, far: 120 });
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.04;
  scene.add(hemi, sun, sun.target);
  const sunDisc = mesh(new THREE.SphereGeometry(4, 16, 12), glow('#ffe9a8', { fog: false }), 0, 0, 0, false);
  const moonDisc = mesh(new THREE.SphereGeometry(2.6, 16, 12), glow('#dfe8ff', { fog: false }), 0, 0, 0, false);
  scene.add(sunDisc, moonDisc);
  const starGeo = new THREE.BufferGeometry();
  {
    const p = [];
    for (let i = 0; i < 500; i++) { const a = Math.random() * Math.PI * 2, e = 0.12 + Math.random() * 1.3; p.push(170 * Math.cos(e) * Math.cos(a), 170 * Math.sin(e), 170 * Math.cos(e) * Math.sin(a)); }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  }
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 1.1, sizeAttenuation: true, transparent: true, opacity: 0, fog: false }));
  scene.add(stars);
  const cloudMat = mat('#ffffff', { transparent: true, opacity: 0, flatShading: false, depthWrite: false });
  const clouds = [];
  for (let i = 0; i < 7; i++) {
    const g = new THREE.Group();
    for (let j = 0; j < 4; j++) { const b = ball(1.6 + Math.random() * 1.4, cloudMat, j * 2.1 - 3, Math.random() * 0.8, Math.random() * 1.5, 10, 7, false); b.scale.y = 0.6; g.add(b); }
    g.position.set(-30 + i * 10, 15 + (i % 3) * 2, -8 + (i % 4) * 5.5);
    mergeStatic(g, { transparent: true });
    scene.add(g); clouds.push(g);
  }

  const makeParticles = (count, color, size, opacity) => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3).fill(-50);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color, size, transparent: true, opacity, depthWrite: false }));
    pts.frustumCulled = false; scene.add(pts);
    return { pts, pos, vel: new Float32Array(count * 3), life: new Float32Array(count), count };
  };
  const rain = makeParticles(2200, '#d6e9fa', 0.26, 0.8);
  for (let i = 0; i < rain.count; i++) { rain.pos[i * 3] = (Math.random() - 0.5) * 40; rain.pos[i * 3 + 1] = Math.random() * 20; rain.pos[i * 3 + 2] = (Math.random() - 0.5) * 28; }
  // a spray: particles born at one of the emitters while `on`, then fall
  const spray = (count, color, emitters, spread, up) => {
    const P = makeParticles(count, color, 0.13, 0.8);
    return (dt, on) => {
      for (let i = 0; i < P.count; i++) {
        P.life[i] -= dt;
        const k = i * 3;
        if (P.life[i] <= 0) {
          if (!on || Math.random() > 0.2) { P.pos[k + 1] = -50; continue; }
          const e = emitters[(Math.random() * emitters.length) | 0];
          P.pos[k] = e[0]; P.pos[k + 1] = e[1]; P.pos[k + 2] = e[2];
          P.vel[k] = (Math.random() - 0.5) * spread; P.vel[k + 1] = up * (0.5 + Math.random()); P.vel[k + 2] = (Math.random() - 0.5) * spread;
          P.life[i] = 0.5 + Math.random() * 0.5;
        } else {
          P.vel[k + 1] -= 9 * dt;
          P.pos[k] += P.vel[k] * dt; P.pos[k + 1] = Math.max(0.12, P.pos[k + 1] + P.vel[k + 1] * dt); P.pos[k + 2] += P.vel[k + 2] * dt;
        }
      }
      P.pts.geometry.attributes.position.needsUpdate = true;
    };
  };
  const shedSpray = spray(260, '#cfeaff', shed.nozzles, 3.2, -0.5);
  const plotEmit = []; for (let z = PLOT.z0 + 0.6; z < PLOT.z1; z += 1.1) plotEmit.push([14.7, 0.5, z]);
  const plotSpray = spray(160, '#cfeaff', plotEmit, 4.2, 3.2);
  const tankSpray = spray(40, '#cfeaff', [[PT.storage.x, 5.3, -7.1]], 0.5, -1);

  // ----------------------------------------------------------------- flows
  const k = PT.kiosk, b = PT.battery;
  const flows = createFlows(scene, [
    { type: 'energy', pts: [[PT.panel.x - 1.2, 1.3, PT.panel.z + 0.2], [PT.panel.x - 1.2, 0.3, PT.panel.z + 2.0], [b.x + 1.0, 0.3, b.z]], active: (s) => s.energy.solarW / 500 },
    { type: 'energy', pts: [[b.x, 0.3, b.z + 0.6], [b.x, 0.3, k.z], [k.x + 1.0, 0.3, k.z], [k.x + 1.0, 1.4, k.z]], active: () => 0.6 },
    { type: 'energy', pts: [[b.x - 1, 0.3, b.z], [6.2, 0.3, b.z], [6.2, 0.3, -10.2], [PT.pump.x, 0.3, -10.2], [PT.pump.x, 0.5, PT.pump.z - 0.3]], active: (s) => +s.water.pump },
    { type: 'energy', pts: [[b.x, 1.9, b.z], [b.x, 5.0, b.z], [SHED.x1, SHED.hFront + 0.3, SHED.z1], [SHED.x0, SHED.hFront - 0.2, SHED.z1 + 0.2]], active: (s) => +(s.energy.lights || s.climate.cooling) },
    { type: 'energy', pts: bio.cable, active: (s) => +s.biogas.gen },
    { type: 'water', pts: water.paths.rain, active: (s) => +s.water.raining },
    { type: 'water', pts: water.paths.drain, active: (s) => +(s.water.washing > 0), n: 3 },
    { type: 'water', pts: water.paths.loop, active: (s) => +s.water.pump, speed: 3.4 },
    { type: 'water', pts: water.paths.shed, active: (s) => +(s.water.washing > 0 || s.water.fogging) },
    { type: 'water', pts: water.paths.plot, active: (s) => +s.water.irrigating },
    { type: 'water', pts: water.paths.fresh, active: (s) => +s.water.troughFill },
    { type: 'data', pts: [[SHED.x1, 2.7, SHED.z1 + 0.3], [k.x - 1.3, 3.1, k.z + 0.1]], active: () => 0.7, size: 0.6 },
    { type: 'data', pts: [[GATE.x, 3.1, GATE.z + 0.2], [GATE.x + 1.6, 3.5, GATE.z + 0.2], [k.x - 1.3, 2.8, k.z + 0.1]], active: (s) => s.gate.flash * 3, size: 0.8 },
    { type: 'data', pts: bezier([k.x + 1.35, 4.7, k.z], [12, 16, 4], [30, 15, 16], 22), active: () => 0.7, size: 0.9, speed: 5 },
    { type: 'waste', pts: bio.paths.feed, active: (s) => +s.biogas.feeding, size: 1.2, speed: 1.2 },
    { type: 'waste', pts: bio.paths.slurry, active: (s) => (s.biogas.substrate > 5 ? 0.5 : 0), size: 1.1, speed: 0.9 },
    { type: 'waste', pts: bezier([PT.compost.x + 1.2, 0.9, PT.compost.z], [12, 3.4, 8.6], [14.6, 0.7, 6.4], 10), active: (s) => +(s.plot.applying > 0), size: 1.2 },
    { type: 'gas', pts: bio.paths.stove, active: (s) => +s.biogas.stove, size: 0.8 },
    { type: 'gas', pts: bio.paths.gen, active: (s) => +s.biogas.gen, size: 0.8 },
    { type: 'fodder', pts: bezier([PLOT.x0 + 0.5, 1, 4], [1, 11, -1], [(FEED.x0 + FEED.x1) / 2, 1.1, FEED.z], 26), active: (s) => +(s.feed.filling > 0), size: 1.3, speed: 6 },
  ]);

  // ---------------------------------------------------------------- update
  const col = { a: new THREE.Color(), b: new THREE.Color(), c: new THREE.Color() };
  const SKY = { night: new THREE.Color('#0d1836'), dusk: new THREE.Color('#f3a56b'), day: new THREE.Color('#a5d8f3'), grey: new THREE.Color('#9eaab3') };
  const m4 = new THREE.Matrix4(), q0 = new THREE.Quaternion(), v3 = new THREE.Vector3(), sc3 = new THREE.Vector3();
  let lcdT = 0, cloudOp = 0, night = 0, spin = 0, fan = 0;
  const state = { flowView: false, flowOnly: null, selected: null, sunDir: new THREE.Vector3(0.3, 1, 0.4) };
  const tracking = createTracking(scene, sim, state);   // GPS layer: geofence, virtual fence, trails, beams

  function drawLCD() {
    const g = kiosk.canvas.getContext('2d'), c = sim.climate, band = thiBand(c.thi);
    g.fillStyle = '#1c3fd0'; g.fillRect(0, 0, 512, 176);
    g.fillStyle = '#2a52e6'; g.fillRect(8, 8, 496, 160);
    g.fillStyle = '#eef4ff'; g.font = 'bold 52px Consolas, "Courier New", monospace'; g.textBaseline = 'middle';
    g.fillText(`Temp:${c.shedT.toFixed(1)}°C`, 22, 54);
    g.fillText(`Hum:${c.shedRH.toFixed(0)}% THI${c.thi.toFixed(0)}`, 22, 122);
    g.font = 'bold 30px Consolas, monospace';
    g.fillStyle = band.key === 'good' ? '#9dffb0' : '#ffd36b';
    g.fillText(sim.live.on ? 'LIVE' : sim.water.pump ? 'PUMP' : '', 418, 54);
    kiosk.tex.needsUpdate = true;
  }

  function update(dt, time, camera) {
    const s = sim, e = s.energy, w = s.water, bg = s.biogas;
    const anim = s.paused ? 0 : dt * Math.min(3, Math.max(1, s.speed * 0.6));

    // sun, sky, lamps
    const a = (Math.PI * (s.hour - 6)) / 12;
    const cf = s.weather === 'sunny' ? 1 : s.weather === 'cloudy' ? 0.45 : 0.25;
    state.sunDir.set(Math.cos(a) * 0.85, Math.max(0.02, Math.sin(a)), 0.5).normalize();
    night = lerp(night, s.sun < 0.02 ? 1 : 0, damp(2, dt));
    const dayAmt = clamp01(s.sun * 3.2);
    if (s.sun > 0.02) { sun.position.copy(state.sunDir).multiplyScalar(60); sun.color.set('#fff3d6').lerp(col.a.set('#ffb680'), 1 - clamp01(s.sun * 2.2)); sun.intensity = (0.4 + 2.9 * dayAmt) * (0.35 + 0.65 * cf); }
    else { sun.position.set(-22, 46, 26); sun.color.set('#9fb7ff'); sun.intensity = 0.62; }
    sunDisc.position.set(Math.cos(a) * 150, Math.sin(a) * 110 - 6, -70); sunDisc.visible = s.sun > 0 && cf > 0.3;
    moonDisc.position.set(-60, 85, -90); moonDisc.visible = night > 0.5;
    stars.material.opacity = night * (cf > 0.5 ? 0.9 : 0.15);
    col.a.copy(SKY.night).lerp(SKY.dusk, clamp01(s.sun * 5)).lerp(SKY.day, clamp01((s.sun - 0.12) * 3)).lerp(col.b.copy(SKY.grey).multiplyScalar(0.25 + 0.75 * dayAmt), s.weather === 'sunny' ? 0 : s.weather === 'cloudy' ? 0.65 : 0.85);
    scene.background.copy(col.a);
    if (scene.fog) scene.fog.color.copy(col.a);
    hemi.intensity = 0.44 + 0.8 * dayAmt * (0.6 + 0.4 * cf);
    hemi.color.copy(col.a).lerp(col.b.set('#ffffff'), 0.5);
    const lit = e.lights ? 1 : 0;
    lampGlow = lerp(lampGlow, lit, damp(3.5, dt));
    pools.visible = lampGlow > 0.01; poolMat.opacity = lampGlow * 0.5;
    lampBulb.color.set('#d9d2bd').lerp(col.b.set('#ffe2a6'), lampGlow);
    shed.light.intensity = lampGlow * 30;
    shed.bulbMat.color.set('#e4dcc4').lerp(col.b.set('#ffd27a'), lampGlow);

    // weather
    cloudOp = lerp(cloudOp, s.weather === 'sunny' ? 0.18 : 0.92, damp(1.5, dt));
    cloudMat.opacity = cloudOp; cloudMat.color.set(s.weather === 'rain' ? '#8f9aa3' : '#ffffff').multiplyScalar(0.3 + 0.7 * Math.max(dayAmt, 0.15));
    for (const c of clouds) { c.position.x += dt * 0.8; if (c.position.x > 38) c.position.x = -38; }
    rain.pts.visible = s.weather === 'rain';
    if (rain.pts.visible) {
      for (let i = 0; i < rain.count; i++) { const y = rain.pos[i * 3 + 1] - dt * 26; rain.pos[i * 3 + 1] = y < 0 ? 20 : y; }
      rain.pts.geometry.attributes.position.needsUpdate = true;
    }

    // shed
    const top = camera.position.y / camera.position.distanceTo(v3.set(-10, 2, -7));
    // the roof fades as the camera rises, so the animals inside stay visible
    shed.roofMat.opacity = lerp(shed.roofMat.opacity, 1 - 0.75 * clamp01((top - 0.36) / 0.22), Math.min(1, dt * 5));
    shed.roofMat.depthWrite = shed.roofMat.opacity > 0.9;
    shed.fodder.scale.y = 0.15 + 1.2 * (s.feed.trough / s.feed.cap); shed.fodder.position.y = 0.66 + 0.15 * shed.fodder.scale.y;
    shed.troughWater.position.y = 0.42 + 0.3 * (w.trough / w.troughCap); shed.troughWater.visible = w.trough > 2;
    fan = lerp(fan, s.climate.cooling ? 1 : 0, Math.min(1, dt * 2));
    for (const f of shed.fans) f.rotation.z -= dt * 22 * fan;
    shedSpray(dt, w.washing > 0 || w.fogging);
    plotSpray(dt, w.irrigating);
    tankSpray(dt, w.pump);

    // gate
    gate.led.material.color.set(s.gate.flash > 0.05 ? '#ff3b30' : '#4a0d0a');
    gate.led.scale.setScalar(1 + s.gate.flash * 0.5);
    gate.beam.material.opacity = s.gate.flash > 0.05 ? 0.1 : 0.4;

    // solar + battery
    solar.face.material.emissiveIntensity = 0.5 * clamp01(e.solarW / e.panelPeak);
    const soc = e.batWh / e.batCap;
    solar.bars.forEach((bar, i) => bar.material.color.set(soc > i / 5 + 0.02 ? (soc < 0.25 ? '#ff5a3c' : '#46e06b') : '#1c2a1c'));

    // water
    const setLevel = (m, frac, base, full) => { m.scale.y = Math.max(0.02, frac * full); m.position.y = base + m.scale.y / 2; };
    setLevel(water.collection, w.collection / w.collectionCap, 0.12, 1.15);
    setLevel(water.storage, w.storage / w.storageCap, 2.85, 2.4);
    spin = lerp(spin, w.pump ? 1 : 0, Math.min(1, dt * 3));
    water.spin.rotation.x += dt * 30 * spin;
    water.pump.position.y = 0.06 + (w.pump ? Math.sin(time * 70) * 0.012 : 0);
    water.filterTop.material.opacity = 0.85;

    // kiosk
    lcdT -= dt;
    if (lcdT <= 0) { lcdT = 0.5; drawLCD(); }
    kiosk.rings.forEach((r, i) => { r.material.opacity = clamp01(Math.sin(time * 4 - i * 0.9)) * 0.9; });
    kiosk.led.material.color.set(Math.sin(time * 8) > 0 ? '#35c46b' : '#0f3a1f');

    // biogas, compost, plot
    setLevel(bio.inlet, Math.min(1, bg.inlet / 40), 0.12, 0.95);
    const lift = 0.75 + 1.25 * (bg.gas / bg.gasCap);
    bio.drum.position.y = lerp(bio.drum.position.y, lift, Math.min(1, dt * 2));
    const topY = bio.drum.position.y + 2.45, gap = Math.max(0.05, 4.47 - topY);
    bio.hose.scale.y = gap; bio.hose.position.y = topY + gap / 2;
    bio.flame.visible = bg.stove; bio.flame.scale.set(1 + Math.sin(time * 23) * 0.12, 1 + Math.sin(time * 31) * 0.2, 1 + Math.cos(time * 19) * 0.12);
    bio.gen.position.y = 0.06 + (bg.gen ? Math.abs(Math.sin(time * 55)) * 0.025 : 0);
    bio.genLed.material.color.set(bg.gen ? '#46e06b' : '#243024');
    const heap = 0.12 + Math.min(1, bg.compost / 30);
    bio.heap.scale.set(0.5 + heap * 0.55, heap * 0.9, 0.45 + heap * 0.4);
    bio.soilMat.color.set('#8a6a48').lerp(col.c.set('#3d2a1a'), clamp01(s.plot.soil) * 0.7 + s.plot.moisture * 0.3);
    bio.plantSeeds.forEach(([x, z, v], i) => {
      const h = Math.max(0.08, s.plot.biomass * v);
      m4.compose(v3.set(x, 0.35 + h * 0.75, z), q0, sc3.set(0.6 + h * 0.7, h, 0.6 + h * 0.7));
      bio.plants.setMatrixAt(i, m4);
    });
    bio.plants.instanceMatrix.needsUpdate = true;

    // herd, rover, dung
    look.beginFrame();
    herd.forEach((m, i) => m.update(s.animals[i], anim, time, state.selected === m.id, camera));
    rover.update(s.rover, anim, time);
    pats.forEach((p, i) => { const d = s.pats[i]; if (d) { p.position.set(d.x, 0.2, d.z); p.scale.set(1 + d.kg / 8, 0.4, 1 + d.kg / 8); } else p.position.y = -5; });

    // beads grow with camera distance so the loops stay readable from far away
    flows.update(s.paused ? 0 : dt, s, state.flowView, state.flowOnly, Math.min(2.4, Math.max(1, camera.position.length() / 26)));
    tracking.update(dt, time);
  }

  const anchors = {
    shed: new THREE.Vector3(-10, 5.3, -7.5), solar: new THREE.Vector3(PT.panel.x, 5.4, PT.panel.z - 0.6),
    water: new THREE.Vector3(2.6, 6.6, -8), monitor: new THREE.Vector3(k.x, 5.4, k.z),
    gate: new THREE.Vector3(GATE.x, 4.3, GATE.z), waste: new THREE.Vector3(PT.waste.x, 2.4, PT.waste.z),
    biogas: new THREE.Vector3(PT.digester.x, 5.6, PT.digester.z), plot: new THREE.Vector3(14.4, 3.2, 6.5),
  };
  const animalPos = (id, out) => { const a = sim.animals.find((x) => x.id === id); return a ? out.set(a.x, 0, a.z) : null; };
  return { update, state, anchors, pickables, animalPos, sun };
}
