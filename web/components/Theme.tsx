'use client';

import { useSyncExternalStore } from 'react';
import { Icon } from './icons';

export type Theme = 'light' | 'dark';

const KEY = 'ds-theme';
const listeners = new Set<() => void>();
const read = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
const subscribe = (cb: () => void) => { listeners.add(cb); return () => { listeners.delete(cb); }; };

export function setTheme(next: Theme) {
  const root = document.documentElement;
  // A short cross-fade, only while switching, so nothing animates on first paint.
  root.classList.add('theme-anim');
  window.setTimeout(() => root.classList.remove('theme-anim'), 650);
  root.dataset.theme = next;
  try { localStorage.setItem(KEY, next); } catch { /* private mode: the choice lasts for this visit */ }
  listeners.forEach((l) => l());
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, read, () => 'light');
}

// Runs before first paint so the page never flashes the wrong theme.
export const themeScript = `(function(){var t;try{t=localStorage.getItem('${KEY}')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t})()`;

export function ThemeToggle({ sky = false }: { sky?: boolean }) {
  const theme = useTheme();
  const next: Theme = theme === 'dark' ? 'light' : 'dark';
  const label = sky
    ? (next === 'dark' ? 'Switch to night' : 'Switch to day')
    : (next === 'dark' ? 'Switch to dark theme' : 'Switch to light theme');
  return (
    <button type="button" className="theme-toggle" data-theme-now={theme} onClick={() => setTheme(next)} aria-label={label} title={label}>
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">
          <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={14} />
        </span>
      </span>
    </button>
  );
}
