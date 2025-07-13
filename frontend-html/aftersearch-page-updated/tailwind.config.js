/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f7f2e7',
        'card-bg': '#fdf7ee',
        border: '#e6e0d5',
        highlight: '#b48a56',
        'name-dark': '#2a272a',
        'tag-bg': '#e2d3c0',
        'tag-text': '#7c5a2f',
        'text-color': '#47392D',
        'subtext-color': '#b48a56',
        'body-bg': '#C9B7AD',
      },
      boxShadow: {
        'custom': '0 2px 8px rgba(80, 67, 53, 0.07)',
        'custom-lg': '0 8px 24px rgba(180, 138, 86, 0.13)',
        'custom-xl': '0 8px 32px rgba(180, 138, 86, 0.11)',
      },
    },
  },
  plugins: [],
};