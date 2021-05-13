import { Post } from "../../interfaces/post_interface"

export async function get_all_posts(post_type?:string){
    try{
        const req_posts = await fetch(`${process.env.api}/${post_type?post_type:'posts'}?per_page=20`)
        const posts:Post[] = await req_posts.json()
        return posts
    }catch(err){
        console.log( err )
        return []
    }

}

export async function get_post(type:string,slug?:string){
    try{
        const req_post = await fetch(`${process.env.api}/${type}?slug=${slug}?per_page=20`)
        const post:Post = await req_post.json()
        return post
    }catch(err){
        console.log( err )
        return []
    }

}