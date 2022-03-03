export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hiroyuki Akimoto[秋本 裕之] | Portfolio',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '秋本裕之のweb site｜元八百屋。現在フロントエンドエンジニアとして働く傍ら、HPやLPのデザイン〜制作・保守まで受けています。趣味でフロントも教えていたりします。',
      },

      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Hiroyuki Akimoto[秋本 裕之] | Portfolio',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://hiroyukihp.com' },
      { hid: 'og:title', property: 'og:title', content: 'Hiroyuki Akimoto[秋本 裕之] | Portfolio' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '秋本裕之のweb site｜元八百屋。現在フロントエンドエンジニアとして働く傍ら、HPやLPのデザイン〜制作・保守まで受けています。趣味でフロントも教えていたりします。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://hiroyukihp.com/profile.jpg',
      },

      { hid: 'fb:app_id', property: 'fb:app_id', content: '1009521386550829' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'Summary Card' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Akimon6134' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '~/assets/css/tailwind.css',
    // SCSS file in the project
    // '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  generate: {
    dir: 'public',
  },
};
