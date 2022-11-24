/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../packages/elementail-core/tailwind.config.js')],
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        gray: colors.slate,
        black: '#13111d',
        primary: colors.indigo,
        secondary: colors.cyan
      })
    }
  },
  plugins: []
}
