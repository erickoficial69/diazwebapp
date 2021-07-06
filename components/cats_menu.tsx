import Link from 'next/link'
import { useContext } from 'react'
import { App_context } from '../context/wp_context/app_context'
import { Styled_sidebar } from './styled_components/content_sidebar'
type Params={
    page_info:any
}
const CatsMenu = ({page_info}:Params)=>{
    const {app_dispatch} = useContext(App_context)
    return (
      <>
        {
          page_info.taxonomies.map((taxonomy:any,i:number)=>{
            return (
              <ul key={i} >
                <p >{taxonomy.name}</p>
                {
                  taxonomy.terms.map((ter:any,ti:number)=>{
                    const destination = '/'+page_info.rest_base+'/filter/'+taxonomy.rest_base+"/"+ter.slug
                    return ter.count >= 1?(
                      <li key={ti}><Link href={destination} ><a onClick={()=>{document.location.pathname!=destination?app_dispatch({type:'loader_app',payload:true}):null}} href={destination}>{ter.name}</a></Link></li>
                    ):null
                  })
                }
              </ul>
            )
          })
        }
        <Styled_sidebar/>
      </>
    )
}
export default CatsMenu