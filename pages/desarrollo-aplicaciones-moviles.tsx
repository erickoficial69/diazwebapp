import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { App_context } from '../context/wp_context/app_context'

const MobileApps=()=>{
  const {asPath} = useRouter()
  const {app_dispatch} = useContext(App_context)

  useEffect(()=>{
    app_dispatch({type:'loader_app',payload:false})
  },[])
  return <>
          <Head>
            <title >Desarrollo de aplicaciones móviles - Diaz web app</title>
            <meta name="author" content="diaz web app" />
            <meta name="keywords" content="diaz web app, desarrollo de aplicaciones moviles, applicaciones para e-commerce, applicaciones para tiendas online"/>
            <meta name="description" content="Desarrollo de aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado." />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            {/** OG META */}
            <meta property="og:title" content="Desarrollo de aplicaciones móviles - Diaz web app" />
            <meta property="og:site_name" content={'diaz web app'} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content="Desarrollo de aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado." />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:url" content={process.env.URL_START+asPath} />
            <meta property="og:image" content={process.env.URL_START+"/logo512.png"} />
            <meta property="og:image:secure_url" content={process.env.URL_START+"/logo512.png"} />
            <meta property="og:image:width" content="320" />
            <meta property="og:image:height" content="240" />
            {/**TWITTER META */}
            <meta name="twitter:title" content="Desarrollo de aplicaciones móviles - Diaz web app" /> 
            <meta name="twitter:description" content="Desarrollo de aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={process.env.URL_START+"/logo512.png"} />
            <meta name="twitter:label1" content="Tiempo de lectura" />
            <meta name="twitter:data1" content="3 minutos" />
            {/**LINK META */}
            <link rel="shortlink" href={process.env.URL_START+asPath} />
            <link rel="canonical" href={process.env.URL_START+asPath} />
          </Head>

          <section className="intro flex-wrap" itemScope itemType="http://schema.org/Service">
            <span></span>
              <div className="flex-wrap">
                <Image className="image_intro" width="200px" height="200px" loading="lazy" src="/img/laravel-2.webp" alt="monile dev" itemProp="image"/>

                  <article>
                      <h1 itemProp="name" >Desarrollo de aplicaciones móviles</h1>
                    
                      <p itemProp="description">
                          Desarrollamos aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado.
                          <br/>
                          Tenemos alto conocimiento en entornos de desarrollo <b>Multi Plataforma</b> enfocados en <b>Android {'&'} Ios</b>, Utilizamos:
                        <br/>
                      </p>
                      <span className="flex-wrap">
                        <a href="#">
                            <Image width="80px" height="80px" loading="lazy" className="icons" src="/icons_svg/ionic.svg" alt="ionic" />
                            <p>Ionic</p>
                        </a>
                        <a href="#">
                            <Image width="80px" height="80px" loading="lazy" className="icons" src="/icons_svg/react.js.svg" alt="react native" />
                            <p >React Native</p>
                        </a>
                      </span>
                  </article>
                </div>
        </section>
    </>
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  return {props:{},revalidate:1}
} 
export default MobileApps
