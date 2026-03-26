import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Font family with Inter as primary (and Sora as fallback)
      fontFamily: {
        sans: ['Inter', 'Sora', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      // Mathematical font scaling for typography
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '-0.24px' }],
        sm: ['14px', { lineHeight: '20px', letterSpacing: '-0.28px' }],
        base: ['16px', { lineHeight: '25.6px', letterSpacing: '-0.32px' }], // 1.6 line-height
        lg: ['18px', { lineHeight: '28.8px', letterSpacing: '-0.36px' }],
        xl: ['20px', { lineHeight: '32px', letterSpacing: '-0.4px' }],
        '2xl': ['24px', { lineHeight: '38.4px', letterSpacing: '-0.48px' }],
        '3xl': ['30px', { lineHeight: '48px', letterSpacing: '-0.6px' }],
        '4xl': ['36px', { lineHeight: '57.6px', letterSpacing: '-0.72px' }],
        '5xl': ['48px', { lineHeight: '76.8px', letterSpacing: '-0.96px' }],
      },
      
      // Custom color palette (60-30-10 Rule)
      colors: {
        background: '#F8FAFC', // Off-White/Slate (60%)
        foreground: '#0F172A', // Deep Executive Navy (30%)
        primary: {
          DEFAULT: '#3B82F6', // Electric Blue (10%)
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#0F172A', // Deep Executive Navy
          foreground: '#F8FAFC',
        },
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        },
        accent: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        border: '#E2E8F0',
        input: '#E2E8F0',
        ring: '#3B82F6',
      },
      
      // Multi-layered ambient shadows for depth
      boxShadow: {
        'ambient': '0 1px 2px -1px rgba(15,23,42,0.04), 0 2px 8px -2px rgba(15,23,42,0.06)',
        'ambient-card': '0 1px 2px -1px rgba(15,23,42,0.04), 0 3px 10px -2px rgba(15,23,42,0.06), 0 8px 20px -4px rgba(15,23,42,0.04)',
        'floating': '0 2px 4px -1px rgba(15,23,42,0.06), 0 6px 18px -3px rgba(15,23,42,0.08), 0 16px 32px -8px rgba(15,23,42,0.05)',
        'floating-lg': '0 8px 32px -8px rgba(15,23,42,0.55), 0 2px 8px -2px rgba(15,23,42,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
        'hover': '0 4px 8px -2px rgba(59,130,246,0.12), 0 8px 24px -4px rgba(59,130,246,0.10), 0 20px 40px -8px rgba(59,130,246,0.06)',
      },
      
      borderRadius: {
        'xl': '16px',
      },
      
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      
      keyframes: {
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};

export default config;
