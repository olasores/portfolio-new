/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white-mode': {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#ececec',
          300: '#e6e6e6',
          400: '#d1d1d1',
          500: '#bcbcbc',
          600: '#a7a7a7',
          700: '#929292',
          800: '#7d7d7d',
          900: '#686868',
        },
      },
    },
  },
  plugins: [],
};