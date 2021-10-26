import { createStore } from 'vuex'
import { state, post } from './types'
import fetchPosts from './mutations/fetchPosts'
import posts from './actions/posts'

const stateData: state = {
  posts: [],
  searchPosts: [],
}


const store = createStore({
  state: {
    ...stateData,
  },
  getters: {
    posts(state) {
      return state.posts
    }
  },
  mutations: {
    ...fetchPosts
  },
  actions: {
    ...posts
  },
  modules: {
  }
})

export default store
