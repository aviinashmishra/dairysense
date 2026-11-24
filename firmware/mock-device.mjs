// Stand-in for the ESP8266 node, for trying "Link device" without hardware.
//   npm run mock-device      then connect the twin to   localhost:8266
// Serves the same API as firmware/dairy_sense_esp8266: a warm, humid shed whose
// temperature drifts, an IR beam that trips now and then, and a pump switch.
import http from 'node:http';

const PORT = +process.env.PORT || 8266;
const state = { pump: false, crossings: 0, ir: false, start: Date.now() };
setInterval(() => { if (Math.random() < 0.25) { state.ir = true; state.crossings++; } }, 4000);

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Private-Network', 'true');
  res.setHeader('Cache-Control', 'no-store');
  if (url.pathname === '/api/pump' && url.searchParams.has('on')) {
    state.pump = url.searchParams.get('on') === '1';
    console.log(new Date().toLocaleTimeString(), 'pump', state.pump ? 'ON' : 'OFF');
  } else if (url.pathname !== '/api/state' && url.pathname !== '/api/pump') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end('{"error":"not found"}');
  }
  const up = (Date.now() - state.start) / 1000;
  const body = JSON.stringify({
    temp: +(33.5 + 2.5 * Math.sin(up / 20)).toFixed(1), hum: Math.round(58 + 6 * Math.cos(up / 27)),
    pump: state.pump, ir: state.ir, crossings: state.crossings, uptime: Math.round(up),
  });
  if (url.pathname === '/api/state') state.ir = false;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(body);
}).listen(PORT, () => console.log(`Mock Dairy Sense node on http://localhost:${PORT}  (connect the twin to localhost:${PORT})`));
