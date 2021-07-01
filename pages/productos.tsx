import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { App_context } from '../context/wp_context/app_context'
const Products_page = () => {
    const {asPath} = useRouter()
    const {app_dispatch} = useContext(App_context)
    useEffect(()=>{
      app_dispatch({type:'loader_app',payload:false})
    },[])
    return <>
    <Head>
        <title>Desarrollo de aplicaciones a la medida</title>
        {/** DEFAULT META */}
        <meta name="author" content="diaz web app" />
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de aplicaciones moviles, desarrollo de e-commerce, desarrollo tiendas online, desarrollo de software" />
        <meta name="description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/** OG META */}
        <meta property="og:title" content="Desarrollo de aplicaciones a la medida - Diaz web app" />
        <meta property="og:site_name" content={'diaz web app'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={process.env.URL_START+asPath} />
        <meta property="og:image" content="https://www.usfq.edu.ec/sites/default/files/styles/min_mobile/public/2020-08/sub_web.jpg" />
        <meta property="og:image:secure_url" content="https://www.usfq.edu.ec/sites/default/files/styles/min_mobile/public/2020-08/sub_web.jpg" />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="240" />
        {/**TWITTER META */}
        <meta name="twitter:title" content="Desarrollo de aplicaciones a la medida - Diaz web app" /> 
        <meta name="twitter:description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.usfq.edu.ec/sites/default/files/styles/min_mobile/public/2020-08/sub_web.jpg" />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="3 minutos" />
        {/**LINK META */}
        <link rel="shortlink" href={process.env.URL_START+asPath} />
        <link rel="canonical" href={process.env.URL_START+asPath} />
    </Head>
        <section className="intro flex-wrap" itemScope itemType="http://schema.org/Service">
          <span></span>
            <div className="flex-wrap">  
            <svg className="image_intro" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>HTML5</title><path fill="var(--primary-color)" d="M64,32,98.94,435.21,255.77,480,413,435.15,448,32ZM372,164H188l4,51H368L354.49,366.39,256,394.48l-98.68-28L150.54,289H198.8l3.42,39.29L256,343.07l53.42-14.92L315,264H148L135.41,114.41l240.79,0Z"/></svg>

                <article itemProp="name" >
                    
                    <h1>Aplicaciones web que sí generan visitas</h1>
                    
                    <p itemProp="description">
                      Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing aplicando:
                      
                      <b>Ténicas SEO</b>  <b>Server Side Rendering (SSR)</b>
                      
                      <br/>
                      y un entorno de desarrllo con tecnologia de vanguardia 
                    </p>
                      <span className="flex-wrap">
                        <Link href="/">
                          <a>
                            <Image layout="responsive" width="32px" height="32px" loading="lazy" className="icons" src="/icons_svg/next.js.svg" alt="next js" />
                            <p>Next js</p>
                          </a>
                        </Link>
                        <Link href="/" >
                          <a>
                            <Image layout="responsive" width="32px" height="32px" loading="lazy" className="icons" src="/icons_svg/react.js.svg" alt="react js" />
                            <p >React js</p>
                          </a>
                        </Link>
                      </span>
                </article>
            </div>
      </section>

      <section className="intro" itemScope itemType="http://schema.org/Service">
          <div className="flex-wrap">
                <article>
                    <h1 itemProp="name" >Desarrollo de aplicaciones móviles</h1>
                   
                    <p itemProp="description">
                        Desarrollamos aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado.
                        <br/>
                        Tenemos alto conocimiento en entornos de desarrollo <b>Multi Plataforma</b> enfocados en <b>Android {'&'} Ios</b>, Utilizamos:
                      <br/>
                    </p>
                    <span className="flex-wrap">
                        <Link href="/" >
                          <a>
                            <Image layout="responsive" width="32px" height="32px" loading="lazy" className="icons" src="/icons_svg/ionic.svg" alt="ionic" />
                            <p>Ionic</p>
                          </a>
                        </Link>
                        <Link href="/" >
                          <a>
                            <Image layout="responsive" width="50px" height="50px" loading="lazy" className="icons" src="/icons_svg/react.js.svg" alt="react native" />
                            <p >React Native</p>
                          </a>
                        </Link>
                    </span>
                </article>

                <img className="image_intro" width="200" height="250" src="/img/laravel-2.webp" alt="mobile dev" itemProp="image" loading="lazy" />
            </div>
        </section>
      </>
    }

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
    return {props:{},revalidate:1}
} 
export default Products_page
