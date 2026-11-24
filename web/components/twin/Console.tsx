'use client';

import { Icon } from '../icons';
import { Chip, Meter, Ring, Seg, Spark, Status } from '../ui';
import { AI_STATUS, STATE_TEXT, hhmm, thiBand } from '@/runtime/format';
import type { Tab, Twin } from '@/runtime/twin';
import type { Animal, VitalKey } from '@/runtime/types';

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'farm', label: 'Farm', icon: 'gauge' }, { id: 'herd', label: 'Herd', icon: 'herd' }, { id: 'alerts', label: 'Alerts', icon: 'bell' },
];

/** The farmer's app: what the ESP8266 and the belts report, and the switches they obey. */
export function Console({ twin }: { twin: Twin }) {
  const s = twin.state, sim = twin.sim;
  const active = sim.alerts.filter((a) => a.active).length;

  if (!s.consoleOpen) {
    return (
      <button type="button" className="console-fab" onClick={() => twin.toggleConsole(true)} aria-label="Open the farmer's app">
        <Icon name="phone" size={18} />
        <span>Farmer’s app</span>
        {active > 0 && <b className="count">{active}</b>}
      </button>
    );
  }

  return (
    <aside className="console panel" aria-label="Farmer's app">
      <header className="console__bar">
        <span className="console__title"><Icon name="phone" size={16} />Farmer’s app</span>
        <span className={`sync${sim.live.on ? ' sync--live' : ''}`}><i /><span>{sim.live.on ? 'Live device' : 'ESP8266 linked'}</span></span>
        <button type="button" className="icon-btn icon-btn--bare" onClick={() => twin.toggleConsole(false)} aria-label="Hide the farmer's app" title="Hide panel"><Icon name="panel" size={16} /></button>
      </header>
      <nav className="tabs" role="tablist" aria-label="App sections">
        {TABS.map((t) => (
          <button key={t.id} type="button" role="tab" aria-selected={s.tab === t.id} onClick={() => twin.showTab(t.id)}>
            <Icon name={t.icon} size={15} />{t.label}
            {t.id === 'alerts' && active > 0 && <b className="count">{active}</b>}
          </button>
        ))}
      </nav>
      <div className="console__screen" role="tabpanel" key={s.tab + (s.tab === 'herd' ? s.animal ?? '' : '')}>
        {s.tab === 'farm' && <FarmTab twin={twin} />}
        {s.tab === 'herd' && (s.animal ? <AnimalView twin={twin} /> : <HerdList twin={twin} />)}
        {s.tab === 'alerts' && <AlertsTab twin={twin} />}
      </div>
    </aside>
  );
}

