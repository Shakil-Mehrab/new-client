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
            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}