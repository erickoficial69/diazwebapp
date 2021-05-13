export type Post={
    id: number
    author: number
    categories: number[]
    comment_status: string
    content: {rendered:string, protected: boolean}
    date: string
    excerpt: {rendered: string, protected: boolean}
    featured_media: number
    format: string
    meta: []
    modified: string
    ping_status: string
    slug: string
    status: string
    title: {rendered: string}
    type: string
}

export type PostState={
    allPosts:Post[]
    post:Post
    req:boolean
}
export type Action =
 | { type: 'get_all_posts', payload:Post[] }
 | { type: 'get_post', payload:Post }
 | { type: 'req' }