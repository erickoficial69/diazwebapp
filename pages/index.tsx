import Head from 'next/head'
import { Intro } from '../components/intro'
import Link from 'next/dist/client/link'
import { IconHTML5, Icon_Code_Slash } from '../components/icons'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { get_posts } from '../controllers/post.controller'
import { WP_RESP_POSTS } from '../interfaces/wp_rest'
import {Blog_grid} from '../components/Blog_grid'

type Props={
  blog:WP_RESP_POSTS
}

const Index = ({blog}:Props) => {
  
  return <main>
    <Head>
      <title>Desarrollador de software - Diaz web app</title>
      <meta name="author" content="diaz web app" />
      <meta name="description" content="Desarrollador de páginas web, aplicaciones moviles y otros tipos de software adaptadas a la necesidad del cliente. Con Diaz Web App, puedes expandir tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />

      {/** OG META */}
      <meta property="og:title" content="Desarrollador de software - Diaz web app" />
      <meta property="og:site_name" content={'diaz web app'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Desarrollador de páginas web, aplicaciones moviles y otros tipos de software adaptadas a la necesidad del cliente. Con Diaz Web App, puedes expandir tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
      <meta property="og:locale" content="es_SP" />
      <meta property="og:url" content={process.env.DOMAIN} />
      <meta property="og:image" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:secure_url" content={process.env.DOMAIN + "/logo512.png"} />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="240" />
      {/**TWITTER META */}
      <meta name="twitter:title" content="Desarrollador de software - Diaz web app" />
      <meta name="twitter:site" content="@diazwebapp" />
      <meta name="twitter:description" content="Desarrollador de páginas web, aplicaciones moviles y otros tipos de software adaptadas a la necesidad del cliente. Con Diaz Web App, puedes expandir tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={process.env.DOMAIN + "/logo512.png"} />
      <meta name="twitter:label1" content="Tiempo de lectura" />
      <meta name="twitter:data1" content="3 minutos" />
      {/**LINK META INDEX*/}
      <link rel="shortlink" href={process.env.DOMAIN} />
      <link rel="canonical" href={process.env.DOMAIN} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta property="ia:markup_url" content={process.env.DOMAIN} />
    </Head>
    <section>
      <Intro
        title="Desarrollador de software"
        text1="Desarrollador de páginas web, aplicaciones moviles y otros tipos de software adaptadas a la necesidad del cliente."
        text2="Con Diaz Web App, puedes expandir tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión."
        url_logo="/img/developer3.webp"
      />
      {
        blog.total>0?(
          <Blog_grid posts={blog.posts} />
        ):(<h4>No hay datos</h4>)
      }
      <div className='body_post' >
        
        <h2 className="has-text-align-center">Un desarrollador / Multiples servicios</h2>

        <div className="link_grid">
          <div>
            <p>
              Desarrollador con suficientes conocimiento y experiencia para desarrollar multiples aplicaciones en entornos distintos o similares.
            </p>
          </div>
          <div>
            <Link href="http://localhost:3000/servicios/desarrollador-web/" >
                <a href="http://localhost:3000/servicios/desarrollador-web/" title="Desarrollador web" >
                  <IconHTML5 width={80} height={80} color="#ff5100"/>
                  <b>Desarrollador web</b>
                </a>
            </Link>
            <Link href="http://localhost:3000/desarrollador-de-apps/">
                <a href="http://localhost:3000/desarrollador-de-apps/" title="desarrollador de apps">
                  <Icon_Code_Slash width={80} height={80} color='var(--primary-color)' />
                  <b>Desarrollador de apps</b>
                </a>
            </Link>
          </div>
        </div>

        <h2 className="has-text-align-center">Ventajas sobre otros desarrolladores </h2>


        <p><b>Conocimiento profundo</b> de cómo aprovechar los mejores lenguajes de programación y otras herramientas de desarrollo de software para crear la solución ideal para su negocio.</p>



        <p><b>Trabajamos con usted</b> para encontrar las áreas que mejor se adapten a su proyecto y brindarle valor. </p>



        <p><b>Ofrecemos sugerencias</b> según sus necesidades en cualquier momento del ciclo de vida del proyecto basadas en experiencias y conocimientos.</p>



        <p><b>Código Fuente compartido</b> la mayoría de los desarroladores de software insisten en poseer sus propios códigos fuente para evitar que sus clientes busquen otros developers. Según nuestro acuerdo, el código fuente se queda en un repositorio para que pueda ser descargado y modificado por ambas partes.</p>



        <p><b>Modelo ágil de gestión</b> del ciclo de vida del producto, desde la conceptualización, la codificación simultánea de frontend y backend, implementación, control de calidad y más.</p>

        <h2>Asesorate antes de elegir un desarrollador de software</h2>

        <p>Existen varios puntos a tomar en cuenta a la hora de elegir a un desarrollador para tu proyecto, en este caso solo nos enfocaremos brevemente en 2.</p>

        <h3>Desarrollador de Software y desarrollador de aplicaciones</h3>

        <p>Aunque hay muchas similitudes, la tarea principal de un 
          <Link href="http://localhost:3000/servicios/" >
                <a href="http://localhost:3000/servicios/" title="desarrollador de aplicaciones" >
                  <b> desarrollador de aplicaciones </b>
                </a>
            </Link> 
            esta enfocada en desarrollar una aplicacion web o una aplicacion movil siguiendo los parametros del cliente o de su equipo de trabajo, haciendo uso de su entorno de desarrollo y herramientas preferidas.</p>

        <p>En cambio un
            <Link href="http://localhost:3000/" >
                <a href="http://localhost:3000/" title="desarrollador de Software" >
                  <b> desarrollador de software </b>
                </a>
            </Link>
             no solo es capaz de programar dichas aplicaciones, adicionalmente esta más capacitado para estructurar un proyecto entero guiando al cliente sobre tecnologias y metodologias para llevar a cabo el proyecto final, como por ejemplo hosting, servicios cloud, lenguajes de programacion adecuados para ciertos proyectos, estructura de software para dispositivos moviles, aplicaciones web, escritorio entre otras.</p>
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
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  const blog = await get_posts({per_page:12,page:1,taxonomy_name:"categories",term_id:28})
  console.log(blog.total)
  return {
    props:{blog},
    revalidate:1
  }
}
export default Index