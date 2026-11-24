// Shared geometry of the model board. 1 unit = 1 inch, so the board is the
// 3 x 2 ft base from the project (36 x 24). x runs left-right, z back-front.
export const BOARD = { w: 36, d: 24 };

export const SHED = { x0: -16, x1: -4, z0: -10.5, z1: -4, hFront: 4.3, hBack: 2.5 };
export const PADDOCK = { x0: -16.6, x1: -1.6, z0: -3.4, z1: 10.4 };
export const GATE = { x: -10, z: -3.4, w: 3 };

export const FEED = { x0: -15.2, x1: -9.0, z: -9.75 };
export const TROUGH = { x0: -7.7, x1: -4.8, z: -9.75 };

export const PT = {
  collection: { x: -1.0, z: -9.3 },
  filter: { x: 1.9, z: -9.3 },
  pump: { x: 3.6, z: -9.3 },
  storage: { x: 4.9, z: -6.4 },
  panel: { x: 12.2, z: -8.6 },
  battery: { x: 8.3, z: -5.6 },
  kiosk: { x: 2.6, z: -1.6 },
  waste: { x: 0.9, z: 4.6 },
  dock: { x: -2.9, z: 4.6 },
  digester: { x: 5.4, z: 5.8 },
  stove: { x: 9.6, z: 3.4 },
  generator: { x: 10.2, z: -2.4 },
  compost: { x: 9.8, z: 8.8 },
};
export const PLOT = { x0: 12.4, x1: 17.0, z0: 1.0, z1: 10.6 };

// ---- GPS world: the 36 x 24 board stands for a 72 x 48 m farm in Prayagraj
export const M_PER_UNIT = 2;
export const ORIGIN = { lat: 25.4358, lon: 81.8463 };
export const toLatLon = (x, z) => ({ lat: ORIGIN.lat - (z * M_PER_UNIT) / 111320, lon: ORIGIN.lon + (x * M_PER_UNIT) / 100530 });
// Virtual fence: the paddock is two grazing cells; the strip by the gate stays open.
export const SPLIT_X = (PADDOCK.x0 + PADDOCK.x1) / 2;
export const LANE_Z = 0.2;
export const SIDE_GATE = { x: PADDOCK.x1, z0: 0.6, z1: 2.4 };
export const STRAY = { x: 4.9, z: 1.5 };
// Geofence: shed + paddock are the safe zone.
export const inSafeZone = (p, m = 0) =>
  (p.x >= SHED.x0 - m && p.x <= SHED.x1 + m && p.z >= SHED.z0 - m && p.z <= GATE.z + m) ||
  (p.x >= PADDOCK.x0 - m && p.x <= PADDOCK.x1 + m && p.z >= GATE.z - m && p.z <= PADDOCK.z1 + m);
export const cellOf = (p) => (p.x < SPLIT_X ? 'west' : 'east');

export const feedSlot = (i) => ({ x: FEED.x0 + 0.7 + i * 1.22, z: FEED.z + 1.55 });
export const waterSlot = (i) => ({ x: TROUGH.x0 + 0.75 + i * 1.4, z: TROUGH.z + 1.55 });
export const restSpot = (i) => ({ x: -14.6 + i * 2.4, z: -5.9 });

// Animals and the rover can only pass between shed and paddock through the gate.
export function route(from, to) {
  const a = from.z < GATE.z, b = to.z < GATE.z;
  if (a === b) return [{ x: to.x, z: to.z }];
  const inside = { x: GATE.x, z: GATE.z - 0.9 }, outside = { x: GATE.x, z: GATE.z + 0.9 };
  return a ? [inside, outside, { x: to.x, z: to.z }] : [outside, inside, { x: to.x, z: to.z }];
}

export function clampToZone(p) {
  if (Math.abs(p.z - GATE.z) < 0.9) {
    p.x = Math.min(GATE.x + GATE.w / 2 - 0.5, Math.max(GATE.x - GATE.w / 2 + 0.5, p.x));
  } else if (p.z < GATE.z) {
    p.x = Math.min(SHED.x1 - 0.7, Math.max(SHED.x0 + 0.7, p.x));
    p.z = Math.max(SHED.z0 + 2.2, p.z);
  } else {
    p.x = Math.min(PADDOCK.x1 - 0.9, Math.max(PADDOCK.x0 + 0.9, p.x));
    p.z = Math.min(PADDOCK.z1 - 0.9, p.z);
  }
  return p;
}
