<template>
  <div>
    <NubBer />
    <div class="bg-gray-100 py-20 px-20">
      <div class="flex justify-between items-start">
          <div v-for="data of fetchArticles" class="bg-white mr-5 max-w-sm" :key="data.guid">
            <img src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
            <div class="p-5">
              <h1 class="text-2xl font-bold text-blue-800 py-2 truncate">{{ data }}</h1>
              <p class="bg-white text-sm text-black truncate">{{ data }}</p>
              <a :href="data.link" class="py-2 mt-4 px-6 text-white bg-blue-500 inline-block rounded">Read More</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const qiitaURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fqiita.com%2Fhiroyuki_0507%2Ffeed&api_key=m2ksrp2xfjc8un9cobyywxstbsthyswxjzkafj6j'

export default {
  transition: 'slide-bottom',
  deta(){
    return {
      fetchArticles: '',
    }
  },
  mounted() {
    const self = this;
    axios.get(qiitaURL)
    .then(function(response){
        self.fetchArticles = response.data.items;
        console.log(self.fetchArticles, 'fetch');
    })
    .catch(function(error){
        console.log(error);
    })
  },
}
</script>

<style>

</style>
