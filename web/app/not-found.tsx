import Link from 'next/link';
import { Wordmark } from '@/components/icons';

export default function NotFound() {
  return (
    <main className="lost">
      <div className="lost__card panel">
        <Wordmark />
        <p className="eyebrow">404 · Off the board</p>
        <h1>This path leads <i>out of the paddock.</i></h1>
        <p>There is nothing here, but the farm is still running behind this card.</p>
        <div className="lost__cta">
          <Link href="/" className="btn btn--primary">Back to the front page</Link>
          <Link href="/farm" className="btn btn--ghost">Open the live twin</Link>
        </div>
      </div>
    </main>
  );
}
