/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outline-white': '0 0 0 3px rgba(255, 255, 255, 0.5)', 
        'outline-black': '0 0 0 1px rgba(0, 0, 0, 0.25)', 
      }
    },
    fontFamily: {
      'covered': ['Covered By Your Grace', 'cursive'],
      'switzer': ['Switzer', 'sans-serif'],
    },
  },
  plugins: [],
}

