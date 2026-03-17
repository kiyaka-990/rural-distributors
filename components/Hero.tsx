'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_SLIDES, STATS } from '@/lib/data';
import Counter from './Counter';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const total = HERO_SLIDES.length;

  // Preload images
  useEffect(() => {
    let count = 0;
    HERO_SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.image;
      img.onload = () => { count++; if (count === 1) setLoaded(true); };
    });
    setTimeout(() => setLoaded(true), 600);
  }, []);

  const goTo = useCallback((n: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setPrev(current);
    setCurrent((n + total) % total);
    setTimeout(() => { setPrev(null); setTransitioning(false); }, 1000);
  }, [current, total, transitioning]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1), 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, goTo]);

  // Parallax mouse tracking
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-[72px] overflow-hidden"
    >
      {/* ── BG IMAGES with crossfade ── */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : i === prev ? 0 : 0,
            zIndex: i === current ? 1 : i === prev ? 2 : 0,
          }}
        >
          {/* Parallax image */}
          <div
            className="absolute inset-[-4%] bg-cover bg-center"
            style={{
              backgroundImage: `url(${s.image})`,
              transform: i === current
                ? `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) scale(1.08)`
                : 'scale(1.08)',
              transition: 'transform 0.1s linear',
            }}
          />
          {/* Dark overlays */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(160deg, rgba(9,18,32,0.75) 0%, rgba(13,27,62,0.55) 40%, rgba(9,18,32,0.45) 100%)',
          }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(9,18,32,0.8) 0%, rgba(9,18,32,0.2) 60%, transparent 100%)',
          }} />
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{
            background: 'linear-gradient(to top, rgba(9,18,32,0.9), transparent)',
          }} />
        </div>
      ))}

      {/* ── GRID OVERLAY ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── FLOATING PARTICLES ── */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: i % 3 === 0 ? '#22883f' : i % 3 === 1 ? '#e8c96a' : 'rgba(255,255,255,0.3)',
              left: `${8 + (i * 7.5) % 90}%`,
              top: `${10 + (i * 13) % 80}%`,
              animation: `particleFloat ${4 + (i % 4)}s ease-in-out ${i * 0.4}s infinite alternate`,
              opacity: 0.4 + (i % 3) * 0.15,
            }}
          />
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-[700px]">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 mb-8 border"
            style={{
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(20px)',
              borderColor: 'rgba(232,201,106,0.3)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <span
              className="flex items-center gap-1.5 text-xs font-bold tracking-[2px] uppercase"
              style={{ color: '#e8c96a' }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#22883f',
                  boxShadow: '0 0 8px #22883f',
                  animation: 'pulse 2s infinite',
                }}
              />
              Est. 2015 · Nairobi, Kenya
            </span>
            <span
              className="h-4 w-px"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            />
            <span
              key={slide.label}
              className="text-xs font-semibold tracking-wider uppercase"
              style={{
                color: '#22883f',
                animation: 'fadeSlide 0.5s ease both',
              }}
            >
              {slide.label}
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s 0.15s ease, transform 0.8s 0.15s ease',
            }}
          >
            <h1 className="font-display font-black leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)' }}>
              <span
                key={`${current}-h`}
                className="block"
                style={{ animation: 'slideUp 0.7s ease both' }}
              >
                {slide.headline}
              </span>
              <span
                key={`${current}-hl`}
                className="block"
                style={{
                  color: '#e8c96a',
                  fontStyle: 'italic',
                  animation: 'slideUp 0.7s 0.1s ease both',
                  textShadow: '0 0 60px rgba(232,201,106,0.3)',
                }}
              >
                {slide.highlight}
              </span>
              <span
                key={`${current}-s`}
                className="block"
                style={{ color: '#22883f', animation: 'slideUp 0.7s 0.2s ease both' }}
              >
                {slide.sub}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="text-lg leading-relaxed max-w-[520px] mb-10"
            style={{
              color: 'rgba(240,244,255,0.75)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s 0.3s ease, transform 0.8s 0.3s ease',
            }}
          >
            Nairobi's premier civil & construction specialists — delivering excellence
            in building works, civil engineering, electrical systems, and road services
            across East & Central Africa.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-16"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s 0.45s ease, transform 0.8s 0.45s ease',
            }}
          >
            <Link href="/portfolio"
              className="group flex items-center gap-2 font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #1a6b3c, #22883f)',
                boxShadow: '0 8px 30px rgba(26,107,60,0.5)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 15px 40px rgba(26,107,60,0.7)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 30px rgba(26,107,60,0.5)'; (e.currentTarget as HTMLAnchorElement).style.transform = ''; }}
            >
              View Portfolio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about"
              className="flex items-center gap-2 font-medium px-8 py-3.5 rounded-full border transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(255,255,255,0.15)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e8c96a'; (e.currentTarget as HTMLAnchorElement).style.color = '#e8c96a'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLAnchorElement).style.color = ''; }}
            >
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-10"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s 0.6s ease, transform 0.8s 0.6s ease',
            }}
          >
            {STATS.map((s) => (
              <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>

        {/* ── SLIDE THUMBNAILS (right side) ── */}
        <div
          className="hidden xl:flex flex-col gap-3 absolute right-8 top-1/2 -translate-y-1/2"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.8s 0.8s ease',
          }}
        >
          {HERO_SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group relative overflow-hidden rounded-xl border-2 transition-all duration-500"
              style={{
                width: i === current ? '120px' : '80px',
                height: '64px',
                borderColor: i === current ? '#22883f' : 'rgba(255,255,255,0.1)',
                boxShadow: i === current ? '0 0 20px rgba(26,107,60,0.5)' : 'none',
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: 'rgba(9,18,32,0.5)', opacity: i === current ? 0.3 : 0.6 }}
              />
              {i === current && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-light"
                  style={{ animation: 'progressBar 6s linear' }}
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/80">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── SLIDE INDICATORS (bottom) ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-500 rounded-full"
            style={{
              height: '3px',
              width: i === current ? '32px' : '16px',
              background: i === current
                ? 'linear-gradient(90deg, #22883f, #e8c96a)'
                : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>

      {/* ── SCROLL ARROW ── */}
      <a
        href="#services"
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors"
        style={{ animation: 'bounce 2s ease-in-out infinite' }}
      >
        <span className="text-[10px] tracking-[2px] uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes particleFloat {
          from { transform: translateY(0px) translateX(0px); }
          to   { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes progressBar {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
