<template>
  <div class="category">
    <h1>Categories</h1>
    <div class="categs">
      <div @click="setCat(category)" v-for="category in ctg" :key="category.id">
        <router-link to="/categ">
          <div class="ctg">{{ category.Text }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Category',
  data() {
    return {
      ctg: {}
    }
  },
  methods: {
    ...mapActions(['fetchCat']),

    async getCategory() {
      const response = await axios.get(
        'https://strapic-cms-db.herokuapp.com/categories'
      )
      console.log(response.data)
      this.ctg = response.data
    },
    setCat(category) {
      const ctg = category
      // console.log(ctg)
      this.fetchCat(ctg)
    }
  },
  created() {
    this.getCategory()
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #10375c;
  padding: 10px;
}
.categs {
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px auto;
  flex-wrap: wrap;
}
.ctg {
  width: 18vw;
  min-width: 120px;
  height: 25vh;
  /* border: 2px solid #f4f6ff; */
  margin: 10px 0;
  text-align: center;
  line-height: 25vh;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: bold;
  color: #10375c;
}

.ctg:hover {
  box-shadow: 1px 1px 10px #10375c;
  background-color: rgba(243, 198, 35, 0.5);
}
</style>
