import Link from 'next/link'
import { Styled_sidebar } from './styled_components/content_sidebar'
type Params={
    setShow_Cats:(params:any)=>void
    page_info:any
    toggle_element:(param:any)=>void
    show_cats:boolean
}
const CatsMenu = ({page_info,setShow_Cats,toggle_element,show_cats}:Params)=>{
    return (
      <ul onFocus={()=>setShow_Cats(false)} className="aside_cats hidde_cats" >
        {
          page_info.taxonomies.map((taxonomy:any,i:number)=>{
            return <li key={i} >
              <p onClick={toggle_element} >{taxonomy.name}</p>
              <ul className="view_items" >
                {
                  taxonomy.terms.map((ter:any,ti:number)=>{
                    return <li key={ti}><Link href={page_info.rest_base == 'posts'?'/blog/'+taxonomy.rest_base+"/"+ter.slug:page_info.rest_base+"/"+taxonomy.rest_base+"/"+ter.slug} ><a href={page_info.rest_base == 'posts'?'/blog/'+taxonomy.rest_base+"/"+ter.slug:page_info.rest_base+"/"+taxonomy.rest_base+"/"+ter.slug}>{ter.name}</a></Link></li>
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