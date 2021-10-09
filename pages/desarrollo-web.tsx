import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { Intro } from '../components/intro'

const WebApps = ()=>{
  const {asPath} = useRouter()
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

      <section>
        <Intro
          title="Aplicaciones web que sí generan visitas"
          text1="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing aplicando:"
          text2="Ténicas SEO Server Side Rendering (SSR) y un entorno de desarrllo con tecnologia de vanguardia."
          url_logo="/img/web-design.webp"
         /> 
        
      
          
          <article className="web-optimisation" >
                <h2>
                    SEO y Datos Estructurados
                </h2>
                  <div>
                    <Image width="250px" height="230px" placeholder="blur" blurDataURL="/img/loading.svg" src="/img/seo-skills.webp" alt="seo" />
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

            .web-optimisation {
              display:grid;
              text-align:center;
              gap:10px;
              padding:10px ;
              margin:5px auto;
            }
            
            .web-optimisation h2, .web-optimisation h3{
              margin:10px auto;
              color:var(--primary-color);
              text-shadow:1px 1px var(--theme-color);
            }
            @media(min-width:680px) {
              .web-optimisation {
                  grid-template-columns: 1fr 1fr ;
                  place-items:center;
                  place-content:center;
              }
              
              .web-optimisation h2{
                grid-column:1 / span 2;
              }
            }
            @media(min-width:960px) {
              .web-optimisation {
                  grid-template-columns: 1fr 1fr 260px;
              }
              .web-optimisation > div:nth-child(2){
                order:3;
              }
              .web-optimisation h2{
                grid-column:1 / span 3;
              }
            }
            `
       }
     </style>
  </>
  
}

export default WebApps
