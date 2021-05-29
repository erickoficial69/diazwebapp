import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { useEffect } from "react"
import { get_all_posts, get_post } from "../../context/posts/posts_api_controllers"
import { Post } from "../../interfaces/post_interface"

type Props={
    post:Post
}
const Current_Post = ({post}:Props)=>{
    useEffect(()=>{
        console.log(post)
    },[])
    return <main>
        <section>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}} >
            </div>
            
        </section>
    </main>
}

export const getStaticPaths:GetStaticPaths = async ()=>{
    try{
        const posts:Post[] = await get_all_posts('pronostico')
        const paths = posts.map((post:Post)=>({params:{slug:post.slug}}))
        return {paths,fallback:false}
    }catch(err){
        console.log(err)
        return {paths:[
            {
                params:{
                    slug:'/err'
                }
            }
        ],fallback:false}
    }
   
} 

export const getStaticProps:GetStaticProps = async({params}:GetStaticPropsContext)=>{
    const {slug}:any = params
    try{
        
        const post:Post[] = await get_post(slug,'pronostico')
        return {props:{post:post[0]},revalidate:1}
    }catch(err){
        console.log(err)
        return {props:{},revalidate:1}
    }
}
export default Current_Post  