/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sp: {
          dark: '#0D2B1F',
          accent: '#22C55E',
          page: '#F8FAF9',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        noto: ['Noto Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 16px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.45s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        pulseSoft: 'pulseSoft 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
