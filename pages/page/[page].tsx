import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { get_all_posts, get_post, get_post_type } from '../../controlers/app_controller'
import { get_terms } from '../../controlers/taxonomies_controles'
import { Post } from '../../interfaces/app_interfaces'

type Props={
  page:Post
  page_info:any
}
const Blog = ({page,page_info}:Props)=>{
  const [show_cats,setShow_Cats] = useState<boolean>(false)
  const router = useRouter()
  if(router.isFallback) return <section><b>Loading...</b></section>
  if(!page) return <section><b>Temporalmente nó disponible <a href="#" title="regresar" onClick={()=>router.back()} >Regresar</a></b></section>

  const toggle_element = (e:any)=>{
    const li:HTMLElement = e.target
    const ul_items = li.parentElement?.children[1]
    ul_items?.classList.toggle('view_items')
   
  }
 
  return <>
      <Head>
        <title>{page.title.rendered} - Diaz web app</title>
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online"/>
        <meta name="description" content={page.excerpt?`${page.excerpt}`:"Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing."} />
      </Head>
    <aside>
      <nav className="aside_mobile_toolbar" >
        <li><button>Filtrar por categorias</button></li>
        <li onClick={()=>setShow_Cats(!show_cats)} ><b>{show_cats?'Close':'Categorias'}</b></li>
      </nav>
      <ul onFocus={()=>setShow_Cats(false)} className="aside_cats hidde_cats" >
        {
          page_info.taxonomies.map((taxonomy:any,i:number)=>{
            return <li key={i} >
              <b onClick={toggle_element} >{taxonomy.name}</b>
              <ul className="view_items" >
                {
                  taxonomy.terms.map((ter:any,ti:number)=>{
                    return <li key={ti}><Link href={`/${taxonomy.rest_base}/${ter.slug}`} ><a>{ter.name}</a></Link></li>
                  })
                }
              </ul>
            </li>
          })
        }
      </ul>
    </aside>
    <section>
         <article>
           <h1>{page.title.rendered+" "+page.slug}</h1>
           <div dangerouslySetInnerHTML={{__html:page.content.rendered}}></div>
         </article>
    </section>
     <style jsx global >
       {
         `
         .view_items{
           display:none;
         }
         main{
            display:grid;
          }
          main > aside{
            position:fixed;
            width:100%;
            height:30px;
            z-index: 9999;
          }
          main > aside > .aside_mobile_toolbar{
            display:grid;
            grid-template-columns:1fr 100px;
            place-items:center;
            place-content:center;
          }
          main > aside > .aside_cats{
            background:var(--background-color);
            position:fixed;
            width:280px;
            height:100%;
            overflow:auto;
            top:0;
            left:${show_cats?'0':'-100%'};
            transition:all .3s ease;
          }
          main > aside > .aside_cats > li{
            background:var(--background-color);
            cursor:pointer;
          }
          main > aside > .aside_cats > li li,main > aside > .aside_cats > li b{
            padding:10px 0px 10px 30px;
            border-bottom:1px solid var(--shadow-color);
          }
          main > aside > .aside_cats > li b{
            padding:10px 0px 10px 10px;
            text-transform:uppercase;
            width:100%;
            display:block;
          }
          main > section{
            margin-top:40px;
          }
         @media(min-width:960px){
          main{
             grid-template-columns: 200px 1fr;
           }
           main > aside{
             position:fixed;
             width:200px;
           }
           main > aside .aside_mobile_toolbar{
             display:none;
           }
           main > aside .aside_cats{
             flex-flow:column;
             width:200px;
             height:calc(100% - 61px);
             top:61px;
             left:0;
           }
           
           main > section, main > footer{
             grid-column: 2 / span 1;
             margin:unset;
             max-width:unset;
           }
        }
         `
       } 
     </style>
  </>
  
}

export const getStaticPaths:GetStaticPaths = async({defaultLocale,locales}:GetStaticPathsContext)=>{
  console.log({defaultLocale,locales})
  try{
       const pages = await get_all_posts({rest_base:'pages'})
       
       const paths = pages.map((page:any)=>(
        {params:{page:page.slug}}
    ))
       return {paths,fallback:true}
  }catch{
    return {paths:[{params:{page:''}}],fallback:true}
  }
   
}
export const getStaticProps:GetStaticProps = async({params}:GetStaticPropsContext)=>{
  try{
      const slug:any = params?.page
      
      const page:any = await get_post({rest_base:'pages',slug})
      let page_info = await get_post_type({type:page?page.query_post:'post'}) 
      page_info = {...page_info,taxonomies:await get_terms(page_info.taxonomies)}
      
      return {props:{page,page_info},revalidate:1}
  }catch(err){
      return {props:{},revalidate:1}
  }
}

export default Blog
