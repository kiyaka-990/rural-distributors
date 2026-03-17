import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-6 pt-[72px]">
        <div className="text-center max-w-lg">
          <div className="font-bebas text-[10rem] leading-none" style={{ color: 'rgba(26,107,60,0.2)' }}>
            404
          </div>
          <h1 className="font-display text-3xl font-bold mb-3 -mt-4">Page Not Found</h1>
          <p className="text-dim text-sm mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
