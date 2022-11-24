/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../packages/elementail-core/tailwind.config.cjs')],
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    '../../packages/**/*.{js,ts,jsx,tsx}'
  ],
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
