import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import CatsMenu from '../../components/cats_menu'
import Pagination from '../../components/pagination'
import Card_1 from '../../components/post_cards/card_1'
import { App_context } from '../../context/wp_context/app_context'
import { get_all_posts, get_post_type } from '../../controlers/app_controller'
import { get_terms } from '../../controlers/taxonomies_controles'
import { Post, StatePosts, WPResp } from '../../interfaces/app_interfaces'
import { wp_post_types } from '../../wpconfig'

type Props={
  wpresp?:WPResp
  page_info:any
}
const Blog = ({wpresp,page_info}:Props)=>{
  const {app,app_dispatch} = useContext(App_context)
  const [statePosts,setStatePosts] = useState<StatePosts>({
    page:1,
    per_page:12
  })
  const {isFallback,asPath} = useRouter()
  if(isFallback) return <section></section>
  
  if(!page_info || !wpresp){
    useEffect(()=>{
      app_dispatch({
        type:'loader_app',
        payload:false
      })
    },[asPath])
    return <section><b>No hay datos en este momento</b></section>
  }
  
  useEffect(()=>{
    app_dispatch(
      {
        type:'get_all_posts',
        payload:wpresp
      }
    )
    app_dispatch({type:'loader_app',payload:false})
  },[])
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
    
  <section>
    <h1>Blog de Diaz Web App</h1>          

    <p>Lo que necesitas saber sobre desarrollo de software, comercio en linea y tecnología</p>          
  
    <div id="news" >  
    {
      app.loader_request?(
        <h1>Loading...</h1>
      ):(
        wpresp.total && parseInt(wpresp.total) > 0?(
                
          <div className="container_posts_1" >
                {app.posts.data.map((post:Post)=><Card_1 post={post} key={post.id} />)}
          </div>
        
        ):<b>No hay datos</b>
      )
    }
    </div>
  
    <Pagination statePost={statePosts} setState={setStatePosts} response={wpresp} rest_base={page_info.rest_base} />
    </section>

    <aside>
      <CatsMenu page_info={page_info} />    
    </aside>
  </>
  
}

export const getStaticPaths:GetStaticPaths = async(_:GetStaticPathsContext)=>{
  const paths = wp_post_types.map((type:any)=>({params:{rest_base:type.rest_base}}))
  return {paths,fallback:true}
  
}
export const getStaticProps:GetStaticProps = async({params}:GetStaticPropsContext)=>{
  const {rest_base}:any = params
  
  try{
    if(rest_base && rest_base !== '_'){
      const wpresp = await get_all_posts({rest_base:rest_base,per_page:12})
      if(wpresp && wpresp.data.length > 0){
        let page_info = await get_post_type({slug:wpresp.data[0].type}) 
        page_info = {...page_info,taxonomies:await get_terms(page_info.taxonomies)}
        return {props:{
          wpresp,
          page_info
        },revalidate:1}
      }  
    }
    return {props:{},revalidate:1}
  }catch(err){
      return {props:{},revalidate:1}
  }
}

export default Blog