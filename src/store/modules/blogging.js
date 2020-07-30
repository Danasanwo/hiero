/* eslint-disable */
import axios from 'axios'

const state = {
  articles: [],
  post: [],
  ctg: []
}

const actions = {
  async fetchArticles({ commit }) {
    const response = await axios.get(
      'https://strapic-cms-db.herokuapp.com/posts'
    )
    // console.log(response.data)
    commit('setArticles', response.data)
  },
  async fetchPost({ commit }, post) {
    const response = await axios.get(
      `https://strapic-cms-db.herokuapp.com/posts/${post.id}`
    )
    // console.log(response.data)
    commit('setPost', response.data)
  },
  async fetchCat({ commit }, ctg) {
    const response = await ctg
    console.log(response)
    commit('setCtg', response)
  }
}

const mutations = {
  setArticles: function(state, articles) {
    state.articles = articles
  },
  setPost: function(state, post) {
    state.post = post
  },
  setCtg: function(state, ctg) {
    state.ctg = ctg
    // console.log(state.ctg)
  }
}

const getters = {
  allArticles: state => state.articles,
  thePost: state => state.post,
  theCtg: state => state.ctg
}

export default {
  state,
  getters,
  actions,
  mutations
}
