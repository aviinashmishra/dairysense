# Dairy Sense

A living 3D digital twin of the **Sustainable Smart Dairy Farm** science project
(National Milk Day 2026, United University, Prayagraj).

The whole model board is simulated end to end: the sun charges the battery, the
battery runs the pump and lights, wash water and rain are filtered and reused,
sensors watch the shed and the herd, and dung becomes biogas, compost and fodder.

## Run it

Double-click **`index.html`**. It works offline; no server or internet needed.
Use a recent Chrome, Edge or Firefox.

There are three pages, linked to each other from their top bars:

| Page | What it is |
|---|---|
| `index.html` — Live twin | The whole model board, running live, with the guided tour and the phone app |
| `journey.html` — Cow Flow | Scroll, and Gauri the cow walks through one whole farm day, step by step |
| `docs.html` — Docs | How every part works, the hardware build, a demo script and viva questions |

Links can open the twin at a tour stop (`index.html#step=water`, ids: intro, shed,
solar, water, monitor, gate, belt, gps, biogas, connect, thanks; `#explore` skips
the splash) and Cow Flow at a stop (`journey.html#biogas`).

| Control | What it does |
|---|---|
| Drag / scroll | Orbit and zoom the board |
| Click a cow | Open her health-belt record in the phone app |
| `←` `→` | Previous / next stop of the guided tour |
| `Space` | Pause |
| `F` / `L` | Show all flows / show labels |
| `G` | Show the GPS tracking view |
| `C` | Change how the herd is coloured: coats, health, thermal |

## What is modelled

| Part of the project | In the twin |
|---|---|
| Farm base and cow shed | 3 × 2 ft board, shed, paddock, feed and water troughs; five animals follow a daily routine (graze, drink, milking at 06:00 and 17:00, rest at night) |
| Solar energy | 800 W panel, 3 kWh battery, automatic LED lights, a biogas generator as backup |
| Water recycling | Collection tank → gravel/sand/charcoal filter → pump → storage tank → shed washing, cooling foggers and fodder irrigation. Roof gutter harvests rain. Drinking water always comes from the fresh line |
| Smart monitoring | DHT11 → controller → LCD and ESP8266 → phone app. THI heat-stress index switches fans and foggers. L293D drives the pump (auto or manual) |
| Animal detection | IR beam at the gate counts animals in and out |
| AI health belt | Body temperature, heart rate, activity, rumination and GPS per animal. The AI compares each animal with her own learned baseline and flags fever, heat stress, estrus and lameness |
| GPS tracking | Every belt sends a GPS fix (accuracy drops under the shed roof). The phone's **Map** tab shows live positions, trails and a herd heat map. A geofence around shed + paddock raises an alert the moment an animal strays; "Guide back" sends the belt's audio cue. A virtual fence splits the paddock into two grazing cells and rests one while the other is grazed |
| Health tracking | Per animal: five-part health breakdown, GPS gait speed (lameness), distance from the herd (isolation), time budget, trough visits, milk-yield watch, herd register with vaccine reminders and a health record of every event. **Download report** saves it all as CSV |
| Biogas and compost | A rover collects dung → floating-drum digester → biogas for the stove and generator → slurry → compost → fodder plot → feed trough |

Time is compressed: one farm day takes about two minutes at 1x. Digester and crop
timescales are shortened so the loops can be seen in a short demonstration.

## Cow Flow (`journey.html`)

Thirteen stops in the order the farm's resources really move: waking in the
shed, the AI health belt, morning milking, wash-water recycling, the IR gate,
solar power, grazing, dung collection, biogas, cooling and monitoring, the
fodder plot, home at sunset, and night with the day's totals.

| Control | What it does |
|---|---|
| Scroll | Sets where the story should be. She walks there at a cow's pace; scroll back and she turns round |
| `→` `←` / PageDown PageUp | Next / previous stop |
| Dots at the bottom | Jump to a stop |
| Sunny / Cloudy / Rain, Heat wave | Re-runs the farm engine for that kind of day; every reading and the scene change with it |

The numbers on the cards are not written by hand. When the page opens,
`src/trace.js` runs the same engine as the twin for one day and records it; the
page reads that recording at the hour you have scrolled to. Her belt vitals come
from the engine's own belt model (`beltStep` in `src/sim.js`), driven by what
she is doing on screen.

The cow (`src/cow.js`) is sculpted in code: lofted body, neck and head, and legs
solved with inverse kinematics on the real four-beat walk of cattle, so hooves
stay planted. On integrated or mobile graphics the page starts in a lighter
profile and gives up detail further if the frame rate drops. Add `?hq` to force
full quality (bloom, denser grass) or `?lite` to force the light profile.

## Link the physical model (optional)

