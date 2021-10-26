import { createStore } from 'vuex'
import { state, post } from './types'
import fetchPosts from './mutations/fetchPosts'
import posts from './actions/posts'
import fetchAuthors from './mutations/fetchAuthors'
import author from './actions/author'

const stateData: state = {
  posts: [],
  searchPosts: [],
  post: {},
  author: {}
}


const store = createStore({
  state: {
    ...stateData,
  },
  mutations: {
    ...fetchPosts,
    ...fetchAuthors
  },
  actions: {
    ...posts,
    ...author
  },
  modules: {
  }
})

export default store
