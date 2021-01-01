import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'
import { Arrow_circle, Cube, Mobile, Pwa } from '../components/icons'

const IndexPage = ({setLoading,navigation_controller}:any) => {
    
    useEffect(()=>{
        setLoading(false)
    },[])


    return <>
        <article className="intro flex-wrap" itemScope itemType="http://schema.org/Service">
                
            <meta itemProp="serviceType" content="apps development" />

            <span></span>

            <img src="/img/developer3.webp" alt="Desarrollo de de aplicaciones y paginas web" itemProp="image"/>

            <section itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">

                    <h1 itemProp="name" >Aplicaciones responden a tus clientes</h1>

                    <p itemProp="description">
                        Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente.
                        <br/>
                        Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión.
                        
                    </p>
                    <span className="flex-wrap" >
                        <button onClick={()=>navigation_controller("/mobile-apps-development")}>
                            <p>Mobile Apps</p>
                            <Mobile/>
                        </button>
                        <button onClick={()=>navigation_controller("/web-apps-development")}>
                            <p>Web Apps</p>
                            <Pwa/>
                        </button>
                        <button onClick={()=>navigation_controller("/api-development")}>
                            <p>Apis</p>
                            <Cube/>
                        </button>
                    </span>
            </section>

            <div>
                <a className="icon-button" href='#news' >
                    <Arrow_circle /> <b>Más</b>
                </a>
            </div>
        </article>
      </>
    }

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
    return {props:{},revalidate:1}
} 
export default IndexPage
