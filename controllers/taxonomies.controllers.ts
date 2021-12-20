import { WP_RESP_TAXONOMIES, WP_RESP_TERMS } from "../interfaces/wp_rest"
  
  export let wp_response_taxonomies:WP_RESP_TAXONOMIES={
    req_status_number:0,
    req_error_message:false,
    taxonomies:[]
  }
  
  export const get_taxonomies = async(taxonomies:string[]):Promise<WP_RESP_TAXONOMIES>=>{
      try {
        
        for(let taxonomy of taxonomies){
            const req = await fetch(process.env.API+"/wp-json"+"/wp/v2/taxonomies/"+taxonomy)
            const response = await req.json()

            wp_response_taxonomies.req_status_number=req.status
            wp_response_taxonomies.taxonomies.push(response)
        }
        
        return wp_response_taxonomies
        
      } catch (error:any) {
          console.error({error:error.message})
          wp_response_taxonomies.req_error_message=error.message
          return wp_response_taxonomies
      }
  
  }

  type TermParams={
    term_slug?:string
    term_parent?:number
    taxonomy_name:string
    per_page?:number,
    page?:number
  }
  let terms_response:WP_RESP_TERMS={
    req_status_number:0,
    req_error_message:false,
    total:0,
    totalpages:0,
    current:0,
    terms:[]
  }
  export const get_terms = async({taxonomy_name,term_parent,per_page,page}:TermParams):Promise<WP_RESP_TERMS>=>{
    try {
      
      const req = await fetch(process.env.API+"/wp-json"+"/wp/v2/"+taxonomy_name+`${term_parent?"?parent="+term_parent:""}&_embed=true${per_page && page?"&per_page="+per_page+"&page="+page:""}`)
      const total:any = req.headers.get('x-wp-total')
      const totalpages:any = req.headers.get('x-wp-totalpages')
      const res = await req.json()
  
      return terms_response={
        req_error_message:false,
        req_status_number:req.status,
        total,
        totalpages,
        current:res.length,
        terms:res
      }

    } catch (error:any) {
      console.error({error:error.message})
      return terms_response.req_error_message=error.message
    }
  }

  export const get_term = async({taxonomy_name,term_slug}:TermParams):Promise<WP_RESP_TERMS>=>{
    try {
      
      const req = await fetch(process.env.API+"/wp-json"+"/wp/v2/"+taxonomy_name+`${term_slug?"?slug="+term_slug:""}&_embed=true`)
      const total:any = req.headers.get('x-wp-total')
      const totalpages:any = req.headers.get('x-wp-totalpages')
      const res = await req.json()
  
      return terms_response={
        req_error_message:false,
        req_status_number:req.status,
        total,
        totalpages,
        current:res.length,
        terms:res
      }

    } catch (error:any) {
      console.error({error:error.message})
      return terms_response.req_error_message=error.message
    }
  }