// The guided story: one stop per part of the project, in the order the
// resources actually flow through the farm.
import type { Cam, FlowKey } from './types';

export type ActionId =
  | 'milk' | 'wash' | 'night' | 'cloudy' | 'rain' | 'day' | 'heat' | 'pump' | 'fever' | 'estrus' | 'treat' | 'fast';

export interface Step {
  id: string; badge: string; title: string; kicker: string; lead: string;
  points?: string[]; steps?: string[]; legend?: [FlowKey, string][];
  purpose: string; cam: Cam; flow?: FlowKey; flowAll?: boolean; follow?: boolean; summary?: boolean;
  actions?: { id: ActionId; label: string }[];
}

export const STEPS: Step[] = [
  {
    id: 'intro', badge: '1', title: 'Introduction', kicker: 'What is a Sustainable Smart Dairy Farm?',
    lead: 'A modern farming system that uses technology and natural resources responsibly. Everything on this board is running live.',
    points: ['Saves water and electricity', 'Uses renewable solar energy', 'Maintains animal hygiene', 'Reuses organic waste', 'Promotes eco-friendly dairy farming'],
    purpose: 'Main aim: to make dairy farming cleaner, smarter and more sustainable.',
    cam: { pos: [0, 23, 37], target: [0, 0.5, 0], orbit: true, fit: 0.92 },
  },
  {
    id: 'shed', badge: '2', title: 'Farm Base and Cow Shed', kicker: 'Step 1 · Farm setup',
    lead: 'The whole farm sits on a 3 × 2 ft board. Cows and buffaloes move between the shed and the paddock on their own daily routine.',
    points: ['Green grass is the farm area, cardboard makes the shed', 'Separate feeding and drinking water areas', 'Milking at 6:00 and 17:00, then the shed is washed', 'Fans and foggers start when the shed gets too hot'],
    purpose: 'Purpose: a clean and organised environment for dairy animals.',
    cam: { pos: [-15.5, 12.5, 13.5], target: [-9.6, 1.2, -5.2] },
    actions: [{ id: 'milk', label: 'Skip to milking time' }, { id: 'wash', label: 'Wash the shed' }],
  },
  {
    id: 'solar', badge: '3', title: 'Solar Energy System', kicker: 'Step 2 · Solar section', flow: 'energy',
    lead: 'The panel charges the battery by day. The battery runs the lights, pump and electronics, so the farm barely needs the grid.',
    points: ['Mini solar panel makes renewable electricity', 'Battery stores it for the night', 'LED lights switch on by themselves after sunset', 'Biogas generator backs the battery up on dull days'],
    purpose: 'Purpose: reduce dependence on conventional electricity and promote clean energy.',
    cam: { pos: [13.5, 10, 8.5], target: [10.6, 1.6, -6.6] },
    actions: [{ id: 'night', label: 'Skip to night' }, { id: 'cloudy', label: 'Make it cloudy' }, { id: 'day', label: 'Back to a sunny day' }],
  },
  {
    id: 'water', badge: '4', title: 'Water Recycling System', kicker: 'Step 3 · Water management', flow: 'water',
    lead: 'Wash water and roof rainwater are collected, filtered and pumped up to the storage tank, then reused for washing, cooling and the fodder plot.',
    steps: ['Water collection', 'Filtration', 'Pumping', 'Water circulation'],
    points: ['Two tanks: collection (used water) and storage (filtered)', 'Gravel, sand and charcoal filter column', 'Drinking water always comes from the fresh line'],
    purpose: 'Purpose: demonstrate water reuse and reduce water wastage.',
    cam: { pos: [-5.5, 9.5, 3.5], target: [1.9, 2.0, -8.4] },
    actions: [{ id: 'wash', label: 'Wash the shed' }, { id: 'rain', label: 'Make it rain' }, { id: 'day', label: 'Back to a sunny day' }],
  },
  {
    id: 'monitor', badge: '5', title: 'Smart Monitoring', kicker: 'ESP8266 · L293D · temperature sensor', flow: 'data',
    lead: 'A DHT11 sensor in the shed feeds the controller. The LCD shows the reading, the ESP8266 sends it to the farmer’s app, and the L293D switches the pump.',
    points: ['ESP8266 Wi-Fi module: wireless link to mobile or computer', 'L293D motor driver: runs the water pump on command', 'Temperature and humidity give the THI heat-stress index', 'Can be linked to the real ESP8266 on the physical model'],
    purpose: 'Purpose: demonstrate electronic control, wireless communication and smart monitoring.',
    cam: { pos: [3.4, 4.6, 6.2], target: [2.6, 2.9, -1.6] },
    actions: [{ id: 'heat', label: 'Start a heat wave' }, { id: 'pump', label: 'Switch the pump by hand' }, { id: 'day', label: 'Back to a sunny day' }],
  },
  {
    id: 'gate', badge: '6', title: 'Animal Detection System', kicker: 'IR sensor gate', flow: 'data',
    lead: 'An infrared beam across the gate is broken each time an animal passes. The red LED flashes and the controller keeps count of who is in the shed.',
    points: ['Counts animals in the shed and in the paddock', 'Every crossing is logged with the time', 'The same beam can warn of movement at night'],
    purpose: 'Purpose: know where the herd is without walking the farm.',
    cam: { pos: [-4.5, 8.5, 8.5], target: [-10, 1.6, -3.6] },
    actions: [{ id: 'milk', label: 'Call the herd in for milking' }],
  },
  {
    id: 'belt', badge: '7', title: 'AI Smart Cow Health Belt', kicker: 'Smart technology for healthy livestock', follow: true,
    lead: 'Every animal wears a belt that measures her vitals. The AI learns each animal’s own normal and alerts the farmer when something changes.',
    points: ['Temperature sensor: detects abnormal body temperature', 'Heart rate sensor: monitors heartbeat', 'Accelerometer: tracks activity', 'Rumination sensor: chewing and digestion', 'GPS: where the animal is'],
    steps: ['Sensors collect data', 'Sent to the mobile app', 'AI analyses it', 'Farmer gets an alert'],
    purpose: 'Benefits: early detection of disease, better health management, saves time, higher productivity.',
    cam: { pos: [5, 4.4, 8], target: [0, 1.3, 0] },
    actions: [{ id: 'fever', label: 'Give this cow a fever' }, { id: 'estrus', label: 'Simulate heat (estrus)' }, { id: 'treat', label: 'Call the vet' }],
  },
  {
    id: 'biogas', badge: '8', title: 'Biogas and Compost', kicker: 'Step 4 · Waste becomes a resource', flow: 'waste',
    lead: 'A small rover collects the dung. The digester turns it into biogas for cooking and backup power, and the left-over slurry becomes compost.',
    points: ['Cow dung is collected separately', 'The green drum rises as gas builds up', 'Biogas replaces LPG and runs a generator', 'Compost feeds the fodder plot, fodder feeds the herd'],
    purpose: 'Purpose: no waste leaves the farm. It comes back as energy and healthy soil.',
    cam: { pos: [8.5, 12, 22], target: [7.6, 1, 5.4] },
    actions: [{ id: 'fast', label: 'Fast-forward one day' }],
  },
  {
    id: 'connect', badge: '9', title: 'How Everything Connects', kicker: 'One farm, five loops', flowAll: true,
    lead: 'Follow the coloured beads: every loop feeds the next one.',
    legend: [['energy', 'Solar power runs the pump, lights and electronics'], ['water', 'Water is collected, filtered and reused'], ['data', 'Sensors watch the herd and the shed'], ['waste', 'Dung becomes biogas and compost'], ['gas', 'Biogas cooks food and backs up the battery'], ['fodder', 'Compost-grown fodder returns to the herd']],
    purpose: 'Result: saves water and energy, healthy animals, less waste.',
    cam: { pos: [0, 41, 13], target: [0, 0, -0.5], fit: 1 },
  },
  {
    id: 'thanks', badge: '✓', title: 'Thank You!', kicker: 'Healthy animals, smart farming, sustainable future',
    lead: 'Sustainable Smart Dairy Farming helps create a cleaner, greener and better future for dairy farming.',
    summary: true,
    purpose: 'Dairy Sense · National Milk Day 2026 · United University, Prayagraj',
    cam: { pos: [0, 19, 39], target: [0, 1, 0], orbit: true, fit: 0.9 },
  },
];

