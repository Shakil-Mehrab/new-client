export default {
    server: {
        port: 3333
    },

    ngrok: {
        authtoken: '1yPP89r0xEmoGOu2shTLrjeIbJR_7MYGRdReVNKjzxbD7Rdb5',
        region: 'ap'
    },

    head: {

        title: 'news-client',
        htmlAttrs: {
            lang: 'en'
        },

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],

        script: [
            { src: "https://kit.fontawesome.com/bb2f33706c.js" },
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [
        '@/assets/css/style.css',
        '@/assets/fonts/kiron/kiron.css'

    ],

    plugins: [
        "@/plugins/VueFragment",
        { src: "~/plugins/VueCarousel.js", mode: "client" },
    ],

    components: true,

    router: {
        middleware: ['DrawerMenuMiddleware'],
    },

    buildModules: [
        ['@nuxtjs/tailwindcss'],
        '@nuxtjs/device',
        '@nuxtjs/ngrok',
    ],

    modules: [
        '@nuxtjs/axios',

    ],
    axios: {},

    build: {}
}