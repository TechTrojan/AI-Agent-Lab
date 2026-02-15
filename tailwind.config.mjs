/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#b7d9ff',
          300: '#89c0ff',
          400: '#559fff',
          500: '#2d7fff',
          600: '#1b66e6',
          700: '#1550b4',
          800: '#15458f',
          900: '#173e76'
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2'
        }
      },
      boxShadow: {
        soft: '0 12px 30px -15px rgb(15 23 42 / 0.20)',
        glow: '0 0 0 1px rgb(59 130 246 / 0.18), 0 14px 36px -18px rgb(37 99 235 / 0.45)'
      },
      backgroundImage: {
        'brand-radial': 'radial-gradient(circle at 20% 20%, rgba(45,127,255,0.2), transparent 45%)'
      }
    }
  },
  plugins: []
};
