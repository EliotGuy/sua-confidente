/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'confidente-gold': '#D4AF37',
        'confidente-black': '#0A0A0A',
        'confidente-dark': '#121212',
        'confidente-gray': '#1E1E1E',
        'confidente-light': '#F5F5F5'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
        mukta: ['Mukta Vaani', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      backgroundPosition: {
        right60: '57% 0'
      }
    }
  },
  plugins: []
};
