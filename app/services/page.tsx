import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/lib/data';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Rural Distributors Enterprises Limited',
  description: 'Building works, civil engineering, electrical systems, road services, and specialist finishing across Kenya.',
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="relative py-24 px-6 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0d1b3e 0%, #091220 100%)' }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Reveal>
              <div className="section-label">Capabilities</div>
              <h1 className="section-title text-5xl md:text-6xl">
                Our <span className="accent">Services</span>
              </h1>
              <p className="text-dim text-lg leading-relaxed max-w-2xl mx-auto mt-4">
                From foundation to finish, we deliver comprehensive construction and
                engineering solutions with over a decade of proven expertise.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 max-w-7xl mx-auto space-y-32">
          {SERVICES.map((service, i) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                <Reveal direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="[direction:ltr]">
                    {/* Visual card */}
                    <div
                      className="glass rounded-3xl p-12 text-center relative overflow-hidden h-72 flex items-center justify-center"
                      style={{ boxShadow: `0 0 60px ${service.color}20` }}
                    >
                      <div className="absolute inset-0 opacity-5 rounded-3xl"
                        style={{ background: `conic-gradient(from 0deg, transparent, ${service.color} 60deg, transparent 120deg)`, animation: 'spin 25s linear infinite' }} />
                      <div className="text-[7rem] relative z-10">{service.icon}</div>
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1"
                        style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal direction={i % 2 === 0 ? 'right' : 'left'}>
                  <div className="[direction:ltr]">
                    <div className="section-label">{service.tagline}</div>
                    <h2 className="section-title text-3xl md:text-4xl">
                      {service.title.split(' ')[0]}{' '}
                      <span className="accent">{service.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <div className="divider" />
                    <p className="text-sm text-dim leading-relaxed mb-6">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-dim">
                          <CheckCircle size={13} style={{ color: '#22883f', flexShrink: 0 }} />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                      Request Quote <ArrowRight size={15} />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto glass rounded-3xl py-16 px-8 text-center"
            style={{ boxShadow: '0 0 80px rgba(26,107,60,0.12), inset 0 0 60px rgba(26,107,60,0.04)' }}>
            <Reveal>
              <div className="section-label">Work With Us</div>
              <h2 className="section-title">Ready to Start <span className="accent">Your Project?</span></h2>
              <p className="text-dim mb-8 max-w-md mx-auto">
                Contact our team for a free consultation and detailed quotation.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
