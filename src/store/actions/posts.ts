import { state, post } from '../types'
import { API } from '../const'
export default {
    async fetchPostsAction(context: any) {
        let data = await fetch(`${API}/posts`)
        let content = await data.json()

        context.commit('fetchPosts', content)
    },
    async fetchPostAction(context: any, id: number) {
        let data = await fetch(`${API}/posts/${id}`)
        let content = await data.json()

        context.commit('fetchPost', content)
    },
    async filterPostsAction(context: any, title: string) {
        context.commit('filterPosts', title)
    },
    async deletePostsAction(context: any, id: number) {
        context.commit('deletePosts', id)
    }
}