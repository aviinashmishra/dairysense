'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useTwin, useTwinStatic } from '../FarmProvider';
import { Icon, Wordmark } from '../icons';
import { Labels } from '../Labels';
import { ThemeToggle, useTheme } from '../Theme';
import { Ring, Status } from '../ui';
import { AI_STATUS, FLOW, STATE_TEXT, hhmm, thiBand } from '@/runtime/format';
import type { Twin } from '@/runtime/twin';
import type { FlowKey, Sim } from '@/runtime/types';

// ------------------------------------------------------------- content
interface Stat { label: string; value: (s: Sim) => string; note?: (s: Sim) => string }
interface ChapterCopy {
  id: string; side: 'left' | 'right'; flow: FlowKey; loop: string; title: ReactNode; body: string; stats: Stat[];
}

const pct = (v: number) => `${v.toFixed(0)}%`;

const CHAPTERS: ChapterCopy[] = [
  {
    id: 'energy', side: 'left', flow: 'energy', loop: 'Energy loop',
    title: <>Sun in, <i>grid out.</i></>,
    body: 'An 800 W panel charges a 3 kWh battery by day. After sunset the lights switch themselves on and run from what the sun left behind. On dull days a biogas generator covers the gap.',
    stats: [
      { label: 'Solar right now', value: (s) => `${s.energy.solarW.toFixed(0)} W` },
      { label: 'Battery', value: (s) => pct((100 * s.energy.batWh) / s.energy.batCap), note: (s) => (s.energy.solarW + s.energy.genW > s.energy.loadW + 5 ? 'charging' : 'discharging') },
      { label: 'Farm load', value: (s) => `${s.energy.loadW.toFixed(0)} W`, note: (s) => (s.energy.lights ? 'lights on' : 'lights off') },
      { label: 'Renewable share', value: (s) => pct(s.kpi.renewable) },
    ],
  },
  {
    id: 'water', side: 'right', flow: 'water', loop: 'Water loop',
    title: <>Every litre <i>works twice.</i></>,
    body: 'Wash water and roof rain drain into a collection tank, pass through gravel, sand and charcoal, and are pumped back up for washing, cooling and the fodder plot. Drinking water always comes from the fresh line.',
    stats: [
      { label: 'Filtered and stored', value: (s) => `${s.water.storage.toFixed(0)} L` },
      { label: 'Waiting to be filtered', value: (s) => `${s.water.collection.toFixed(0)} L` },
      { label: 'Recycled so far', value: (s) => `${s.water.tot.recycled.toFixed(0)} L` },
      { label: 'Pump', value: (s) => (s.water.pump ? 'Running' : 'Idle'), note: (s) => (s.water.washing > 0 ? 'shed wash under way' : s.water.raining ? 'harvesting rain' : 'L293D driver') },
    ],
  },
  {
    id: 'sensing', side: 'left', flow: 'data', loop: 'Data loop',
    title: <>The shed <i>reports in.</i></>,
    body: 'A DHT11 sensor reads temperature and humidity, an ESP8266 sends them to the farmer’s phone, and an infrared beam at the gate counts every animal in and out. When the heat index climbs, fans and foggers start without being asked.',
    stats: [
      { label: 'Shed temperature', value: (s) => `${s.climate.shedT.toFixed(1)} °C` },
      { label: 'Humidity', value: (s) => pct(s.climate.shedRH) },
      { label: 'Heat index (THI)', value: (s) => s.climate.thi.toFixed(0), note: (s) => thiBand(s.climate.thi).label.toLowerCase() },
      { label: 'In shed / paddock', value: (s) => `${s.gate.inShed} / ${s.animals.length - s.gate.inShed}`, note: (s) => `${s.gate.crossings} gate crossings` },
    ],
  },
  {
    id: 'herd', side: 'right', flow: 'data', loop: 'Herd health',
    title: <>A belt that knows <i>her normal.</i></>,
    body: 'Each animal wears a belt that reads body temperature, heart rate, activity, rumination and GPS. The AI learns that animal’s own baseline, so it can flag fever, heat stress and estrus hours before a person would notice.',
    stats: [],
  },
  {
    id: 'waste', side: 'left', flow: 'waste', loop: 'Waste loop',
    title: <>Dung is <i>not waste</i> here.</>,
    body: 'A rover collects it. A floating-drum digester turns it into cooking gas and backup power, and the left-over slurry becomes compost for the fodder plot that feeds the herd.',
    stats: [
      { label: 'Gas in the holder', value: (s) => `${s.biogas.gas.toFixed(1)} m³`, note: (s) => (s.biogas.stove ? 'stove burning' : s.biogas.gen ? 'generator running' : 'drum rises as it fills') },
      { label: 'LPG replaced', value: (s) => `${s.biogas.tot.lpg.toFixed(1)} kg` },
      { label: 'Compost ready', value: (s) => `${s.biogas.compost.toFixed(0)} kg` },
      { label: 'Fodder crop', value: (s) => pct(s.plot.biomass * 100), note: (s) => `${s.plot.harvests} harvests so far` },
    ],
  },
];

