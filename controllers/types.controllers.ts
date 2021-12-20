import { WP_RESP_TYPE } from "../interfaces/wp_rest"

type ParamsGetTypes={
    type:string
  }
  
  export let wp_response_type:WP_RESP_TYPE={
    req_status_number:0,
    req_error_message:false,
    type:null
  }
  

  export const get_type = async({type}:ParamsGetTypes):Promise<WP_RESP_TYPE>=>{
    try {
      const req = await fetch(process.env.API+"/wp-json"+"/wp/v2/types/"+type)      
      const response = await req.json()
     
      return wp_response_type={
        req_error_message:false,
        req_status_number:req.status,
        type:response
      }
      
    } catch (error:any) {
      console.error({error:error.message})
      wp_response_type.req_error_message=error.message
      return wp_response_type
    }

}