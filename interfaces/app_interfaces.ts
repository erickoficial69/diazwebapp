export type App ={
    authentication: []
    description: string
    gmt_offset: string
    home: string
    name: string
    namespaces: string[]
    routes: {
        "":{}
    }
    timezone_string: string
    url: string
    loader_app:boolean,
    posts:Post[]
    post?:Post
    pages:Post[]
    page?:Post,
    files:File[]
}
export type Post={
    id: number
    author: number
    categories?: number[]
    comment_status: string
    content: {rendered:string, protected: boolean}
    date: string
    excerpt?: {rendered: string, protected: boolean}
    featured_media?: number
    format: string
    meta: []
    modified: string
    ping_status: string
    slug: string
    status: string
    title: {rendered: string}
    _embedded:{
        "author":[{}]
        "wp:featuredmedia":File[]
        "wp:term":[]
    }
    type: string
}

export type File={
    id: number
    date: string
    date_gmt: string
    guid: {
        rendered: string
    }
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: {
        rendered: string
    }
    author: number
    description: {
        rendered: string
    }
    caption: {
        rendered: string
    }
    alt_text: string 
    media_type: string
    mime_type:string
    media_details: {
        width: number
        height: number
        file: string
    }
    post: boolean | number
    source_url: string
}
export type AppAction = 
| { type: 'get_app_info', payload:App }
| { type: 'loader_app' }
| { type: 'get_all_posts', payload:Post[] }
| { type: 'get_all_files', payload:File[] }
| { type: 'get_post', payload:Post }