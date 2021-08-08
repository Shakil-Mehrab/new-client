export default {
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
        '@/assets/css/style.css'
    ],

    plugins: [
        "@/plugins/VueFragment",
    ],

    components: true,

    buildModules: [
        ['@nuxtjs/tailwindcss']
    ],

    modules: [
        '@nuxtjs/axios',

    ],
    axios: {},

    build: {}
}
