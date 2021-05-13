import { Arrow_circle, Cube, Mobile, Pwa } from '../components/icons'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Loader_app from '../components/loader_app'
//import { GetStaticProps, GetStaticPropsContext } from 'next'

const List_posts = dynamic(
    ()=>import('../components/List_Posts'),
    {
        loading:()=><Loader_app />
    }
)

const IndexPage = () => {
    return <main>
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
                <span className="flex-wrap" >
                    <Link href="/desarrollo-aplicaciones-moviles" >
                        <button>
                            <p>Mobile Apps</p>
                            <Mobile/>
                        </button>
                    </Link>
                    <Link href="/desarrollo-web" >
                        <button onClick={()=>("/desarrollo-web")}>
                            <p>Web Apps</p>
                            <Pwa/>
                        </button>
                    </Link>
                    <Link href="/desarrollo-api" >
                        <button onClick={()=>("/desarrollo-api")}>
                            <p>Api's</p>
                            <Cube/>
                        </button>
                    </Link>
                </span>
        </article>
    </section>

    <div style={{textAlign:'center',width:'100%'}} >
        <a style={{width:'70px',margin:'20px auto'}} className="icon-button" href='#news' >
            <Arrow_circle /> <b>Más</b>
        </a>
    </div>
    <section id="news" >            
        <List_posts/>
    </section>
  </main>
}

export default IndexPage
