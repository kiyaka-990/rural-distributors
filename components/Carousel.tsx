'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const total = PROJECTS.length;

  const go = (n: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((n + total) % total);
    setTimeout(() => setTransitioning(false), 800);
  };

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 5500);
    return () => clearInterval(t);
  }, [current, transitioning]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const project = PROJECTS[current];

  return (
    <div className="relative">
      {/* Main card */}
      <div
        className="relative rounded-3xl overflow-hidden border border-glass"
        style={{
          height: '520px',
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: 'transform 0.15s ease',
          boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        {/* Slides crossfade */}
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${p.image})`,
                transform: i === current ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 8s ease-out',
              }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(9,18,32,0.97) 0%, rgba(9,18,32,0.55) 45%, rgba(9,18,32,0.15) 100%)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,107,60,0.18) 0%, transparent 55%)' }} />
          </div>
        ))}

        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(9,18,32,0.5), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(9,18,32,0.5), transparent)' }} />

        {/* Counter */}
        <div className="absolute top-6 left-8 z-20">
          <div className="px-4 py-2 rounded-full border text-xs" style={{ background: 'rgba(9,18,32,0.65)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <span style={{ color: '#e8c96a', fontSize: '1.1rem' }} className="font-bebas">{String(current + 1).padStart(2, '0')}</span>
            <span className="text-white/30 mx-1">/</span>
            <span className="text-white/50">{String(total).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Category badge */}
        <div
          key={`cat-${current}`}
          className="absolute top-6 right-20 z-20 px-4 py-1.5 rounded-full border text-[11px] tracking-[1.5px] uppercase font-semibold"
          style={{ background: 'rgba(26,107,60,0.3)', backdropFilter: 'blur(16px)', borderColor: 'rgba(34,136,63,0.5)', color: '#22883f', animation: 'catIn 0.5s ease both' }}
        >
          {project.category}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-20">
          <h3 key={`t-${current}`} className="font-display font-bold mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', animation: 'cIn 0.6s 0.1s ease both' }}>
            {project.title}
          </h3>
          <p key={`d-${current}`} className="text-sm max-w-lg leading-relaxed mb-4" style={{ color: 'rgba(240,244,255,0.7)', animation: 'cIn 0.6s 0.2s ease both' }}>
            {project.description}
          </p>
          <div key={`m-${current}`} className="flex items-center flex-wrap gap-4" style={{ animation: 'cIn 0.6s 0.3s ease both' }}>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(240,244,255,0.5)' }}>
              <MapPin size={11} style={{ color: '#22883f' }} /> {project.location}
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(240,244,255,0.5)' }}>
              <Calendar size={11} style={{ color: '#22883f' }} /> {project.year}
            </span>
            <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all hover:scale-105"
              style={{ background: 'rgba(26,107,60,0.2)', borderColor: 'rgba(34,136,63,0.35)', color: '#22883f' }}>
              <ExternalLink size={10} /> View Project
            </button>
          </div>
        </div>

        {/* Nav buttons */}
        <button onClick={() => go(current - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center border transition-all hover:scale-110 hover:border-green-light/50"
          style={{ background: 'rgba(9,18,32,0.65)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.1)' }}>
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => go(current + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center border transition-all hover:scale-110 hover:border-green-light/50"
          style={{ background: 'rgba(9,18,32,0.65)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.1)' }}>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Bottom strip: dots + thumbnails */}
      <div className="flex items-center justify-between mt-5 px-1">
        <div className="flex gap-2 items-center">
          {PROJECTS.map((_, i) => (
            <button key={i} onClick={() => go(i)} className="rounded-full transition-all duration-400"
              style={{ height: '3px', width: i === current ? '28px' : '12px', background: i === current ? 'linear-gradient(90deg,#22883f,#e8c96a)' : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
        <div className="hidden sm:flex gap-2">
          {PROJECTS.map((p, i) => (
            <button key={i} onClick={() => go(i)}
              className="rounded-xl overflow-hidden border-2 transition-all duration-300 relative"
              style={{ width: '56px', height: '38px', borderColor: i === current ? '#22883f' : 'rgba(255,255,255,0.08)', transform: i === current ? 'scale(1.12)' : 'scale(1)', boxShadow: i === current ? '0 0 14px rgba(26,107,60,0.5)' : 'none' }}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
              <div className="absolute inset-0" style={{ background: i === current ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.5)' }} />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes catIn { from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:translateX(0)} }
        @keyframes cIn   { from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)} }
      `}</style>
    </div>
  );
}
