'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { PROJECTS } from '@/lib/data';

export default function PortfolioGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {PROJECTS.slice(0, 6).map((p, i) => (
        <Reveal key={p.id} delay={i * 60}>
          <div
            className="relative rounded-2xl overflow-hidden border border-glass group cursor-pointer"
            style={{
              aspectRatio: '4/3',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              transform: hovered === p.id ? 'scale(1.02)' : 'scale(1)',
              boxShadow: hovered === p.id ? '0 20px 40px rgba(0,0,0,0.4)' : 'none',
              zIndex: hovered === p.id ? 10 : 'auto',
            } as React.CSSProperties}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(9,18,32,0.9) 0%, rgba(9,18,32,0.2) 50%, transparent 100%)',
              }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(26,107,60,0.12)' }}
            />
            {/* Category pill */}
            <div
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
              style={{
                background: 'rgba(26,107,60,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(34,136,63,0.4)',
                color: '#22883f',
              }}
            >
              {p.category}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h4 className="font-display font-bold text-sm leading-tight opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {p.title}
              </h4>
              <p
                className="text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 translate-y-2 group-hover:translate-y-0"
                style={{ color: 'rgba(240,244,255,0.6)' }}
              >
                {p.location} · {p.year}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
