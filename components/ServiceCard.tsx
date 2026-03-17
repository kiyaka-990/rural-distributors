'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export default function ServiceCard({ s, delay }: { s: Service; delay: number }) {
  return (
    <Link href={`/services#${s.id}`}>
      <div
        className="glass rounded-2xl p-8 h-full group cursor-pointer relative overflow-hidden"
        style={{ transition: 'all 0.5s ease', minHeight: '220px' }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = 'translateY(-8px)';
          el.style.borderColor = 'rgba(26,107,60,0.5)';
          el.style.boxShadow = `0 30px 60px rgba(0,0,0,0.3), 0 0 40px ${s.color}20`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = '';
          el.style.borderColor = '';
          el.style.boxShadow = '';
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{ background: `radial-gradient(ellipse at 30% 30%, ${s.color}15, transparent 70%)` }}
        />
        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ background: `linear-gradient(90deg, ${s.color}, #e8c96a)` }}
        />
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 relative z-10 transition-all duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${s.color}30, rgba(13,27,62,0.5))`,
            border: `1px solid ${s.color}40`,
          }}
        >
          {s.icon}
        </div>
        <h3 className="font-display text-xl font-bold mb-2 relative z-10">{s.title}</h3>
        <p className="text-sm text-dim leading-relaxed line-clamp-3 relative z-10">{s.description}</p>
        <div
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold relative z-10"
          style={{ color: '#22883f' }}
        >
          Learn more{' '}
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
