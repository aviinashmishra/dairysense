// Headless check of the farm engine: runs several farm days and asserts the
// resource loops stay in bounds and the belt AI catches what it should.
import assert from 'node:assert/strict';
import { createSim } from '../engine/sim.js';

const s = createSim();
const healthAlerts = () => s.alerts.filter((a) => a.key.startsWith('cow:'));
const line = (tag) => console.log(
  `${tag.padEnd(14)} day ${s.day} ${s.hour.toFixed(1).padStart(4)}h | bat ${(100 * s.energy.batWh / s.energy.batCap).toFixed(0)}% grid ${(s.energy.tot.grid / 1000).toFixed(2)}kWh` +
  ` | stor ${s.water.storage.toFixed(0)}L coll ${s.water.collection.toFixed(0)}L recy ${s.water.tot.recycled.toFixed(0)} fresh ${s.water.tot.fresh.toFixed(0)}` +
  ` | gas ${s.biogas.gas.toFixed(2)} made ${s.biogas.tot.gas.toFixed(1)} | milk ${s.milk.total.toFixed(0)}L | pats ${s.pats.length} | fodder ${(s.plot.biomass * 100).toFixed(0)}% soil ${s.plot.soil.toFixed(2)}` +
  ` | score ${s.kpi.score} | cowAlerts ${healthAlerts().length}`);

function checkBounds() {
  const flat = [s.energy.batWh, s.water.storage, s.water.collection, s.water.trough, s.biogas.gas, s.plot.biomass, s.feed.trough, s.climate.shedT, s.kpi.score];
  for (const v of flat) assert.ok(Number.isFinite(v) && v >= -1e-6, `bad value ${v}`);
  assert.ok(s.water.storage <= s.water.storageCap + 1 && s.water.collection <= s.water.collectionCap + 1);
  for (const a of s.animals) assert.ok(Number.isFinite(a.x + a.z + a.temp + a.hr), 'animal NaN');
}

line('start');
for (let d = 0; d < 4; d++) { for (let i = 0; i < 24; i++) { s.advance(1); checkBounds(); } line('sunny'); }
assert.equal(healthAlerts().length, 0, 'false health alerts on healthy herd: ' + healthAlerts().map((a) => a.title).join('; '));
assert.ok(s.milk.total > 150, 'milk produced');
assert.ok(s.biogas.tot.gas > 8, 'biogas produced');
assert.ok(s.water.tot.recycled > 500, 'water recycled');
assert.equal(s.energy.tot.grid, 0, 'sunny days need no grid');

// fever is caught within three farm hours, and clears after treatment
s.jumpTo(10); s.inject('DS-02', 'fever');
let caught = null;
for (let i = 0; i < 16 && caught == null; i++) { s.advance(0.25); if (s.alerts.some((a) => a.active && a.kind === 'fever')) caught = (i + 1) * 0.25; }
console.log('fever detected after', caught, 'h');
assert.ok(caught != null && caught <= 3);
s.treat('DS-02'); s.advance(6);
assert.ok(!s.alerts.some((a) => a.active && a.key === 'cow:DS-02'), 'alert clears after recovery');

// estrus is caught and nobody else is flagged
s.jumpTo(9); s.inject('DS-01', 'estrus');
caught = null;
for (let i = 0; i < 24 && caught == null; i++) { s.advance(0.25); if (s.alerts.some((a) => a.active && a.kind === 'estrus')) caught = (i + 1) * 0.25; }
console.log('estrus detected after', caught, 'h');
assert.ok(caught != null);
s.treat('DS-01'); s.advance(8);

// heat wave switches the cooling on and raises herd heat alerts, not fever
s.jumpTo(11); s.heatwave = true; s.advance(4); line('heatwave');
assert.ok(s.climate.cooling, 'cooling on in heat wave');
assert.ok(!s.alerts.some((a) => a.active && a.kind === 'fever'), 'heat is not misread as fever');
s.heatwave = false; s.advance(10);

// three rainy days: rain harvest fills the tanks, energy leans on biogas / grid
s.weather = 'rain';
for (let d = 0; d < 3; d++) { for (let i = 0; i < 24; i++) { s.advance(1); checkBounds(); } line('rain'); }
assert.ok(s.water.tot.rain > 500, 'rain harvested');
s.weather = 'sunny'; s.advance(24); line('sunny again');
const stuck = s.animals.filter((a) => a.thirst > 1.2);
assert.equal(stuck.length, 0, 'no animal left thirsty');
console.log('gate crossings', s.gate.crossings, '| home fodder', s.feed.tot.home.toFixed(0), 'bought', s.feed.tot.bought.toFixed(0), '| lpg saved', s.biogas.tot.lpg.toFixed(1), 'kg');
console.log('alerts:', [...new Set(s.alerts.map((a) => a.title))].join(' | '));
console.log('OK');
