'use client';

import { useReveal } from '@/lib/useReveal';
import { clsx } from 'clsx';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

export default function Reveal({ children, className, direction = 'up', delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal();

  const hidden = {
    up: 'opacity-0 translate-y-10',
    left: 'opacity-0 -translate-x-10',
    right: 'opacity-0 translate-x-10',
  }[direction];

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-700 ease-out',
        visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
