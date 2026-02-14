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
          500: '#2563eb',
          600: '#1d4ed8'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgb(2 6 23 / 0.2)'
      }
    }
  },
  plugins: []
};
