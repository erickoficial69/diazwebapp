import Link from "next/link"
import { useContext } from "react"
import { App_context } from "../../context/wp_context/app_context"
import { Post } from "../../interfaces/app_interfaces"

type Props={
    post:Post,
}
const Card_1 = ({post}:Props)=>{
    const {app_dispatch} = useContext(App_context)
    return (
        <Link href={`/${post.slug}`} >
            <a onClick={()=>{document.location.pathname!=`/${post.slug}`?app_dispatch({type:'loader_app'}):null}} className="card_1" >
                {
                    post._embedded["wp:featuredmedia"]?(
                        <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="" loading="lazy" />
                        ):null
                }
                
                <b>{post.title.rendered}</b>

                <style jsx>
                    {
                        `
                        a{
                            width:100%;
                            height:100%;
                            background:lightgrey;
                            position:relative;
                            overflow:hidden;
                            border-radius:5px;
                        }
                        a > img{
                            width:100%;
                            height:100%;
                            object-fit:cover;
                        }
                        a:hover > img{
                            transform:scale(1.3,1.3);
                        }
                        a > b{
                            position:absolute;
                            bottom:0px;
                            left:0;
                            width:100%;
                            overflow:hidden;
                            max-height:72px;
                            padding: 2px 5px;
                            background:rgba(0,0,0, .7);
                            color:white;
                            word-break:break-all;
                        }
                        `
                    }
                </style>
            </a>
        </Link>
    )
}

export default Card_1