// ------------------------------------------------------------------ farm
function FarmTab({ twin }: { twin: Twin }) {
  const sim = twin.sim, c = sim.climate, e = sim.energy, w = sim.water, b = sim.biogas;
  const band = thiBand(c.thi);
  const soc = e.batWh / e.batCap, net = e.solarW + e.genW - e.loadW;
  const source = e.gridW > 0 ? 'On grid' : b.gen ? 'Biogas generator' : e.solarW > e.loadW ? 'On solar' : 'On battery';
  const waterNote = w.washing > 0 ? 'Washing the shed' : w.irrigating ? 'Irrigating the fodder plot' : w.topup ? 'Fresh top-up running' : w.raining ? 'Harvesting rain' : w.pump ? 'Filtering and pumping' : 'Idle';
  const g = sim.gate.last;

  return (
    <>
      <section className="card">
        <h3>Shed climate <span className="src">{sim.live.on ? 'Live DHT11' : 'DHT11 sensor'}</span></h3>
        <div className="pair">
          <div><b>{c.shedT.toFixed(1)}</b><small>°C</small></div>
          <div><b>{c.shedRH.toFixed(0)}</b><small>% humidity</small></div>
        </div>
        <div className="thi" title="Temperature-Humidity Index: under 72 comfortable, 72 to 78 mild stress, 79 to 88 heat stress, 89 and above danger">
          <span className="thi__scale"><i /><i /><i /><i /></span>
          <span className="thi__mark" style={{ left: `${Math.max(0, Math.min(100, ((c.thi - 60) / 36) * 100))}%` }} />
        </div>
        <div className="row">
          <Status k={band.key}>{band.label} · THI {c.thi.toFixed(0)}</Status>
          <Chip on={c.cooling} icon="fan">{c.cooling ? 'Fans + foggers on' : 'Cooling off'}</Chip>
        </div>
      </section>

      <section className="card">
        <h3>Energy</h3>
        <div className="kv"><span>Solar panel</span><b>{e.solarW.toFixed(0)} W</b></div>
        <div className="kv"><span>Farm load</span><b>{e.loadW.toFixed(0)} W</b></div>
        <Meter value={soc} tone={soc < 0.2 ? 'crit' : 'good'} label="Battery charge" thick />
        <div className="row">
          <span>Battery {(soc * 100).toFixed(0)}% · {soc > 0.995 ? 'full' : net > 5 ? 'charging' : 'discharging'}</span>
          <Chip on>{source}</Chip>
        </div>
        <div className="ctl">
          <span>Lights</span>
          <Seg size="sm" label="Lights" value={e.lightMode} onChange={(v) => { e.lightMode = v; twin.emit(); }}
            options={[{ value: 'auto', label: 'Auto' }, { value: 'on', label: 'On' }, { value: 'off', label: 'Off' }]} />
        </div>
      </section>

      <section className="card">
        <h3>Water</h3>
        <div className="tank"><span>Collection</span><Meter value={w.collection / w.collectionCap} tone="grey" label="Collection tank" /><b>{w.collection.toFixed(0)} L</b></div>
        <div className="tank"><span>Storage</span><Meter value={w.storage / w.storageCap} tone="water" label="Storage tank" /><b>{w.storage.toFixed(0)} L</b></div>
        <div className="tank"><span>Trough</span><Meter value={w.trough / w.troughCap} tone="water" label="Drinking trough" /><b>{w.trough.toFixed(0)} L</b></div>
        <div className="ctl">
          <span>Pump <small>L293D</small></span>
          <Seg size="sm" label="Pump mode" value={w.pumpMode} onChange={(v) => { w.pumpMode = v; w.pumpManual = w.pump; twin.emit(); }}
            options={[{ value: 'auto', label: 'Auto' }, { value: 'manual', label: 'Manual' }]} />
          <button type="button" className="toggle" aria-pressed={w.pump} aria-label="Pump"
            onClick={() => { w.pumpMode = 'manual'; w.pumpManual = !w.pump; twin.emit(); }}>{w.pump ? 'ON' : 'OFF'}</button>
        </div>
        <div className="row">
          <span className="muted">{waterNote}</span>
          <button type="button" className="btn btn--soft btn--xs" onClick={() => twin.runAction('wash')}><Icon name="wash" size={13} />Wash shed</button>
        </div>
      </section>

      <section className="card">
        <h3>Biogas and soil</h3>
        <div className="tank"><span>Gas holder</span><Meter value={b.gas / b.gasCap} tone="gas" label="Gas holder" /><b>{b.gas.toFixed(1)} m³</b></div>
        <div className="tank"><span>Fodder crop</span><Meter value={sim.plot.biomass} tone="fodder" label="Fodder growth" /><b>{(sim.plot.biomass * 100).toFixed(0)}%</b></div>
        <div className="kv"><span>Dung waiting / compost</span><b>{sim.pats.length} pats / {b.compost.toFixed(0)} kg</b></div>
        <div className="row row--wrap">
          <Chip on={b.stove}>{b.stove ? 'Stove burning' : 'Stove off'}</Chip>
          <Chip on={b.gen}>{b.gen ? 'Generator on' : 'Generator off'}</Chip>
          <Chip on={sim.rover.state !== 'dock'}>{sim.rover.state === 'dock' ? 'Rover docked' : 'Rover collecting'}</Chip>
        </div>
      </section>

      <section className="card">
        <h3>Gate counter <span className="src">IR sensor</span></h3>
        <div className="pair">
          <div><b>{sim.gate.inShed}</b><small>in shed</small></div>
          <div><b>{sim.animals.length - sim.gate.inShed}</b><small>in paddock</small></div>
        </div>
        <p className="muted small">{g ? `Last: ${g.name} went ${g.dir} at ${hhmm(g.t % 24)} · ${sim.gate.crossings} crossings` : 'No crossings yet'}</p>
      </section>
    </>
  );
}

