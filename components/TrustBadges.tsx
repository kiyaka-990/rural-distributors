'use client';

import { Award, Star, Users, Zap } from 'lucide-react';
import Reveal from './Reveal';

const BADGES = [
  { icon: <Award size={16} />, text: 'ISO Compliant Construction' },
  { icon: <Star size={16} />, text: '10+ Years of Excellence' },
  { icon: <Users size={16} />, text: 'Government & Private Sector' },
  { icon: <Zap size={16} />, text: 'Fast Turnaround Times' },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center md:justify-between items-center gap-5">
      {BADGES.map((badge, i) => (
        <Reveal key={i} delay={i * 80}>
          <div
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border transition-all duration-300 cursor-default"
            style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = 'rgba(34,136,63,0.5)';
              el.style.background = 'rgba(26,107,60,0.1)';
              el.style.boxShadow = '0 0 20px rgba(26,107,60,0.15)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = 'rgba(255,255,255,0.08)';
              el.style.background = 'rgba(255,255,255,0.04)';
              el.style.boxShadow = 'none';
            }}
          >
            <span style={{ color: '#22883f' }}>{badge.icon}</span>
            <span
              className="text-xs font-semibold tracking-wide"
              style={{ color: 'rgba(240,244,255,0.7)' }}
            >
              {badge.text}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
