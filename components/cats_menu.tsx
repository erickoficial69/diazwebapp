import Link from 'next/link'
import { useContext } from 'react'
import { App_context } from '../context/wp_context/app_context'
import { Styled_sidebar } from './styled_components/content_sidebar'
type Params={
    setShow_Cats:(params:any)=>void
    page_info:any
    toggle_element:(param:any)=>void
    show_cats:boolean
}
const CatsMenu = ({page_info,setShow_Cats,toggle_element,show_cats}:Params)=>{
    const {app_dispatch} = useContext(App_context)
    return (
      <ul onFocus={()=>setShow_Cats(false)} className="aside_cats hidde_cats" >
        {
          page_info.taxonomies.map((taxonomy:any,i:number)=>{
            return <li key={i} >
              <p onClick={toggle_element} >{taxonomy.name}</p>
              <ul className="view_items" >
                {
                  taxonomy.terms.map((ter:any,ti:number)=>{
                    const destination = '/'+page_info.rest_base+'/filter/'+taxonomy.rest_base+"/"+ter.slug
                    return <li key={ti}><Link href={destination} ><a onClick={()=>{document.location.pathname!=destination?app_dispatch({type:'loader_app',payload:true}):null}} href={destination}>{ter.name}</a></Link></li>
                  })
                }
              </ul>
            </li>
          })
        }
        <Styled_sidebar show_cats={show_cats}/>
      </ul>
    )
}
export default CatsMenu