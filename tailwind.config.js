/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f5',
          100: '#ffe4e8',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337'
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 10% -10%, rgba(244,63,94,0.15), transparent 70%), radial-gradient(1000px 500px at 100% 0%, rgba(139,92,246,0.15), transparent 60%)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16, 24, 40, 0.06)'
      }
    },
  },
  plugins: [],
};

