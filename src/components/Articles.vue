<template>
  <div class="Articles">
    <div>
      <h1>Latest Articles</h1>
    </div>
    <router-link to="/post">
      <div class="article" @click="set(article)" v-for="article in allArticles" :key="article.id">
        <div id="image">
          <img :src="api_url + article.image[0].formats.thumbnail.url" />
        </div>
        <div id="title">
          <p>{{ article.Title }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Articles',
  data() {
    return {
      link: '/post',
      api_url: 'https://strapic-cms-db.herokuapp.com'
    }
  },

  methods: {
    ...mapActions(['fetchArticles', 'fetchPost']),
    set(article) {
      const post = article

      this.fetchPost(post)
    }
  },

  computed: mapGetters(['allArticles']),
  created() {
    this.fetchArticles()
  },
  updated() {
    // console.log(this.allArticles)
  }
}
</script>

<style>
.Articles {
  margin: 25px 0;
  color: #10375c;
  font-family: 'Noto Sans JP', sans-serif;
}
/* p {
  color: #10375c;
  text-align: center;
  padding: 10px 0;
} */

a {
  text-decoration: none;
  color: #10375c;
}

.article {
  display: flex;
  width: 90%;
  height: 15vh;
  /* box-shadow: 1px 1px 10px #aaaaaa, -1px -1px 10px #aaaaaa; */
  margin: 12px auto;
  background-color: rgba(0, 0, 0, 0.1);
}

.article:hover {
  box-shadow: 1px 1px 10px #aaaaaa, -1px -1px 10px #aaaaaa;
}
#image {
  flex: 2;
  /* width: 12.5%; */
  height: inherit;
}

#image > img {
  height: inherit;
  /* width: inherit; */
}
#title {
  flex: 7;
}
#title > p {
  padding: 20px;
  color: #10375c;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
}

h1 {
  text-align: center;
  padding: 2vh;
}

@media screen and (max-width: 850px) {
  .article {
    display: flex;
    width: 90%;
    height: 10vh;
    box-shadow: 1px 1px 10px #aaaaaa, -1px -1px 10px #aaaaaa;
    margin: 12px auto;
    background-color: rgba(0, 0, 0, 0.1);
  }

  #title > p {
    font-size: 1.2rem;
  }
}
</style>
