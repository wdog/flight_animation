/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./public/**/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["'Poppins'", "arial", "sans-serif"],
    },
  },
  plugins: [],
};
