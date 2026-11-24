// Assembles the folder Vercel serves (site/) from the built project.
// Run after `npm run build`:   node deploy/build-site.mjs
//
// Only the three pages and the files they actually load are copied, so the
// sources, firmware, tests and the web/ app are never served. A page that points
// at a missing file fails the build instead of going live broken.
// On Vercel, link-preview tags (og:image, og:url) are made absolute with the
// production domain, which WhatsApp, LinkedIn and others require.
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'site');
const PAGES = ['index.html', 'journey.html', 'docs.html'];
const EXTRAS = { '404.html': 'deploy/404.html', 'robots.txt': 'deploy/robots.txt' };

const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.SITE_HOST || '';
const origin = host ? `https://${host.replace(/^https?:\/\//, '').replace(/\/$/, '')}` : '';

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const copied = new Set(), problems = [];
function copy(rel, from = rel) {
  if (copied.has(rel)) return;
  const src = join(ROOT, from);
  if (!existsSync(src) || !statSync(src).isFile()) { problems.push(`${from} is missing`); return; }
  mkdirSync(dirname(join(OUT, rel)), { recursive: true });
  copyFileSync(src, join(OUT, rel));
  copied.add(rel);
}

for (const page of PAGES) {
  let html = readFileSync(join(ROOT, page), 'utf8');
  // every local file the page loads: stylesheets, scripts, icons and the preview image
  const refs = [...html.matchAll(/\b(?:href|src)="([^"]+)"|<meta (?:property|name)="(?:og:image|twitter:image)" content="([^"]+)"/g)]
    .map((m) => (m[1] || m[2]).split(/[?#]/)[0])
    .filter((r) => r && !/^[a-z][a-z0-9+.-]*:|^\/\//i.test(r) && !PAGES.includes(r));
  for (const r of refs) copy(r.replace(/^\.?\//, ''));
  if (origin) {
    html = html.replace(/(<meta (?:property|name)="(?:og:image|twitter:image|og:url)" content=")([^"]*)"/g,
      (all, head, v) => (/^https?:/.test(v) ? all : `${head}${origin}/${v.replace(/^\.?\/?/, '')}"`));
  }
  writeFileSync(join(OUT, page), html);
}
for (const [rel, from] of Object.entries(EXTRAS)) copy(rel, from);

if (problems.length) {
  console.error(`site/ build failed:\n  ${problems.join('\n  ')}\nRun \`npm run build\` first, or fix the page that points at the file.`);
  process.exit(1);
}
const kb = [...copied, ...PAGES].reduce((t, f) => t + statSync(join(OUT, f)).size, 0) / 1024;
console.log(`site/ ready: ${PAGES.length} pages + ${copied.size} files, ${(kb / 1024).toFixed(2)} MB${origin ? `, previews point at ${origin}` : ''}`);
