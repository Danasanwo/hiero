<template>
  <div class="categ">
    <h1>{{ theCtg.Text }}</h1>

    <router-link to="/post">
      <div class="article" @click="set(article)" v-for="article in theCtg.posts" :key="article.id">
        <div id="image">
          <img :src="api_url + article.image[0].formats.thumbnail.url" />
        </div>
        <div id="title">
          <h1>{{ article.Title }}</h1>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      api_url: 'http://localhost:1337'
    }
  },
  methods: {
    ...mapActions(['fetchCat', 'fetchPost']),
    set(article) {
      const post = article

      this.fetchPost(post)
    }
  },

  computed: {
    ...mapGetters(['theCtg'])
  },
  updated() {
    // let p = this.theCtg
    // console.log(p)
  }
  // created() {
  //   this.fetchCat()
  // }
}
</script>

<style lang="scss" scoped></style>