// ------------------------------------------------------------------ herd
export function AiStatus({ a }: { a: Animal }) {
  const k = a.ai.flagged ? a.ai.key : 'healthy';
  return <Status k={AI_STATUS[k]}>{a.ai.label}</Status>;
}

function HerdList({ twin }: { twin: Twin }) {
  const sim = twin.sim;
  return (
    <>
      <p className="muted small pad">Live from each animal’s health belt. Open one to see her record.</p>
      {sim.animals.map((a) => (
        <button key={a.id} type="button" className="cow" onClick={() => twin.openAnimal(a.id)}>
          <span className={`avatar avatar--${a.coat}`} />
          <span className="cow__who"><b>{a.name}</b><small>{a.id} · {a.breed} {a.kind}</small></span>
          <span className="cow__vit"><AiStatus a={a} /><small>{a.temp.toFixed(1)} °C · {a.hr.toFixed(0)} bpm · {sim.zoneOf(a)}</small></span>
        </button>
      ))}
    </>
  );
}

const VITALS: { key: VitalKey; label: string; unit: string; digits: number; min: number; max: number }[] = [
  { key: 'temp', label: 'Body temperature', unit: '°C', digits: 1, min: 37.6, max: 41 },
  { key: 'hr', label: 'Heart rate', unit: 'bpm', digits: 0, min: 40, max: 110 },
  { key: 'act', label: 'Activity', unit: 'index', digits: 0, min: 0, max: 150 },
  { key: 'rum', label: 'Rumination', unit: 'min/h', digits: 0, min: 0, max: 45 },
];

