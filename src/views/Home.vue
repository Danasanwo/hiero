<template>
  <div class="home">
    <div class="loader">
      <p>Read.</p>
      <p>Write.</p>
      <p>Express.</p>
    </div>
    <!-- <div id="start">
      <h1>Expand your horizon.</h1>

      <button>
        <router-link to="/getstarted">Get started</router-link>
      </button>
    </div>-->
    <Articles />
  </div>
</template>

<script>
// @ is an alias to /src
import Articles from '@/components/Articles.vue'

export default {
  name: 'Home',
  components: {
    Articles
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: inherit;
}
.loader {
  width: 100%;
  background: url('../../public/images/pattern.jpg');
  // background-color: #10375c;
  background-size: cover;
  p {
    font-size: 7.5rem;
    color: #f3c623;
  }
}

#start {
  width: 100%;
  h1 {
    margin: auto;
    text-align: center;
  }
  button {
    margin: 25px auto;
    display: block;
    a {
      display: block;
    }
  }
}

img {
  width: 100%;
  height: 100vh;
}
</style>
