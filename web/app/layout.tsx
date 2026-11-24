import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource-variable/fraunces/opsz-italic.css';
import '@fontsource-variable/instrument-sans/index.css';
import '@fontsource-variable/geist-mono/index.css';
import './globals.css';
import './landing.css';
import './twin.css';
import { FarmProvider } from '@/components/FarmProvider';
import { themeScript } from '@/components/Theme';

export const metadata: Metadata = {
  title: { default: 'Dairy Sense · Sustainable Smart Dairy Farm', template: '%s · Dairy Sense' },
  description:
    'A living 3D twin of a sustainable smart dairy farm: solar power, water recycling, smart monitoring, AI health belts and biogas, simulated live in your browser. National Milk Day 2026, United University, Prayagraj.',
  applicationName: 'Dairy Sense',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4efe4' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1310' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <FarmProvider>{children}</FarmProvider>
      </body>
    </html>
  );
}
