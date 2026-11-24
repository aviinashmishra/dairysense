// The one build entry Vercel runs. It works whichever folder the Vercel project's
// "Root Directory" points at: the repository root (vercel.json) or web/
// (web/vercel.json, which Vercel tends to pick because it finds a Next.js app there).
// Either way it builds the root site and writes it to ./site under the folder the
// build was started from, which is the outputDirectory both vercel.json files name.
//
//   node deploy/vercel-build.mjs          (from the repository root)
//   node ../deploy/vercel-build.mjs       (from web/)
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(process.cwd(), 'site');
const run = (cmd) => { console.log(`> ${cmd}`); execSync(cmd, { cwd: ROOT, stdio: 'inherit' }); };

console.log(`Dairy Sense build: repository at ${relative(process.cwd(), ROOT) || '.'}, output to ${relative(ROOT, OUT)}`);
// web/vercel.json installs the root packages already; this only covers a project whose install step did not.
if (!existsSync(join(ROOT, 'node_modules', 'esbuild'))) run('npm ci --no-audit --no-fund');
run('node build.mjs');
run(`node deploy/build-site.mjs --out "${OUT}"`);
