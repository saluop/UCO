/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BF6D00',
          light: '#FF9B1F',
          dark: '#8C4F00'
        },
        secondary: {
          DEFAULT: '#494A20',
          light: '#6B6C2F',
          dark: '#2D2E14'
        }
      }
    },
  },
  plugins: [],
};