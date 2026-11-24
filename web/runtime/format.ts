import type { AiKey, FlowKey, StatusKey } from './types';

export const hhmm = (h: number) =>
  `${String(Math.floor(h) % 24).padStart(2, '0')}:${String(Math.floor((h % 1) * 60)).padStart(2, '0')}`;

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Same colours as the beads that travel the pipes and wires in the 3D model.
export const FLOW: Record<FlowKey, { color: string; label: string }> = {
  energy: { color: '#f2b632', label: 'Energy' },
  water: { color: '#3aa0e0', label: 'Water' },
  data: { color: '#35c46b', label: 'Data' },
  waste: { color: '#8b5a2b', label: 'Waste' },
  gas: { color: '#ff7a3d', label: 'Biogas' },
  fodder: { color: '#8fd14f', label: 'Fodder' },
};

export const AI_STATUS: Record<AiKey, StatusKey> = { healthy: 'good', heat: 'serious', fever: 'crit', estrus: 'warn' };

export const STATE_TEXT: Record<string, string> = {
  walk: 'walking', graze: 'grazing', eat: 'feeding', drink: 'drinking', rest: 'lying down, ruminating', idle: 'standing',
};

// Temperature-Humidity Index bands, the standard dairy heat-stress measure.
export function thiBand(v: number): { key: StatusKey; label: string } {
  if (v < 72) return { key: 'good', label: 'Comfortable' };
  if (v < 79) return { key: 'warn', label: 'Mild stress' };
  if (v < 89) return { key: 'serious', label: 'Heat stress' };
  return { key: 'crit', label: 'Danger' };
}
