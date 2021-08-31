<template>
  <div>
    <NubBer />
    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
              <button @click="isClickItem(0)" :class="{'bg-blue-500': activeButton[0]}" class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button @click="isClickItem(1)" :class="{'bg-blue-500': activeButton[1]}" class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button @click="isClickItem(2)" :class="{'bg-blue-500': activeButton[2]}" class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button @click="isClickItem(3)" :class="{'bg-blue-500': activeButton[3]}" class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button @click="isClickItem(4)" :class="{'bg-blue-500': activeButton[4]}" class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
          </div>
          <div class="max-w-lg md:mx-12 md:order-2">
              <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">{{ activeConts.title[0] }}</h1>
              <p class="mt-4 text-gray-600 dark:text-gray-300">{{ activeConts.item[0] }}</p>
              <div class="mt-6">
                  <a target="_blank" :href="activeConts.linkUrl[0]" class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Look up</a>
              </div>
          </div>
      </div>

      <div class="flex items-center justify-center w-full h-96 md:w-1/2">
          <img class="object-cover w-full h-full max-w-2xl rounded-md" :src="activeConts.image[0]" alt="image photo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'slide-bottom',
  data() {
    return {
      activeButton: [true, false, false, false, false],
      activeConts: {
        title: ['html + css + jQuery'],
        item: ['isaraの模写です。基本的なHPの機能を実装しています。'],
        image: [require('@/assets/img/service-sub-img1.png')],
        linkUrl: ['https://isara-mosya.web.app/']
      },
      service: {
        title: [
          'html + css + jQuery',
          'Nuxt.js + Tailwind css + TypeScript',
          'Vue.js + Inertia.js + axios + Laravel Breeze',
          'React + Redux + ReduxSaga',
          'html + css + vanilla JS',
        ],
        item: [
          'isaraの模写です。基本的なHPの機能を実装しています。',
          '現在表示されているサイトです。バックの言語は使っておらず、フロントのNuxt.jsをメインにコーディングしています。',
          'RSSをJSONで受け取り、Vue.jsで表示を行っております。リアルタイムでニュースとQiita記事の更新をすることが可能です。',
          'APIのOpen Weather Mapを使い、React+Reduxを使いStore管理を行っています。検索フォームに入力するとリアルタイムでAPIの処理が走ります。',
          '個人でコーチングをしている方の紹介サイトを作成しました。',
        ],
        image: [
          require('@/assets/img/service-sub-img1.png'),
          require('@/assets/img/service-sub-img2.png'),
          require('@/assets/img/service-sub-img3.png'),
          require('@/assets/img/service-sub-img4.png'),
          require('@/assets/img/service-sub-img5.png'),
        ],
        linkUrl: [
          'https://isara-mosya.web.app/',
          '/',
          'https://github.com/akimoto-willof/laravel_blog',
          'https://github.com/HIROYUKI20200507/react-test',
          'https://sakata-coach.com/',
        ],
      }
    }
  },
  mounted() {
    let count = 1
    setInterval(() => {
      this.activeButton = [false, false, false, false, false]
      this.activeButton[count++] = true
      if(count > 4)count = 0
    }, 5000);
  },
  watch: {
    activeButton(i) {
      this.activeConts.title.splice(0, 1, this.service.title[this.activeButton.indexOf(true)])
      this.activeConts.item.splice(0, 1, this.service.item[this.activeButton.indexOf(true)])
      this.activeConts.image.splice(0, 1, this.service.image[this.activeButton.indexOf(true)])
      this.activeConts.linkUrl.splice(0, 1, this.service.linkUrl[this.activeButton.indexOf(true)])
    }
  },
  methods: {
    isClickItem(i) {
      this.activeButton = [false, false, false, false]
      this.activeButton[i] = true

      this.activeConts.title.splice(0, 1, this.service.title[i])
      this.activeConts.item.splice(0, 1, this.service.item[i])
      this.activeConts.image.splice(0, 1, this.service.image[i])
      this.activeConts.linkUrl.splice(0, 1, this.service.linkUrl[i])
    }
  }

}
</script>
