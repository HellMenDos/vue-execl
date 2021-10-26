import { state, post } from '../types'
import { API } from '../const'
export default {
    async fetchPostsAction(context: any) {
        let data = await fetch(`${API}/posts`)
        let content = await data.json()

        context.commit('fetchPosts', content)
    },
    async filterPostsAction(context: any, title: string) {
        context.commit('filterPosts', title)
    },
    async deletePostsAction(context: any, title: number) {
        context.commit('deletePosts', title)
    }
}