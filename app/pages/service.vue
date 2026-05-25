<script setup lang="ts">
import { works } from '~/data/works';

const SITE_URL = 'https://hiroyukihp.com';

useHead({
  title: 'Hiroyuki Akimoto[秋本 裕之] | Works',
  meta: [
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        '秋本裕之のweb site｜今まで制作してきた作品になります。参考にしていただけると幸いです。',
    },
    { hid: 'og:url', property: 'og:url', content: `${SITE_URL}/service` },
    { hid: 'og:title', property: 'og:title', content: 'Hiroyuki Akimoto[秋本 裕之] | Works' },
    { hid: 'og:type', property: 'og:type', content: 'article' },
  ],
});
</script>

<template>
  <div>
    <header class="border-b border-zinc-200/70">
      <div class="container-page py-20 md:py-28">
        <div class="max-w-3xl" v-reveal>
          <span class="eyebrow">Works</span>
          <h1
            class="mt-5 text-4xl font-extrabold tracking-tightish text-zinc-900 sm:text-5xl md:text-6xl"
          >
            これまでの<br />制作実績。
          </h1>
          <p class="mt-6 text-base leading-relaxed text-zinc-600 md:text-lg">
            個人 / 業務問わず、これまでに携わったプロジェクトの一部をご紹介します。
            技術スタック・要件に応じて最適な構成をご提案します。
          </p>
        </div>
      </div>
    </header>

    <WorksGrid :works="works" eyebrow="All projects" title="Projects" description="" />
  </div>
</template>
