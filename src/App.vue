<template>
  <div id="app">
    <!-- <Signup /> -->
    <!-- <Login /> -->
    <div id="nav">
      <div id="home">
        <router-link to="/">Hieroglyphics</router-link>
      </div>

      <div id="follow">
        <router-link to="/follow">Follow</router-link>
      </div>

      <!-- <div id="write">
        <router-link to="/write">Write</router-link>
      </div>-->
      <!-- <div id="sign-in">
        <button>sign in</button>
      </div>-->
      <div id="started">
        <div class="dropdown">
          <button class="dropbtn">Write</button>
          <div class="dropdown-content">
            <a href="https://strapic-cms-db.herokuapp.com/admin " target="_blank">Admin page</a>
            <!-- <router-link to="/getstarted">Register</router-link> -->
            <!-- <a href="#">Link 3</a> -->
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// import Signup from '@/components/Signup.vue'
// import Login from '@/components/Login.vue'
export default {
  components: {
    // Signup,
    // Login
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f4f6ff;
}

#nav {
  width: 100%;
  height: 10vh;
  padding: 10px;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  background: #10375c;
  // box-shadow: 0px 5px 15px #cccccc;
  #home {
    // flex: 5;
    width: 0vw;
    min-width: 68vw;
    font-size: 2rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  #started {
    button {
      background-color: #f3c623;
      color: #10375c;
      font-weight: bold;
    }
  }
}

#nav a {
  font-weight: bold;
  color: #f3c623;
  text-decoration: none;
  padding: 1rem;
}

button {
  outline: none;
  border: 2px solid #10375c;
  width: 9rem;
  height: 2.5rem;
}

#nav a.router-link-exact-active {
  color: #f3c623;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 9rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  // z-index: 1;
  color: #10375c;
  background: #10375c;
}

.dropdown-content a {
  color: black;
  padding: 10px 14px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

//
@media screen and (max-width: 850px) {
  html,
  body {
    font-size: 13px;
  }
  #started,
  #sign-in,
  #write {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  html,
  body {
    font-size: 11px;
  }
}

@media screen and (max-width: 350px) {
  html,
  body {
    font-size: 10px;
  }
}
</style>
