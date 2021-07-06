import { useContext } from "react"
import { App_context } from "../context/wp_context/app_context"
import { get_all_posts, get_posts_by_taxonomy } from "../controlers/app_controller"
import { NextPosts } from "../interfaces/app_interfaces"

const Pagination = ({statePost,setState,response,rest_base,params}:NextPosts)=>{
    const {app_dispatch} = useContext(App_context)

    const handler_data = async(page:number)=>{
      app_dispatch({type:'loader_request',payload:true})
      if(params){
          const wpresp = await get_posts_by_taxonomy({rest_base,per_page:statePost.per_page,page,taxonomy:params.taxonomy,term:params.term})
          setState({...statePost, page})
          app_dispatch({type:'get_all_posts',payload:wpresp})
          return
      }
      const wpresp = await get_all_posts({rest_base,per_page:statePost.per_page,page})
      setState({...statePost, page})
      app_dispatch({type:'get_all_posts',payload:wpresp})

    }
    return(
        <div className="pagination_container">
          {
            response && response.total_pages?
              statePost.page > 1?(
                  <a href="#" className="icon-button" onClick={()=>handler_data(statePost.page-1)} style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Anterior</title><path d="M240,424V328c116.4,0,159.39,33.76,208,96,0-119.23-39.57-240-208-240V88L64,256Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </a>
              ):(
                <a href="#" className="icon-button" style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Anterior</title><path d="M240,424V328c116.4,0,159.39,33.76,208,96,0-119.23-39.57-240-208-240V88L64,256Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </a>
              )
            :null
          }
          {
            response && response.total_pages?
              statePost.page >= 1 && statePost.page < parseInt(response && response.total_pages) ?(
                  <a href="#" className="icon-button" onClick={()=>handler_data(statePost.page+1)} style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Siguiente</title><path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </a>
              ):statePost.page >= 1 && statePost.page == parseInt(response && response.total_pages)?(
                <a href="#" className="icon-button" style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Siguiente</title><path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </a>
              ):null
            :null
          }
      </div>
    )
}

export default Pagination