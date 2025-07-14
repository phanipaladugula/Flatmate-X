/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add the custom fonts to use them with `font-inter` and `font-hanken`
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        hanken: ['"Hanken Grotesk"', 'sans-serif'],
      },
      // Note: The animation is defined in `index.css` because it's complex and responsive.
    },
  },
  plugins: [],
}