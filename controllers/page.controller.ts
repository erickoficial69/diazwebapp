import { WP_RESP_PAGES } from "../interfaces/wp_rest"

type ParamsGetPages={
  per_page:number
  page:number
}

type ParamsGetPage={
  slug:string
}

export let wp_response_pages:WP_RESP_PAGES={
  req_status_number:0,
  req_error_message:false,
  total:0,
  totalpages:0,
  current:0,
  pages:[]
}

export const get_pages = async({per_page,page}:ParamsGetPages)=>{
    try {
      const req = await fetch(process.env.API+"/wp-json"+"/wp/v2/pages?_embed=true&per_page="+per_page+"&page="+page)
      const total:any = req.headers.get('x-wp-total')
      const totalpages:any = req.headers.get('x-wp-totalpages')
      
      const response = await req.json()
      
      return wp_response_pages={
        req_error_message:false,
        req_status_number:req.status,
        total,
        totalpages,
        current:response.length,
        pages:response
      }
      
    } catch (error:any) {
      console.error({error:error.message})
      return wp_response_pages.req_error_message=error.message
    }

}
export const get_page = async({slug}:ParamsGetPage):Promise<WP_RESP_PAGES>=>{
  try {
    const req = await fetch(process.env.API+"/wp-json"+"/wp/v2/pages?_embed=true&slug="+slug)
    const total:any = req.headers.get('x-wp-total')
    const totalpages:any = req.headers.get('x-wp-totalpages')      
    const response = await req.json()
      
      return wp_response_pages={
        req_error_message:false,
        req_status_number:req.status,
        total,
        totalpages,
        current:response.length,
        pages:response
      }
  } catch (error:any) {
    console.error({error:error.message})
    return wp_response_pages.req_error_message=error.message
  }

}