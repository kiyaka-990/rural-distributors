'use client';

import { useEffect, useRef, useState } from 'react';
import { useReveal } from '@/lib/useReveal';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function Counter({ value, suffix = '', label }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.5);
  const started = useRef(false);

  useEffect(() => {
    if (visible && !started.current) {
      started.current = true;
      const duration = 1500;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + increment, value);
        setCount(Math.floor(current));
        if (current >= value) clearInterval(timer);
      }, duration / steps);
    }
  }, [visible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-bebas text-5xl leading-none" style={{ color: '#e8c96a' }}>
        {count}{suffix}
      </div>
      <div className="text-xs tracking-widest uppercase mt-1" style={{ color: 'rgba(240,244,255,0.5)' }}>
        {label}
      </div>
    </div>
  );
}
