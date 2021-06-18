import Link from "next/link"
import { Post } from "../../interfaces/app_interfaces"

type Props={
    post:Post,
}
const Card_1 = ({post}:Props)=>{
    return (
        <Link href={`/blog/${post.slug}`} >
            <a className="card_1" >
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
                            overflow:hiddend;
                            max-height:90px;
                            line-height:1.3;
                            padding: 10px;
                            background:rgba(0,0,0, .7);
                            color:white;
                        }
                        `
                    }
                </style>
            </a>
        </Link>
    )
}

export default Card_1