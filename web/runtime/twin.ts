// The Twin controller: everything the interface can do to the farm, and the
// small amount of interface state that has to outlive a page (tour position,
// selected animal, toasts). React subscribes to it; it never imports React.
import { createStage, type Stage, type World } from './stage';
import { AUTO_DEMO, CHAPTERS, STEPS, type ActionId } from './tour';
import type { Animal, Insets, Level, Sim, Weather } from './types';

export type Mode = 'landing' | 'twin';
export type Tab = 'farm' | 'herd' | 'alerts';
export type Sky = 'day' | 'night';

export interface Toast { id: number; level: Level; title?: string; body: string; until: number; go?: () => void }

export interface TwinState {
  mode: Mode;
  tourOn: boolean; step: number; auto: boolean;
  tab: Tab; animal: string | null; focus: string;
  labels: boolean; flows: boolean; consoleOpen: boolean;
  chapter: string;
  toasts: Toast[];
  link: { text: string; ok: boolean };
}

const LANDING_SPEED = 0.5;
const NOT_LINKED = 'Not connected. The farm is running on simulated sensors.';

export class Twin {
  readonly stage: Stage;
  readonly sim: Sim;
  readonly world: World;
  readonly state: TwinState;

  private listeners = new Set<() => void>();
  private version = 0;
  private autoT = 0;
  private autoDone = false;
  private seenAlert = 0;
  private toastSeq = 0;
  private sky: Sky | null = null;
  private skyPrimed = false;
  private welcomed = false;
  private offs: (() => void)[] = [];

  constructor(stage: Stage) {
    this.stage = stage; this.sim = stage.sim; this.world = stage.world;
    this.state = {
      mode: 'landing', tourOn: false, step: 0, auto: false,
      tab: 'farm', animal: null, focus: this.sim.animals[1].id,
      labels: true, flows: false, consoleOpen: true, chapter: 'hero',
      toasts: [], link: { text: NOT_LINKED, ok: false },
    };
    stage.live.onStatus = (text, ok) => { this.state.link = { text, ok }; this.emit(); };
    this.offs.push(
      stage.onFrame((dt) => this.frame(dt)),
      stage.onTick(() => this.tick()),
      stage.onPick((id) => { if (this.state.mode === 'twin') this.openAnimal(id); }),
    );
    const onResize = () => { if (this.state.mode === 'twin') this.layout(); };
    addEventListener('resize', onResize);
    this.offs.push(() => removeEventListener('resize', onResize));
  }

  // ---------------------------------------------------------- subscription
  subscribe = (cb: () => void) => { this.listeners.add(cb); return () => { this.listeners.delete(cb); }; };
  getVersion = () => this.version;
  emit() { this.version++; this.listeners.forEach((l) => l()); }

  // --------------------------------------------------------------- toasts
  toast(body: string, level: Level = 'info', title?: string, go?: () => void) {
    const t: Toast = { id: ++this.toastSeq, level, title, body, go, until: performance.now() + 6500 };
    this.state.toasts = [t, ...this.state.toasts].slice(0, 3);
    this.emit();
  }
  /** A one-time hint for someone who arrives in the twin without the tour. */
  welcome() {
    if (this.welcomed || this.state.tourOn || this.state.animal) return;
    this.welcomed = true;
    this.toast('Drag to orbit, scroll to zoom, click an animal to read her belt. Press Ctrl K for every action.', 'info', 'The farm is yours');
  }
  dismissToast(id: number) { this.state.toasts = this.state.toasts.filter((t) => t.id !== id); this.emit(); }

  // ------------------------------------------------------ time and weather
  setSpeed(v: number) {
    if (v === 0) this.sim.paused = true; else { this.sim.paused = false; this.sim.speed = v; }
    this.emit();
  }
  togglePause() { this.sim.paused = !this.sim.paused; this.emit(); }
  setWeather(w: Weather) { this.sim.weather = w; this.emit(); }
  setHeat(on: boolean) { this.sim.heatwave = on; this.emit(); }
  warpTo(hour: number) { this.sim.paused = false; this.sim.warpTo(hour); this.emit(); }
  toggleNight() { this.warpTo(this.sim.isNight ? 9 : 20.7); }

  // ------------------------------------------------------- view switches
  toggleFlows() { this.state.flows = !this.state.flows; this.applyFlows(); this.emit(); }
  toggleLabels() { this.state.labels = !this.state.labels; this.emit(); }
  toggleConsole(open = !this.state.consoleOpen) { this.state.consoleOpen = open; this.layout(); this.emit(); }
  showTab(tab: Tab) {
    this.state.tab = tab;
    if (!this.state.consoleOpen) { this.state.consoleOpen = true; this.layout(); }
    this.emit();
  }

  private applyFlows() {
    const s = this.state, w = this.world.state;
    if (s.mode === 'landing') {
      const ch = CHAPTERS.find((c) => c.id === s.chapter);
      w.flowView = !!ch?.flowAll; w.flowOnly = ch?.flow ?? null;
    } else {
      const st = s.tourOn ? STEPS[s.step] : null;
      w.flowView = s.flows || !!st?.flowAll; w.flowOnly = st?.flow ?? null;
    }
  }

