/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#09030f',
          900: '#12091d',
          800: '#1A0F2E',
          700: '#26164a',
          600: '#3c2670',
          gold: '#D4AF37',
          softGold: '#E8D8A6',
          lavender: '#8F79C9',
          mist: '#D9D1F0',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        aura: '0 0 30px rgba(212, 175, 55, 0.25), 0 30px 80px rgba(9, 3, 15, 0.45)',
        glass: '0 24px 60px rgba(0, 0, 0, 0.35)',
        pulse: '0 0 0 1px rgba(212, 175, 55, 0.2), 0 0 40px rgba(212, 175, 55, 0.18)',
      },
      backgroundImage: {
        cosmic:
          'radial-gradient(circle at top, rgba(143,121,201,0.15), transparent 28%), radial-gradient(circle at 15% 20%, rgba(212,175,55,0.18), transparent 20%), linear-gradient(180deg, #09030f 0%, #12091d 30%, #1A0F2E 60%, #09030f 100%)',
        glass:
          'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))',
        cardGlow:
          'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(26,15,46,0.4), rgba(143,121,201,0.18))',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 15s linear infinite',
        shimmer: 'shimmer 3.4s ease-in-out infinite',
        pulseSlow: 'pulseSlow 5s ease-in-out infinite',
        orbit: 'orbit 20s linear infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        drift: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(20px) translateY(-16px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(0.98)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(10px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(10px) rotate(-360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.8)' },
          '50%': { opacity: '0.95', transform: 'scale(1.12)' },
        },
      },
      maxWidth: {
        content: '1160px',
      },
    },
  },
  plugins: [],
};
