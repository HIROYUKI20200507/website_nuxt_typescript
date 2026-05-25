import type { Directive } from 'vue';

const reveal: Directive<HTMLElement> = {
  mounted(el) {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    // If the element is already in the viewport at mount time, skip the
    // hide-then-reveal animation to avoid a flash of invisible content.
    const rect = el.getBoundingClientRect();
    const inView =
      rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0;

    if (inView) {
      el.classList.add('reveal', 'is-visible');
      return;
    }

    el.classList.add('reveal');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    (el as HTMLElement & { __revealObserver__?: IntersectionObserver }).__revealObserver__ =
      observer;
  },
  unmounted(el) {
    const node = el as HTMLElement & { __revealObserver__?: IntersectionObserver };
    node.__revealObserver__?.disconnect();
    delete node.__revealObserver__;
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal);
});
