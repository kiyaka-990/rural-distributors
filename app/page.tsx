import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Carousel from '@/components/Carousel';
import Reveal from '@/components/Reveal';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TrustBadges from '@/components/TrustBadges';
import PortfolioGrid from '@/components/PortfolioGrid';
import { SERVICES } from '@/lib/data';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── DYNAMIC HERO ── */}
      <Hero />

      {/* ── TRUST BADGES STRIP ── */}
      <section
        id="services"
        className="py-10 px-6 border-y border-glass"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Comprehensive <span className="accent">Construction</span>
            <br />Solutions
          </h2>
          <div className="divider" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <ServiceCard s={s} delay={i * 80} />
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline inline-block">
            View All Services
          </Link>
        </div>
      </section>

      {/* ── PORTFOLIO CAROUSEL ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <Reveal>
            <div className="section-label">Our Work</div>
            <h2 className="section-title">
              Featured <span className="accent">Projects</span>
            </h2>
            <div className="divider" style={{ marginBottom: 0 }} />
          </Reveal>
          <Reveal direction="right">
            <Link href="/portfolio" className="btn-outline text-sm py-2.5 whitespace-nowrap">
              Full Portfolio →
            </Link>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <Carousel />
        </Reveal>
      </section>

      {/* ── PORTFOLIO IMAGE GRID ── */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <PortfolioGrid />
      </section>

      {/* ── ABOUT STRIP ── */}
      <section
        className="py-28 px-6"
        style={{ background: 'linear-gradient(135deg, rgba(26,107,60,0.07) 0%, transparent 60%)' }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div
              className="glass rounded-3xl p-10 text-center relative overflow-hidden"
              style={{ minHeight: '360px' }}
            >
              <div
                className="absolute inset-0 opacity-10 rounded-3xl"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, rgba(26,107,60,0.8) 60deg, transparent 120deg)',
                  animation: 'spin 20s linear infinite',
                }}
              />
              <div className="relative">
                <div
                  className="font-bebas text-[7rem] leading-none"
                  style={{ color: 'rgba(26,107,60,0.3)' }}
                >
                  2015
                </div>
                <div
                  className="text-xs tracking-[3px] uppercase"
                  style={{ color: '#22883f' }}
                >
                  Founded in Nairobi
                </div>
                <div className="mt-8 flex justify-center gap-8">
                  {[
                    { n: '10+', l: 'Years' },
                    { n: 'EAC', l: 'Reach' },
                    { n: '4', l: 'Divisions' },
                  ].map(({ n, l }) => (
                    <div key={l} className="text-center">
                      <div className="font-bebas text-2xl" style={{ color: '#e8c96a' }}>
                        {n}
                      </div>
                      <div className="text-xs text-dim">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              Who We <span className="accent">Are</span>
            </h2>
            <div className="divider" />
            <p className="text-dim leading-relaxed mb-5 text-sm">
              Rural Distributors Enterprises Limited was incorporated in 2015 in Nairobi, Kenya.
              We&apos;ve grown from humble beginnings to become one of Kenya&apos;s premier
              building construction and civil engineering specialists, operating across the
              country.
            </p>
            <p className="text-dim leading-relaxed mb-8 text-sm">
              Our vision extends beyond Kenya — we are actively broadening our operations
              across East and Central Africa, bringing world-class technical sophistication
              and cost-effective service delivery.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Safety first', 'Professionalism', 'Integrity', 'Ingenuity'].map((v) => (
                <div key={v} className="flex items-center gap-2 text-sm text-dim">
                  <CheckCircle size={14} style={{ color: '#22883f', flexShrink: 0 }} />
                  {v}
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary inline-flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 px-6">
        <div
          className="max-w-4xl mx-auto text-center glass rounded-3xl py-16 px-8 relative overflow-hidden"
          style={{
            boxShadow:
              '0 0 80px rgba(26,107,60,0.15), inset 0 0 60px rgba(26,107,60,0.05)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(26,107,60,0.08) 0%, transparent 70%)',
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />
          <Reveal>
            <div className="section-label relative z-10">Ready to Build?</div>
            <h2 className="section-title relative z-10">
              Let&apos;s Create <span className="accent">Something</span>
              <br />Extraordinary
            </h2>
            <p className="text-dim mb-8 max-w-lg mx-auto relative z-10">
              Contact our team today for a free consultation and quotation on your next
              project.
            </p>
            <div className="flex justify-center gap-4 flex-wrap relative z-10">
              <Link href="/contact" className="btn-primary flex items-center gap-2">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a href="tel:+254722313131" className="btn-outline">
                📞 +254 722 313 131
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </>
  );
}
