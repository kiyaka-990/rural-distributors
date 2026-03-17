import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Rural Distributors Enterprises Limited | General Building Contractors',
  description:
    'Nairobi-based premier civil & construction specialists. Building works, civil engineering, electrical systems, and road services across East & Central Africa since 2015.',
  keywords: 'construction Kenya, building contractor Nairobi, civil works Kenya, road construction Kenya',
  openGraph: {
    title: 'Rural Distributors Enterprises Limited',
    description: 'Premier Civil & Construction Specialists in Kenya',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy text-white font-body overflow-x-hidden">
        {/* Noise overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Ambient orbs */}
        <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none z-0 animate-orb"
          style={{ background: 'radial-gradient(circle, rgba(26,107,60,0.3), transparent)', filter: 'blur(80px)' }} />
        <div className="fixed top-[40%] right-[-150px] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(13,27,62,0.6), rgba(26,107,60,0.15))', filter: 'blur(80px)', animationDelay: '-4s' }} />
        <div className="fixed bottom-[10%] left-[30%] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.12), transparent)', filter: 'blur(80px)', animationDelay: '-8s' }} />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
