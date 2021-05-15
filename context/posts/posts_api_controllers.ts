import { Post } from "../../interfaces/post_interface"

export async function get_all_posts(post_type?:string,limit?:number){
    try{
        const req_posts = await fetch(`${process.env.api}/${post_type?post_type:'posts'}/${limit?`?per_page=${limit}`:''}`)
        const posts:Post[] = await req_posts.json()
        return posts
    }catch(err){
        console.log( err )
        return []
    }

}


export async function get_post(slug:string,post_type?:string){
    try{
        const req_post = await fetch(`${process.env.api}/${post_type?post_type:'posts'}?slug=${slug}`)
        const post:Post[] = await req_post.json()
        console.log(post)
        return post
    }catch(err){
        console.log( err )
        return []
    }

}