<script setup lang="ts">
import type { Work } from '~/data/works';

defineProps<{ work: Work }>();
</script>

<template>
  <a
    :href="work.href"
    :target="work.href.startsWith('http') ? '_blank' : '_self'"
    rel="noopener"
    class="group block overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl"
  >
    <div class="aspect-[16/10] overflow-hidden bg-zinc-100">
      <img
        :src="work.image"
        :alt="work.title"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
    <div class="p-6">
      <div class="flex items-start justify-between gap-3">
        <h3
          class="font-display text-lg font-semibold tracking-tightish text-zinc-900 transition-colors group-hover:text-accent-600"
        >
          {{ work.title }}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 14.78a.75.75 0 0 0 1.06 0L14 7.06v4.69a.75.75 0 0 0 1.5 0V5.25a.75.75 0 0 0-.75-.75H8.25a.75.75 0 0 0 0 1.5h4.69L5.22 13.72a.75.75 0 0 0 0 1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">
        {{ work.description }}
      </p>
      <ul class="mt-4 flex flex-wrap gap-1.5">
        <li
          v-for="tag in work.stack"
          :key="tag"
          class="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </a>
</template>
