import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { get_all_posts } from "../../context/posts/posts_api_controllers"
import { get_post_taxonomies } from "../../controlers/taxonomies.controles"
import { Post } from "../../interfaces/post_interface"

const Current_Post = ()=>{
    return <main></main>
}

export const getStaticPaths:GetStaticPaths = async ()=>{
    try{
        const paths = [
            {params:{
                type:"all"
            }}
        ]
        const posts = await get_all_posts()
        posts.map((post:Post)=>paths.push({params:{type:post.slug}}))
        return {paths,fallback:false}
    }catch(err){
        console.log(err)
        return {paths:[
            {
                params:{
                    type:'all'
                }
            }
    ],fallback:false}
    }
   
    
} 

export const getStaticProps:GetStaticProps = async({params}:GetStaticPropsContext)=>{
    try{
        const res = await get_post_taxonomies('post')
        console.log(params)
        return {props:{res},revalidate:1}
    }catch(err){
        console.log(err)
        return {props:{},revalidate:1}
    }
}
export default Current_Post  