const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: ({ colors }) => ({
        primary: colors.blue,
        secondary: colors.rose,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.sky,
        light: colors.white,
        dark: colors.slate,
        muted: colors.gray,
      })
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ]
}
