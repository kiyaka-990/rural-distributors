import Link from 'next/link';
import { COMPANY } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="border-t border-glass mt-24"
      style={{ backdropFilter: 'blur(20px)', background: 'rgba(9,18,32,0.9)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl border-2"
                style={{ background: 'linear-gradient(135deg, #1a6b3c, #152547)', borderColor: '#22883f' }}
              >
                ⚓
              </div>
              <div>
                <div className="font-bebas text-xl tracking-[2px]" style={{ color: '#e8c96a' }}>
                  Rural Distributors Enterprises
                </div>
                <div className="text-xs text-white/50 tracking-wider uppercase">
                  {COMPANY.tagline}
                </div>
              </div>
            </div>
            <p className="text-sm text-dim leading-relaxed max-w-sm">
              Kenya's premier civil & construction specialists, delivering excellence in
              building works, civil engineering, electrical systems, and road services
              across East & Central Africa since 2015.
            </p>
            <div className="flex gap-3 mt-5">
              {['📧', '📞', '💼', '💬'].map((icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-sm cursor-pointer transition-all duration-300 hover:border-green-light/50 hover:bg-green-pale"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-semibold tracking-[2px] uppercase text-white/40 mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/services', 'Services'],
                ['/portfolio', 'Portfolio'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-dim hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-green-light opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold tracking-[2px] uppercase text-white/40 mb-4">
              Contact
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#22883f' }} />
                <a href={`tel:${COMPANY.phone}`} className="text-sm text-dim hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#22883f' }} />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-dim hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#22883f' }} />
                <span className="text-sm text-dim">{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-glass pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-dim">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-dim">
            Incorporated in Kenya under the Company Act Laws of Kenya · Est. {COMPANY.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
