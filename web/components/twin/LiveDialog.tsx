'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '../icons';
import { Status } from '../ui';
import type { Twin } from '@/runtime/twin';

/** Connects the twin to the real ESP8266 on the physical model. */
export function LiveDialog({ twin, open, onClose }: { twin: Twin; open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [addr, setAddr] = useState('192.168.4.1');
  const link = twin.state.link, on = twin.sim.live.on;
  const https = typeof location !== 'undefined' && location.protocol === 'https:';

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    else if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog ref={ref} className="modal" onClose={onClose} onClick={(e) => { if (e.target === ref.current) onClose(); }} aria-labelledby="live-title">
      <form className="modal__card" onSubmit={(e) => { e.preventDefault(); twin.connectLive(addr.trim()); }}>
        <header>
          <span className="modal__icon"><Icon name="chip" size={20} /></span>
          <div>
            <h2 id="live-title">Link the physical model</h2>
            <p className="muted">The real DHT11 drives this twin’s shed climate, and the twin’s pump logic switches the real pump through the L293D.</p>
          </div>
          <button type="button" className="icon-btn icon-btn--bare" onClick={onClose} aria-label="Close"><Icon name="x" size={16} /></button>
        </header>
        <ol className="steps">
          <li>Flash <code>firmware/dairy_sense_esp8266</code> to the ESP8266.</li>
          <li>Join its Wi-Fi hotspot <b>DairySense</b> from this computer.</li>
          <li>Connect to the address below. No hardware? Run <code>npm run mock-device</code> and use <code>localhost:8266</code>.</li>
        </ol>
        <label className="field">
          <span>Device address</span>
          <input value={addr} onChange={(e) => setAddr(e.target.value)} spellCheck={false} autoComplete="off" inputMode="url" />
        </label>
        {https && <p className="note"><Icon name="warn" size={14} />This page is on HTTPS, and browsers block it from reaching a device on plain HTTP. Run the app locally (<code>npm start</code>) to link the model.</p>}
        <p className="modal__status" aria-live="polite">
          {link.ok ? <Status k="good">{link.text}</Status> : <span className="muted">{link.text}</span>}
        </p>
        <footer>
          <button type="button" className="btn btn--ghost" onClick={() => twin.disconnectLive()} disabled={!on && !link.text.startsWith('No answer') && !link.text.startsWith('Connecting')}>Disconnect</button>
          <button type="submit" className="btn btn--primary"><Icon name="wifi" size={16} />{on ? 'Reconnect' : 'Connect'}</button>
        </footer>
      </form>
    </dialog>
  );
}