function AnimalView({ twin }: { twin: Twin }) {
  const sim = twin.sim, a = sim.animals.find((x) => x.id === twin.state.animal);
  if (!a) return null;
  const k = a.ai.flagged ? a.ai.key : 'healthy';
  const treatable = a.ai.flagged && (a.cond === 'fever' || a.cond === 'estrus');
  const base: Partial<Record<VitalKey, number>> = { temp: a.base.temp, hr: a.baseHr + 5 };
  const times = a.hist.map((p) => hhmm(p.t % 24));
  const dT = a.ai.dT ?? 0, rumR = a.ai.rumR ?? 1, actR = a.ai.actR ?? 1;
  const state = a.state === 'eat' && sim.milk.milking ? 'being milked' : STATE_TEXT[a.state];

  return (
    <>
      <button type="button" className="back" onClick={() => twin.closeAnimal()}><Icon name="arrowLeft" size={14} />All animals</button>
      <section className="card">
        <div className="cowhead">
          <span className={`avatar avatar--lg avatar--${a.coat}`} />
          <div><h3>{a.name}</h3><small className="muted">{a.id} · {a.breed} {a.kind}</small></div>
          <Ring value={a.ai.health / 100} size={50} stroke={4.5}>{a.ai.health}</Ring>
        </div>
        <div className={`verdict verdict--${AI_STATUS[k]}`}>
          <div className="row">
            <AiStatus a={a} />
            {a.ai.flagged && <Chip on>AI confidence {(50 + a.ai.score * 49).toFixed(0)}%</Chip>}
          </div>
          <p>{a.ai.advice}</p>
        </div>
        <dl className="evidence" aria-label="What the AI compared">
          <div><dt>Temperature vs her baseline</dt><dd data-off={dT > 0.6 || undefined}>{dT >= 0 ? '+' : '−'}{Math.abs(dT).toFixed(1)} °C</dd></div>
          <div><dt>Rumination vs her normal</dt><dd data-off={rumR < 0.85 || undefined}>{(rumR * 100).toFixed(0)}%</dd></div>
          <div><dt>Activity vs her normal</dt><dd data-off={actR < 0.85 || (a.ai.actX ?? 0) > 1.12 || undefined}>{(actR * 100).toFixed(0)}%</dd></div>
        </dl>
        <div className="row row--start">
          <button type="button" className="btn btn--soft btn--xs" onClick={() => twin.openAnimal(a.id)}><Icon name="pin" size={13} />Find on farm</button>
          {treatable && (
            <button type="button" className="btn btn--primary btn--xs" onClick={() => { sim.treat(a.id); twin.emit(); }}>
              {k === 'estrus' ? 'Record breeding' : 'Call the vet'}
            </button>
          )}
        </div>
      </section>

      <div className="vitals">
        {VITALS.map((v) => (
          <section className="vital" key={v.key}>
            <span className="vital__label">{v.label}</span>
            <b>{a[v.key].toFixed(v.digits)} <small>{v.unit}</small></b>
            <Spark data={a.hist.map((p) => p[v.key])} times={times} min={v.min} max={v.max} base={base[v.key]} format={(x) => `${x.toFixed(v.digits)} ${v.unit}`} />
          </section>
        ))}
      </div>

      <section className="card">
        <h3>Location <span className="src">GPS</span></h3>
        <p className="muted small">{sim.zoneOf(a)} · {(25.4358 + a.z * -0.00001).toFixed(5)}° N, {(81.8463 + a.x * 0.00001).toFixed(5)}° E · {state}</p>
        <p className="muted small">{a.lastMilk ? `Last milking: ${a.lastMilk.toFixed(1)} L` : 'First milking of this session is at 06:00 or 17:00.'}</p>
      </section>

      <section className="card card--demo">
        <h3>Demonstration</h3>
        <p className="muted small">Make something go wrong and see whether the belt AI catches it.</p>
        <div className="row row--start">
          <button type="button" className="btn btn--soft btn--xs" onClick={() => twin.runAction('fever')}><Icon name="thermo" size={13} />Give her a fever</button>
          <button type="button" className="btn btn--soft btn--xs" onClick={() => twin.runAction('estrus')}><Icon name="pulse" size={13} />Simulate heat</button>
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------------------------- alerts
function AlertsTab({ twin }: { twin: Twin }) {
  const sim = twin.sim;
  const stamp = (t: number) => `Day ${Math.floor(t / 24) + 1 - sim.dayOffset}, ${hhmm(t % 24)}`;
  if (!sim.alerts.length) return <p className="empty"><Icon name="check" size={18} />No alerts yet. The farm is running normally.</p>;
  return (
    <>
      {sim.alerts.map((a) => {
        const body = (
          <>
            <span className="alert__icon"><Icon name={a.level === 'crit' ? 'crit' : a.level === 'warn' ? 'warn' : 'info'} size={14} strokeWidth={2.2} /></span>
            <span className="alert__text">
              <b>{a.title}</b>
              <small>{a.body}</small>
              <em>{stamp(a.t)}{a.active ? ' · active' : a.level === 'info' ? '' : ' · resolved'}</em>
            </span>
          </>
        );
        const cls = `alert alert--${a.level}${a.active ? ' alert--active' : ''}`;
        return a.animalId
          ? <button key={a.id} type="button" className={cls} onClick={() => twin.openAnimal(a.animalId!)}>{body}</button>
          : <div key={a.id} className={cls}>{body}</div>;
      })}
    </>
  );
}