  /** How much of the window the panels cover, so the model stays centred in what is left. */
  layout() {
    const s = this.state, W = innerWidth, H = innerHeight;
    let next: Insets;
    if (W <= 820) next = { left: 0, right: 0, top: 58 + (s.tourOn ? Math.min(H * 0.3, 250) : 0), bottom: s.consoleOpen ? H * 0.42 : 56 };
    else {
      const panel = W <= 1180 ? 316 : 372;
      next = { left: s.tourOn ? panel : 0, right: s.consoleOpen ? panel : 0, top: 68, bottom: 96 };
    }
    this.stage.setInsets(next);
  }
  setInsets(next: Partial<Insets>) { this.stage.setInsets(next); }

  // -------------------------------------------------------------- actions
  focusAnimal(): Animal { return this.sim.animals.find((a) => a.id === this.state.focus) ?? this.sim.animals[1]; }

  runAction(id: ActionId) {
    const sim = this.sim, a = this.focusAnimal();
    switch (id) {
      case 'milk': this.warpTo(5.8); this.toast('It is 05:50. The herd is walking in for the morning milking.'); break;
      case 'wash': sim.startWash(); this.toast('Used water drains to the collection tank to be filtered and reused.', 'info', 'Shed wash started'); break;
      case 'night': this.warpTo(20.7); this.toast('Lights switch on automatically and run from the battery.', 'info', 'Night falls'); break;
      case 'cloudy': this.setWeather('cloudy'); this.toast('Clouds cut solar output to about a third.'); break;
      case 'rain': this.setWeather('rain'); this.toast('The shed roof gutter harvests it into the collection tank.', 'info', 'Rain'); break;
      case 'day': this.setWeather('sunny'); this.setHeat(false); if (sim.isNight) this.warpTo(9.5); break;
      case 'heat':
        this.setHeat(true);
        if (sim.hour < 10.5 || sim.hour > 15.5) this.warpTo(12);
        this.toast('Watch the THI climb, then the fans and foggers start.', 'warn', 'Heat wave'); break;
      case 'pump':
        sim.water.pumpMode = 'manual'; sim.water.pumpManual = !sim.water.pump;
        this.showTab('farm');
        this.toast(`Pump switched ${sim.water.pumpManual ? 'ON' : 'OFF'} by hand through the L293D driver.`); break;
      case 'fever':
        sim.inject(a.id, 'fever'); this.openAnimal(a.id, false);
        this.toast('Nobody has been told. Watch her belt data: the AI should flag it within about two farm hours.', 'warn', `${a.name} is developing a fever`); break;
      case 'estrus':
        sim.inject(a.id, 'estrus'); this.openAnimal(a.id, false);
        this.toast('The AI looks for restless activity with less rumination.', 'info', `${a.name} is coming into heat`); break;
      case 'treat': sim.treat(a.id); break;
      case 'fast': sim.warpBy(24); this.toast('Fast-forwarding one farm day.'); break;
    }
    this.emit();
  }

  // ---------------------------------------------------------- guided tour
  goStep(i: number) {
    const s = this.state, prev = STEPS[s.step];
    if (s.auto && this.autoDone && AUTO_DEMO[prev.id]?.[1]) this.runAction(AUTO_DEMO[prev.id][1]);
    s.step = (i + STEPS.length) % STEPS.length; this.autoT = 0; this.autoDone = false;
    if (!s.tourOn) { s.tourOn = true; this.layout(); }
    this.applyFlows();
    const st = STEPS[s.step];
    if (st.follow) {
      const a = this.focusAnimal();
      this.world.state.selected = a.id;
      this.stage.fly({ pos: [a.x + st.cam.pos[0], st.cam.pos[1], a.z + st.cam.pos[2]], target: [a.x, 1.3, a.z] }, a.id);
    } else this.stage.fly(st.cam);
    this.emit();
  }
  setTour(on: boolean) {
    const s = this.state;
    s.tourOn = on; this.layout();
    if (on) this.goStep(s.step); else { this.applyFlows(); this.stage.release(); this.emit(); }
  }
  setAuto(on: boolean) { this.state.auto = on; this.autoT = 0; this.emit(); }
  overview() { this.stage.release(); this.stage.fly({ pos: [0, 24, 36], target: [0, 0.5, 0], fit: 0.92 }); }

  // ----------------------------------------------------------------- herd
  openAnimal(id: string, fly = true) {
    const s = this.state, a = this.sim.animals.find((x) => x.id === id);
    if (!a) return;
    s.animal = id; s.focus = id; s.tab = 'herd'; this.world.state.selected = id;
    if (!s.consoleOpen) { s.consoleOpen = true; this.layout(); }
    if (fly) this.stage.fly({ pos: [a.x + 5, 4.4, a.z + 8], target: [a.x, 1.3, a.z] }, id);
    this.emit();
  }
  closeAnimal() { this.state.animal = null; this.world.state.selected = null; this.stage.release(); this.emit(); }

