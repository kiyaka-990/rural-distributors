// components/RdeLogo.tsx
// SVG recreation of the RDE logo: navy anchor-pin over teal globe

interface RdeLogoProps {
  size?: number;
  className?: string;
}

export default function RdeLogo({ size = 44, className = '' }: RdeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* ── GLOBE ── */}
      {/* Outer ellipse (globe body) */}
      <ellipse cx="50" cy="68" rx="38" ry="22" fill="#1a7a5e" />
      <ellipse cx="50" cy="68" rx="38" ry="22" fill="url(#globeGrad)" />

      {/* Globe highlight sheen */}
      <ellipse cx="50" cy="68" rx="38" ry="22" fill="none" stroke="#22aa80" strokeWidth="1.2" />

      {/* Horizontal latitude lines */}
      <ellipse cx="50" cy="68" rx="26" ry="15" fill="none" stroke="#22aa80" strokeWidth="0.8" strokeDasharray="0" />
      <ellipse cx="50" cy="62" rx="32" ry="8" fill="none" stroke="#22aa80" strokeWidth="0.7" opacity="0.7" />
      <ellipse cx="50" cy="74" rx="32" ry="8" fill="none" stroke="#22aa80" strokeWidth="0.7" opacity="0.7" />

      {/* Vertical meridian lines */}
      <line x1="50" y1="46" x2="50" y2="90" stroke="#22aa80" strokeWidth="0.8" opacity="0.7" />
      <line x1="30" y1="48" x2="35" y2="88" stroke="#22aa80" strokeWidth="0.7" opacity="0.5" />
      <line x1="70" y1="48" x2="65" y2="88" stroke="#22aa80" strokeWidth="0.7" opacity="0.5" />

      {/* Globe bottom shadow/depth */}
      <ellipse cx="50" cy="89" rx="36" ry="4" fill="#0d5a40" opacity="0.4" />

      {/* ── ANCHOR-PIN SHAPE (teardrop / location pin) ── */}
      {/* The pin: wide at top, comes to a point at bottom ~y=75 */}
      <path
        d="
          M50 14
          C50 14, 26 20, 26 42
          C26 56, 38 64, 50 75
          C62 64, 74 56, 74 42
          C74 20, 50 14, 50 14
          Z
        "
        fill="#1a2a6b"
      />
      {/* Pin inner highlight / depth */}
      <path
        d="
          M50 17
          C50 17, 29 23, 29 42
          C29 54, 40 62, 50 72
          C60 62, 71 54, 71 42
          C71 23, 50 17, 50 17
          Z
        "
        fill="#1e3080"
        opacity="0.6"
      />

      {/* ── ANCHOR inside the pin ── */}
      {/* Anchor ring (top loop) */}
      <circle cx="50" cy="33" r="5" fill="none" stroke="white" strokeWidth="2.2" />
      {/* Anchor vertical shaft */}
      <line x1="50" y1="29" x2="50" y2="58" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      {/* Anchor crossbar */}
      <line x1="38" y1="37" x2="62" y2="37" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      {/* Anchor left arm + curl */}
      <path d="M50 58 Q41 58 39 54 Q37 50 41 48" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Anchor right arm + curl */}
      <path d="M50 58 Q59 58 61 54 Q63 50 59 48" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />

      {/* ── GRADIENTS ── */}
      <defs>
        <radialGradient id="globeGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#2aa87a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0d5a40" stopOpacity="0.3" />
        </radialGradient>
      </defs>
    </svg>
  );
}
