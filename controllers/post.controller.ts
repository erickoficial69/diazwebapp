import { WP_RESP_POSTS } from "../interfaces/wp_rest"

export const get_posts = async()=>{
    const req = await fetch(process.env.API+"/wp/v2/posts?_embed=true&per_page=20")
    const total:any = req.headers.get('x-wp-total')
    const totalpages:any = req.headers.get('x-wp-totalpages')
    
    const response = await req.json()

    const wp_response:WP_RESP_POSTS={
      total,
      totalpages,
      current:response.length,
      posts:response
    }

    return wp_response
}