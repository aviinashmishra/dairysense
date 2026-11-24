// Optional link to the real ESP8266 on the physical model. The device's DHT11
// drives the twin's shed climate and its IR sensor trips the twin's gate; the
// twin's pump decision is sent back so the real pump follows it via the L293D.
export function createLive(sim) {
  const live = { onStatus: () => {}, timer: null, base: '', lastPump: null, fails: 0 };

  async function get(path) {
    const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 1800);
    try { const r = await fetch(live.base + path, { signal: ctl.signal, cache: 'no-store' }); return await r.json(); }
    finally { clearTimeout(t); }
  }

  async function poll() {
    try {
      const d = await get('/api/state');
      live.fails = 0;
      sim.live.on = true;
      if (Number.isFinite(d.temp)) sim.live.temp = d.temp;
      if (Number.isFinite(d.hum)) sim.live.hum = d.hum;
      if (d.ir) sim.gate.flash = 1;
      live.onStatus(`Connected to ${live.base.replace('http://', '')}: ${d.temp} °C, ${d.hum} % humidity, pump ${d.pump ? 'ON' : 'OFF'}.`, true);
      if (sim.water.pump !== live.lastPump) {
        live.lastPump = sim.water.pump;
        await get(`/api/pump?on=${sim.water.pump ? 1 : 0}`);
      }
    } catch (err) {
      if (++live.fails >= 3) { sim.live.on = false; sim.live.temp = null; }
      live.onStatus(`No answer from ${live.base.replace('http://', '')}. Check that this computer has joined the device's Wi-Fi. Retrying...`, false);
    }
  }

  live.connect = (addr) => {
    live.disconnect(true);
    live.base = /^https?:\/\//.test(addr) ? addr.replace(/\/$/, '') : `http://${addr}`;
    live.fails = 0; live.lastPump = null;
    live.onStatus(`Connecting to ${addr}...`, false);
    poll();
    live.timer = setInterval(poll, 2000);
  };
  live.disconnect = (quiet) => {
    clearInterval(live.timer); live.timer = null;
    sim.live.on = false; sim.live.temp = null; sim.live.hum = null;
    if (!quiet) live.onStatus('Not connected. The farm is running on simulated sensors.', false);
  };
  return live;
}
