import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { useRouter } from "next/dist/client/router"
import Head from 'next/head'
import { get_post } from "../../controllers/post.controller"
import { WP_POST } from "../../interfaces/wp_posts"

type Props={
    post:WP_POST
}

const Custom_post = ({post}:Props)=>{
    const {asPath} = useRouter()
    return <main>
            <Head>
            <title>{post.title.rendered} - Diaz web app</title>
                <meta name="author" content="diaz web app" />
                <meta name="description" content={post.excerpt.rendered.replace("<p>","").replace("</p>","")} />

                {/** OG META */}
                <meta property="og:title" content={post.title.rendered+" - diaz web app"} />
                <meta property="og:site_name" content={'diaz web app'} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={post.excerpt.rendered.replace("<p>","").replace("</p>","")} />
                <meta property="og:locale" content="es_SP" />
                <meta property="og:url" content={process.env.DOMAIN+asPath} />
                <meta property="og:image" content={process.env.DOMAIN + "/logo512.png"} />
                <meta property="og:image:secure_url" content={process.env.DOMAIN + "/logo512.png"} />
                {/**TWITTER META */}
                <meta name="twitter:title" content={post.title.rendered+" - diaz web app"} />
                <meta name="twitter:site" content="@diazwebapp" />
                <meta name="twitter:description" content={post.excerpt.rendered.replace("<p>","").replace("</p>","")} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={process.env.DOMAIN + "/logo512.png"} />
                <meta name="twitter:label1" content="Escrito por" />
                <meta name="twitter:data1" content="diaz web app" />
                {/**LINK META INDEX*/}
                <link rel="shortlink" href={process.env.DOMAIN+asPath} />
                <link rel="canonical" href={process.env.DOMAIN+asPath} />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                <meta property="ia:markup_url" content={process.env.DOMAIN+asPath} />
                {/*Wordpress style*/}
                <link rel="stylesheet" href="http://localhost:8080/wp-includes/css/dist/block-library/style.min.css" />
            </Head>
            <section >
                <h1>{post.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html:post.content.rendered}} >
                </div>
            </section>
        </main>
}

export const getServerSideProps:GetServerSideProps = async ({query}:GetServerSidePropsContext)=>{
    const slug = query["wp-post"]
    if(slug.length==1){

        const post = await get_post({slug:slug[0]})
        if(post.req_status_number == 200 && post.posts.length > 0){
            return {
                props:{
                    post:post.posts[0]
                }
            }
        }
    }
    if(slug.length==2){

        const post = await get_post({slug:slug[1]})
        if(post.req_status_number == 200 && post.posts.length > 0){
            return {
                props:{
                    post:post.posts[0]
                }
            }
        }
    }
    
    return {
        redirect:{
            destination:"/404",
            permanent:false
        }
    }
}
export default Custom_post