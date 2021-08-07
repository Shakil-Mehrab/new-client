module.exports = {
    purge: [],
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                n1_id_w: '1920px',
            },
            backgroundColor: {
                n1_id_bg: 'rgba(255, 255, 255, 1)',
            },
            height: {
                n1_id_h: '10437px',
            }

        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}