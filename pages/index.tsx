import Head from 'next/head'
import { Intro } from '../components/intro'
import { WP_RESP_POSTS } from '../interfaces/wp_rest'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { get_posts, wp_response_posts } from '../controllers/post.controller'

const IndexPage = () => {
    const [data,setData] = useState<WP_RESP_POSTS>(wp_response_posts)
    const get_data = async ()=>{
      let resp:any = await get_posts({per_page:16,page:1})
      setData(resp)
    }
    useEffect(()=>{
      get_data()
    },[])

    return <>
    <Head>
        <title>Diaz web app - desarrollo de aplicaciones a la medida</title>
        <meta name="author" content="diaz web app" />
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online"/>
        <meta name="description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/** OG META */}
        <meta property="og:title" content="Diaz web app - desarrollo de aplicaciones a la medida" />
        <meta property="og:site_name" content={'diaz web app'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={process.env.URL_START} />
        <meta property="og:image" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:secure_url" content={process.env.URL_START+"/logo512.png"} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="240" />
        {/**TWITTER META */}
        <meta name="twitter:title" content="Diaz web app - desarrollo de aplicaciones a la medida" /> 
        <meta name="twitter:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={process.env.URL_START+"/logo512.png"} />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="3 minutos" />
        {/**LINK META */}
        <link rel="shortlink" href={process.env.URL_START} />
        <link rel="canonical" href={process.env.URL_START} />
        <meta property="ia:markup_url" content={process.env.URL_START} />
    </Head>
    <section>
        <Intro
        title="Aplicaciones que responden a tus clientes"
        text1="Desarrollo de aplicaciones web, moviles y soluciones tecnologicas adaptadas a la necesidad del cliente."
        text2="Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión."
        url_logo="/img/developer3.webp"
         /> 
        <div className="gallery">

        {
          data.req_status_number===0?(
            <div className="loader">cargando...</div>
          ):data.req_status_number===200?(
              data.total >0?(
                    data.posts.map((post)=>(                
                      <div>
                        <Image 
                      width={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.width:100} 
                      height={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.height:100} 
                      key={post.id} 
                      placeholder="blur"
                      blurDataURL="/img/loading.svg"
                      src={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.source_url:"/logo512.png"} />
                      <p>
                        {post.title.rendered}
                      </p>
                      </div>
                    ))
                  ):"no hay datos"
              ):null
        }

        </div>
        <style jsx>{
          `
          .gallery{
            width:100%;
            position:relative;
            flex-flow:row wrap;
            display:flex;
            justify-content:space-around;
          }
          .gallery > div{
            width:25%;
            margin:2px;
          }
          `
        }</style>
    </section>

  </>
}

export default IndexPage
