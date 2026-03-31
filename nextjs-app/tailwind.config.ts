import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { '2xl': '1080px' },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f1e3d',
          2: '#1a2f5e',
        },
        accent: {
          DEFAULT: '#e8a020',
          hover: '#f0b030',
        },
        brand: {
          blue: '#1d5fad',
          'blue-lt': '#3b82f6',
        },
        off: '#f4f7fc',
        border: '#dde4ef',
        ink: '#1a2030',
        muted: '#5a6a82',
      },
      fontFamily: {
        noto: ['var(--font-noto)', 'system-ui', 'Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '14px',
        md: '10px',
        sm: '8px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(15,30,61,.10)',
        'card-lg': '0 12px 40px rgba(15,30,61,.15)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
