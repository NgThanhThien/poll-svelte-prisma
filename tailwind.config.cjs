/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  prefix: 'tw-',
  theme: {
    extend: {
      minHeight: {
        '50-screen': '50vh',
        '80-screen': '80vh',
      },
      maxWidth: {
        '4xl': '896px',
        '5xl': '1024px'
      }
    },
  },
  plugins: [],
}