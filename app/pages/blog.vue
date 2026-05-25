<script setup lang="ts">
const SITE_URL = 'https://hiroyukihp.com';

useHead({
  title: 'Hiroyuki Akimoto[秋本 裕之] | Blog',
  meta: [
    {
      hid: 'og:description',
      property: 'og:description',
      content: '秋本裕之のweb site｜blog記事です。主にQiitaで発信を行っています。',
    },
    { hid: 'og:url', property: 'og:url', content: `${SITE_URL}/blog` },
    { hid: 'og:title', property: 'og:title', content: 'Hiroyuki Akimoto[秋本 裕之] | Blog' },
    { hid: 'og:type', property: 'og:type', content: 'blog' },
  ],
});

type Article = {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

type Hit = { id: number; url: string };

const { data: feed } = await useFetch<{ items: Article[] }>('/api/qiita', {
  default: () => ({ items: [] }),
});

const { data: images } = await useFetch<{ hits: Hit[] }>('/api/pixabay', {
  query: { q: 'programming', per_page: 12 },
  default: () => ({ hits: [] }),
});

const articles = computed(() => feed.value?.items ?? []);
const hits = computed(() => images.value?.hits ?? []);

const formatDate = (raw: string) => raw.slice(0, 10);
</script>

<template>
  <div>
    <header class="border-b border-zinc-200/70">
      <div class="container-page py-20 md:py-28">
        <div class="max-w-3xl" v-reveal>
          <span class="eyebrow">Blog</span>
          <h1
            class="mt-5 text-4xl font-extrabold tracking-tightish text-zinc-900 sm:text-5xl md:text-6xl"
          >
            Notes & <span class="text-accent-600">articles</span>.
          </h1>
          <p class="mt-6 text-base leading-relaxed text-zinc-600 md:text-lg">
            主に
            <a
              class="underline underline-offset-4 hover:text-accent-600"
              href="https://qiita.com/hiroyuki_0507"
              target="_blank"
              rel="noopener"
              >Qiita</a
            >
            で技術記事を発信しています。
          </p>
        </div>
      </div>
    </header>

    <section class="container-page py-16 md:py-20">
      <div v-if="articles.length === 0" class="py-20 text-center text-zinc-500">
        記事を取得できませんでした。時間を置いて再度お試しください。
      </div>

      <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(article, index) in articles"
          :key="article.guid"
          v-reveal
          :href="article.link"
          target="_blank"
          rel="noopener"
          class="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl"
        >
          <div class="aspect-[16/10] overflow-hidden bg-zinc-100">
            <img
              v-if="hits[index]?.url"
              :src="hits[index].url"
              :alt="article.title"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div
              v-else
              class="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-12 w-12"
              >
                <path d="M4 5h16v14H4z" opacity=".2" />
                <path
                  d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Zm-2 0H5V5h14Z"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-1 flex-col p-6">
            <time class="text-xs uppercase tracking-wider text-zinc-400">
              {{ formatDate(article.pubDate) }}
            </time>
            <h2
              class="mt-3 font-display text-lg font-semibold text-zinc-900 line-clamp-2 transition-colors group-hover:text-accent-600"
            >
              {{ article.title }}
            </h2>
            <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-600">
              {{ article.description }}
            </p>
            <span class="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent-600">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>
