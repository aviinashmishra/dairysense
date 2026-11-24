'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTwin } from '../FarmProvider';
import { Icon, Wordmark } from '../icons';
import { Labels } from '../Labels';
import { ThemeToggle } from '../Theme';
import { Toasts } from '../Toasts';
import { Ring, Seg } from '../ui';
import { CommandPalette } from './CommandPalette';
import { Console } from './Console';
import { LiveDialog } from './LiveDialog';
import { TourCard } from './TourCard';
import { hhmm } from '@/runtime/format';
import type { Twin } from '@/runtime/twin';
import type { Weather } from '@/runtime/types';

export function TwinHud() {
  const twin = useTwin();
  const [linkOpen, setLinkOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Take over the stage when the page opens; ?tour=1 starts the guided story.
  useEffect(() => {
    if (!twin) return;
    const tour = new URLSearchParams(location.search).get('tour') === '1';
    twin.enterTwin({ tour });
    if (tour) history.replaceState(null, '', location.pathname);
    else twin.welcome();
  }, [twin]);

  useEffect(() => {
    if (!twin) return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPaletteOpen((v) => !v); return; }
      const el = e.target as HTMLElement;
      if (e.ctrlKey || e.metaKey || e.altKey || el.closest('input, textarea, dialog, [role="slider"]')) return;
      const s = twin.state;
      if (e.key === 'ArrowRight' && s.tourOn) twin.goStep(s.step + 1);
      else if (e.key === 'ArrowLeft' && s.tourOn) twin.goStep(s.step - 1);
      else if (e.key === ' ' && !el.closest('button, a')) { e.preventDefault(); twin.togglePause(); }
      else if (e.key === 'f' || e.key === 'F') twin.toggleFlows();
      else if (e.key === 'l' || e.key === 'L') twin.toggleLabels();
      else if (e.key === 't' || e.key === 'T') twin.setTour(!s.tourOn);
      else if (e.key === 'Escape' && s.animal) twin.closeAnimal();
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [twin]);

  if (!twin) return <div className="hud hud--waiting"><TopBarShell /></div>;
  const s = twin.state;

  return (
    <div className="hud" data-tour={s.tourOn || undefined} data-console={s.consoleOpen || undefined}>
      <h1 className="sr-only">Dairy Sense live twin</h1>
      <Labels />
      <TopBar twin={twin} onLink={() => setLinkOpen(true)} onPalette={() => setPaletteOpen(true)} />
      {s.tourOn && <TourCard twin={twin} />}
      <Console twin={twin} />
      <KpiDock twin={twin} />
      <Toasts />
      <LiveDialog twin={twin} open={linkOpen} onClose={() => setLinkOpen(false)} />
      <CommandPalette twin={twin} open={paletteOpen} onClose={() => setPaletteOpen(false)} onLink={() => setLinkOpen(true)} />
    </div>
  );
}

function TopBarShell() {
  return (
    <header className="topbar">
      <Link href="/" className="topbar__brand" aria-label="Dairy Sense home"><Wordmark /></Link>
    </header>
  );
}

const SPEEDS = [
  { value: 0, label: 'Pause', icon: 'pause', title: 'Pause (Space)' },
  { value: 1, label: '1×' }, { value: 4, label: '4×' }, { value: 12, label: '12×' },
];
const WEATHER: { value: Weather; label: string; icon: string }[] = [
  { value: 'sunny', label: 'Sunny', icon: 'sun' }, { value: 'cloudy', label: 'Cloudy', icon: 'cloud' }, { value: 'rain', label: 'Rain', icon: 'rain' },
];

function TopBar({ twin, onLink, onPalette }: { twin: Twin; onLink: () => void; onPalette: () => void }) {
  const sim = twin.sim, s = twin.state;
  const [full, setFull] = useState(false);
  useEffect(() => {
    const on = () => setFull(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', on);
    return () => document.removeEventListener('fullscreenchange', on);
  }, []);
  const toggleFull = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.());

  return (
    <header className="topbar">
      <Link href="/" className="topbar__brand" aria-label="Dairy Sense home"><Wordmark /></Link>
      <DayDial twin={twin} />
      <div className="topbar__group">
        <Seg label="Time speed" options={SPEEDS} value={sim.paused ? 0 : sim.speed} onChange={(v) => twin.setSpeed(v)} />
        <Seg label="Weather" options={WEATHER} value={sim.weather} onChange={(v) => twin.setWeather(v)} iconOnly />
        <button type="button" className="tool tool--long" aria-pressed={sim.heatwave} onClick={() => twin.setHeat(!sim.heatwave)} title="Adds 8 °C to the weather">
          <Icon name="flame" size={16} /><span>Heat wave</span>
        </button>
      </div>
      <span className="topbar__spacer" />
      <div className="topbar__group">
        <button type="button" className="tool" aria-pressed={s.tourOn} onClick={() => twin.setTour(!s.tourOn)} title="Guided tour (T)">
          <Icon name="compass" size={16} /><span>Tour</span>
        </button>
        <button type="button" className="tool" aria-pressed={s.flows} onClick={() => twin.toggleFlows()} title="Show every energy, water, data and waste loop (F)">
          <Icon name="flows" size={16} /><span>Flows</span>
        </button>
        <button type="button" className="tool" aria-pressed={s.labels} onClick={() => twin.toggleLabels()} title="Show labels (L)">
          <Icon name="tag" size={16} /><span>Labels</span>
        </button>
        <button type="button" className="tool tool--long" aria-pressed={sim.live.on} onClick={onLink} title="Link the real ESP8266 on the physical model">
          <Icon name="chip" size={16} /><span>{sim.live.on ? 'Device live' : 'Link device'}</span>
        </button>
      </div>
      <div className="topbar__group topbar__group--tight">
        <button type="button" className="icon-btn" onClick={onPalette} aria-label="All actions" title="All actions (Ctrl K)"><Icon name="search" size={17} /></button>
        <ThemeToggle />
        <button type="button" className="icon-btn topbar__full" onClick={toggleFull} aria-label={full ? 'Leave full screen' : 'Full screen'} title="Full screen"><Icon name="expand" size={17} /></button>
      </div>
    </header>
  );
}

/** The farm clock and a 24-hour dial you can click or drag to time-lapse to any hour. */
function DayDial({ twin }: { twin: Twin }) {
  const sim = twin.sim;
  const track = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const hourAt = (clientX: number) => {
    const r = track.current!.getBoundingClientRect();
    return Math.max(0, Math.min(23.99, ((clientX - r.left) / r.width) * 24));
  };
  const icon = sim.isNight ? 'moon' : sim.weather === 'rain' ? 'rain' : sim.weather === 'cloudy' ? 'cloud' : 'sun';
  return (
    <div className="dial">
      <span className={`dial__icon dial__icon--${icon}`}><Icon name={icon} size={17} /></span>
      <span className="dial__clock">
        <b>{hhmm(sim.hour)}</b>
        <small>Day {sim.day}</small>
      </span>
      <div ref={track} className="dial__track" role="slider" tabIndex={0} aria-label="Farm time of day. Click or use arrow keys to time-lapse to an hour."
        aria-valuemin={0} aria-valuemax={24} aria-valuenow={Math.round(sim.hour)} aria-valuetext={hhmm(sim.hour)}
        onPointerMove={(e) => setHover(hourAt(e.clientX))} onPointerLeave={() => setHover(null)}
        onClick={(e) => twin.warpTo(Math.round(hourAt(e.clientX) * 4) / 4)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); twin.warpTo((Math.floor(sim.hour) + 1) % 24); }
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); twin.warpTo((Math.ceil(sim.hour) + 23) % 24); }
        }}>
        <i className="dial__milk" style={{ left: `${(6 / 24) * 100}%` }} title="Morning milking, 06:00" />
        <i className="dial__milk" style={{ left: `${(17 / 24) * 100}%` }} title="Evening milking, 17:00" />
        <i className="dial__now" style={{ left: `${(sim.hour / 24) * 100}%` }} />
        {hover != null && <span className="dial__tip" style={{ left: `${(hover / 24) * 100}%` }}>Go to {hhmm(Math.round(hover * 4) / 4)}</span>}
      </div>
      <button type="button" className="dial__skip" onClick={() => twin.toggleNight()} title={sim.isNight ? 'Skip to morning' : 'Skip to night'}>
        <Icon name={sim.isNight ? 'sun' : 'moon'} size={14} />
        <span>{sim.isNight ? 'Morning' : 'Night'}</span>
      </button>
    </div>
  );
}

