import { Post } from '../interfaces/post_interface'
import Loader_app from './loader_app'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Post_Thumb = dynamic(()=>import('./thumb_post'),{
    loading:()=><Loader_app />
})
type Props ={
    post:Post
}
const Box_Post = ({post}:Props)=>{
    return <>
        <li>
            <Link href={`/post/${post.slug}`} >
                <a>
                    <Post_Thumb id={post.featured_media} alt={post.title.rendered} />
                    <h3>{post.slug}</h3>
                </a>
            </Link>
        </li>
        <style jsx >
            {
                `
                li{
                    width:95%;
                    height:95%;
                    overflow:hidden;
                    box-shadow:0px 0px 2px var(--secondary-color);
                    position:relative;
                    height:250px;
                    display:grid;
                    place-items:center;
                    place-content:center;
                }
                li div{
                    width:100%;
                    height:100%;
                    position:initial !important;
                }
                li .post_image{
                    width:100%;
                    height:100%;
                    object-fit:contain;
                }
                li > h3{
                    position:absolute;
                    bottom:10px;
                    width:100%;
                    left:0;
                    max-height:56px;
                    overflow:hidden;
                    padding: 0 10px;
                }
                `
            }
        </style>
    </>
}

export default Box_Post