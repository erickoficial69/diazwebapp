import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { get_all_posts, get_post } from "../../controlers/app_controller"
import { Post } from "../../interfaces/app_interfaces"

type Props={
    post:Post
}
const Current_Post = ({post}:Props)=>{
    return <>
        <section>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}} >
            </div>
            
        </section>
    </>
}

export const getStaticPaths:GetStaticPaths = async ()=>{
    try{
        const posts:Post[] = await get_all_posts({})
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
        
        const post:Post = await get_post({post_type:'pronostico',slug})
        return {props:{post},revalidate:1}
    }catch(err){
        console.log(err)
        return {props:{},revalidate:1}
    }
}
export default Current_Post  