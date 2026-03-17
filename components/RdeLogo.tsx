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
      {/* Globe body */}
      <ellipse cx="50" cy="70" rx="38" ry="20" fill="#1a7a5e" />
      {/* Globe outer ring */}
      <ellipse cx="50" cy="70" rx="38" ry="20" fill="none" stroke="#2aa87a" strokeWidth="1" />
      {/* Latitude ellipses */}
      <ellipse cx="50" cy="64" rx="30" ry="10" fill="none" stroke="#2aa87a" strokeWidth="0.8" opacity="0.7" />
      <ellipse cx="50" cy="77" rx="30" ry="8"  fill="none" stroke="#2aa87a" strokeWidth="0.8" opacity="0.7" />
      {/* Meridian lines */}
      <line x1="50" y1="50" x2="50" y2="90" stroke="#2aa87a" strokeWidth="0.8" opacity="0.7" />
      <line x1="28" y1="53" x2="32" y2="87" stroke="#2aa87a" strokeWidth="0.7" opacity="0.5" />
      <line x1="72" y1="53" x2="68" y2="87" stroke="#2aa87a" strokeWidth="0.7" opacity="0.5" />
      {/* Globe bottom shadow */}
      <ellipse cx="50" cy="89" rx="35" ry="4" fill="#0d5a40" opacity="0.35" />

      {/* Pin / teardrop shape */}
      <path
        d="M50 12 C28 18,26 36,26 42 C26 57,39 66,50 76 C61 66,74 57,74 42 C74 36,72 18,50 12 Z"
        fill="#1a2a6b"
      />
      {/* Inner depth */}
      <path
        d="M50 16 C30 22,29 38,29 42 C29 55,40 63,50 73 C60 63,71 55,71 42 C71 38,70 22,50 16 Z"
        fill="#1e3080"
        opacity="0.5"
      />

      {/* Anchor ring */}
      <circle cx="50" cy="32" r="5.5" fill="none" stroke="white" strokeWidth="2.2" />
      {/* Anchor shaft */}
      <line x1="50" y1="27" x2="50" y2="60" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      {/* Anchor crossbar */}
      <line x1="37" y1="37" x2="63" y2="37" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      {/* Left fluke */}
      <path d="M50 60 Q40 60 38 56 Q36 51 41 49" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Right fluke */}
      <path d="M50 60 Q60 60 62 56 Q64 51 59 49" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
