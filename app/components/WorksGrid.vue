<script setup lang="ts">
import type { Work } from '~/data/works';

withDefaults(
  defineProps<{
    works: Work[];
    eyebrow?: string;
    title?: string;
    description?: string;
  }>(),
  {
    eyebrow: 'Selected works',
    title: 'Recent projects',
    description: '',
  }
);
</script>

<template>
  <section class="container-page py-20 md:py-28">
    <div class="max-w-2xl" v-reveal>
      <span class="eyebrow">{{ eyebrow }}</span>
      <h2 class="mt-4 text-3xl font-bold tracking-tightish text-zinc-900 sm:text-4xl md:text-5xl">
        {{ title }}
      </h2>
      <p v-if="description" class="mt-4 text-base leading-relaxed text-zinc-600">
        {{ description }}
      </p>
    </div>

    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="work in works" :key="work.id" v-reveal>
        <WorkCard :work="work" />
      </div>
    </div>
  </section>
</template>