`firmware/dairy_sense_esp8266/` is an Arduino sketch for a NodeMCU / ESP8266 with
a DHT11, 16x2 I2C LCD, L293D pump driver and IR sensor. It opens a hotspot named
`DairySense`; join it, press **Link device** in the twin and connect to
`192.168.4.1`. The real sensor then drives the twin's shed climate, and the
twin's pump decision switches the real pump. Wiring is in the sketch header.
The sketch has not been tested on hardware yet.

To try the link without hardware: `npm run mock-device`, then connect to
`localhost:8266`.

## The herd and its colours

The five animals on the board are full 3D models (`src/herd3d.js`), each built
for her breed. The Holstein has the classic black blobs. The Gir is speckled,
with a hump and long drooping ears. The Sahiwal is a mottled red-brown zebu
with a dewlap. The two Murrah buffaloes are near-solid, with curled horns.
Each wears a collar with a gold bell. The bell is the AI health belt's sensor,
and an LED on it blinks her status.

They move like cattle:
- They face and walk in any direction, turning gradually with the spine curving
  into the turn.
- They walk the four-beat walk with hooves planted on the ground, and every
  hoof that lands leaves a fading print.
- They graze, eat, drink and chew cud. They lie down front end first and get
  up hind end first.
- Belt data shows in how she moves: a fever means short steps with head and
  ears low, and a lame animal limps.

| View (Herd tab, or `C`) | What the colours mean |
|---|---|
| Coats | Each animal in her breed coat. The gold bell turns red, amber, pink or violet when the belt AI flags fever, heat stress, estrus or lameness |
| Health | The whole animal takes her AI status colour, so trouble shows from across the farm |
| Thermal | Body temperature from her belt, drawn as a thermal camera would show it. It glows, so it reads at night too. It is a drawing of belt data, not a camera image |

Open an animal's record to change her coat colours: ten dairy breeds, five
just-for-fun colours, or any two colours you pick. The choice is remembered on
this device. On the 3D animal the colours change but the pattern stays her
breed's, so a Gir in Holstein colours is a black-and-white speckled Gir.

The phone app shows each animal as a portrait cut from one cow picture
(`art/cow-source.png`), repainted in the browser to her current colours. The
picture is split once into layers (coat, patches, skin, horns, bell, collar),
and each layer is recoloured on its own, so the fur shading and the face
survive any colour. The same portraits follow the Coats, Health and Thermal
views, and the cow's face is the app logo and the browser-tab icon.

To change that picture, replace `art/cow-source.png` and run
`python tools/build_cow_art.py` (needs Pillow and numpy), then `npm run build`.
The part outlines in that script are traced for this picture and would need
re-tracing for a different one.

## Develop

```
npm install
npm run build      # bundles src/ into dist/app.js, dist/journey.js and dist/docs.js
npm run dev        # rebuild on change
npm test           # runs the farm engine for 12 farm days and checks it, then the coat repaint
```

`src/sim.js` is the farm engine (no graphics), `src/world.js` builds the 3D
model, `src/ui.js` is the interface, `src/tour.js` is the guided story.
`src/herd3d.js` builds and animates the 3D herd. `src/coats.js` holds the coat
colours, the colour views and the pixel repaint for the portraits.
`src/herdlook.js` tracks who is painted how, and `src/lookui.js` is the colour
interface. `src/standee.js` (the earlier cut-out animals) is no longer used by
the scene.
`src/trace.js` records a farm day from the engine; `src/journey/` is the Cow Flow
page (`scene.js` sky, weather and pasture, `stations.js` the farm along her route,
`stages.js` the thirteen stops, `main.js` scroll, camera and readouts) with
`src/cow.js` as its animal; `src/docs.js` drives the documentation's live figures.

## Deploy (Vercel)

The site deploys to Vercel as static files, with no server code.
1. On vercel.com choose **Add New → Project**, import the GitHub repository
   `aviinashmishra/dairysense` and press **Deploy**. Leave the settings as they are:
   `vercel.json` sets the build itself.
2. Vercel runs `npm ci`, then `npm run build` (esbuild), then
   `node deploy/build-site.mjs`. That last step copies only the three pages and the
   files they load into `site/`, and stops the build if any of them is missing.
3. Every push to `main` redeploys, and pull requests get preview links.

What the deployment adds: short addresses (`/journey`, `/docs`, `/cow-flow`,
`/gauri`), a themed 404 page (`deploy/404.html`), and link previews that use
`src/assets/og.png`. At build time these are made absolute with the project's
production domain. Served over http(s), the landing also shows an
**Open on your phone** QR code (`src/qr.js`) for whatever address it is opened
from. Exhibition visitors can scan it and take the farm with them.

The live link to the real ESP8266 needs plain http, which browsers block on an
https site. To use **Link device**, open `index.html` from the downloaded project
folder on a laptop that has joined the DairySense Wi-Fi.

To try the deployed build locally: `npm run build && node deploy/build-site.mjs`,
then serve `site/` with any static server.

The Next.js rebuild in `web/` can be deployed as a second Vercel project with
**Root Directory** set to `web`.
