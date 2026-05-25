<script setup lang="ts">
const socials = [
  {
    href: 'https://twitter.com/Akimon6134',
    label: 'X (Twitter)',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z',
  },
  {
    href: 'https://www.facebook.com/hiroyuki.akimoto.77',
    label: 'Facebook',
    path: 'M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V12H8v3h2v7h3v-7h2.5l.5-3H13V9.5c0-.28.22-.5.5-.5Z',
  },
  {
    href: 'https://github.com/HIROYUKI20200507',
    label: 'GitHub',
    path: 'M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.65.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.15-1.45 3.1-1.15 3.1-1.15.61 1.56.23 2.71.11 3 .72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.28-5.16 5.56.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.78.54 4.46-1.49 7.68-5.69 7.68-10.65C23.25 5.48 18.27.5 12 .5Z',
  },
  {
    href: 'https://qiita.com/hiroyuki_0507',
    label: 'Qiita',
    path: 'M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm4.93 14.7-1.78 1.13c-.83-1.31-1.62-2.4-2.36-3.27-.74-.87-1.7-1.86-2.88-2.97l1.46-1.55c1.46 1.36 2.61 2.55 3.45 3.57.84 1.03 1.54 2.06 2.11 3.09Z',
  },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-zinc-200/80 bg-white/60 backdrop-blur">
    <div class="container-page flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
      <p class="text-xs text-zinc-500">© {{ year }} Hiroyuki Akimoto. All rights reserved.</p>

      <div class="flex items-center gap-2">
        <a
          v-for="s in socials"
          :key="s.href"
          :href="s.href"
          :aria-label="s.label"
          target="_blank"
          rel="noopener"
          class="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-accent-600 hover:text-accent-600 hover:shadow-soft"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-4 w-4"
          >
            <path :d="s.path" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
