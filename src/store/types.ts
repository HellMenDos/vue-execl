

type geo = {
    lat: string,
    lng: string
}

type street = {
    house: string,
    street: string,
    city: string,
    zipcode: string,
    country: string,
    geo: geo
}

export interface state {
    posts: post[] | [],
    searchPosts: post[] | [],
    post: Partial<post>,
    author: Partial<author>
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

export type author = {
    id: number,
    firstName: string,
    lastName: number,
    username: string,
    avatar: string,
    email: string,
    age: number,
    gender: string,
    maritalStatus: string,
    address: street,
    phone: string,
    website: string
}

