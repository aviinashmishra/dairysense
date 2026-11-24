'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../icons';
import { setTheme, useTheme } from '../Theme';
import { STEPS } from '@/runtime/tour';
import type { Twin } from '@/runtime/twin';

interface Command { id: string; group: string; label: string; icon: string; hint?: string; run: () => void }

/** Every action in one searchable list: the presenter's shortcut to any demo. */
export function CommandPalette({ twin, open, onClose, onLink }: { twin: Twin; open: boolean; onClose: () => void; onLink: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const theme = useTheme();
  const [q, setQ] = useState('');
  const [at, setAt] = useState(0);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) { setQ(''); setAt(0); d.showModal(); }
    else if (!open && d.open) d.close();
  }, [open]);

  const commands = useMemo<Command[]>(() => {
    const focus = twin.focusAnimal().name;
    return [
      { id: 'milk', group: 'Scenarios', label: 'Skip to milking time', icon: 'milk', run: () => twin.runAction('milk') },
      { id: 'wash', group: 'Scenarios', label: 'Wash the shed', icon: 'wash', run: () => twin.runAction('wash') },
      { id: 'night', group: 'Scenarios', label: 'Skip to night', icon: 'moon', run: () => twin.runAction('night') },
      { id: 'morning', group: 'Scenarios', label: 'Skip to morning', icon: 'sun', run: () => twin.warpTo(8) },
      { id: 'heat', group: 'Scenarios', label: 'Start a heat wave', icon: 'flame', run: () => twin.runAction('heat') },
      { id: 'rain', group: 'Scenarios', label: 'Make it rain', icon: 'rain', run: () => twin.runAction('rain') },
      { id: 'cloudy', group: 'Scenarios', label: 'Make it cloudy', icon: 'cloud', run: () => twin.runAction('cloudy') },
      { id: 'day', group: 'Scenarios', label: 'Back to a calm sunny day', icon: 'sun', run: () => twin.runAction('day') },
      { id: 'fast', group: 'Scenarios', label: 'Fast-forward one farm day', icon: 'fast', run: () => twin.runAction('fast') },
      { id: 'fever', group: 'Herd', label: `Give ${focus} a fever`, icon: 'thermo', run: () => twin.runAction('fever') },
      { id: 'estrus', group: 'Herd', label: `Simulate heat (estrus) in ${focus}`, icon: 'pulse', run: () => twin.runAction('estrus') },
      { id: 'treat', group: 'Herd', label: `Call the vet for ${focus}`, icon: 'heart', run: () => twin.runAction('treat') },
      ...twin.sim.animals.map((a) => ({ id: `cow-${a.id}`, group: 'Herd', label: `Open ${a.name}’s health record`, icon: 'herd', hint: `${a.breed} ${a.kind}`, run: () => twin.openAnimal(a.id) })),
      ...STEPS.map((st, i) => ({ id: `step-${st.id}`, group: 'Guided tour', label: `${st.badge === '✓' ? '' : `${st.badge}. `}${st.title}`, icon: 'compass', run: () => twin.goStep(i) })),
      { id: 'tour', group: 'View', label: twin.state.tourOn ? 'Close the guided tour' : 'Start the guided tour', icon: 'compass', hint: 'T', run: () => twin.setTour(!twin.state.tourOn) },
      { id: 'overview', group: 'View', label: 'Fly back to the whole farm', icon: 'home', run: () => twin.overview() },
      { id: 'flows', group: 'View', label: 'Toggle resource flows', icon: 'flows', hint: 'F', run: () => twin.toggleFlows() },
      { id: 'labels', group: 'View', label: 'Toggle labels', icon: 'tag', hint: 'L', run: () => twin.toggleLabels() },
      { id: 'pause', group: 'View', label: twin.sim.paused ? 'Resume time' : 'Pause time', icon: twin.sim.paused ? 'play' : 'pause', hint: 'Space', run: () => twin.togglePause() },
      { id: 'pump', group: 'View', label: 'Switch the pump by hand', icon: 'drop', run: () => twin.runAction('pump') },
      { id: 'alerts', group: 'View', label: 'Open alerts', icon: 'bell', run: () => twin.showTab('alerts') },
      { id: 'theme', group: 'App', label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme', icon: theme === 'dark' ? 'sun' : 'moon', run: () => setTheme(theme === 'dark' ? 'light' : 'dark') },
      { id: 'link', group: 'App', label: 'Link the physical model (ESP8266)', icon: 'chip', run: onLink },
      { id: 'home', group: 'App', label: 'Back to the front page', icon: 'arrowLeft', run: () => router.push('/') },
    ];
    // Rebuilt each time the palette opens, so labels reflect the current state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, theme]);

  const shown = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    return commands.filter((c) => words.every((w) => `${c.group} ${c.label}`.toLowerCase().includes(w)));
  }, [commands, q]);
  const cur = Math.min(at, Math.max(0, shown.length - 1));

  useEffect(() => {
    list.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [cur, q]);

  const run = (c?: Command) => { if (!c) return; onClose(); c.run(); };

  return (
    <dialog ref={ref} className="modal modal--top" onClose={onClose} onClick={(e) => { if (e.target === ref.current) onClose(); }} aria-label="All actions">
      <div className="palette">
        <label className="palette__search">
          <Icon name="search" size={18} />
          <input value={q} placeholder="Search actions, animals, tour stops" aria-label="Search actions" autoFocus spellCheck={false}
            role="combobox" aria-expanded="true" aria-controls="palette-list" aria-activedescendant={shown[cur] ? `cmd-${shown[cur].id}` : undefined}
            onChange={(e) => { setQ(e.target.value); setAt(0); }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') { e.preventDefault(); setAt((cur + 1) % Math.max(1, shown.length)); }
              else if (e.key === 'ArrowUp') { e.preventDefault(); setAt((cur - 1 + shown.length) % Math.max(1, shown.length)); }
              else if (e.key === 'Enter') { e.preventDefault(); run(shown[cur]); }
            }} />
          <kbd>Esc</kbd>
        </label>
        <div className="palette__list" id="palette-list" role="listbox" ref={list}>
          {shown.length === 0 && <p className="empty">Nothing matches “{q}”.</p>}
          {shown.map((c, i) => (
            <div key={c.id}>
              {(i === 0 || shown[i - 1].group !== c.group) && <p className="eyebrow palette__group">{c.group}</p>}
              <button type="button" id={`cmd-${c.id}`} role="option" aria-selected={i === cur} className="palette__item"
                onPointerMove={() => setAt(i)} onClick={() => run(c)}>
                <Icon name={c.icon} size={16} />
                <span>{c.label}</span>
                {c.hint && <kbd>{c.hint}</kbd>}
              </button>
            </div>
          ))}
        </div>
        <footer className="palette__foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>Enter</kbd> run</span><span><kbd>←</kbd><kbd>→</kbd> tour stops</span><span><kbd>Space</kbd> pause</span>
        </footer>
      </div>
    </dialog>
  );
}
