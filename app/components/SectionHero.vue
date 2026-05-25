<script setup lang="ts">
import profile from '~/assets/img/profile.jpg';

const skills = ['Vue / Nuxt', 'TypeScript', 'React', 'TailwindCSS', 'Firebase', 'Laravel'];
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Background glow -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent-200/40 blur-3xl"
      />
      <div
        class="absolute bottom-0 right-0 h-[320px] w-[320px] translate-x-1/3 translate-y-1/3 rounded-full bg-zinc-200/60 blur-3xl"
      />
    </div>

    <div class="container-page py-20 md:py-32">
      <div class="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <div class="md:col-span-7 order-2 md:order-1" v-reveal>
          <span class="eyebrow">Frontend Engineer</span>
          <h1
            class="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tightish text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Crafting<br />
            <span class="text-accent-600">modern</span> web<br />
            experiences.
          </h1>
          <p class="mt-6 max-w-prose text-base leading-relaxed text-zinc-600 md:text-lg">
            元八百屋。現在はフロントエンドエンジニアとしてシステム開発を行いつつ、 HP / LP
            のデザインから制作・保守までを請け負っています。 このサイトは Nuxt 4 + TailwindCSS
            で構築しています。
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://form.run/@hiroyuki-akimoto-hp-1615021598"
              target="_blank"
              rel="noopener"
              class="btn-primary"
            >
              Contact me
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
            </a>
            <NuxtLink to="/service" class="btn-ghost">View works</NuxtLink>
          </div>

          <ul class="mt-10 flex flex-wrap gap-2">
            <li
              v-for="skill in skills"
              :key="skill"
              class="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur"
            >
              {{ skill }}
            </li>
          </ul>
        </div>

        <div class="md:col-span-5 order-1 md:order-2 flex justify-center" v-reveal>
          <div class="relative">
            <div
              class="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent-500/30 via-accent-300/20 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <div
              class="relative aspect-square w-56 overflow-hidden rounded-full border border-white shadow-soft sm:w-72 md:w-80 lg:w-96"
            >
              <img
                :src="profile"
                alt="Hiroyuki Akimoto"
                class="h-full w-full object-cover"
                width="384"
                height="384"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
