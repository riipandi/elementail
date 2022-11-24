/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../packages/elementail-core/tailwind.config.js')],
  content: [
    `stories/**/*.{js,ts,jsx,tsx,mdx}`,
    // include packages if not transpiling
    '../../packages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        gray: colors.slate,
        black: '#13111d',
      })
    }
  },
  plugins: []
}
