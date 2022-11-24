const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // app content
        `src/**/*.{js,ts,jsx,tsx}`,
        // include packages if not transpiling
        // "../../packages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
            },
            colors: ({ colors }) => ({
                gray: colors.slate,
                black: '#13111d',
                brand: {
                    50: '#f0f5fe',
                    100: '#dde9fc',
                    200: '#c3d8fa',
                    300: '#9ac1f6',
                    400: '#6ba0ef',
                    500: '#487de9',
                    600: '#2b5adc',
                    700: '#2a4ccb',
                    800: '#283fa5',
                    900: '#253a83',
                },
                accent: {
                    50: '#FFE7B8',
                    100: '#FFE0A3',
                    200: '#FFD37A',
                    300: '#FFC552',
                    400: '#FFB829',
                    500: '#FFAA00',
                    600: '#C78500',
                    700: '#8F5F00',
                    800: '#573A00',
                    900: '#1F1400',
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
    ],
}
