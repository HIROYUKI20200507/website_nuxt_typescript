<script setup lang="ts">
import { works } from '~/data/works';

useHead({
  title: 'Hiroyuki Akimoto[秋本 裕之] | Portfolio',
});

const featured = works.slice(0, 3);
</script>

<template>
  <div>
    <SectionHero />

    <WorksGrid
      :works="featured"
      eyebrow="Selected works"
      title="Recent projects"
      description="Vue / React / TailwindCSS を中心に、コーポレートサイトから業務システム、SPA まで幅広く制作しています。"
    />

    <section class="border-t border-zinc-200/70 bg-white">
      <div class="container-page grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div v-reveal>
          <span class="eyebrow">Let's talk</span>
          <h2
            class="mt-4 text-3xl font-bold tracking-tightish text-zinc-900 sm:text-4xl md:text-5xl"
          >
            お仕事のご相談、<br />お気軽にどうぞ。
          </h2>
        </div>
        <div class="flex md:justify-end" v-reveal>
          <a
            href="https://form.run/@hiroyuki-akimoto-hp-1615021598"
            target="_blank"
            rel="noopener"
            class="btn-primary !px-8 !py-4 !text-base"
          >
            Contact me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
