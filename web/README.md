# Dairy Sense (web app)

The Next.js version of Dairy Sense: a living 3D twin of the **Sustainable Smart
Dairy Farm** science project (National Milk Day 2026, United University, Prayagraj).

It has two pages that share one running farm:

| Page | What it is |
|---|---|
| `/` | The front page. Scroll to walk the five loops; the camera flies to each part of the live model. The page theme is the farm's sky: light is day, dark is night. |
| `/farm` | The twin itself: free camera, guided tour, the farmer's app, alerts, live device link. |

## Run it

```
cd web
npm install
npm run build
npm start          # then open http://localhost:3000
```

On Windows you can instead double-click **`Start Dairy Sense.cmd`**, which does the
same and opens the browser. Once built it needs no internet (fonts are bundled).

For development use `npm run dev`.

## Controls in the twin

| Control | What it does |
|---|---|
| Drag / scroll | Orbit and zoom the board |
| Click an animal | Open her health-belt record |
| Day dial (top bar) | Click any hour to time-lapse there |
| `Ctrl K` | Every action in one searchable list |
| `←` `→` | Previous / next stop of the guided tour |
| `Space` | Pause |
| `T` / `F` / `L` | Tour / all flows / labels |

## Link the physical model

In the twin choose **Link device**. With the ESP8266 flashed from
`../firmware/dairy_sense_esp8266` and this computer on its `DairySense` hotspot,
connect to `192.168.4.1`. Without hardware, run `npm run mock-device` and connect
to `localhost:8266`.

The link is plain HTTP to a device on your own network, so use it from a local
run (`npm start`). A copy hosted on HTTPS cannot reach the device; browsers block that.

## How it is put together

```
app/          routes, layout and the three stylesheets (tokens, landing, twin)
components/   React interface: landing page, twin HUD, shared pieces
runtime/      stage.ts (renderer, camera, frame loop), twin.ts (controller), tour.ts
engine/       the farm engine and 3D model (plain JS, no React)
test/         headless check of the engine: npm test
```

The canvas and engine live in the root layout (`components/FarmProvider.tsx`), so
the farm keeps running, with its state, as you move between the two pages.
`runtime/twin.ts` is the only thing the interface talks to.

### The engine is a snapshot

`engine/*.js` is a copy of `../src/{sim,world,kit,animals,flows,layout,live}.js`
from the offline twin, taken on 24 November 2026 and left unmodified so it can be
refreshed. Features added to the offline twin after that date (GPS tracking,
cut-out cow art, the Cow Flow and documentation pages) are not in this app yet.
To bring the engine up to date, copy those files across again, then check that any
new files they import are copied too and that `npm test` and `npm run build` pass.
