import { Arrow_circle, Cube, Mobile, Pwa } from '../components/icons'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { App_context } from '../context/wp_context/app_context'
import { File, Post } from '../interfaces/app_interfaces'
import Card_1 from '../components/post_cards/card_1'


const IndexPage = () => {
    const {app} = useContext(App_context)
    return <>
    <section className="intro flex-wrap" itemScope itemType="http://schema.org/Service">
            
        <meta itemProp="serviceType" content="apps development" />

        <span></span>

        <Image className="image_intro" width="200px" height="200px" loading="lazy" src="/img/developer3.webp" alt="Desarrollo de de aplicaciones y paginas web" itemProp="image"/>

        <article itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">

                <h1 itemProp="name" >Aplicaciones que responden a tus clientes</h1>

                <p itemProp="description">
                    Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente.
                    <br/>
                    Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión.
                    
                </p>
                <span className="flex-wrap box_products " >
                    <Link href="/desarrollo-aplicaciones-moviles" >
                        <a>
                            <Mobile/>
                            <p>Mobile Apps</p>
                        </a>
                    </Link>
                    <Link href="/desarrollo-web" >
                        <a onClick={()=>("/desarrollo-web")}>
                            <Pwa/>
                            <p>Web Apps</p>
                        </a>
                    </Link>
                    <Link href="/desarrollo-api" >
                        <a onClick={()=>("/desarrollo-api")}>
                            <Cube/>
                            <p>Api's</p>
                        </a>
                    </Link>
                </span>
        </article>
    </section>

    <div style={{textAlign:'center',width:'100%'}} >
        <a style={{width:'70px',margin:'20px auto'}} className="icon-button" href='#news' >
            <Arrow_circle /> <b>Más</b>
        </a>
    </div>
    <section id="news" className="container_news_home" >            
       {app.posts?app.posts.map((post:Post)=>{
            const image = app.files.find((file:File)=>post.featured_media==file.id)
           
            return <Card_1 post={post} key={post.id} image={image} />}):null}
    </section>
    <style jsx >
        {
            `
            .container_news_home{
                display:grid;
                grid-template-columns:95vw;
                grid-auto-rows:95vw;
                place-content:center;
                place-items:center;
                gap:10px;
                padding:10px;
                background:var(--shadow-color);
                width:99%;
                margin:0 auto;
                border-radius:10px;
            }
            @media(min-width:480px){
                .container_news_home{
                    grid-template-columns:repeat(2,45vw);
                    grid-auto-rows:45vw;
                }
            }
            @media(min-width:640px){
                .container_news_home{
                    grid-template-columns:repeat(3,32vw);
                    grid-auto-rows:32vw;
                }
            }
            @media(min-width:812px){
                .container_news_home{
                    grid-template-columns:repeat(4,22vw);
                    grid-auto-rows:22vw;
                }
            }
            @media(min-width:960px){
                .container_news_home{
                    grid-template-columns:repeat(3,300px);
                    grid-auto-rows:300px;
                }
            }
            @media(min-width:1280px){
                .container_news_home{
                    grid-template-columns:repeat(4,225px);
                    grid-auto-rows:225px;
                    padding: 10px 0;
                    border-radius:10px;
                }
            }
            @media(min-width:1360px){
                .container_news_home{
                    grid-template-columns:repeat(4,295px);
                    grid-auto-rows:295px;
                    padding: 10px 0;
                    border-radius:10px;
                }
            }
            `
        }
    </style>
  </>
}

export default IndexPage
