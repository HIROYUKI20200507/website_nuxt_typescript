<template>
  <div class="font-sans bg-gray-100">
    <NubBer />
    <div class="flex items-center justify-center min-h-ful">
      <div class="">
        <div class="font-semibold text-center">
          <h1 class="mt-6 text-5xl">
            <span class="tracking-wide text-blue-700">Flexible </span>
            <span>Plans</span>
          </h1>
          <p class="w-4/6 px-8 pt-6 mx-auto text-sm font-normal text-gray-400 md:text-xl md:w-full">
            その他料金プラン・受託開発も可能ですので相談下さい。
          </p>
        </div>
        <div class="flex-row pt-16 md:flex">
          <!-- Basic Card -->
          <div
            class="p-6 pr-16 mx-auto text-center bg-white shadow-xl  md:mx-0 w-80 md:w-96 rounded-3xl"
          >
            <h1 class="text-2xl font-semibold text-black">ベーシック</h1>
            <p class="pt-2 tracking-wide">
              <span class="text-gray-400 align-top">¥ </span>
              <span class="text-3xl font-semibold">39,800</span>
              <span class="font-medium text-gray-400">-</span>
            </p>
            <hr class="mt-4 border-1" />
            <div class="pt-6">
              <p class="font-semibold text-left text-gray-400">
                <span class="align-middle material-icons"> done </span>
                <span class="pl-2"> デザイン <span class="text-black">作成・提案</span> </span>
              </p>
              <p class="pt-5 font-semibold text-left text-gray-400">
                <span class="align-middle material-icons"> done </span>
                <span class="pl-2"> 使用言語 <span class="text-black">html + css</span> </span>
              </p>
              <p class="pt-5 font-semibold text-left text-gray-400">
                <span class="align-middle material-icons"> done </span>
                <span class="pl-2"> ページ数 <span class="text-black">1〜2ページ</span> </span>
              </p>

              <a target="_blank" href="https://form.run/@hiroyuki-akimoto-hp-1615021598">
                <p class="w-full py-4 mt-8 text-white bg-blue-600 rounded-xl">
                  <span class="font-medium"> Choose Plan </span>
                  <span class="pl-2 text-sm align-middle material-icons"> east </span>
                </p>
              </a>
            </div>
          </div>
          <!-- StartUp Card -->
          <div
            class="p-6 mx-auto mt-10 text-center text-white transform bg-gray-900 border-4 border-white shadow-xl  w-80 rounded-3xl md:scale-125"
          >
            <h1 class="text-2xl font-semibold text-white">Startup</h1>
            <p class="pt-2 tracking-wide">
              <span class="text-gray-400 align-top">¥ </span>
              <span class="text-3xl font-semibold">59,800</span>
              <span class="font-medium text-gray-400">-</span>
            </p>
            <hr class="mt-4 border-gray-600 border-1" />
            <div class="pt-6">
              <p class="font-semibold text-left text-gray-400">
                <span class="align-middle material-icons"> done </span>
                <span class="pl-2"> ベーシックプラン <span class="text-white">+ α</span> </span>
              </p>
              <p class="pt-5 font-semibold text-left text-gray-400">
                <span class="align-middle material-icons"> done </span>
                <span class="pl-2">
                  使用言語 <span class="text-white">JavaScript jQuery</span>
                </span>
              </p>
              <p class="pt-5 font-semibold text-left text-gray-400">
                <span class="align-middle material-icons"> done </span>
                <span class="pl-2"> <span class="text-white">アニメーション</span> 追加可能 </span>
              </p>

              <a target="_blank" href="https://form.run/@hiroyuki-akimoto-hp-1615021598">
                <p class="w-full py-4 mt-8 text-white bg-blue-600 rounded-xl">
                  <span class="font-medium"> Choose Plan </span>
                  <span class="pl-2 text-sm align-middle material-icons"> east </span>
                </p>
              </a>
            </div>
            <div class="absolute top-4 right-4">
              <p class="px-4 py-1 text-xs font-semibold uppercase bg-blue-700 rounded-full">
                Popular
              </p>
            </div>
          </div>
          <!-- Enterprise Card -->
          <div
            class="p-6 mx-auto mt-10 text-center bg-white shadow-xl  md:mt-0 w-80 md:w-96 rounded-3xl md:pl-16"
          >
            <h1 class="text-2xl font-semibold text-black">フルパッケージ</h1>
            <p class="pt-2 tracking-wide">
              <span class="text-gray-400 align-top">¥ </span>
              <span class="text-3xl font-semibold">79,800</span>
              <span class="font-medium text-gray-400">-</span>
            </p>
            <hr class="mt-4 border-1" />
            <div class="pt-6">
              <p class="font-semibold text-left text-gray-400">
                <span class="align-middle material-icons"> done </span>
                <span class="pl-2"> Startup <span class="text-black">+ α</span> </span>
              </p>
              <p class="pt-5 font-semibold text-left text-gray-400">
                <span class="align-middle material-icons"> done </span>
                <span class="pl-2"> <span class="text-black">XD</span> でのデザイン </span>
              </p>
              <p class="pt-5 font-semibold text-left text-gray-400">
                <span class="align-middle material-icons"> done </span>
                <span class="pl-2"> 使用言語　<span class="text-black">Nuxt.js</span> </span>
              </p>

              <a target="_blank" href="https://form.run/@hiroyuki-akimoto-hp-1615021598">
                <p class="w-full py-4 mt-8 text-white bg-blue-600 rounded-xl">
                  <span class="font-medium"> Choose Plan </span>
                  <span class="pl-2 text-sm align-middle material-icons"> east </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '秋本裕之のweb site｜HP制作における参考価格表です。金額については参考価格なので、ご相談いただけると幸いです',
        },
        { hid: 'og:url', property: 'og:url', content: 'https://hiroyukihp.com/price' },
        { hid: 'og:title', property: 'og:title', content: "Hiroyuki Akimoto[秋本 裕之] | Price" },
        { hid: 'og:type', property: 'og:type', content: 'article' },
      ]
    }
  },
  transition: 'slide-bottom',
};
</script>
