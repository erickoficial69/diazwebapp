import {useContext, useEffect} from 'react'
import { get_all_posts } from '../context/posts/posts_api_controllers'
import { Post_Context } from '../context/posts/Post_Context'
import { Post } from '../interfaces/post_interface'
import Loader_app from './loader_app'
import dynamic from 'next/dynamic'

const Box_Post = dynamic(()=>import('./Box_Post'),{
    loading:()=><Loader_app />
})
const List_Posts = ()=>{
    const {dispatch,state} = useContext(Post_Context)

    const get_posts = async()=>{
        dispatch({type:'req'})
        const result = await get_all_posts()
        dispatch({
            type:'get_all_posts',
            payload:result
        })
    }

    useEffect(()=>{
        get_posts()
    },[])
    return <ul>
        {
            state.req ? <h4>Buscando noticias...</h4>:(
                state.allPosts.map((post:Post)=>(
                    <Box_Post key={post.id} post={post}/>
                ))
            )
        }
        <style jsx >
            {
                `
                ul{
                    display:grid;
                    grid-template-columns:1fr;
                    width:100%;
                    place-items:center;
                    place-content:center;
                }
                @media(min-width:512px){
                    ul{
                        grid-template-columns:repeat(2,1fr);
                    }
                }
                @media(min-width:720px){
                    ul{
                        grid-template-columns:repeat(3,1fr);
                    }
                }
                @media(min-width:1080px){
                    ul{
                        grid-template-columns:repeat(4,1fr);
                    }
                }
                `
            }
        </style>
    </ul>
}

export default List_Posts