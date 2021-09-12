<template>
  <div>
    <NubBer />
    <div class="px-20 py-20 bg-gray-100">
      <div class="items-start justify-between md:flex">
        <div
          v-for="(article, index) in fetchArticles"
          class="flex-wrap max-w-sm my-10 mr-5 bg-white"
          :key="article.guid"
        >
          <img class="object-cover w-max max-h-52" :src="fetchImages[index]" />
          <div class="p-5">
            <small class="text-xs text-black truncate bg-white md:text-sm">{{
              article.pubDate.substring(0, 10)
            }}</small>
            <h1 class="py-2 text-sm font-bold text-blue-800 truncate md:text-2xl">
              {{ article.title }}
            </h1>
            <p class="text-xs text-black truncate bg-white md:text-sm">
              {{ article.description }}
            </p>
            <a
              :href="article.link"
              class="inline-block px-6 py-2 mt-4 text-white bg-blue-500 rounded"
              >Read More</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const qiitaURL =
  'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fqiita.com%2Fhiroyuki_0507%2Ffeed&api_key=m2ksrp2xfjc8un9cobyywxstbsthyswxjzkafj6j';
const picabayUrl = 'https://pixabay.com/api/?key=';
const pixabayKey = '23173794-d75fd9b1a1194fc6676d7bbf3';

export default {
  transition: 'slide-bottom',
  data() {
    return {
      fetchArticles: [],
      fetchImages: [],
      searchImage: 'Programming',
    };
  },
  mounted() {
    const self = this;
    axios
      .get(qiitaURL)
      .then(function (response) {
        console.log(response.data.items);
        self.fetchArticles = response.data.items;
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(`${picabayUrl}${pixabayKey}&q=${this.searchImage}`)
      .then(function (response) {
        const hits = response.data.hits;
        for (const i in hits) {
          if (Object.hasOwnProperty.call(hits, i)) {
            self.fetchImages.push(hits[i].largeImageURL);
            if (self.fetchImages.length === self.fetchArticles.length) return;
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>