  // ----------------------------------------------------------- live link
  connectLive(addr: string) { this.stage.live.connect(addr); }
  disconnectLive() { this.stage.live.disconnect(); }

  // ---------------------------------------------------------------- modes
  /** The landing page: the farm is a backdrop the page drives by scrolling. */
  enterLanding(sky: Sky) {
    const s = this.state, sim = this.sim;
    s.mode = 'landing'; s.chapter = 'hero';
    this.stage.setInteractive(false);
    this.stage.setRendering(true);
    sim.paused = false; sim.speed = LANDING_SPEED;
    this.world.state.selected = null;
    this.setSky(sky);
    this.applyFlows();
    this.emit();
  }

  /** On the landing page the page theme is the farm's sky: light is day, dark is night. */
  setSky(sky: Sky) {
    const sim = this.sim, wrong = sky === 'night' ? !this.inNight() : !this.inDay();
    this.sky = sky;
    if (wrong) {
      const to = sky === 'night' ? 20.8 : 8.6;
      // The first frame simply starts at the right time; later switches play as a time-lapse.
      if (!this.skyPrimed) { sim.jumpTo(to); sim.alerts.length = 0; } else sim.warpTo(to);
    }
    this.skyPrimed = true;
  }
  private inDay() { const h = this.sim.hour; return h >= 7.4 && h <= 16.6; }
  private inNight() { const h = this.sim.hour; return h >= 20.4 || h <= 4.4; }

  showChapter(id: string) {
    const s = this.state, ch = CHAPTERS.find((c) => c.id === id);
    if (!ch || s.mode !== 'landing') return;
    s.chapter = id; this.applyFlows();
    if (ch.follow) {
      const a = this.focusAnimal();
      this.world.state.selected = a.id;
      this.stage.fly({ pos: [a.x + ch.cam.pos[0], ch.cam.pos[1], a.z + ch.cam.pos[2]], target: [a.x, 1.3, a.z] }, a.id, 2.2);
    } else {
      this.world.state.selected = null; this.stage.release();
      this.stage.fly(ch.cam, null, 2.2);
    }
    this.emit();
  }

  /** The twin itself: free camera, panels, tour. */
  enterTwin(opts: { tour?: boolean } = {}) {
    const s = this.state, sim = this.sim;
    const first = s.mode !== 'twin';
    s.mode = 'twin'; this.sky = null;
    this.stage.setInteractive(true);
    this.stage.setRendering(true);
    sim.paused = false; sim.speed = 1;
    this.world.state.selected = s.animal;
    if (innerWidth <= 820 && first) s.consoleOpen = false;
    this.layout();
    if (opts.tour) {
      // The story is told by daylight: it opens on a fresh morning.
      if (!this.inDay() || sim.hour > 12) sim.warpTo(8);
      s.step = 0; this.setTour(true);
    } else if (s.tourOn) this.goStep(s.step);
    else {
      this.applyFlows();
      if (s.animal) this.openAnimal(s.animal); else this.overview();
      this.emit();
    }
  }

  // ----------------------------------------------------------- heartbeat
  private frame(dt: number) {
    const s = this.state;
    if (s.mode !== 'twin' || !s.auto || !s.tourOn || this.sim.paused) return;
    this.autoT += dt;
    const id = STEPS[s.step].id, demo = AUTO_DEMO[id];
    if (demo && !this.autoDone && this.autoT > 4) { this.autoDone = true; this.runAction(demo[0]); }
    if (this.autoT > (id === 'belt' ? 26 : 16)) this.goStep(s.step + 1);
  }

  private tick() {
    const s = this.state, sim = this.sim, now = performance.now();
    if (s.toasts.some((t) => t.until < now)) s.toasts = s.toasts.filter((t) => t.until >= now);
    // Hold the landing page's sky: when the day (or night) runs out, time-lapse round to its start.
    if (s.mode === 'landing' && this.sky && sim.warp <= 0) {
      if (this.sky === 'day' && !this.inDay()) sim.warpTo(8.6);
      else if (this.sky === 'night' && !this.inNight()) sim.warpTo(20.8);
    }
    // Announce new alerts.
    const fresh = sim.alerts.find((a) => a.id > this.seenAlert && a.level !== 'info');
    if (sim.alerts[0]) this.seenAlert = Math.max(this.seenAlert, sim.alerts[0].id);
    if (fresh && s.mode === 'twin') {
      const t: Toast = {
        id: ++this.toastSeq, level: fresh.level, title: fresh.title, body: fresh.body, until: now + 8000,
        go: () => (fresh.animalId ? this.openAnimal(fresh.animalId) : this.showTab('alerts')),
      };
      s.toasts = [t, ...s.toasts].slice(0, 3);
    }
    this.emit();
  }

  dispose() {
    this.offs.forEach((off) => off());
    this.listeners.clear();
    this.stage.dispose();
  }
}

export function createTwin(canvas: HTMLCanvasElement) { return new Twin(createStage(canvas)); }