function KpiDock({ twin }: { twin: Twin }) {
  const sim = twin.sim, k = sim.kpi, w = sim.water.tot, b = sim.biogas.tot;
  const tiles = [
    { icon: 'drop', label: 'Water reused', value: `${k.water.toFixed(0)}%`, sub: `${w.recycled.toFixed(0)} L saved` },
    { icon: 'bolt', label: 'Renewable', value: `${k.renewable.toFixed(0)}%`, sub: `${(sim.energy.tot.solar / 1000).toFixed(1)} kWh solar` },
    { icon: 'flame', label: 'Biogas', value: `${b.gas.toFixed(1)} m³`, sub: `${b.lpg.toFixed(1)} kg LPG replaced` },
    { icon: 'milk', label: 'Milk today', value: `${sim.milk.today.toFixed(1)} L`, sub: `${sim.milk.total.toFixed(0)} L in total` },
  ];
  return (
    <footer className="kpis" aria-label="Farm results so far">
      {tiles.map((t) => (
        <div className="kpi" key={t.label}>
          <span className="kpi__label"><Icon name={t.icon} size={13} />{t.label}</span>
          <b className="kpi__value">{t.value}</b>
          <small className="kpi__sub">{t.sub}</small>
        </div>
      ))}
      <div className="kpi kpi--score">
        <Ring value={k.score / 100} size={46} stroke={4.5}>{k.score}</Ring>
        <span>
          <span className="kpi__label">Farm score</span>
          <small className="kpi__sub">hygiene {k.hygiene.toFixed(0)} · welfare {k.welfare.toFixed(0)}</small>
        </span>
      </div>
    </footer>
  );
}
