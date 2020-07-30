<template>
  <div class="post">
    <h1>{{ thePost.Title }}</h1>
    <img :src="api_url + img" alt />

    <!-- <h6>{{ thePost.created_at }}</h6> -->
    <div class="subhead">
      <p class="subhead">{{ thePost.Subheading }}</p>
    </div>

    <div class="content">
      <p>{{ thePost.content }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      api_url: 'https://strapic-cms-db.herokuapp.com'
    }
  },
  methods: {},
  computed: {
    ...mapGetters(['thePost']),

    img() {
      return this.thePost.image[0].formats.large.url
    }
  },
  created() {},
  updated() {
    console.log(`${this.api_url}${this.img}`)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

.post {
  width: 100%;
}
h1 {
  color: black;
  font-family: 'Noto Serif JP', serif;
  text-align: center;
  margin: 20px auto;
  font-size: 3rem;
  font-weight: bolder;
}

img {
  margin: 10px auto;
  display: block;
  width: 70%;
}

.subhead {
  color: black;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
  margin: 20px 4vw;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
  /* width: 80%; */
}

p {
  color: black;
  font-family: 'Noto Sans JP', sans-serif;
  /* text-align: center; */
  margin: 20px 4vw;
  font-size: 1.2rem;
  overflow: break-word;
  line-height: 5vh;
  letter-spacing: 0.5px;
}
</style>
