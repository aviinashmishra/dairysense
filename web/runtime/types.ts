// Shapes of the farm engine's state as the interface reads it. The engine
// itself (web/engine/*.js) is plain JavaScript shared with the offline twin.
export type Weather = 'sunny' | 'cloudy' | 'rain';
export type AiKey = 'healthy' | 'fever' | 'heat' | 'estrus';
export type Level = 'info' | 'warn' | 'crit';
export type StatusKey = 'good' | 'warn' | 'serious' | 'crit';
export type AnimalState = 'walk' | 'graze' | 'eat' | 'drink' | 'rest' | 'idle';
export type VitalKey = 'temp' | 'hr' | 'act' | 'rum';

export interface VitalSample { t: number; temp: number; hr: number; act: number; rum: number }

export interface Animal {
  id: string; name: string; kind: 'cow' | 'buffalo'; breed: string; coat: string;
  idx: number; x: number; z: number; heading: number; state: AnimalState;
  baseTemp: number; baseHr: number; milk: number; lastMilk: number;
  thirst: number; hunger: number; cond: 'healthy' | 'fever' | 'estrus' | 'recovering';
  sick: number; estrus: number; stress: number;
  temp: number; hr: number; act: number; rum: number;
  hist: VitalSample[];
  base: { temp: number; actDay: number; actNight: number; actHi: number; rumDay: number; rumNight: number };
  ai: {
    label: string; key: AiKey; score: number; health: number; advice: string; flagged: boolean;
    dT?: number; actR?: number; rumR?: number; actX?: number;
  };
}

export interface Alert {
  id: number; key: string; level: Level; title: string; body: string; t: number; active: boolean;
  animalId?: string; kind?: AiKey;
}

export interface Sim {
  t: number; hour: number; day: number; dayOffset: number; sun: number; isNight: boolean;
  speed: number; paused: boolean; weather: Weather; heatwave: boolean; warp: number;
  climate: { ambT: number; ambRH: number; shedT: number; shedRH: number; thi: number; rawThi: number; cooling: boolean };
  energy: {
    panelPeak: number; batCap: number; batWh: number; solarW: number; loadW: number; genW: number; gridW: number;
    lights: boolean; lightMode: 'auto' | 'on' | 'off'; chiller: number;
    tot: { solar: number; gen: number; grid: number; load: number };
  };
  water: {
    storage: number; storageCap: number; collection: number; collectionCap: number; trough: number; troughCap: number;
    pump: boolean; pumpMode: 'auto' | 'manual'; pumpManual: boolean; washing: number; irrigating: boolean;
    topup: boolean; troughFill: boolean; raining: boolean; fogging: boolean;
    tot: { recycled: number; fresh: number; rain: number };
  };
  biogas: {
    inlet: number; substrate: number; gas: number; gasCap: number; feeding: boolean; stove: boolean; gen: boolean;
    compost: number; tot: { gas: number; dung: number; collected: number; lpg: number };
  };
  plot: { biomass: number; moisture: number; soil: number; applying: number; harvests: number };
  feed: { trough: number; cap: number; store: number; filling: number; tot: { home: number; bought: number } };
  milk: { today: number; total: number; milking: boolean; last: number };
  gate: { flash: number; inShed: number; crossings: number; last: { name: string; dir: 'in' | 'out'; t: number } | null };
  animals: Animal[];
  pats: { id: number; x: number; z: number; kg: number; t: number }[];
  rover: { x: number; z: number; state: 'dock' | 'toPat' | 'collect' | 'return' | 'dump'; load: number; moving: boolean };
  alerts: Alert[];
  kpi: { water: number; renewable: number; waste: number; welfare: number; hygiene: number; score: number };
  live: { on: boolean; temp: number | null; hum: number | null };
  warpTo(hour: number): void;
  warpBy(hours: number): void;
  step(dtReal: number): void;
  advance(hours: number): void;
  jumpTo(hour: number): void;
  startWash(): void;
  inject(id: string, cond: 'fever' | 'estrus'): void;
  treat(id: string): void;
  zoneOf(a: Animal): string;
}

export interface LiveLink {
  onStatus: (text: string, ok: boolean) => void;
  connect(addr: string): void;
  disconnect(quiet?: boolean): void;
}

export type FlowKey = 'energy' | 'water' | 'data' | 'waste' | 'gas' | 'fodder';

export interface Cam { pos: [number, number, number]; target: [number, number, number]; orbit?: boolean; fit?: number }

export interface Insets { left: number; right: number; top: number; bottom: number }
