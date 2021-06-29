import { Arrow_circle, Cube, Mobile, Pwa } from '../components/icons'
import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { App_context } from '../context/wp_context/app_context'
import { Post } from '../interfaces/app_interfaces'
import Card_1 from '../components/post_cards/card_1'
import Head from 'next/head'

const IndexPage = () => {
    const {app,app_dispatch} = useContext(App_context)
    useEffect(()=>{
        app_dispatch({type:'loader_app'})
    },[])
    return <>
    <Head>
        <title>Diaz web app - desarrollo de aplicaciones a la medida</title>
        <meta name="author" content="diaz web app" />
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online"/>
        <meta name="description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/** OG META */}
        <meta property="og:title" content="Diaz web app - desarrollo de aplicaciones a la medida" />
        <meta property="og:site_name" content={'diaz web app'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={process.env.URL_START} />
        <meta property="og:image" content={process.env.URL_START+"/logo.png"} />
        <meta property="og:image:secure_url" content={process.env.URL_START+"/logo.png"} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="240" />
        {/**TWITTER META */}
        <meta name="twitter:title" content="Diaz web app - desarrollo de aplicaciones a la medida" /> 
        <meta name="twitter:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={process.env.URL_START+"/logo.png"} />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="3 minutos" />
        {/**LINK META */}
        <link rel="shortlink" href={process.env.URL_START} />
        <link rel="canonical" href={process.env.URL_START} />
    </Head>
    <section style={{maxWidth:'unset'}} className="intro" itemScope itemType="http://schema.org/Service">
        <span></span>
        <div className="flex-wrap" >   
        <meta itemProp="serviceType" content="apps development" />
        <Image className="image_intro" width="200px" height="200px" loading="lazy" src="/img/developer3.webp" alt="Desarrollo de de aplicaciones y paginas web" itemProp="image"/>

        <article itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">

                <h1 itemProp="name" >Aplicaciones que responden a tus clientes</h1>

                <p itemProp="description">
                    Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente.
                    <br/>
                    Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión.
                    
                </p>
                <span className="flex-wrap box_products " >
                    <Link href="/desarrollo-aplicaciones-moviles" >
                        <a>
                            <Mobile/>
                            <p>Mobile Apps</p>
                        </a>
                    </Link>
                    <Link href="/desarrollo-web" >
                        <a onClick={()=>("/desarrollo-web")}>
                            <Pwa/>
                            <p>Web Apps</p>
                        </a>
                    </Link>
                    <Link href="/desarrollo-api" >
                        <a onClick={()=>("/desarrollo-api")}>
                            <Cube/>
                            <p>Api's</p>
                        </a>
                    </Link>
                </span>
        </article>
        </div> 
    </section>

    <div style={{textAlign:'center',width:'100%'}} >
        <a style={{width:'70px',margin:'20px auto'}} className="icon-button" href='#news' >
            <Arrow_circle /> <b>Más</b>
        </a>
    </div>
    
    {app.posts.total?
    <section id="news" >
        <h2>Últimas noticias</h2>          
       <div className="container_posts_1" >
            {app.posts.data.map((post:Post)=><Card_1 post={post} key={post.id} />)}
       </div>
    </section>
    :null}
  </>
}


export default IndexPage
