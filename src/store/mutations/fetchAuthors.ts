import { state, author } from '../types'

export default {
    fetchAuthor(state: state, data: author) {
        state.author = data
    }
}