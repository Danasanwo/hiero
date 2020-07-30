import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
