<script setup lang="ts">
import { onClickOutside, useScroll } from '@vueuse/core';

const links = [
  { to: '/', label: 'Home' },
  { to: '/service', label: 'Works' },
  { to: '/blog', label: 'Blog' },
];

const open = ref(false);
const panel = ref<HTMLElement | null>(null);
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    open.value = false;
  }
);

onClickOutside(panel, () => {
  open.value = false;
});

const { y } = useScroll(typeof window !== 'undefined' ? window : null);
const elevated = computed(() => y.value > 8);
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="
      elevated
        ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/70'
        : 'bg-transparent border-b border-transparent'
    "
  >
    <div class="container-page flex h-16 items-center justify-between">
      <NuxtLink
        to="/"
        class="font-display text-lg font-bold tracking-tightish text-zinc-900 transition-colors hover:text-accent-600"
      >
        Hiroyuki<span class="text-accent-600">.</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          active-class="!text-zinc-900"
        >
          {{ link.label }}
          <span
            v-if="route.path === link.to"
            class="absolute inset-x-4 -bottom-px h-px bg-accent-600"
          />
        </NuxtLink>
        <a
          href="https://form.run/@hiroyuki-akimoto-hp-1615021598"
          target="_blank"
          rel="noopener"
          class="ml-3 btn-primary !py-2 !px-5 !text-xs"
        >
          Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-3.5 w-3.5"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-700 backdrop-blur transition-colors hover:bg-white"
        :aria-expanded="open"
        aria-label="Menu"
        @click="open = !open"
      >
        <svg
          v-if="!open"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          class="h-5 w-5"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          class="h-5 w-5"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <!-- Mobile panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="open"
        ref="panel"
        class="md:hidden border-t border-zinc-200/70 bg-white/90 backdrop-blur-xl"
      >
        <nav class="container-page flex flex-col py-4">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
            active-class="!text-accent-600"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="https://form.run/@hiroyuki-akimoto-hp-1615021598"
            target="_blank"
            rel="noopener"
            class="mt-2 btn-primary"
          >
            Contact me
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
