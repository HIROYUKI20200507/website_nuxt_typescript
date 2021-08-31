<template>
    <div>
        <NubBer />
        <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
          <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
              <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                  <button @change="isClickItem(0)" :class="{'bg-blue-500': activeButton[0]}" class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                  <button @change="isClickItem(1)" :class="{'bg-blue-500': activeButton[1]}" class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                  <button @change="isClickItem(2)" :class="{'bg-blue-500': activeButton[2]}" class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                  <button @change="isClickItem(3)" :class="{'bg-blue-500': activeButton[3]}" class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
              </div>
              <div class="max-w-lg md:mx-12 md:order-2">
                  <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">{{ activeConts.title[0] }}</h1>
                  <p class="mt-4 text-gray-600 dark:text-gray-300">{{ activeConts.title[0] }}</p>
                  <div class="mt-6">
                      <a href="#" class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Look up</a>
                  </div>
              </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 md:w-1/2">
              <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo">
          </div>
      </div>

        <div class="pb-52">
            <div class="flex items-center justify-center gap-20 mb-40 perf-top-layout">
                <img src="~assets/img/Service-img.png" alt="" class="w-2/5 perf-img">
                <div class="perf-contents">
                    <a href="#service">
                        <button class="perf-button">
                            <div class="pb-4 text-3xl leading-10 contents-main"><span class="layout-radius"></span>Service</div>
                        </button>
                    </a>
                    <p class="flex-wrap w-4/5 contents-sub">
                        個人・法人関わらず、システム開発・コーポレートサイトやLPの制作などフロントエンドを中心に展開中です。
                        要件定義からリリース・保守点検まで幅広いサービスの提供をさせていただきております。
                        制作デザインも承ることが可能です。
                        <br>
                        <br>
                        また、無料でプログラミングを学びたい方も募集しているので、興味がある方は
                        <span id="service" class="contents-sub-span"><a href="https://form.run/@hiroyuki-akimoto-hp-1615021598">こちら</a></span>
                        から連絡ください。
                    </p>
                    <div class="icon-detail">
                        <a target="_blank" href="https://github.com/HIROYUKI20200507"><img class="m-3 mt-5 w-7 h-7" src="~assets/img/icon/github-icon.svg" alt="githubアイコン"></a>
                    </div>
                </div>
            </div>
            <div name="slide">
                <div class="-mt-20 pref-sub-img" key="img">
                    <div class="relative mb-20 text-3xl text-center sub-title">Actual results</div>
                    <li class="flex items-center justify-between gap-5 m-auto mb-40">
                        <a href="https://isara-mosya.web.app/"><img src="~assets/img/service-sub-img1.png" alt="isara模写"><span>模写コーディング</span></a>
                        <a href="https://sakata-coach.com/"><img src="~assets/img/service-sub-img2.png" alt="sakataコーチング"><span>コーチングサイト</span></a>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  transition: 'slide-bottom',
  data() {
    return {
      activeButton: [true, false, false, false],
      activeConts: {
        title: ['html + css'],
        item: ['html + css'],
      },
      service: {
        title: ['html + css','html + css + jQuery','Vue.js + axios','React + Redux + ReduxSaga'],
        item: ['html+css','html+css+jQuery','Vue.js+axios','react+redux+redux saga'],
      }
    }
  },
  mounted() {
    let count = 0
    setInterval(() => {
      this.activeButton = [false, false, false, false]
      this.activeButton[count++] = true
      if(count > 3)count = 0
    }, 4000);
  },
  watch: {
    activeButton(i) {
      this.activeConts.title.splice(0, 1, this.service.title[this.activeButton.indexOf(true)])
      this.activeConts.item.splice(0, 1, this.service.item[this.activeButton.indexOf(true)])
    }
  },
  methods: {
    isClickItem(i) {
      this.activeButton = [false, false, false, false]
      this.activeButton[i] = true

      this.activeConts.title.splice(0, 1, this.service.title[i])
      this.activeConts.item.splice(0, 1, this.service.item[i])
    }
  }

}
</script>
