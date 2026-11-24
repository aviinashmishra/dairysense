import type { Metadata } from 'next';
import { TwinHud } from '@/components/twin/TwinHud';

export const metadata: Metadata = {
  title: 'Live twin',
  description: 'Orbit the live farm, run the guided tour, change the weather and watch the belt AI catch a fever.',
};

export default function FarmPage() {
  return <TwinHud />;
}
