import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import CatsMenu from '../../components/cats_menu'
import { App_context } from '../../context/wp_context/app_context'
import { get_all_posts, get_post, get_post_type } from '../../controlers/app_controller'
import { get_terms } from '../../controlers/taxonomies_controles'
import { Post, WPResp } from '../../interfaces/app_interfaces'

type Props={
  post?:Post
  page_info:any
}
const The_Post = ({post,page_info}:Props)=>{
  const {app_dispatch} = useContext(App_context)
  const [show_cats,setShow_Cats] = useState<boolean>(false)
  const {isFallback,asPath} = useRouter()
  if(isFallback) return <section><b>Loading...</b></section>
  if(!page_info || !post) return <section><b>No hay datos en este momento</b></section>
  
  const toggle_element = (e:any)=>{
    const li:HTMLElement = e.target
    const ul_items = li.parentElement?.children[1]
    ul_items?.classList.toggle('view_items')
   
  }
  useEffect(()=>{
    app_dispatch({type:'loader_app'})
  },[asPath])
  return <>
      <Head>
        <title>{post.title.rendered} - Diaz web app</title>
        <link rel="stylesheet" href="/css/wp.min.css"/>
        <meta name="description" content={post.excerpt?.rendered.replace('<p>','').replace('</p>','')} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.modified} />
        {/** OG META */}
        <meta property="og:title" content={post.title.rendered +" - Diaz web app"} />
        <meta property="og:site_name" content={'diaz web app'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={post.excerpt?.rendered.replace('<p>','').replace('</p>','')} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={process.env.URL_START+asPath} />
        <meta property="og:image" content={post._embedded["wp:featuredmedia"]?post._embedded["wp:featuredmedia"][0].source_url:''} />
        <meta property="og:image:secure_url" content={post._embedded["wp:featuredmedia"]?post._embedded["wp:featuredmedia"][0].source_url:''} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="240" />
        {/**TWITTER META */}
        <meta name="twitter:title" content={post.title.rendered +" - Diaz web app"} /> 
        <meta name="twitter:description" content={post.excerpt?.rendered.replace('<p>','').replace('</p>','')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={post._embedded["wp:featuredmedia"]?post._embedded["wp:featuredmedia"][0].source_url:''} />
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
    <section >
      <h1>{post.title.rendered}</h1>
      <article dangerouslySetInnerHTML={{__html:post.content.rendered}} ></article>
    </section>
  </>
  
}
export const getStaticPaths:GetStaticPaths = async(_:GetStaticPathsContext)=>{
  try{
    const {data}:WPResp = await get_all_posts({rest_base:'posts'})
    const paths = data.map((post:Post)=>({params:{slug:post.slug}}))
    return {paths,fallback:true}
  }catch(err){
    return {paths:[{params:{slug:'_'}}],fallback:true}
  }
}
export const getStaticProps:GetStaticProps = async({params}:GetStaticPropsContext)=>{
  try{
      const {slug}:any = params
      if(slug !== '_'){
        const post = await get_post({rest_base:'posts',slug})
        let page_info = await get_post_type({type:'post'}) 
        page_info = {...page_info,taxonomies:await get_terms(page_info.taxonomies)}
        
        return {props:{post,page_info},revalidate:1}
      }
      return {props:{},revalidate:1}
  }catch(err){
      return {props:{},revalidate:1}
  }
}

export default The_Post
