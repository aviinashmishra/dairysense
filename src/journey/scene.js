// The outdoor world of the Cow Flow page: a physically based sky whose sun
// follows the farm clock, weather, a wind-blown pasture that travels with the
// camera, the walking track, trees and distant hills.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { canvasTex } from '../kit.js';

export const pathZ = (x) => 1.5 * Math.sin(x * 0.085);
export const pathSlope = (x) => 1.5 * 0.085 * Math.cos(x * 0.085);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
function rng(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

const TILE = [52, 36], MAX_PADS = 14;

export function createEnv(renderer, scene, pads) {
  const R = rng(42);

  // ------------------------------------------------------------ sky dome
  const sky = new Sky();
  sky.scale.setScalar(4000);
  scene.add(sky);
  const U = sky.material.uniforms;
  scene.fog = new THREE.FogExp2('#c2d9ea', 0.0035);

  const softDot = canvasTex(64, 64, (g) => { const r = g.createRadialGradient(32, 32, 0, 32, 32, 32); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.4, 'rgba(255,255,255,0.55)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); });

  // Clouds are painted onto two domes: a few fair-weather puffs that are always
  // there, and a heavy deck that closes in for cloudy and rainy days.
  const cloudTex = (count, seed, band, alpha, size) => {
    const t = canvasTex(2048, 1024, (g, w, h) => {
      const r = rng(seed);
      for (let i = 0; i < count; i++) {
        const cx = r() * w, cy = h * (band[0] + r() * (band[1] - band[0])), s = size[0] + r() * (size[1] - size[0]);
        for (let k = 0; k < 9; k++) {
          const x = cx + (r() - 0.5) * s * 3.2, y = cy + (r() - 0.5) * s * 0.7, rad = s * (0.45 + r() * 0.75);
          for (const ox of [-w, 0, w]) {
            const gr = g.createRadialGradient(x + ox, y, 0, x + ox, y, rad);
            gr.addColorStop(0, `rgba(255,255,255,${alpha})`); gr.addColorStop(0.55, `rgba(255,255,255,${alpha * 0.45})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
            g.fillStyle = gr; g.fillRect(x + ox - rad, y - rad, rad * 2, rad * 2);
          }
        }
      }
    });
    t.wrapS = THREE.RepeatWrapping; return t;
  };
  const dome = (tex, radius) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 24, 0, Math.PI * 2, 0, Math.PI * 0.52),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false, side: THREE.BackSide, fog: false, toneMapped: true }));
    m.renderOrder = -1; m.frustumCulled = false; scene.add(m); return m;
  };
  const fair = dome(cloudTex(34, 3, [0.5, 0.86], 0.34, [26, 60]), 3000);
  const deck = dome(cloudTex(170, 9, [0.05, 0.98], 0.42, [50, 120]), 2800);

  const starGeo = new THREE.BufferGeometry();
  {
    const p = [];
    for (let i = 0; i < 1400; i++) { const a = R() * Math.PI * 2, e = 0.06 + R() * 1.45; p.push(2500 * Math.cos(e) * Math.cos(a), 2500 * Math.sin(e), 2500 * Math.cos(e) * Math.sin(a)); }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  }
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#e8eeff', size: 2.2, sizeAttenuation: false, map: softDot, transparent: true, opacity: 0, depthWrite: false, fog: false }));
  stars.frustumCulled = false; scene.add(stars);
  const moon = new THREE.Mesh(new THREE.SphereGeometry(55, 24, 16), new THREE.MeshBasicMaterial({ color: '#f1f4ff', fog: false, transparent: true, opacity: 0 }));
  moon.position.set(-900, 1250, -1900); scene.add(moon);

  // ------------------------------------------------------------- lighting
  const hemi = new THREE.HemisphereLight('#bcd6f2', '#5c5a3c', 1);
  const sun = new THREE.DirectionalLight('#fff1dc', 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -17, right: 17, top: 17, bottom: -17, near: 1, far: 140 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.035;
  scene.add(hemi, sun, sun.target);

  // A soft generic-daylight environment so metal, glass and water have
  // something to reflect. Its strength follows the daylight.
  {
    const pm = new THREE.PMREMGenerator(renderer), es = new THREE.Scene();
    const g = new THREE.SphereGeometry(10, 32, 16), c = [], col = new THREE.Color(), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i) / 10;
      if (y > 0) col.set('#eef3f6').lerp(new THREE.Color('#7fb2ea'), Math.pow(y, 0.55)); else col.set('#eef3f6').lerp(new THREE.Color('#566b33'), Math.min(1, -y * 4));
      c.push(col.r, col.g, col.b);
    }
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
    es.add(new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));
    const glow = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(30, 27, 22) }));
    glow.position.set(4, 7, 5); es.add(glow);
    scene.environment = pm.fromScene(es, 0.03).texture;
    pm.dispose();
  }

  // --------------------------------------------------------------- ground
  const groundTex = canvasTex(512, 512, (g, w, h) => {
    const r = rng(8);
    g.fillStyle = '#4f7628'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { g.fillStyle = ['#45691f', '#587f2c', '#4b7024', '#63883a', '#3f611d'][i % 5]; g.globalAlpha = 0.5; g.beginPath(); g.arc(r() * w, r() * h, 1 + r() * 3.5, 0, 7); g.fill(); }
    for (let i = 0; i < 60; i++) { g.fillStyle = r() < 0.5 ? '#6b8a3a' : '#3c5a1c'; g.globalAlpha = 0.12; g.beginPath(); g.arc(r() * w, r() * h, 20 + r() * 60, 0, 7); g.fill(); }
  });
  groundTex.wrapS = groundTex.wrapT = THREE.RepeatWrapping; groundTex.repeat.set(260, 200);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(2600, 2000), new THREE.MeshLambertMaterial({ map: groundTex }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(70, 0, 0); ground.receiveShadow = true; scene.add(ground);

  // the track she walks: packed earth, a ribbon that follows pathZ()
  const dirtTex = canvasTex(256, 256, (g, w, h) => {
    const r = rng(21);
    g.fillStyle = '#8a6f4c'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { g.fillStyle = ['#7b6242', '#9a7f5a', '#6f5739', '#a58a66', '#84694a'][i % 5]; g.globalAlpha = 0.55; g.beginPath(); g.arc(r() * w, r() * h, 0.6 + r() * 3, 0, 7); g.fill(); }
    for (let i = 0; i < 26; i++) { g.fillStyle = '#5d482e'; g.globalAlpha = 0.25; g.beginPath(); g.ellipse(r() * w, r() * h, 5, 7, r() * 3, 0, 7); g.fill(); }
  });
  dirtTex.wrapS = dirtTex.wrapT = THREE.RepeatWrapping;
  const pathMat = new THREE.MeshStandardMaterial({ map: dirtTex, roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  {
    const pos = [], uv = [], idx = [], x0 = -30, x1 = 175, n = Math.round((x1 - x0) / 0.5);
    for (let i = 0; i <= n; i++) {
      const x = x0 + (i / n) * (x1 - x0), z = pathZ(x), s = pathSlope(x), k = 1 / Math.hypot(1, s), wdt = 1.12 + 0.12 * Math.sin(x * 0.7);
      pos.push(x + s * k * wdt, 0.012, z - k * wdt, x - s * k * wdt, 0.012, z + k * wdt);
      uv.push(x / 2.4, 0, x / 2.4, 1);
      if (i < n) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    const m = new THREE.Mesh(g, pathMat); m.receiveShadow = true; scene.add(m);
  }

  // --------------------------------------------------------------- pasture
  // One tile of grass blades that wraps around wherever the cow is, so the
  // field looks endless but costs a fixed number of blades.
  const padU = [];
  for (let i = 0; i < MAX_PADS; i++) { const p = pads[i]; padU.push(p ? new THREE.Vector4(p[0], p[1], p[2], p[3]) : new THREE.Vector4(0, 9999, 0, 0)); }
  const shared = { uTime: { value: 0 }, uWind: { value: new THREE.Vector2(0.5, 0.2) }, uPads: { value: padU } };
  const bladeGeo = () => {
    const g = new THREE.InstancedBufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, -0.32, 0.5, 0, 0.32, 0.5, 0, 0, 1, 0], 3));
    g.setIndex([0, 1, 2, 1, 3, 2, 2, 3, 4]);
    return g;
  };
  // Two layers: a dense patch that stays under the cow, and a sparse field of
  // broader blades that carries the pasture out to the fog.
  function grassLayer(count, tile, width, tall, centre) {
    const geo = bladeGeo(), off = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) { off[i * 3] = R() * tile[0]; off[i * 3 + 1] = R() * tile[1]; off[i * 3 + 2] = R(); }
    geo.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 3));
    geo.instanceCount = count;
    const u = { ...shared, uCenter: { value: centre }, uTile: { value: new THREE.Vector2(...tile) }, uSize: { value: new THREE.Vector2(width, tall) } };
    const mat = new THREE.MeshLambertMaterial({ color: '#ffffff', side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, u);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', `#include <common>
          attribute vec3 aOff; uniform vec2 uCenter; uniform vec2 uTile; uniform vec2 uSize; uniform float uTime; uniform vec2 uWind; uniform vec4 uPads[${MAX_PADS}];
          varying float vTip; varying float vSeed;`)
        .replace('#include <beginnormal_vertex>', 'vec3 objectNormal = vec3(0.0, 1.0, 0.0);')
        .replace('#include <begin_vertex>', `
          vec2 cell = mod(aOff.xy - uCenter + uTile * 0.5, uTile) - uTile * 0.5;
          vec2 wp = uCenter + cell;
          float edge = max(abs(cell.x) / (uTile.x * 0.5), abs(cell.y) / (uTile.y * 0.5));
          float keep = 1.0 - smoothstep(0.7, 1.0, edge);
          float rag = (fract(aOff.z * 37.0) - 0.5) * 0.8;
          keep *= smoothstep(0.95 + rag, 1.7 + rag, abs(wp.y - 1.5 * sin(wp.x * 0.085)));
          for (int i = 0; i < ${MAX_PADS}; i++) { vec2 d = abs(wp - uPads[i].xy) - uPads[i].zw; keep *= smoothstep(-0.05, 0.3 + rag * 0.3, max(d.x, d.y)); }
          float ht = (0.13 + 0.26 * aOff.z * aOff.z) * keep * uSize.y;
          float ang = aOff.z * 131.0;
          vec2 dir = vec2(cos(ang), sin(ang));
          float t = position.y;
          float gust = sin(uTime * 1.3 + wp.x * 0.22 + wp.y * 0.31) * 0.6 + sin(uTime * 2.9 + wp.x * 0.9 - wp.y * 0.6) * 0.3 + 0.35;
          vec2 bend = (uWind * gust * 0.55 + dir * 0.35) * t * t * ht;
          vec3 transformed = vec3(wp.x + dir.x * position.x * uSize.x + bend.x, t * ht * (1.0 - 0.18 * abs(gust) * t), wp.y + dir.y * position.x * uSize.x + bend.y);
          vTip = t; vSeed = aOff.z;`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vTip; varying float vSeed;')
        .replace('#include <color_fragment>', `
          vec3 gRoot = vec3(0.07, 0.17, 0.035), gTip = mix(vec3(0.30, 0.50, 0.11), vec3(0.50, 0.50, 0.17), fract(vSeed * 13.0) * 0.45);
          diffuseColor.rgb = mix(gRoot, gTip, vTip * vTip * 0.85 + 0.15 * vTip);`)
        .replace('#include <normal_fragment_begin>', 'vec3 normal = normalize( vNormal );\nvec3 nonPerturbedNormal = normal;');
    };
    const m = new THREE.Mesh(geo, mat);
    m.frustumCulled = false; m.receiveShadow = true; scene.add(m);
    return { geo, count };
  }
  const nearC = new THREE.Vector2(), farC = new THREE.Vector2();
  const gNear = grassLayer(30000, [20, 15], 0.045, 1, nearC), gFar = grassLayer(30000, TILE, 0.085, 1.12, farC);

  // ----------------------------------------------------- trees and hills
  const blob = (detail) => {
    const g = new THREE.IcosahedronGeometry(1, detail), p = g.attributes.position, nrm = g.attributes.normal, v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const d = 1 + 0.2 * Math.sin(v.x * 5.1 + v.y * 3.3) * Math.cos(v.z * 4.7 + v.x * 2.1) + 0.09 * Math.sin(v.y * 11 + v.z * 9);
      nrm.setXYZ(i, v.x, v.y * 0.8 + 0.25, v.z); v.multiplyScalar(d); p.setXYZ(i, v.x, v.y, v.z);
    }
    g.normalizeNormals(); return g;
  };
  const leafTex = canvasTex(256, 256, (g, w, h) => {
    const r = rng(31); g.fillStyle = '#9a9a9a'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { const v = 70 + r() * 185; g.fillStyle = `rgb(${v * 0.92},${v},${v * 0.8})`; g.globalAlpha = 0.75; g.beginPath(); g.ellipse(r() * w, r() * h, 2 + r() * 5, 1.5 + r() * 3, r() * 3, 0, 7); g.fill(); }
  });
  leafTex.wrapS = leafTex.wrapT = THREE.RepeatWrapping; leafTex.repeat.set(5, 3);
  const leafMat = new THREE.MeshLambertMaterial({ color: '#ffffff', map: leafTex }), barkMat = new THREE.MeshLambertMaterial({ color: '#4a3b2c' });
  const NEAR_TREES = [[-7, -11.5, 1.5], [29.5, -13, 1.3], [63.5, -7, 1.7], [76, -15, 1.2], [96, -10.5, 1.35], [108.5, -13.5, 1.2], [126, -17, 1.5], [146, -9, 1.4], [40, -16, 1.1], [-14, 9.5, 1.3], [152, 8, 1.3]];
  const FAR_TREES = []; for (let i = 0; i < 80; i++) { const far = R() < 0.62; FAR_TREES.push([-90 + R() * 330, far ? -27 - R() * 95 : 21 + R() * 60, 1.1 + R() * 1.3]); }
  function grove(list, detail, blobs, shadow) {
    const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.16, 0.26, 1, 8), barkMat, list.length);
    const canopy = new THREE.InstancedMesh(blob(detail), leafMat, list.length * blobs);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(), p = new THREE.Vector3(), col = new THREE.Color();
    let n = 0;
    list.forEach(([x, z, s], i) => {
      const hgt = 2.2 * s + R() * 0.8;
      trunks.setMatrixAt(i, m4.compose(p.set(x, hgt / 2, z), q.identity(), sc.set(s, hgt, s)));
      for (let k = 0; k < blobs; k++) {
        const top = k === blobs - 1, a = (k / (blobs - 1)) * Math.PI * 2 + R(), rr = top ? 0 : 1.15 * s * (0.6 + R() * 0.5), r = s * (top ? 1.7 : 0.95 + R() * 0.6);
        m4.compose(p.set(x + Math.cos(a) * rr, hgt + s * (top ? 1.5 : 0.4 + R() * 1.1), z + Math.sin(a) * rr), q.setFromEuler(e.set(R() * 6, R() * 6, R() * 6)), sc.set(r, r * (0.78 + R() * 0.2), r));
        canopy.setMatrixAt(n, m4);
        canopy.setColorAt(n++, col.setHSL(0.26 + R() * 0.06, 0.5 + R() * 0.2, 0.3 + R() * 0.16));
      }
    });
    trunks.castShadow = canopy.castShadow = shadow; canopy.receiveShadow = shadow;
    trunks.frustumCulled = canopy.frustumCulled = false;
    scene.add(trunks, canopy);
  }
  grove(NEAR_TREES, 2, 10, true); grove(FAR_TREES, 1, 6, false);
  const hillMat = new THREE.MeshLambertMaterial({ color: '#557a3c' });
  for (const [x, z, r, h] of [[-140, -360, 300, 0.11], [120, -420, 380, 0.13], [380, -340, 280, 0.1], [40, 420, 330, 0.09], [-260, 300, 260, 0.08], [330, 330, 300, 0.1]]) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 40, 16, 0, Math.PI * 2, 0, Math.PI / 2), hillMat); m.scale.y = h; m.position.set(x, -2, z); scene.add(m);
  }

  // ------------------------------------------------------------------ rain
  const RAIN = 1500, rainPos = new Float32Array(RAIN * 6), rainSeed = new Float32Array(RAIN * 3);
  for (let i = 0; i < RAIN * 3; i++) rainSeed[i] = R();
  const rainGeo = new THREE.BufferGeometry(); rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
  const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: '#d5e4f2', transparent: true, opacity: 0, depthWrite: false }));
  rain.frustumCulled = false; scene.add(rain);

  // ------------------------------------------------------------ the clock
  const C = (h) => new THREE.Color(h);
  const K = { night: C('#070d1c'), dusk: C('#e2a183'), day: C('#c4dbec'), grey: C('#a3adb5'), sunLow: C('#ff8d47'), sunHigh: C('#fff1dc'), moon: C('#8ea6ff'),
    hNight: C('#1b2850'), hDay: C('#bcd6f2'), gNight: C('#15130f'), gDay: C('#6c6a45'), cloudDay: C('#ffffff'), cloudDusk: C('#ffc6a0'), cloudNight: C('#1a2238'), cloudRain: C('#737e88') };
  const state = { hour: 12, elev: 1, day: 1, night: 0, overcast: 0, rain: 0, sunDir: new THREE.Vector3(0, 1, 0), wet: 0 };
  const tmp = new THREE.Color(), tmp2 = new THREE.Color(), v3 = new THREE.Vector3();

  function setTime(hour, weather, dt = 0.016) {
    const s = state, k = 1 - Math.exp(-2.2 * dt);
    s.hour = hour;
    s.overcast = lerp(s.overcast, weather === 'sunny' ? 0 : weather === 'cloudy' ? 0.8 : 1, k);
    s.rain = lerp(s.rain, weather === 'rain' ? 1 : 0, k);
    s.wet = lerp(s.wet, weather === 'rain' ? 1 : 0, 1 - Math.exp(-0.5 * dt));
    const a = (Math.PI * (hour - 6)) / 12;
    s.elev = Math.sin(a);
    s.sunDir.set(Math.cos(a), Math.sin(a) * 0.95, 0.42).normalize();
    s.day = smooth((s.elev + 0.06) / 0.34); s.night = 1 - smooth((s.elev + 0.3) / 0.26);
    const twi = smooth((s.elev + 0.24) / 0.22), high = smooth((s.elev - 0.02) / 0.3), oc = s.overcast;

    U.sunPosition.value.copy(s.sunDir);
    U.turbidity.value = lerp(4.5, 14, oc); U.rayleigh.value = lerp(lerp(2.6, 1.25, high), 0.55, oc);
    U.mieCoefficient.value = lerp(0.004, 0.012, oc); U.mieDirectionalG.value = lerp(0.82, 0.6, oc);
    renderer.toneMappingExposure = lerp(lerp(0.78, 0.46, s.day), lerp(0.7, 0.4, s.day), oc);

    tmp.copy(K.night).lerp(K.dusk, twi * (1 - oc * 0.7)).lerp(K.day, high).lerp(tmp2.copy(K.grey).multiplyScalar(0.12 + 0.88 * s.day), oc * 0.85);
    scene.fog.color.copy(tmp); scene.fog.density = lerp(0.0034, 0.0105, s.rain) + 0.002 * oc + 0.0016 * (1 - high) * twi;

    const cloud = 1 - 0.62 * oc - 0.25 * s.rain;
    if (s.elev > -0.05) {
      sun.color.copy(K.sunLow).lerp(K.sunHigh, smooth(s.elev / 0.4)); sun.intensity = 3.6 * smooth((s.elev + 0.03) / 0.22) * cloud;
      v3.copy(s.sunDir); if (v3.y < 0.09) { v3.y = 0.09; v3.normalize(); }
    } else { sun.color.copy(K.moon); sun.intensity = 0.55 * s.night * (1 - 0.6 * oc); v3.set(-0.42, 0.74, 0.5).normalize(); }
    state.lightDir = state.lightDir || new THREE.Vector3(); state.lightDir.copy(v3);
    hemi.color.copy(K.hNight).lerp(K.hDay, s.day).lerp(K.grey, oc * 0.5 * s.day); hemi.groundColor.copy(K.gNight).lerp(K.gDay, s.day);
    hemi.intensity = lerp(0.5, lerp(0.85, 1.15, oc), s.day);
    scene.environmentIntensity = lerp(0.07, lerp(0.6, 0.42, oc), s.day);

    tmp.copy(K.cloudNight).lerp(K.cloudDusk, twi).lerp(K.cloudDay, high);
    fair.material.color.copy(tmp); fair.material.opacity = 0.85 * (1 - oc) * (0.25 + 0.75 * twi);
    deck.material.color.copy(tmp).lerp(K.cloudRain, 0.35 + 0.5 * s.rain).multiplyScalar(0.3 + 0.7 * s.day); deck.material.opacity = oc * 0.96;
    stars.material.opacity = s.night * (1 - oc) * 0.95; moon.material.opacity = s.night * (1 - oc * 0.8);
    moon.visible = s.night > 0.02; stars.visible = s.night > 0.02; deck.visible = oc > 0.01;
    rain.material.opacity = 0.42 * s.rain; rain.visible = s.rain > 0.02;
    pathMat.roughness = lerp(0.95, 0.45, s.wet); pathMat.color.setScalar(lerp(1, 0.6, s.wet));
  }

  function update(dt, time, center, camera, near = center) {
    shared.uTime.value = time; farC.set(center.x, center.z); nearC.set(near.x, near.z);
    shared.uWind.value.set(0.55 + 0.5 * state.rain, 0.2);
    sun.target.position.copy(center); sun.position.copy(center).addScaledVector(state.lightDir, 70); sun.target.updateMatrixWorld();
    sky.position.copy(camera.position); fair.position.copy(camera.position); deck.position.copy(camera.position); stars.position.copy(camera.position);
    fair.rotation.y = time * 0.0035; deck.rotation.y = time * 0.006;
    if (rain.visible) {
      const c = camera.position, fall = (time * 19) % 18;
      for (let i = 0; i < RAIN; i++) {
        const x = c.x + (rainSeed[i * 3] - 0.5) * 34, z = c.z + (rainSeed[i * 3 + 2] - 0.5) * 34;
        const y = 18 - ((rainSeed[i * 3 + 1] * 18 + fall) % 18) + Math.max(0, c.y - 9);
        rainPos.set([x, y, z, x + 0.1, y - 0.75, z + 0.03], i * 6);
      }
      rainGeo.attributes.position.needsUpdate = true;
    }
  }
  const setQuality = (level) => { const k = [1, 0.66, 0.42, 0.25][Math.min(3, level)]; gNear.geo.instanceCount = Math.round(gNear.count * k); gFar.geo.instanceCount = Math.round(gFar.count * k); };
  return { setTime, update, state, sun, softDot, setQuality };
}
