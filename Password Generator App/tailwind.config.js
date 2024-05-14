/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      screens: {
        vs: "450px"
      }
    },
  },
  plugins: [],
}

