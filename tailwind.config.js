/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'] //specific classes
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter UI', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      colors: {
        gray: defaultColor.warmGray,
        brand: {
          50: '#68b2ff',
          100: '#5ea8ff',
          200: '#549eff',
          300: '#4a94ff',
          400: '#408af8',
          500: '#3680ee',
          600: '#2c76e4',
          700: '#226cda',
          800: '#1862d0',
          900: '#0e58c6'
        },
        primary: {
          50: '#7fd5ff',
          100: '#75cbff',
          200: '#6bc1ff',
          300: '#61b7ff',
          400: '#57adff',
          500: '#4da3f9',
          600: '#4399ef',
          700: '#398fe5',
          800: '#2f85db',
          900: '#257bd1'
        },
        secondary: {
          50: '#79e7ff',
          100: '#6fddff',
          200: '#65d3ff',
          300: '#5bc9ff',
          400: '#51bfff',
          500: '#47b5ff',
          600: '#3dabf5',
          700: '#33a1eb',
          800: '#2997e1',
          900: '#1f8dd7'
        },
        accent: {
          50: '#ffdc32',
          100: '#ffd228',
          200: '#ffc81e',
          300: '#ffbe14',
          400: '#ffb40a',
          500: '#ffaa00',
          600: '#f5a000',
          700: '#eb9600',
          800: '#e18c00',
          900: '#d78200'
        }
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand.500'),
              '&:hover': {
                color: theme('colors.brand.600')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // Additional first-party plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}
