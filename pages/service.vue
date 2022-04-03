<template>
  <div>
    <NubBer />
    <div class="relative flex w-full gap-10 overflow-x-auto snap-x snap-mandatory pb-14 py-36">
      <div class="snap-center shrink-0">
        <div class="w-6 shrink-0 sm:w-48"></div>
      </div>
      <template v-for="item in serviceData">
        <a :href="item.linkUrl" class="w-64 snap-center shrink-0 md:w-96" :key="item.id">
          <img class="bg-white rounded-lg shadow-xl md:h-60 shrink-0" :src="item.image" />
          <div class="my-6 text-lg font-medium text-gray-900 title-font">{{ item.title }}</div>
          <div class="mb-3 leading-relaxed">{{ item.item }}</div>
        </a>
      </template>
      <div class="snap-center shrink-0">
        <div class="w-6 shrink-0 sm:w-48"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  transition: 'slide-bottom',
  head() {
    return {
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '秋本裕之のweb site｜今まで制作してきた作品になります。参考にしていただけると幸いです。',
        },
        { hid: 'og:url', property: 'og:url', content: 'https://hiroyukihp.com/service' },
        { hid: 'og:title', property: 'og:title', content: 'Hiroyuki Akimoto[秋本 裕之] | Service' },
        { hid: 'og:type', property: 'og:type', content: 'article' },
      ],
    };
  },
  data() {
    return {
      serviceData: [
        {
          id: '1',
          title: 'Nuxt.js + Tailwind css',
          item: '現在表示されているサイトです。バックの言語は使っておらず、フロントのNuxt.jsをメインにコーディングしています。',
          image: require('@/assets/img/service-sub-img2.png'),
          linkUrl: '/',
        },
        {
          id: '2',
          title: 'Vue.js + Inertia.js + axios + Laravel Breeze',
          item: 'RSSをJSONで受け取り、Vue.jsで表示を行っております。リアルタイムでニュースとQiita記事の更新をすることが可能です。',
          image: require('@/assets/img/service-sub-img3.png'),
          linkUrl: 'https://github.com/akimoto-willof/laravel_blog',
        },
        {
          id: '3',
          title: 'React + Redux + ReduxSaga',
          item: 'APIのOpen Weather Mapを使い、React+Reduxを使いStore管理を行っています。検索フォームに入力するとリアルタイムでAPIの処理が走ります。',
          image: require('@/assets/img/service-sub-img4.png'),
          linkUrl: 'https://github.com/HIROYUKI20200507/react-test',
        },
        {
          id: '4',
          title: 'html + css + JS',
          item: '個人でコーチングをしている方の紹介サイトを作成しました。',
          image: require('@/assets/img/service-sub-img5.png'),
          linkUrl: 'https://sakata-coach.com',
        },
        {
          id: '5',
          title: 'html + css + JS + Vue.js',
          item: 'パーソナルボディメイクサロンを経営しているウェブサイトを作成しました。',
          image: require('@/assets/img/service-sub-img6.png'),
          linkUrl: 'https://ryoscoach.com/',
        },
        {
          id: '6',
          title: 'Github actions + Docker + Nuxt + tailwind + Firebase',
          item: '【開発中】チャットアプリです。auth認証やCI/CDを実現しています。',
          image: require('@/assets/img/service-sub-img7.png'),
          linkUrl: 'https://chatapp-b6126.web.app/',
        },
      ],
    };
  },
};
</script>
