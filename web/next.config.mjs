import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This app lives in web/ beside the offline twin; keep the bundler rooted here.
  turbopack: { root: here },
  outputFileTracingRoot: here,
  devIndicators: false,
};

export default nextConfig;
