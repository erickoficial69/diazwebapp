import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { default_post } from '../../context/wp_context/app_context'
import { get_all_posts, get_post } from '../../controlers/app_controller'
import { Post } from '../../interfaces/app_interfaces'

type Props={
    post:Post
}
const DetailPost = ({post}:Props)=>{
  return <>
      <Head>
        <title>{post.slug} - Diaz web app</title>
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online"/>
        <meta name="description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
      </Head>

    <section itemScope itemType="http://schema.org/Service">
        <article>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
        </article>    
    </section>
    <style jsx global >
       {
         `
         main{
           position:relative;
           display:grid;
           grid-template-columns:1fr;
           gap:10px;
         }
         @media(min-width:760px){
           main{
             grid-template-columns:200px 1fr;
           }
           main > section{
             grid-column:2 / span 1;
             padding:0 5px;
           }
           main > footer{
             grid-column:1/ span 2;
           }
           aside{
             position:fixed;
           }
         }
         `
       } 
     </style>
  </>
  
}
export const getStaticPaths:GetStaticPaths = async(_:GetStaticPathsContext)=>{
    try{
        const slugs = await get_all_posts({})
        const paths = slugs.map((post:Post)=>(
            {params:{slug:post.slug}}
        ))
        return {paths,fallback:false}
    }catch(err){
        return {paths:[{params:{slug:''}}],fallback:false}
    }
}
export const getStaticProps:GetStaticProps = async({params}:GetStaticPropsContext)=>{
    try{
        const {slug}:any = params
        const post = await get_post({slug})
        return {
            props:{post},
            revalidate:1
        }
    }catch(err){
        return {
            props:{post:default_post},
            revalidate:1
        }
    }
}
export default DetailPost
