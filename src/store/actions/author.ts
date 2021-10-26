import { state, post } from '../types'
import { API } from '../const'
export default {
    async fetchAuthorAction(context: any, id: number) {
        let data = await fetch(`${API}/users/${id}`)
        let content = await data.json()

        context.commit('fetchAuthor', content)
    },
}