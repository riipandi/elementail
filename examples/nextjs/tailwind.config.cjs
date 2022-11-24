const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('@elementail/core/tailwind.config')],
    content: ['src/**/*.{js,ts,jsx,tsx}', 'node_modules/@elementail/core/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: ({ colors }) => ({
                gray: colors.slate,
                primary: colors.rose,
            }),
        },
    },
    plugins: [],
}
