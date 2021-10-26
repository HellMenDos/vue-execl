

export interface state {
    posts: post[] | [],
    searchPosts: post[] | [],
}

export type post = {
    id: number,
    title: string,
    userId: number,
    content: string,
    likes: number,
    hits: number,
    categoryId: number
}