const RAIL = [{ id: 'hero', label: 'The farm' }, ...CHAPTERS.map((c) => ({ id: c.id, label: c.loop })), { id: 'connect', label: 'All together' }];

const TEAM = ['Siddhi Keshari', 'Vaibhav Laxmi Pandey', 'Sakshi Devi', 'Tanu Yadav', 'Arya Gupta'];

const PARTS = [
  { icon: 'thermo', name: 'DHT11', role: 'Reads shed temperature and humidity, the two inputs of the heat-stress index.' },
  { icon: 'wifi', name: 'ESP8266', role: 'Hosts its own Wi-Fi hotspot and serves the readings as JSON to the phone and this twin.' },
  { icon: 'drop', name: 'L293D', role: 'Motor driver that switches the water pump when the controller, or you, say so.' },
  { icon: 'pin', name: 'IR sensor', role: 'A beam across the gate. Each break is one animal walking in or out.' },
];

// --------------------------------------------------------------- page
export function Landing() {
  const { twin, failed } = useTwinStatic();
  const theme = useTheme();
  const router = useRouter();
  const [active, setActive] = useState('hero');
  const entered = useRef<Twin | null>(null);
  const sheet = useRef<HTMLDivElement>(null);

  // Take the stage as a backdrop. Light theme is day on the farm, dark theme is night.
  useEffect(() => {
    if (!twin) return;
    const sky = theme === 'dark' ? 'night' : 'day';
    if (entered.current !== twin) { entered.current = twin; twin.enterLanding(sky); } else twin.setSky(sky);
  }, [twin, theme]);

  // The chapter crossing the middle of the screen is the one the camera visits.
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-chapter]');
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.chapter!);
    }, { rootMargin: '-50% 0px -50% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!twin) return;
    const apply = () => {
      const W = innerWidth, H = innerHeight, wide = W > 900;
      const side = active === 'connect' ? 'right' : CHAPTERS.find((c) => c.id === active)?.side;
      if (active === 'hero') twin.setInsets(wide ? { left: W * 0.47, right: 0, top: 70, bottom: 120 } : { left: 0, right: 0, top: 50, bottom: H * 0.56 });
      else if (wide) twin.setInsets({ left: side === 'left' ? 540 : 0, right: side === 'right' ? 540 : 0, top: 70, bottom: 30 });
      else twin.setInsets({ left: 0, right: 0, top: 50, bottom: H * 0.52 });
      twin.showChapter(active);
    };
    apply();
    addEventListener('resize', apply);
    return () => removeEventListener('resize', apply);
  }, [twin, active]);

  // Once the page's solid half covers the canvas, stop drawing 3D nobody can see.
  useEffect(() => {
    if (!twin) return;
    let covered = false;
    const onScroll = () => {
      const now = (sheet.current?.getBoundingClientRect().top ?? 1) <= 0;
      if (now !== covered) { covered = now; twin.stage.setRendering(!covered); }
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => { removeEventListener('scroll', onScroll); twin.stage.setRendering(true); };
  }, [twin]);

  const openAnimal = (id: string) => {
    if (twin) { twin.state.animal = id; twin.state.focus = id; twin.state.tab = 'herd'; twin.state.consoleOpen = true; }
    router.push('/farm');
  };

  return (
    <div className="landing" data-active={active}>
      <Labels />
      <SiteNav />

      <main>
        <section className="hero" data-chapter="hero" id="top">
          <div className="hero__scrim" aria-hidden="true" />
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow"><span className="live-dot" aria-hidden="true" />National Milk Day 2026 · Science project</p>
            <h1><span>The dairy farm</span> <span>that wastes</span> <i>nothing.</i></h1>
            <p className="hero__sub">
              Dairy Sense is a working 3D twin of a sustainable smart dairy farm. Sunlight, water, dung and sensor data move in closed loops, and every number on this page is being simulated as you read it.
            </p>
            <div className="hero__cta">
              <Link href="/farm?tour=1" className="btn btn--primary btn--lg">Start the guided tour<Icon name="arrowRight" size={18} /></Link>
              <Link href="/farm" className="btn btn--ghost btn--lg">Explore freely</Link>
            </div>
            <p className="hero__hint">
              <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={14} />
              {theme === 'dark' ? 'It is night on the farm. Switch to the light theme to bring the sun up.' : 'It is day on the farm. Switch to the dark theme to watch night fall.'}
            </p>
          </div>
          {failed && <p className="hero__fail"><Icon name="warn" size={16} />This browser could not start WebGL, which the 3D farm needs. Try a recent Chrome, Edge or Firefox with hardware acceleration switched on.</p>}
          <LiveStrip />
          <a href="#loops" className="hero__scroll"><span>Scroll to walk the loops</span><Icon name="arrowDown" size={15} /></a>
        </section>

        <div id="loops">
          {CHAPTERS.map((c, i) => <ChapterSection key={c.id} c={c} n={i + 1} active={active === c.id} />)}
        </div>

        <section className={`chapter chapter--right${active === 'connect' ? ' is-active' : ''}`} data-chapter="connect" id="connect">
          <div className="chapter__card panel">
            <p className="eyebrow"><span className="chapter__no">06</span>All together</p>
            <h2>Five loops, <i>one farm.</i></h2>
            <p>Follow the beads on the model. The output of each loop is the input of the next, which is why almost nothing leaves the farm as waste.</p>
            <ul className="legend">
              {(Object.keys(FLOW) as FlowKey[]).map((k) => <li key={k}><i style={{ background: FLOW[k].color }} />{FLOW[k].label}</li>)}
            </ul>
            <ScoreLine />
            <div className="chapter__cta">
              <Link href="/farm?tour=1" className="btn btn--primary">Take the guided tour<Icon name="arrowRight" size={16} /></Link>
              <Link href="/farm" className="btn btn--ghost">Open the live twin</Link>
            </div>
          </div>
        </section>

        <div className="sheet" ref={sheet}>
          <section className="block" id="herd">
            <header className="block__head">
              <p className="eyebrow">The herd, live</p>
              <h2>Five animals, <i>five baselines.</i></h2>
              <p>These cards read the same belts as the twin. Open any animal to see 24 hours of her vitals and what the AI makes of them.</p>
            </header>
            <HerdCards onOpen={openAnimal} />
          </section>

          <section className="block block--split" id="hardware">
            <header className="block__head">
              <p className="eyebrow">Hardware in the loop</p>
              <h2>The model on the table <i>talks to this one.</i></h2>
              <p>The physical board carries a small sensor node. Link it and the real shed sensor drives the twin’s climate, while the twin’s pump decision switches the real pump.</p>
              <ol className="steps">
                <li>Flash <code>firmware/dairy_sense_esp8266</code> to a NodeMCU.</li>
                <li>Join its hotspot, <b>DairySense</b>.</li>
                <li>In the twin, choose <b>Link device</b> and connect to <code>192.168.4.1</code>.</li>
              </ol>
              <p className="muted small">No hardware nearby? <code>npm run mock-device</code> starts a stand-in on <code>localhost:8266</code>.</p>
            </header>
            <ul className="parts">
              {PARTS.map((p) => (
                <li key={p.name} className="part">
                  <span className="part__icon"><Icon name={p.icon} size={20} /></span>
                  <b>{p.name}</b>
                  <p>{p.role}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="block team" id="team">
            <p className="eyebrow">Presented by</p>
            <ul className="team__names">
              {TEAM.map((n) => <li key={n}>{n}</li>)}
            </ul>
            <p className="team__where">United University, Prayagraj <span aria-hidden="true">·</span> National Milk Day, 26 November 2026</p>
            <div className="team__cta">
              <h2>Healthy animals, smart farming, <i>a sustainable future.</i></h2>
              <div className="hero__cta">
                <Link href="/farm?tour=1" className="btn btn--primary btn--lg">Start the guided tour<Icon name="arrowRight" size={18} /></Link>
                <Link href="/farm" className="btn btn--ghost btn--lg">Explore freely</Link>
              </div>
            </div>
          </section>

          <footer className="foot">
            <Wordmark sub />
            <nav aria-label="Footer">
              <a href="#top">Back to top</a>
              <a href="#loops">The loops</a>
              <a href="#herd">The herd</a>
              <a href="#hardware">Hardware</a>
              <Link href="/farm">Live twin</Link>
            </nav>
          </footer>
        </div>
      </main>

      <nav className="rail" aria-label="Chapters">
        {RAIL.map((r) => (
          <a key={r.id} href={r.id === 'hero' ? '#top' : `#${r.id}`} aria-current={active === r.id ? 'true' : undefined}>
            <span>{r.label}</span><i />
          </a>
        ))}
      </nav>
    </div>
  );
}

function SiteNav() {
  return (
    <header className="nav">
      <a href="#top" className="nav__brand" aria-label="Dairy Sense, back to top"><Wordmark /></a>
      <nav className="nav__links" aria-label="Sections">
        <a href="#loops">Loops</a>
        <a href="#herd">Herd</a>
        <a href="#hardware">Hardware</a>
        <a href="#team">Team</a>
      </nav>
      <div className="nav__end">
        <ThemeToggle sky />
        <Link href="/farm" className="btn btn--primary btn--sm">Open the twin<Icon name="arrowUpRight" size={15} /></Link>
      </div>
    </header>
  );
}

// ------------------------------------------------------ live fragments
function LiveStrip() {
  const twin = useTwin();
  const s = twin?.sim;
  const band = s ? thiBand(s.climate.thi) : null;
  const items: { icon: string; label: string; value: string; note?: string }[] = [
    { icon: s?.isNight ? 'moon' : 'sun', label: 'Farm time', value: s ? hhmm(s.hour) : '--:--', note: s ? `day ${s.day}` : undefined },
    { icon: 'thermo', label: 'Shed climate', value: s ? `${s.climate.shedT.toFixed(1)} °C` : '--', note: band ? `THI ${s!.climate.thi.toFixed(0)}, ${band.label.toLowerCase()}` : undefined },
    { icon: 'battery', label: 'Battery', value: s ? pct((100 * s.energy.batWh) / s.energy.batCap) : '--', note: s ? `${s.energy.solarW.toFixed(0)} W solar` : undefined },
    { icon: 'drop', label: 'Water stored', value: s ? `${s.water.storage.toFixed(0)} L` : '--', note: s ? `${s.water.tot.recycled.toFixed(0)} L recycled` : undefined },
    { icon: 'flame', label: 'Biogas', value: s ? `${s.biogas.gas.toFixed(1)} m³` : '--', note: s ? `${s.pats.length} pats waiting` : undefined },
    { icon: 'milk', label: 'Milk today', value: s ? `${s.milk.today.toFixed(1)} L` : '--', note: s ? `${s.gate.inShed} of ${s.animals.length} in shed` : undefined },
  ];
  return (
    <dl className="strip panel" aria-label="Live readings from the simulated farm">
      {items.map((it) => (
        <div key={it.label} className="strip__item">
          <dt><Icon name={it.icon} size={14} />{it.label}</dt>
          <dd><b>{it.value}</b>{it.note && <small>{it.note}</small>}</dd>
        </div>
      ))}
    </dl>
  );
}

function ChapterSection({ c, n, active }: { c: ChapterCopy; n: number; active: boolean }) {
  return (
    <section className={`chapter chapter--${c.side}${active ? ' is-active' : ''}`} data-chapter={c.id} id={c.id}>
      <div className="chapter__card panel">
        <p className="eyebrow"><span className="chapter__no">{String(n).padStart(2, '0')}</span><i className="chapter__dot" style={{ background: FLOW[c.flow].color }} />{c.loop}</p>
        <h2>{c.title}</h2>
        <p>{c.body}</p>
        {c.id === 'herd' ? <BeltDemo /> : <ChapterLive c={c} />}
      </div>
    </section>
  );
}

function ChapterLive({ c }: { c: ChapterCopy }) {
  const twin = useTwin();
  const s = twin?.sim;
  return (
    <>
      <dl className="stats">
        {c.stats.map((st) => (
          <div key={st.label}>
            <dt>{st.label}</dt>
            <dd><b>{s ? st.value(s) : '--'}</b>{s && st.note && <small>{st.note(s)}</small>}</dd>
          </div>
        ))}
      </dl>
      {twin && s && (
        <div className="chapter__try">
          <span className="eyebrow">Try it</span>
          {c.id === 'energy' && (
            <button type="button" className="btn btn--soft btn--sm" onClick={() => twin.setWeather(s.weather === 'cloudy' ? 'sunny' : 'cloudy')}>
              <Icon name={s.weather === 'cloudy' ? 'sun' : 'cloud'} size={15} />{s.weather === 'cloudy' ? 'Clear the sky' : 'Pull clouds over'}
            </button>
          )}
          {c.id === 'water' && (
            <>
              <button type="button" className="btn btn--soft btn--sm" disabled={s.water.washing > 0} onClick={() => { s.startWash(); twin.emit(); }}>
                <Icon name="wash" size={15} />{s.water.washing > 0 ? 'Washing…' : 'Wash the shed'}
              </button>
              <button type="button" className="btn btn--soft btn--sm" onClick={() => twin.setWeather(s.weather === 'rain' ? 'sunny' : 'rain')}>
                <Icon name={s.weather === 'rain' ? 'sun' : 'rain'} size={15} />{s.weather === 'rain' ? 'Stop the rain' : 'Make it rain'}
              </button>
            </>
          )}
          {c.id === 'sensing' && (
            <button type="button" className="btn btn--soft btn--sm" aria-pressed={s.heatwave} onClick={() => twin.setHeat(!s.heatwave)}>
              <Icon name="flame" size={15} />{s.heatwave ? 'End the heat wave' : 'Start a heat wave'}
            </button>
          )}
          {c.id === 'waste' && (
            <button type="button" className="btn btn--soft btn--sm" disabled={s.warp > 0} onClick={() => { s.warpBy(24); twin.emit(); }}>
              <Icon name="fast" size={15} />Fast-forward a day
            </button>
          )}
        </div>
      )}
    </>
  );
}

/** One animal's belt, live, with a fever you can cause and watch the AI catch. */
function BeltDemo() {
  const twin = useTwin();
  if (!twin) return <dl className="stats"><div><dt>Belt</dt><dd><b>--</b></dd></div></dl>;
  const s = twin.sim, a = twin.focusAnimal();
  const k = a.ai.flagged ? a.ai.key : 'healthy';
  const sick = a.cond === 'fever';
  return (
    <>
      <div className="belt">
        <span className={`avatar avatar--lg avatar--${a.coat}`} />
        <div className="belt__who"><b>{a.name}</b><small>{a.breed} {a.kind} · {STATE_TEXT[a.state]}</small></div>
        <Ring value={a.ai.health / 100} size={46} stroke={4.5}>{a.ai.health}</Ring>
      </div>
      <dl className="stats">
        <div><dt>Body temperature</dt><dd><b>{a.temp.toFixed(1)} °C</b><small>baseline {a.base.temp.toFixed(1)}</small></dd></div>
        <div><dt>Heart rate</dt><dd><b>{a.hr.toFixed(0)} bpm</b></dd></div>
        <div><dt>Rumination</dt><dd><b>{a.rum.toFixed(0)} min/h</b></dd></div>
        <div><dt>AI verdict</dt><dd><Status k={AI_STATUS[k]}>{a.ai.label}</Status></dd></div>
      </dl>
      <div className="chapter__try">
        <span className="eyebrow">Try it</span>
        {!sick && !a.ai.flagged && (
          <button type="button" className="btn btn--soft btn--sm" onClick={() => { s.inject(a.id, 'fever'); twin.emit(); }}>
            <Icon name="thermo" size={15} />Give {a.name} a fever
          </button>
        )}
        {sick && !a.ai.flagged && <span className="muted small">Nobody has been told. The belt should flag it within about two farm hours…</span>}
        {a.ai.flagged && (
          <button type="button" className="btn btn--primary btn--sm" onClick={() => { s.treat(a.id); twin.emit(); }}>
            <Icon name="heart" size={15} />Caught it. Call the vet
          </button>
        )}
      </div>
    </>
  );
}

function ScoreLine() {
  const twin = useTwin();
  const k = twin?.sim.kpi;
  return (
    <div className="scoreline">
      <Ring value={(k?.score ?? 0) / 100} size={64} stroke={5.5}>{k ? k.score : '--'}</Ring>
      <div>
        <b>Farm score</b>
        <small>{k ? `Water reuse ${pct(k.water)} · renewable power ${pct(k.renewable)} · welfare ${k.welfare.toFixed(0)} · hygiene ${k.hygiene.toFixed(0)}` : 'Starting the simulation'}</small>
      </div>
    </div>
  );
}

function HerdCards({ onOpen }: { onOpen: (id: string) => void }) {
  const twin = useTwin();
  if (!twin) return <p className="muted">Starting the simulation…</p>;
  const s = twin.sim;
  return (
    <ul className="herd">
      {s.animals.map((a) => {
        const k = a.ai.flagged ? a.ai.key : 'healthy';
        return (
          <li key={a.id}>
            <button type="button" className="herdcard" onClick={() => onOpen(a.id)}>
              <span className="herdcard__top">
                <span className={`avatar avatar--lg avatar--${a.coat}`} />
                <Ring value={a.ai.health / 100} size={44} stroke={4}>{a.ai.health}</Ring>
              </span>
              <b className="herdcard__name">{a.name}</b>
              <small className="muted">{a.id} · {a.breed} {a.kind}</small>
              <span className="herdcard__vitals">
                <span><Icon name="thermo" size={13} />{a.temp.toFixed(1)} °C</span>
                <span><Icon name="heart" size={13} />{a.hr.toFixed(0)} bpm</span>
              </span>
              <Status k={AI_STATUS[k]}>{a.ai.label}</Status>
              <small className="muted">{s.zoneOf(a)}, {STATE_TEXT[a.state]}</small>
              <span className="herdcard__open">Open her record<Icon name="arrowRight" size={13} /></span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
