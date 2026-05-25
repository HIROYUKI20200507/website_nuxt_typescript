import img2 from '~/assets/img/service-sub-img2.png';
import img3 from '~/assets/img/service-sub-img3.png';
import img4 from '~/assets/img/service-sub-img4.png';
import img5 from '~/assets/img/service-sub-img5.png';
import img6 from '~/assets/img/service-sub-img6.png';
import img7 from '~/assets/img/service-sub-img7.png';
import img8 from '~/assets/img/service-sub-img8.png';
import img9 from '~/assets/img/service-sub-img9.png';

export type Work = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  href: string;
};

export const works: Work[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description:
      'いま閲覧している本ポートフォリオサイト。フロントエンドのみで構成され、SSG でデプロイされています。',
    stack: ['Nuxt 4', 'Vue 3', 'TailwindCSS'],
    image: img2,
    href: '/',
  },
  {
    id: '2',
    title: 'Laravel Blog',
    description:
      'RSS を JSON で受け取り、Vue.js で表示。リアルタイムでニュースと Qiita 記事の更新が可能です。',
    stack: ['Vue.js', 'Inertia.js', 'Laravel'],
    image: img3,
    href: 'https://github.com/akimoto-willof/laravel_blog',
  },
  {
    id: '3',
    title: 'Weather App',
    description:
      'Open Weather Map API を React + Redux + ReduxSaga で。検索フォーム入力時にリアルタイムでデータ取得が走ります。',
    stack: ['React', 'Redux', 'Saga'],
    image: img4,
    href: 'https://github.com/HIROYUKI20200507/react-test',
  },
  {
    id: '4',
    title: 'Coaching Site',
    description: '個人でコーチングをされている方の紹介サイト。',
    stack: ['HTML', 'CSS', 'JS'],
    image: img5,
    href: 'https://sakata-coach.com',
  },
  {
    id: '5',
    title: 'Personal Body-make Salon',
    description: 'パーソナルボディメイクサロンを経営する企業のコーポレートサイト。',
    stack: ['HTML', 'CSS', 'Vue.js'],
    image: img6,
    href: 'https://collect-pbs.com/',
  },
  {
    id: '6',
    title: 'Chat App',
    description: '【開発中】認証 & CI/CD を Github Actions で組んだチャットアプリケーション。',
    stack: ['Nuxt', 'Firebase', 'Docker', 'GH Actions'],
    image: img7,
    href: 'https://chatapp-b6126.web.app/',
  },
  {
    id: '7',
    title: 'Image API Sample',
    description: '画像を API でデータとしてリクエストできるアプリケーション。',
    stack: ['Vue 3', 'Vuex', 'axios', 'Firebase'],
    image: img8,
    href: 'https://vue-work-sample.web.app/',
  },
  {
    id: '8',
    title: 'Population Chart SPA',
    description: '都道府県別の総人口推移グラフを表示する SPA (Single Page Application)。',
    stack: ['Vue 3', 'Vuex', 'axios', 'Firebase'],
    image: img9,
    href: 'https://yumemivuechart.web.app/',
  },
];
