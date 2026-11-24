// Small building kit for the low-poly tabletop model.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Lambert shading: several times cheaper per pixel than PBR, which is what keeps
// the model smooth on integrated graphics.
export const mat = (color, o = {}) => {
  const { roughness, metalness, ...rest } = o;
  return new THREE.MeshLambertMaterial({ color, flatShading: true, ...rest });
};
export const glow = (color, o = {}) => new THREE.MeshBasicMaterial({ color, toneMapped: false, ...o });

export function mesh(geo, material, x = 0, y = 0, z = 0, shadow = true) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.castShadow = shadow; m.receiveShadow = shadow;
  return m;
}
export const box = (w, h, d, m, x, y, z, sh) => mesh(new THREE.BoxGeometry(w, h, d), m, x, y, z, sh);
export const cyl = (rt, rb, h, m, x, y, z, seg = 14, sh) => mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m, x, y, z, sh);
export const ball = (r, m, x, y, z, ws = 12, hs = 8, sh) => mesh(new THREE.SphereGeometry(r, ws, hs), m, x, y, z, sh);

const UP = new THREE.Vector3(0, 1, 0);
const unitCyl = new THREE.CylinderGeometry(1, 1, 1, 8);
const unitBall = new THREE.SphereGeometry(1, 8, 6);

// A run of pipe or cable through a list of [x, y, z] points.
export function pipe(points, r, material, shadow = true) {
  const g = new THREE.Group();
  const v = points.map((p) => new THREE.Vector3(...p));
  for (let i = 0; i < v.length; i++) {
    if (i > 0 && i < v.length - 1) {
      const j = mesh(unitBall, material, v[i].x, v[i].y, v[i].z, shadow);
      j.scale.setScalar(r * 1.05); g.add(j);
    }
    if (i === v.length - 1) break;
    const d = v[i + 1].clone().sub(v[i]), len = d.length();
    const m = mesh(unitCyl, material, 0, 0, 0, shadow);
    m.position.copy(v[i]).addScaledVector(d, 0.5);
    m.scale.set(r, len, r);
    m.quaternion.setFromUnitVectors(UP, d.normalize());
    g.add(m);
  }
  return g;
}

export function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function bezier(p0, p1, p2, n = 18) {
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, c = t * t;
    out.push([a * p0[0] + b * p1[0] + c * p2[0], a * p0[1] + b * p1[1] + c * p2[1], a * p0[2] + b * p1[2] + c * p2[2]]);
  }
  return out;
}

export class Polyline {
  constructor(points) {
    this.p = points.map((p) => new THREE.Vector3(...p));
    this.cum = [0];
    for (let i = 1; i < this.p.length; i++) this.cum.push(this.cum[i - 1] + this.p[i].distanceTo(this.p[i - 1]));
    this.total = this.cum[this.cum.length - 1];
  }
  at(u, out) {
    const d = u * this.total;
    let i = 1;
    while (i < this.cum.length - 1 && this.cum[i] < d) i++;
    const seg = this.cum[i] - this.cum[i - 1] || 1;
    return out.lerpVectors(this.p[i - 1], this.p[i], (d - this.cum[i - 1]) / seg);
  }
}

// Collapses every mesh under `group` that never moves into a handful of merged
// meshes. Plain-coloured parts are baked into vertex colours so they all share
// one material: hundreds of draw calls become a few. Anything flagged
// userData.dyn (and everything below it) is left alone so it can still animate.
const BAKED = {};
export function mergeStatic(group, { transparent = false } = {}) {
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert(), rel = new THREE.Matrix4();
  const buckets = new Map();
  const walk = (o) => {
    if (o !== group && o.userData.dyn) return;
    const m = o.material;
    if (o.isMesh && !o.isInstancedMesh && o.visible && m && !Array.isArray(m) && (transparent || !m.transparent)) {
      const bake = m.isMeshLambertMaterial && !m.transparent && !m.map && !m.userData.live && m.emissive.getHex() === 0;
      const key = (bake ? 'baked' + (m.flatShading ? 'F' : 'S') : m.uuid) + (o.castShadow ? 'c' : '') + (o.receiveShadow ? 'r' : '');
      if (!buckets.has(key)) buckets.set(key, { bake, items: [] });
      buckets.get(key).items.push(o);
    }
    for (const c of o.children) walk(c);
  };
  walk(group);
  for (const b of buckets.values()) {
    if (b.items.length < 2) continue;
    const geos = b.items.map((o) => {
      const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
      g.applyMatrix4(rel.multiplyMatrices(inv, o.matrixWorld));
      if (b.bake) {
        const c = o.material.color, n = g.attributes.position.count, arr = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
        g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      }
      return g;
    });
    const first = b.items[0], flat = first.material.flatShading ? 'F' : 'S';
    const material = b.bake ? (BAKED[flat] ||= new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: flat === 'F' })) : first.material;
    const merged = new THREE.Mesh(mergeGeometries(geos, false), material);
    merged.castShadow = first.castShadow; merged.receiveShadow = first.receiveShadow;
    geos.forEach((g) => g.dispose());
    for (const o of b.items) o.parent.remove(o);
    group.add(merged);
  }
}

// frame-rate independent easing factor: lerp(a, b, damp(rate, dt))
export const damp = (rate, dt) => 1 - Math.exp(-rate * dt);
export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp01 = (v) => Math.min(1, Math.max(0, v));
export function lerpAngle(a, b, t) {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}
