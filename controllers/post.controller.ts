import { WP_RESP_POSTS } from "../interfaces/wp_rest"

type ParamsGetPosts={
  per_page:number
  page:number
  taxonomy_name?:string
  term_id?:number
}

type ParamsGetPost={
  slug:string
}

let wp_response_posts:WP_RESP_POSTS={
  req_status_number:0,
  req_error_message:false,
  total:0,
  totalpages:0,
  current:0,
  posts:[]
}

export const get_posts = async({per_page,page,taxonomy_name,term_id}:ParamsGetPosts):Promise<WP_RESP_POSTS>=>{
    
    try {
      const req = await fetch(process.env.API+"/wp-json"+`/wp/v2/posts?_embed=true&${taxonomy_name && term_id?taxonomy_name+"="+term_id:""}&per_page=${per_page}&page=${page}`)
      const total:any = req.headers.get('x-wp-total')
      const totalpages:any = req.headers.get('x-wp-totalpages')
      
      const response = await req.json()
      
      return wp_response_posts={
        req_error_message:false,
        req_status_number:req.status,
        total,
        totalpages,
        current:response.length,
        posts:response
      }
      
    } catch (error:any) {
      console.error({error:error.message})
      return wp_response_posts.req_error_message=error.message
    }

}
export const get_post = async({slug}:ParamsGetPost):Promise<WP_RESP_POSTS>=>{
  try {
    const req = await fetch(process.env.API+"/wp-json"+"/wp/v2/posts/?slug="+slug+"&_embed=true")
    const total:any = req.headers.get('x-wp-total')
    const totalpages:any = req.headers.get('x-wp-totalpages')
    const response = await req.json()
    
    return wp_response_posts={
      req_error_message:false,
      req_status_number:req.status,
      total,
      totalpages,
      current:response.length,
      posts:response
    }
    
  } catch (error:any) {
    console.error({error:error.message})
    return wp_response_posts.req_error_message=error.message
  }

}