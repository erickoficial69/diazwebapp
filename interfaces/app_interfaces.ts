export type App ={
    info:{
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
    }
    loader_app:boolean
    loader_request:boolean
    posts:WPResp
    post?:Post
    pages:WPResp
    page?:Post
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
export type WPResp={
    data:Post[]
    total: string |  null
    total_pages: string | null
    
}
export type AppAction = 
| { type: 'get_app_info', payload:any }
| { type: 'loader_app' }
| { type: 'get_all_posts', payload:WPResp }
| { type: 'get_posts_by_taxonomy', payload:WPResp }
| { type: 'get_post', payload:Post }