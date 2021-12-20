import { WP_POST } from '../interfaces/wp_posts'
import Link from 'next/link'
import Image from 'next/image'

type Props={
    posts:WP_POST[]
}
export const Blog_grid = ({posts}:Props)=>{
    
    return (
        <div className="blog_grid">
            {/**<Image layout='responsive' 
                                        width={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia'][0].media_details.width:300} height={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia'][0].media_details.height:300} 
                                        src={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia'][0].source_url:'/logo512.png'}
                                    /> */}
            {
                posts.map((post,i:number)=>{
                    return(
                        <Link key={i} href={post.link.replace(`${process.env.API}`,`${process.env.DOMAIN}`)}>
                            <a href={post.link.replace(`${process.env.API}`,`${process.env.DOMAIN}`)} title={post.title.rendered}>
                                <span>
                                    <Image layout='fixed' 
                                        width={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia'][0].media_details.width:300} height={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia'][0].media_details.height:300} 
                                        src={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia'][0].source_url:'/logo512.png'}
                                    />
                                </span>
                                <p>{post.link}</p>
                            </a>
                        </Link>
                    )
                })
            }
            <style jsx  >
                {
                    `div{
                        display:grid;
                        grid-template-columns:1fr 1fr;
                        background:rgba(0,0,0, .4)
                    }
                    div a{
                        width:100%;
                        height:150px;
                        position:relative;
                        background:var(--secondary-color);
                    }
                    div p{
                        word-break: break-all;
                        padding:10px;
                    }
                    div a span{
                        position:absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        overflow:hidden;
                    }
                    @media(min-width:560px){
                        div a{
                            height:200px;
                        }
                    }
                    @media(min-width:640px){
                        div{
                            grid-template-columns:repeat(4,1fr);
                        }
                    }
                    @media(min-width:960px){
                        div{
                            grid-template-columns:repeat(6,1fr);
                        }
                    }
                    `
                }
            </style>
        </div>
    )
}