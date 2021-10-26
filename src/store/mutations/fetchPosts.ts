import { state, post } from '../types'

export default {
    fetchPosts(state: state, data: post[]) {
        state.posts = data
        state.searchPosts = data
    },
    deletePosts(state: state, id: number) {
        state.posts = state.posts.filter((i: post) => i.id == id)
        state.searchPosts = state.posts
    },
    filterPosts(state: state, title: string) {
        state.searchPosts = state.posts.filter((i: post) => i.title.startsWith(title))
    }
}