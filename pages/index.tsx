import { Arrow_circle, Cube, Mobile, Pwa } from '../components/icons'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { App_context } from '../context/wp_context/app_context'
import { Post } from '../interfaces/app_interfaces'
import Card_1 from '../components/post_cards/card_1'


const IndexPage = () => {
    const {app} = useContext(App_context)
    return <>
    <section style={{maxWidth:'unset'}} className="intro" itemScope itemType="http://schema.org/Service">
        <span></span>
        <div className="flex-wrap" >   
        <meta itemProp="serviceType" content="apps development" />
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
        </div> 
    </section>

    <div style={{textAlign:'center',width:'100%'}} >
        <a style={{width:'70px',margin:'20px auto'}} className="icon-button" href='#news' >
            <Arrow_circle /> <b>Más</b>
        </a>
    </div>
    
    {app.posts?
    <section id="news" >
        <h2>Últimas noticias</h2>          
       <div className="container_posts_1" >
            {app.posts.map((post:Post)=><Card_1 post={post} key={post.id} />)}
       </div>
    </section>
    :null}
  </>
}

export default IndexPage
