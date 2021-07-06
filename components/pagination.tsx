import { next_posts } from "../controlers/app_controller"
import { NextPosts } from "../interfaces/app_interfaces"

const Pagination = ({statePost,setState,response,rest_base,params}:NextPosts)=>{

    return(
        <div className="pagination_container">
          {
            response && response.total_pages?
              statePost.page > 1?(
                  <button className="icon-button" onClick={()=>next_posts({statePost,setState,page:statePost.page-1,rest_base,params})} style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Anterior</title><path d="M240,424V328c116.4,0,159.39,33.76,208,96,0-119.23-39.57-240-208-240V88L64,256Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              ):(
                <button className="icon-button" style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Anterior</title><path d="M240,424V328c116.4,0,159.39,33.76,208,96,0-119.23-39.57-240-208-240V88L64,256Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              )
            :null
          }
          {
            response && response.total_pages?
              statePost.page >= 1 && statePost.page < parseInt(response && response.total_pages) ?(
                  <button className="icon-button" onClick={()=>next_posts({statePost,setState,page:statePost.page+1,rest_base,params})} style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Siguiente</title><path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              ):statePost.page >= 1 && statePost.page == parseInt(response && response.total_pages)?(
                <button className="icon-button" style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Siguiente</title><path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              ):null
            :null
          }
      </div>
    )
}

export default Pagination