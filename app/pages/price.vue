<script setup lang="ts">
const SITE_URL = 'https://hiroyukihp.com';

useHead({
  title: 'Hiroyuki Akimoto[秋本 裕之] | Price',
  meta: [
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        '秋本裕之のweb site｜HP制作における参考価格表です。金額については参考価格なので、ご相談いただけると幸いです',
    },
    { hid: 'og:url', property: 'og:url', content: `${SITE_URL}/price` },
    { hid: 'og:title', property: 'og:title', content: 'Hiroyuki Akimoto[秋本 裕之] | Price' },
    { hid: 'og:type', property: 'og:type', content: 'article' },
  ],
});

type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '¥2,500',
    tagline: '小規模 LP / コーポレートサイト向け',
    features: ['デザイン作成 / 提案', '使用言語：HTML + CSS', 'ページ数：1〜2 ページ'],
  },
  {
    name: 'Startup',
    price: '¥3,000',
    tagline: '動きのあるサイトを作りたい方向け',
    features: ['Basic プラン + α', '使用言語：JavaScript / jQuery', 'アニメーション追加可能'],
    popular: true,
  },
  {
    name: 'Full package',
    price: '¥3,500〜',
    tagline: 'モダンスタックでフルスクラッチ',
    features: [
      'Startup プラン + α',
      'Figma / XD でのデザイン',
      '使用言語：Nuxt / React / TypeScript',
    ],
  },
];
</script>

<template>
  <div>
    <header class="border-b border-zinc-200/70">
      <div class="container-page py-20 md:py-28">
        <div class="max-w-3xl" v-reveal>
          <span class="eyebrow">Pricing</span>
          <h1
            class="mt-5 text-4xl font-extrabold tracking-tightish text-zinc-900 sm:text-5xl md:text-6xl"
          >
            Flexible <span class="text-accent-600">plans.</span>
          </h1>
          <p class="mt-6 text-base leading-relaxed text-zinc-600 md:text-lg">
            その他料金プラン・受託開発も可能ですので、お気軽にご相談ください。
            時間単価は参考価格です。
          </p>
        </div>
      </div>
    </header>

    <section class="container-page py-20 md:py-28">
      <div class="grid items-stretch gap-6 md:grid-cols-3 md:gap-8">
        <div
          v-for="plan in plans"
          :key="plan.name"
          v-reveal
          class="relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1"
          :class="
            plan.popular
              ? 'border-zinc-900 bg-zinc-900 text-white shadow-2xl md:-my-4'
              : 'border-zinc-200 bg-white text-zinc-900 shadow-soft hover:shadow-xl'
          "
        >
          <div
            v-if="plan.popular"
            class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-600 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg"
          >
            Popular
          </div>

          <div>
            <h3
              class="font-display text-xl font-semibold"
              :class="plan.popular ? 'text-white' : 'text-zinc-900'"
            >
              {{ plan.name }}
            </h3>
            <p class="mt-1 text-sm" :class="plan.popular ? 'text-zinc-300' : 'text-zinc-500'">
              {{ plan.tagline }}
            </p>
          </div>

          <div class="mt-6 flex items-baseline gap-1">
            <span
              class="font-display text-4xl font-bold tracking-tightish"
              :class="plan.popular ? 'text-white' : 'text-zinc-900'"
              >{{ plan.price }}</span
            >
            <span class="text-sm" :class="plan.popular ? 'text-zinc-400' : 'text-zinc-500'"
              >/h</span
            >
          </div>

          <hr class="my-6 border-t" :class="plan.popular ? 'border-zinc-700' : 'border-zinc-200'" />

          <ul class="space-y-3">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-3 text-sm"
              :class="plan.popular ? 'text-zinc-200' : 'text-zinc-700'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="mt-0.5 h-4 w-4 shrink-0"
                :class="plan.popular ? 'text-accent-400' : 'text-accent-600'"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.5 7.5a.75.75 0 0 1-1.073-.012L3.293 9a.75.75 0 1 1 1.08-1.04l4.31 4.473 6.96-6.95a.75.75 0 0 1 1.061-.013Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <a
            href="https://form.run/@hiroyuki-akimoto-hp-1615021598"
            target="_blank"
            rel="noopener"
            class="mt-auto pt-8"
          >
            <span
              class="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5"
              :class="
                plan.popular
                  ? 'bg-white text-zinc-900 hover:bg-accent-50'
                  : 'bg-zinc-900 text-white hover:bg-accent-600'
              "
            >
              Choose plan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-4 w-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
