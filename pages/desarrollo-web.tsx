import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import IntroStyle from '../components/styled_components/intro.style'
import { App_context } from '../context/wp_context/app_context'

const WebApps = ()=>{
  const {asPath} = useRouter()
  const {app_dispatch} = useContext(App_context)

  useEffect(()=>{
    app_dispatch({type:'loader_app',payload:false})
  },[])
  return <>
      <Head>
        <title>Desarrollo de Aplicaciones web - Diaz web app</title>
        <meta name="author" content="diaz web app" />
        <meta name="keywords" content="diaz web app, desarrollo de aplicaciones moviles, applicaciones para e-commerce, applicaciones para tiendas online"/>
        <meta name="description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/** OG META */}
        <meta property="og:title" content="Desarrollo de aplicaciones móviles - Diaz web app" />
        <meta property="og:site_name" content={'diaz web app'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={process.env.URL_START+asPath} />
        <meta property="og:image" content="https://image.freepik.com/vector-gratis/banner-desarrollo-sitios-web_33099-1687.jpg" />
        <meta property="og:image:secure_url" content="https://image.freepik.com/vector-gratis/banner-desarrollo-sitios-web_33099-1687.jpg" />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="240" />
        {/**TWITTER META */}
        <meta name="twitter:title" content="Desarrollo de aplicaciones móviles - Diaz web app" /> 
        <meta name="twitter:description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://image.freepik.com/vector-gratis/banner-desarrollo-sitios-web_33099-1687.jpg" />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="3 minutos" />
        {/**LINK META */}
        <link rel="shortlink" href={process.env.URL_START+asPath} />
        <link rel="canonical" href={process.env.URL_START+asPath} />
        
        <meta property="ia:markup_url" content={process.env.URL_START+asPath} />
      </Head>

      <section className="intro flex-wrap" itemScope itemType="http://schema.org/Service">
        <span></span>
          <div className="flex-wrap">  
          <svg className="image_intro" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>HTML5</title><path fill="var(--primary-color)" d="M64,32,98.94,435.21,255.77,480,413,435.15,448,32ZM372,164H188l4,51H368L354.49,366.39,256,394.48l-98.68-28L150.54,289H198.8l3.42,39.29L256,343.07l53.42-14.92L315,264H148L135.41,114.41l240.79,0Z"/></svg>

                <article itemProp="name" >
                    
                    <h1>Aplicaciones web que sí generan visitas</h1>
                    
                    <p itemProp="description">
                      Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing aplicando:
                      
                      <b>Ténicas SEO</b> <b>Server Side Rendering (SSR)</b>
                      
                      <br/>
                      y un entorno de desarrllo con tecnologia de vanguardia 
                    </p>
                      <span className="flex-wrap">
                        <a href="#">
                          <Image width="70px" height="70px" loading="lazy" className="icons" src="/icons_svg/next.js.svg" alt="next js" />
                          <p>Next js</p>
                        </a>
                        <a href="#">
                          <Image width="70px" height="70px" loading="lazy" className="icons" src="/icons_svg/react.js.svg" alt="react js" />
                          <p >React js</p>
                        </a>
                      </span>
                </article>
          </div>
      </section>
   
      <section id='screen-two' itemScope itemType="http://schema.org/Service">
      <meta itemProp="serviceType" content="Home cleaning" />
          <div itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">

            <h2 style={{textAlign:'center'}} itemProp="name">
                SEO y Datos Estructurados
            </h2>

          </div> 
          
          <article className="flex-wrap web-optimisation" itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog" >

                  <div>
                    <Image width="250px" height="230px" loading="lazy" src="/img/seo-skills.webp" alt="seo" />
                  </div>

                  <div>
                    <h3 itemProp="name">
                      Datos Estructurados
                    </h3>

                    <p itemProp="description" >
                      Estructuramos el contenido de tu web con meta información, para que los motores de búsqueda lo interpreten mejor, logrando una mayor conversion de usuarios a potenciales clientes.
                    </p>
                  </div>

                  <div>
                    <h3 itemProp="name">
                      Estrategias SEO
                    </h3>

                    <p itemProp="description">
                      Elaboramos estrategias SEO para obtener mejores resultados, para aumentar la visibilidad y tráfico orgánico logrando mejor posicionamiento en los motores de búsquedas.
                    </p>
                  </div>
          </article>
    </section>
     <style jsx >
       {
         `
            #screen-two {
              background: var(--shadow-color);
              padding: 10px
            }

            .web-optimisation {
              align-items: flex-start;
              max-width:1200px;
              margin:0 auto;
            }

            .web-optimisation>div {
              width: 100%;
              text-align: center
            }
            
            .web-optimisation>div>h3 {
              text-align: center;
              padding: 5px 0;
              color: var(--primary-color)
            }

            .web-optimisation>div>p {
              padding: 5px
            }

            .web-optimisation>div>img {
              max-height: 200px
            }
            @media(min-width:720px) {
              .web-optimisation>div {
                  width: 33.33%
              }
            }
            `
       }
     </style>
     <IntroStyle/>
  </>
  
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  return {props:{},revalidate:1}
} 
export default WebApps
