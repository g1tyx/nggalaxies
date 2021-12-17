export default {
    
    // Disable server-side rendering
    ssr: false,

    // Target
    target: 'static',

    // Global page headers
    head: {
        title: 'NG Galaxies',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&amp;display=swap' },
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', integrity:'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p', crossorigin:'anonymous' },
            { src: 'https://kit.fontawesome.com/eec3c710b7.js', crossorigin: 'anonymous' },
        ],
    },

    // Global CSS
    css: [
        '@/assets/scss/styles.scss',
    ],

    // Plugins to run before rendering page
    plugins: [
    ],

    // Auto import components
    components: true,

    // Modules for dev and build
    buildModules: [
        '@nuxtjs/google-analytics',
    ],

    // Google Analytics module configuration
    googleAnalytics: {
        id:'G-Q1C1RTM5F4',
    },

    // Modules
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/i18n',
    ],

    // PWA module configuration
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // i18n module configuration
    i18n: {
        locales: [
            { code:'en', file:'en.js' },
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'en',
    },

    // Build Configuration
    build: {
    }
}
