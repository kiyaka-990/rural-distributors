'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import RdeLogo from './RdeLogo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-glass"
      style={{
        backdropFilter: 'blur(20px)',
        background: scrolled ? 'rgba(13,27,62,0.95)' : 'rgba(13,27,62,0.7)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="relative flex-shrink-0"
            style={{
              filter: 'drop-shadow(0 0 0px rgba(26,107,60,0))',
              transition: 'filter 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.filter =
                'drop-shadow(0 0 8px rgba(34,136,63,0.7))';
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.filter =
                'drop-shadow(0 0 0px rgba(26,107,60,0))';
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
            }}
          >
            <RdeLogo size={46} />
          </div>
          <div className="leading-tight">
            <span
              className="font-bebas text-lg tracking-[2px] block"
              style={{ color: '#e8c96a' }}
            >
              Rural Distributors
            </span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase">
              Enterprises Limited
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-link ${pathname === l.href ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:block btn-primary text-sm py-2.5 px-6"
        >
          Get Quote
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-glass px-6 py-4 flex flex-col gap-4"
          style={{ backdropFilter: 'blur(20px)', background: 'rgba(13,27,62,0.98)' }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-base py-1 ${
                pathname === l.href ? 'active text-white' : ''
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary text-sm text-center mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
