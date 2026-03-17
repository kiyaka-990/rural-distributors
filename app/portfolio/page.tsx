'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Reveal from '@/components/Reveal';
import { PROJECTS } from '@/lib/data';
import { ArrowRight, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'Building Works', 'Civil Works', 'Civil & Electrical', 'Road Services'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="relative py-28 px-6 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0d1b3e 0%, #091220 100%)' }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          {/* Hero background image with overlay */}
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=70&fit=crop" alt="" fill className="object-cover opacity-15" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Reveal>
              <div className="section-label">Our Work</div>
              <h1 className="section-title text-5xl md:text-6xl">Featured <span className="accent">Projects</span></h1>
              <p className="text-dim text-lg leading-relaxed max-w-2xl mx-auto mt-4">
                A showcase of construction excellence across Kenya — from towering commercial buildings to critical infrastructure and road networks.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="py-10 px-6 max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActive(cat)}
                  className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300"
                  style={{
                    background: active === cat ? 'linear-gradient(135deg, #1a6b3c, #22883f)' : 'rgba(255,255,255,0.05)',
                    borderColor: active === cat ? '#22883f' : 'rgba(255,255,255,0.1)',
                    color: active === cat ? '#fff' : 'rgba(240,244,255,0.6)',
                    boxShadow: active === cat ? '0 4px 20px rgba(26,107,60,0.4)' : 'none',
                    transform: active === cat ? 'scale(1.05)' : 'scale(1)',
                  }}>
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Grid */}
        <section className="pb-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 70}>
                <div
                  className="relative rounded-2xl overflow-hidden border border-glass group cursor-pointer flex flex-col"
                  style={{
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                    transform: hovered === project.id ? 'translateY(-8px)' : '',
                    boxShadow: hovered === project.id ? '0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(26,107,60,0.15)' : '0 4px 20px rgba(0,0,0,0.2)',
                  }}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(9,18,32,0.7) 0%, transparent 60%)' }} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'rgba(26,107,60,0.15)' }} />

                    {/* Category pill (slides in on hover) */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-bold border transition-all duration-300 translate-y-[-8px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ background: 'rgba(26,107,60,0.7)', backdropFilter: 'blur(12px)', borderColor: 'rgba(34,136,63,0.5)', color: '#22883f' }}
                    >
                      {project.category}
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold border"
                      style={{ background: 'rgba(9,18,32,0.7)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(240,244,255,0.6)' }}>
                      {project.year}
                    </div>

                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ background: 'linear-gradient(90deg, #22883f, #e8c96a)' }} />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-gold-light transition-colors duration-300"
                      style={{ transition: 'color 0.3s' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-dim leading-relaxed flex-1 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-glass">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-dim">
                          <MapPin size={10} style={{ color: '#22883f' }} /> {project.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-dim">
                          <Calendar size={10} style={{ color: '#22883f' }} /> {project.year}
                        </span>
                      </div>
                      <button
                        className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                        style={{ background: 'rgba(26,107,60,0.2)', borderColor: 'rgba(34,136,63,0.35)', color: '#22883f' }}>
                        <ExternalLink size={10} /> Details
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-dim">No projects found in this category.</div>
          )}
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto glass rounded-3xl py-16 px-8 text-center" style={{ boxShadow: '0 0 80px rgba(26,107,60,0.12)' }}>
            <Reveal>
              <div className="section-label">Next Project</div>
              <h2 className="section-title">Want Your Project <span className="accent">Here?</span></h2>
              <p className="text-dim mb-8 max-w-md mx-auto">Join our growing list of satisfied clients. Contact us for a consultation today.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Start a Project <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
