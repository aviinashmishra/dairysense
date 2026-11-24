// Records one farm day from the real engine. The Cow Flow page scrubs through
// this recording as you scroll, and the documentation draws its charts from
// it, so every number on those pages is what the simulation actually did.
import { createSim, thi } from './sim.js';

const NUM = ['hour', 'sun', 'ambT', 'ambRH', 'shedT', 'shedRH', 'thi', 'padThi', 'solarW', 'loadW', 'genW', 'gridW', 'bat',
  'storage', 'collection', 'trough', 'gas', 'substrate', 'compost', 'inlet', 'pats', 'biomass', 'moisture', 'soil',
  'feedTrough', 'feedStore', 'milkToday', 'inShed', 'crossings', 'score', 'kWater', 'kRenew',
  'recycled', 'fresh', 'rain', 'solarWh', 'loadWh', 'gridWh', 'gasMade', 'dung', 'collected', 'lpg', 'milkTotal', 'homeFeed',
  'cTemp', 'cHr', 'cAct', 'cRum', 'cHealth', 'cStress', 'cMilk'];

export function recordDay({ weather = 'sunny', heatwave = false, from = 4.5, hours = 19, step = 0.05, cow = 0 } = {}) {
  const s = createSim();
  s.advance(((from - s.hour) % 24 + 24) % 24);
  s.weather = weather; s.heatwave = heatwave;
  const base = {
    recycled: s.water.tot.recycled, fresh: s.water.tot.fresh, rain: s.water.tot.rain, solar: s.energy.tot.solar, load: s.energy.tot.load,
    grid: s.energy.tot.grid, gas: s.biogas.tot.gas, dung: s.biogas.tot.dung, collected: s.biogas.tot.collected, lpg: s.biogas.tot.lpg,
    milk: s.milk.total, home: s.feed.tot.home, cross: s.gate.crossings,
  };
  const cloud = weather === 'sunny' ? 1 : weather === 'cloudy' ? 0.36 : 0.14;
  const rows = [], events = [];
  const seen = new Set(s.alerts.map((a) => a.id));
  const n = Math.round(hours / step);
  for (let i = 0; i <= n; i++) {
    if (i) s.advance(step);
    const c = s.climate, e = s.energy, w = s.water, b = s.biogas, a = s.animals[cow];
    rows.push({
      hour: from + i * step, sun: s.sun, isNight: s.isNight,
      ambT: c.ambT, ambRH: c.ambRH, shedT: c.shedT, shedRH: c.shedRH, thi: c.thi, padThi: thi(c.ambT + 2.2 * s.sun * cloud, c.ambRH), cooling: c.cooling,
      solarW: e.solarW, loadW: e.loadW, genW: e.genW, gridW: e.gridW, bat: e.batWh / e.batCap, lights: e.lights,
      storage: w.storage, collection: w.collection, trough: w.trough, pump: w.pump, washing: w.washing > 0, irrigating: w.irrigating,
      fogging: w.fogging, topup: w.topup, raining: w.raining,
      gas: b.gas, substrate: b.substrate, compost: b.compost, inlet: b.inlet, stove: b.stove, gen: b.gen, pats: s.pats.length, rover: s.rover.state,
      biomass: s.plot.biomass, moisture: s.plot.moisture, soil: s.plot.soil, feedTrough: s.feed.trough, feedStore: s.feed.store,
      milkToday: s.milk.today, milking: s.milk.milking, inShed: s.gate.inShed, crossings: s.gate.crossings - base.cross,
      score: s.kpi.score, kWater: s.kpi.water, kRenew: s.kpi.renewable,
      recycled: w.tot.recycled - base.recycled, fresh: w.tot.fresh - base.fresh, rain: w.tot.rain - base.rain,
      solarWh: e.tot.solar - base.solar, loadWh: e.tot.load - base.load, gridWh: e.tot.grid - base.grid,
      gasMade: b.tot.gas - base.gas, dung: b.tot.dung - base.dung, collected: b.tot.collected - base.collected, lpg: b.tot.lpg - base.lpg,
      milkTotal: s.milk.total - base.milk, homeFeed: s.feed.tot.home - base.home,
      cTemp: a.temp, cHr: a.hr, cAct: a.act, cRum: a.rum, cHealth: a.ai.health, cStress: a.stress, cMilk: a.lastMilk,
      cState: a.state, cLabel: a.ai.label, cKey: a.ai.flagged ? a.ai.key : 'healthy', cAdvice: a.ai.advice, cZone: s.zoneOf(a),
    });
    for (const al of s.alerts) if (!seen.has(al.id)) { seen.add(al.id); events.push({ hour: from + i * step, level: al.level, title: al.title, body: al.body }); }
  }
  const a = s.animals[cow];
  return {
    from, hours, step, rows, events, weather, heatwave,
    cow: { id: a.id, name: a.name, breed: a.breed, kind: a.kind, baseTemp: a.baseTemp, baseHr: a.baseHr, heatTol: a.heatTol, milk: a.milk },
    herd: s.animals.map((x) => ({ id: x.id, name: x.name, breed: x.breed, kind: x.kind, coat: x.coat })),
    panelPeak: s.energy.panelPeak, batCap: s.energy.batCap, storageCap: s.water.storageCap, collectionCap: s.water.collectionCap, gasCap: s.biogas.gasCap,
  };
}

// Reading at any hour inside the recording. Numbers are interpolated; switches
// and text come from the sample just before.
export function sample(trace, hour) {
  const f = Math.min(trace.rows.length - 1, Math.max(0, (hour - trace.from) / trace.step));
  const i = Math.min(trace.rows.length - 2, Math.floor(f)), k = f - i, a = trace.rows[i], b = trace.rows[i + 1];
  const out = { ...(k < 0.5 ? a : b) };
  for (const key of NUM) out[key] = a[key] + (b[key] - a[key]) * k;
  return out;
}