// During auto-play each stop demonstrates itself: [on arrival, on leaving].
export const AUTO_DEMO: Record<string, ActionId[]> = {
  shed: ['wash'], water: ['wash'], monitor: ['heat', 'day'], belt: ['fever', 'treat'],
};

// Which tour stop a floating label on the model belongs to.
export const STATION_STEP: Record<string, string> = {
  shed: 'shed', solar: 'solar', water: 'water', monitor: 'monitor', gate: 'gate', biogas: 'biogas', waste: 'biogas', plot: 'biogas',
};

// The landing page walks the same model, one loop per chapter.
export interface Chapter { id: string; cam: Cam; flow?: FlowKey; flowAll?: boolean; follow?: boolean; stations: string[] }
const camOf = (id: string) => STEPS.find((s) => s.id === id)!.cam;
// The page's cards cover part of the screen, so its views stand further back than the tour's.
const back = (cam: Cam, k: number, target = cam.target): Cam => ({
  target, pos: [target[0] + (cam.pos[0] - cam.target[0]) * k, target[1] + (cam.pos[1] - cam.target[1]) * k, target[2] + (cam.pos[2] - cam.target[2]) * k],
});
export const CHAPTERS: Chapter[] = [
  { id: 'hero', cam: { pos: [-22, 17, 34], target: [0, 0.5, 0], orbit: true, fit: 1.04 }, stations: [] },
  { id: 'energy', cam: back(camOf('solar'), 1.3, [10.2, 1.4, -5.8]), flow: 'energy', stations: ['solar'] },
  { id: 'water', cam: back(camOf('water'), 1.3), flow: 'water', stations: ['water'] },
  { id: 'sensing', cam: { pos: [2.5, 12.5, 15.5], target: [-2.4, 1.6, -2.8] }, flow: 'data', stations: ['monitor', 'gate'] },
  { id: 'herd', cam: camOf('belt'), follow: true, stations: [] },
  { id: 'waste', cam: back(camOf('biogas'), 1.5, [8.6, 1, 5.6]), flow: 'waste', stations: ['biogas', 'waste', 'plot'] },
  { id: 'connect', cam: { pos: [0, 41, 13], target: [0, 0, -0.5], fit: 1.02 }, flowAll: true, stations: [] },
];
