import Head from 'next/head'
import { Intro } from '../../components/intro'
import Link from 'next/dist/client/link'
import { IconHTML5, Icon_Code_Slash } from '../../components/icons'
import { useRouter } from 'next/dist/client/router'

const Servicios = () => {
    const {asPath} = useRouter()
  return <main>
    <Head>
      <title>Servicios de Desarrollo de Software - Diaz web app</title>
      <meta name="author" content="diaz web app" />
      <meta name="description" content="Servicios de Desarrollo de Software, aplicaciones web, aplicaciones moviles, wordpress y asesoria tecnica gratuita." />

      {/** OG META */}
      <meta property="og:title" content="Servicios de Desarrollo de Software - Diaz web app" />
      <meta property="og:site_name" content={'diaz web app'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Servicios de Desarrollo de Software, aplicaciones web, aplicaciones moviles, wordpress y asesoria tecnica gratuita." />
      <meta property="og:locale" content="es_SP" />
      <meta property="og:url" content={process.env.DOMAIN+asPath} />
      <meta property="og:image" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:secure_url" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="240" />
      {/**TWITTER META */}
      <meta name="twitter:title" content="Servicios de Desarrollo de Software - Diaz web app" />
      <meta name="twitter:site" content="@diazwebapp" />
      <meta name="twitter:description" content="Servicios de Desarrollo de Software, aplicaciones web, aplicaciones moviles, wordpress y asesoria tecnica gratuita." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={process.env.DOMAIN + "/logo512.png"} />
      <meta name="twitter:label1" content="Tiempo de lectura" />
      <meta name="twitter:data1" content="3 minutos" />
      {/**LINK META INDEX*/}
      <link rel="shortlink" href={process.env.DOMAIN+asPath} />
      <link rel="canonical" href={process.env.DOMAIN+asPath} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta property="ia:markup_url" content={process.env.DOMAIN+asPath} />
    </Head>
    <section>
      <Intro
        title="Servicios"
        text1="Servicios de Desarrollo de Software, aplicaciones web, aplicaciones moviles, wordpress y asesoria tecnica gratuita."
        text2="Realizamos servicios de desarrollo de software personalizados para empresas emergentes, pequeñas, medianas y empresas de tamaño empresarial."
        url_logo="/img/developer3.webp"
      />

      <div className='body_post' >
        
        <h2 className="has-text-align-center"> Servicios de desarrollo de software disponibles</h2>

        <div className="link_grid">
            <Link href="/servicios/desarrollador-web/" >
                <a href="/servicios/desarrollador-web/" title="Desarrollador web" >
                  <IconHTML5 width={80} height={80} color="#ff5100"/>
                  <b>Servicios de Desarrollador web</b>
                </a>
            </Link>
            <Link href="/servicios/desarrollador-de-apps/">
                <a href="/servicios/desarrollador-de-apps/" title="desarrollador de apps">
                  <Icon_Code_Slash width={80} height={80} color='var(--primary-color)' />
                  <b>Servicios de Desarrollador de aplicaciones</b>
                </a>
            </Link>
        </div>

        </div>
    </section>
  <style jsx >
    {
      `
      h1,h2,h3,h4{
        padding:5px;
      }
      h1,h2{
        text-align:center;
        color:var(--secondary-color);
      }
      p{
        padding:10px;
      }
      .link_grid{
        display:grid;
        grid-template-columns: 1fr;
        gap:50px;
        place-items:center;
        place-content:center;
        position:relative;
        padding: 10px 5px;
        margin:40px auto;
      }
      .link_grid:before{
        content:"";
        width:100%;
        height:100%;
        top:0;
        left:0;
        position:absolute;
        background:rgba(0,0,0, .4);
      }
      .link_grid a{
        text-align:center;
        position:relative;
        padding:10px;
        display:grid;
        place-items:center;
        place-content:center;
        text-decoration:underline;
      }
      .link_grid a b{
        width:100%;
        display:block;
        margin:10px auto;
        text-transform:uppercase;
      }
      
      .link_grid div p,.link_grid a:hover > b{
        color:var(--primary-color);
      }
      .link_grid div p{
        text-align:center;
        font-weight:bold;
      }
      @media(min-width:720px){
        .link_grid{
          grid-template-columns: repeat(2,1fr);
        }
      }
      `
    }
  </style>
  </main>
}

export default Servicios