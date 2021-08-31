<template>
    <div class="w-4/6 mx-auto md:w-full h-full">
        <NubBer />
          <!-- Section Hero  -->
          <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
            <div class="grid justify-center items-center order-1 col-span-1">
              <img class="lg:h-80 md:h-64 h-40 rounded-full" src="~assets/img/profile.jpg" alt="profile-image" />
            </div>
            <div class="mx-auto mt-8 md:mt-0 lg:justify-end col-span-2">
              <h1 class="text-2xl md:text-4xl text-gray-800 text-center md:text-left font-bold mb-6">HIROYUKI's Portfolio</h1>
              <p class=" mb-8 text-lg md:text-xl text-gray-800 text-center md:text-left">フロントエンドエンジニアとしてシステム開発業務を行っています。<br>使用言語は、Tailwind CSS｜JavaScript｜Vue.js｜Vuex｜Nuxt.js｜Laravelです。<br>このサイトは、Tailwind CSS*Nuxt.js*Typescriptで作成しています。<br>HP制作も承っております。</p>
              <a target="_blank" href="https://form.run/@hiroyuki-akimoto-hp-1615021598" class="mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">contact me</a>
            </div>
          </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'slide-bottom'
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

</style>
