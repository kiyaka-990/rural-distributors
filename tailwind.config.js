/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1b3e',
          mid: '#152547',
          deep: '#091220',
        },
        green: {
          brand: '#1a6b3c',
          light: '#22883f',
          pale: 'rgba(26,107,60,0.15)',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c96a',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.8s ease both',
        'orb': 'orbFloat 12s ease-in-out infinite alternate',
      },
      keyframes: {
        float: { from: { transform: 'translateY(0px)' }, to: { transform: 'translateY(-20px)' } },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 8px 30px rgba(26,107,60,0.5)' },
          '50%': { boxShadow: '0 8px 50px rgba(26,107,60,0.8), 0 0 0 8px rgba(26,107,60,0.1)' },
        },
        fadeUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        orbFloat: { from: { transform: 'translate(0,0) scale(1)' }, to: { transform: 'translate(30px,-40px) scale(1.1)' } },
      },
      backdropBlur: { '30': '30px' },
    },
  },
  plugins: [],
};
