// Bundles each page's script into dist/ so every page opens by double-click, offline.
//   index.html   -> dist/app.js      the live 3D twin
//   journey.html -> dist/journey.js  Cow Flow, the scroll-driven walk
//   docs.html    -> dist/docs.js     the documentation
import { build, context } from 'esbuild';
import { existsSync } from 'node:fs';
const entries = { app: 'src/main.js', journey: 'src/journey/main.js', docs: 'src/docs.js' };
const entryPoints = Object.fromEntries(Object.entries(entries).filter(([, f]) => existsSync(f)));
const opts = { entryPoints, bundle: true, format: 'iife', minify: true, target: 'es2020', outdir: 'dist', logLevel: 'info',
  loader: { '.webp': 'dataurl', '.png': 'dataurl' } };   // the cow artwork travels inside the bundle
if (process.argv.includes('--watch')) { const ctx = await context(opts); await ctx.watch(); console.log('watching src/ ...'); }
else await build(opts);
