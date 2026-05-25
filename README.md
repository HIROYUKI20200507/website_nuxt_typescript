# my_website

Hiroyuki Akimoto のポートフォリオサイト。

## Stack

- [Nuxt 3](https://nuxt.com/) (`future.compatibilityVersion: 4`)
- Vue 3 + TypeScript (`<script setup lang="ts">`)
- TailwindCSS 3 + `@tailwindcss/typography` / `forms` / `aspect-ratio`
- `@nuxt/image`, `@vueuse/nuxt`
- Firebase Hosting + Static Site Generation (`nuxt generate`)

## Setup

```bash
# 環境変数を設定 (Blog ページの API 用)
cp .env.example .env

# 依存インストール
pnpm install

# 開発サーバ (http://localhost:3000)
pnpm dev

# 型チェック
pnpm typecheck

# 静的ファイル生成 (出力先: public/)
pnpm generate

# 生成後プレビュー
pnpm preview
```

## Deploy (Firebase Hosting)

```bash
pnpm generate
pnpm dlx firebase-tools deploy --only hosting
```

## Project structure

```
app/
  app.vue                # Root component
  layouts/default.vue
  pages/                 # index / service / price / blog
  components/            # AppHeader, AppFooter, SectionHero, WorksGrid, WorkCard
  plugins/reveal.client.ts  # v-reveal scroll-in directive
  data/works.ts          # Works content (typed)
assets/
  css/tailwind.css       # Tailwind base + design tokens + animations
  img/                   # Static images
server/api/              # Nitro endpoints for Blog page (Qiita / Pixabay)
static/                  # Files served as-is at site root
nuxt.config.ts
tailwind.config.js
```

## Design tokens

- Accent color: `accent-600` (indigo) — `tailwind.config.js`
- Typography: Inter (body) / Montserrat (display)
- Surface: zinc-50 background / white cards / `shadow-soft`
- Motion: `v-reveal` directive (IntersectionObserver) + page transition (`page`)
