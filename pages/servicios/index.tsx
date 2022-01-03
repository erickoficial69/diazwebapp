import Head from 'next/head'
import { Intro } from '../../components/intro'
import { useRouter } from 'next/dist/client/router'
import {GetStaticProps,GetStaticPropsContext} from 'next'
import { get_posts } from '../../controllers/post.controller'
import { WP_RESP_POSTS } from '../../interfaces/wp_rest'
import { Blog_grid } from '../../components/Blog_grid'

type Props={
  blog:WP_RESP_POSTS
}

const Servicios = ({blog}:Props) => {
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
      <meta property="og:locale" content="es_ES" />
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
        title="Servicios de Desarrollo de Software"
        text1="Servicios de Desarrollo de Software, aplicaciones web, aplicaciones moviles, wordpress y asesoria tecnica gratuita."
        text2="Desarrollo de software personalizados para empresas emergentes, pequeñas, medianas y empresas de tamaño empresarial."
        url_logo="/img/developer3.webp"
      />

        {
          blog.total>0?(
            <Blog_grid posts={blog.posts} />
          ):(<h4>No hay datos</h4>)
        }
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
      `
    }
  </style>
  </main>
}

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  const blog = await get_posts({per_page:24,page:1,taxonomy_name:'categories',term_id:1})
  
  return {
    props:{blog},
    revalidate:1
  }
}

export default Servicios