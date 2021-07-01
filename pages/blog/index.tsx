import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import CatsMenu from '../../components/cats_menu'
import Card_1 from '../../components/post_cards/card_1'
import { App_context } from '../../context/wp_context/app_context'
import { get_all_posts, get_post_type } from '../../controlers/app_controller'
import { get_terms } from '../../controlers/taxonomies_controles'
import { Post, WPResp } from '../../interfaces/app_interfaces'

type Props={
  wpresp?:WPResp
  page_info:any
}
const Blog = ({wpresp,page_info}:Props)=>{
  const {app,app_dispatch} = useContext(App_context)
  const [show_cats,setShow_Cats] = useState<boolean>(false)
  const [currentPage,setCurrentPage] = useState<any>({
    page:1,
    total:24,
    posts:[]
  })
  const {isFallback,asPath} = useRouter()
  if(isFallback) return <section><b>Loading...</b></section>
  if(!wpresp || !page_info) return <section><b>No hay datos en este momento</b></section>

  const toggle_element = (e:any)=>{
    const li:HTMLElement = e.target
    const ul_items = li.parentElement?.children[1]
    ul_items?.classList.toggle('view_items')
   
  }
  
  const next = async(param?:number)=>{
    if(param){
      setCurrentPage({...currentPage, page:param})
    }
    if(currentPage.page == 1){
        const wpresp = await get_all_posts({rest_base:'posts',per_page:currentPage.total,page:param})
        app_dispatch({
          type:'get_all_posts',
          payload:wpresp
        })
        return
    }
    if(wpresp.total_pages && currentPage.page > 1 && currentPage.page <= parseInt(wpresp.total_pages)){
        const wpresp = await get_all_posts({rest_base:'posts',per_page:currentPage.total,page:param})
        app_dispatch({
          type:'get_all_posts',
          payload:wpresp
        })
    }
  }
  useEffect(()=>{
    app_dispatch({type:'loader_app',payload:false})
    next() 
  },[])
  return <>
      <Head>
        <title>Blog - Diaz web app</title>
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online"/>
        <meta name="description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/** OG META */}
        <meta property="og:title" content="Blog - diaz web app" />
        <meta property="og:site_name" content={'diaz web app'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={process.env.URL_START+asPath} />
        <meta property="og:image" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:secure_url" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="240" />
        {/**TWITTER META */}
        <meta name="twitter:title" content="Blog - diaz web app" /> 
        <meta name="twitter:description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
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
   <section>
    <h1>Blog de Diaz Web App</h1>          

    <p>Lo que necesitas saber sobre desarrollo de software, comercio en linea y tecnología</p>          
   </section>
   {app.posts.total?(
      <section id="news" >         
       <div className="container_posts_1" >
            {app.posts.data.map((post:Post)=><Card_1 post={post} key={post.id} />)}
       </div>
    </section>
    ):<section>No hay datos</section>
    }
    <section>
      <div className="pagination_container">
          {
            wpresp.total_pages?
              currentPage.page > 1?(
                  <button className="icon-button" onClick={()=>next(currentPage.page-1)} style={{padding:"3px 6px"}} >
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
            wpresp.total_pages?
              currentPage.page >= 1 && currentPage.page < parseInt(wpresp.total_pages) ?(
                  <button className="icon-button" onClick={()=>next(currentPage.page+1)} style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Siguiente</title><path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              ):currentPage.page >= 1 && currentPage.page == parseInt(wpresp.total_pages)?(
                <button className="icon-button" style={{padding:"3px 6px"}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Siguiente</title><path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style={{width:'32px',height:'32px',fill:'none',stroke:'#000',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
                  </button>
              ):null
            :null
          }
      </div>
    </section>
  </>
  
}

export const getStaticProps:GetStaticProps = async(_:GetStaticPropsContext)=>{
  try{
      
      const wpresp:WPResp = await get_all_posts({rest_base:'posts',per_page:24})
      let page_info = await get_post_type({type:'post'}) 
      page_info = {...page_info,taxonomies:await get_terms(page_info.taxonomies)}
      
      return {props:{
        wpresp,
        page_info
      },revalidate:1}
  }catch(err){
      return {props:{},revalidate:1}
  }
}

export default Blog
