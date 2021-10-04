const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: {
        content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'subscribe-img': "url('@/assets/images/dbc/bg.png')",
            }),
            colors: {
                fuchsia: colors.fuchsia
            },
            transitionProperty: {
                'height': 'height',
            },
            // fontFamily: {
            //     'kiron': "'Kiron', 'Arial', 'sans-serif'",
            //     'siyamrupali': "'Siyamrupali', 'Arial', 'sans-serif'",
            // },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            '2md': '992px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        minHeight: {
            '48': '12.6rem',
            '80': '20.6rem',
        }

    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio')
    ],
}
