/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../packages/elementail-core/tailwind.config.js')],
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {}
  },
  plugins: []
}
