import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

import {Intro} from '../components/intro'

const MobileApps=()=>{
  const {asPath} = useRouter()
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
            <meta property="og:image" content="https://image.freepik.com/vector-gratis/banner-desarrollo-aplicaciones_33099-1720.jpg" />
            <meta property="og:image:secure_url" content="https://image.freepik.com/vector-gratis/banner-desarrollo-aplicaciones_33099-1720.jpg" />
            <meta property="og:image:width" content="320" />
            <meta property="og:image:height" content="240" />
            {/**TWITTER META */}
            <meta name="twitter:title" content="Desarrollo de aplicaciones móviles - Diaz web app" /> 
            <meta name="twitter:description" content="Desarrollo de aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://image.freepik.com/vector-gratis/banner-desarrollo-aplicaciones_33099-1720.jpg" />
            <meta name="twitter:label1" content="Tiempo de lectura" />
            <meta name="twitter:data1" content="3 minutos" />
            {/**LINK META */}
            <link rel="shortlink" href={process.env.URL_START+asPath} />
            <link rel="canonical" href={process.env.URL_START+asPath} />
            <meta property="ia:markup_url" content={process.env.URL_START+asPath} />
          </Head>

          <section>
            <Intro 
            title="Desarrollo de aplicaciones móviles"
            text1="Desarrollamos aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado."
            text2="Tenemos alto conocimiento en entornos de desarrollo <b>Multi Plataforma</b> enfocados en <b>Android - Ios</b>"
            url_logo="/img/laravel-2.webp"
            />
          
        </section>
       
    </>
}

export default MobileApps
