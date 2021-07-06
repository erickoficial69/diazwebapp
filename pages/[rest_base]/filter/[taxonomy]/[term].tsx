import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import CatsMenu from '../../../../components/cats_menu'
import Pagination from '../../../../components/pagination'
import Card_1 from '../../../../components/post_cards/card_1'
import { App_context } from '../../../../context/wp_context/app_context'
import { get_posts_by_taxonomy, get_post_type } from '../../../../controlers/app_controller'
import { get_taxonomies, get_terms } from '../../../../controlers/taxonomies_controles'
import { Post, StatePosts, WPResp } from '../../../../interfaces/app_interfaces'
import { wp_post_types } from '../../../../wpconfig'

type Props={
  wpresp?:WPResp
  page_info:any
  static_params:any
}
const The_Posts_Term = ({page_info,wpresp,static_params}:Props)=>{
  const {app_dispatch} = useContext(App_context)
  const [show_cats,setShow_Cats] = useState<boolean>(false)
  const [currentPage,setCurrentPage] = useState<StatePosts>({
    page:1,
    per_page:24,
    posts:wpresp?wpresp.data:[]
  })
  
  const {asPath,isFallback} = useRouter()
  
  const toggle_element = (e:any)=>{
    const li:HTMLElement = e.target
    const ul_items = li.parentElement?.children[1]
    ul_items?.classList.toggle('view_items')
   
  }

  if(isFallback) return <section><b>Loading...</b></section>
  
  if(!page_info || !wpresp){
    useEffect(()=>{
      app_dispatch({
        type:'loader_app',
        payload:false
      })
    },[asPath])
    return <section><b>No hay datos en este momento</b></section>
  }
  
  const fetch_change = async()=>{
    const newdata = await get_posts_by_taxonomy({rest_base:page_info.rest_base,taxonomy:static_params.taxonomy,term:static_params.term,per_page:currentPage.per_page})
    setCurrentPage({...currentPage, posts:newdata.data})
  }

  useEffect(()=>{
    fetch_change()
    app_dispatch({
      type:'loader_app',
      payload:false
    })
  },[asPath])

  return <>
      <Head>
      <title>Blog - Diaz web app</title>
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de aplicaciones moviles, desarrollo de e-commerce, desarrollo tiendas online, desarrollo de software"/>
        <meta name="description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/** OG META */}
        <meta property="og:title" content="Blog - diaz web app" />
        <meta property="og:site_name" content={'diaz web app'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={process.env.URL_START+asPath} />
        <meta property="og:image" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:secure_url" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="240" />
        {/**TWITTER META */}
        <meta name="twitter:title" content="Blog - diaz web app" /> 
        <meta name="twitter:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={process.env.URL_START+"/logo512.png"} />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="3 minutos" />
        {/**LINK META */}
        <link rel="shortlink" href={process.env.URL_START+asPath} />
        <link rel="canonical" href={process.env.URL_START+asPath} />
      </Head>
    <aside>
      <ul className="aside_mobile_toolbar" >
        <li>Filtrar por categorias</li>
        <li onClick={()=>setShow_Cats(!show_cats)} ><b>{show_cats?'Close':'Categorias'}</b></li>
      </ul>
      <CatsMenu show_cats={show_cats} page_info={page_info} setShow_Cats={setShow_Cats} toggle_element={toggle_element} />

    </aside>
    <section id="news" >         
       {
         wpresp.total?(
          <div className="container_posts_1" >
              {currentPage.posts.map((post:Post)=><Card_1 post={post} key={post.id} />)}
          </div>
         ):null
       }
    </section>
    <section>
    <Pagination statePost={currentPage} setState={setCurrentPage} response={wpresp} rest_base={page_info.rest_base} params={static_params} />

    </section>     
  </>
  
}
export const getStaticPaths:GetStaticPaths = async()=>{
  let params = {rest_base:'_',taxonomy:'_',term:'_'}
  const paths =[{params}]
  try{
    const taxonomies = await get_taxonomies()
    const tax_keys = Object.keys(taxonomies)
    const terms = await get_terms(tax_keys)
   
    for(let type of wp_post_types){
      for(let taxonomy of terms){
        if(taxonomy.terms && taxonomy.terms.length > 0){
          for(let term of taxonomy.terms){
            paths.push({params:{rest_base:type.rest_base,taxonomy:taxonomy.rest_base,term:term.slug}})
          }
        }
      }
    }
    
    return {paths,fallback:false}
  }catch(err){
    console.error(err)
    return {paths,fallback:false}
  }
}
export const getStaticProps:GetStaticProps = async({params}:GetStaticPropsContext)=>{
  const {rest_base,taxonomy,term}:any = params
  
  if(taxonomy!=='_' && rest_base!=='_'){
    const wpresp = await get_posts_by_taxonomy({rest_base:rest_base,taxonomy,term,per_page:24})
    if(wpresp && wpresp.data.length > 0){
      let page_info = await get_post_type({slug:wpresp.data[0].type}) 
      
      page_info = {...page_info,taxonomies:await get_terms(page_info.taxonomies)}
        
      return {
        props:{
          wpresp,
          page_info,
          static_params:params
        },
        revalidate:1
      }
    }
      return {props:{},revalidate:1}
  
  }else{
    return {props:{},revalidate:1}
  }
}

export default The_Posts_Term