import { defineNuxtConfig } from 'nuxt/config';

const SITE_URL = 'https://hiroyukihp.com';
const SITE_TITLE = 'Hiroyuki Akimoto[秋本 裕之] | Portfolio';
const SITE_DESCRIPTION =
  '秋本裕之のweb site｜元八百屋。現在フロントエンドエンジニアとして働く傍ら、HPやLPのデザイン〜制作・保守まで受けています。趣味でフロントも教えていたりします。';

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@vueuse/nuxt'],

  css: ['~/assets/css/tailwind.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'ja' },
      title: SITE_TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0a' },
        { hid: 'description', name: 'description', content: SITE_DESCRIPTION },

        { hid: 'og:site_name', property: 'og:site_name', content: SITE_TITLE },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: SITE_URL },
        { hid: 'og:title', property: 'og:title', content: SITE_TITLE },
        { hid: 'og:description', property: 'og:description', content: SITE_DESCRIPTION },
        { hid: 'og:image', property: 'og:image', content: `${SITE_URL}/profile.jpg` },

        { hid: 'fb:app_id', property: 'fb:app_id', content: '1009521386550829' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@Akimon6134' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },

  image: {
    format: ['webp'],
  },

  runtimeConfig: {
    rss2jsonApiKey: process.env.RSS2JSON_API_KEY ?? '',
    pixabayApiKey: process.env.PIXABAY_API_KEY ?? '',
    public: {
      siteUrl: SITE_URL,
    },
  },

  nitro: {
    preset: 'static',
    output: {
      publicDir: 'public',
    },
  },

  typescript: {
    strict: true,
  },
});
