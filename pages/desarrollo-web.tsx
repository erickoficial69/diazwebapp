import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const WebApps = ()=>{
  return <>
      <Head>
        <title>Desarrollo de Aplicaciones web - Diaz web app</title>
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online"/>
        <meta name="description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
      </Head>

      <section className="intro flex-wrap" itemScope itemType="http://schema.org/Service">
                
                <Image className="image_intro" width="auto" height="auto" loading="lazy" src="/img/web-design.webp" alt="monile dev" itemProp="image"/>

                <article itemProp="name" >
                    
                    <h1>Aplicaciones web que sí generan visitas</h1>
                    
                    <p itemProp="description">
                      Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing aplicando:
                      
                      <button className="help" ><b>Ténicas SEO</b> </button> <button className="help"><b>Server Side Rendering (SSR)</b></button>
                      
                      <br/>
                      y un entorno de desarrllo con tecnologia de vanguardia 
                    </p>
                      <span className="flex-wrap">
                        <button >
                          <p>Next js</p>
                          <Image width="70px" height="70px" loading="lazy" className="icons" src="/icons_svg/next.js.svg" alt="next js" />
                        </button>
                        <button >
                          <p >React js</p>
                          <Image width="70px" height="70px" loading="lazy" className="icons" src="/icons_svg/react.js.svg" alt="react js" />
                        </button>
                      </span>
                </article>
      </section>
   
      <section id='screen-two' className="container" itemScope itemType="http://schema.org/Service">
      <meta itemProp="serviceType" content="Home cleaning" />
          <div itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">

            <h2 style={{textAlign:'center'}} itemProp="name">
                SEO y Datos Estructurados
            </h2>

          </div> 
          
          <article className="flex-wrap web-optimisation" itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog" >

                  <div>
                    <Image width="200px" height="200px" loading="lazy" src="/img/seo-skills.webp" alt="seo" />
                  </div>

                  <div>
                    <h3 itemProp="name">
                      Datos Estructurados
                    </h3>

                    <p itemProp="description" >
                      Estructuramos el contenido de tu web con meta información, para que los motores de búsqueda lo interpreten mejor, logrando una mayor conversion de usuarios a potenciales clientes.
                    </p>
                  </div>

                  <div>
                    <h3 itemProp="name">
                      Estrategias SEO
                    </h3>

                    <p itemProp="description">
                      Elaboramos estrategias SEO para obtener mejores resultados, para aumentar la visibilidad y tráfico orgánico logrando mejor posicionamiento en los motores de búsquedas.
                    </p>
                  </div>
          </article>
    </section>
     
  </>
  
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  return {props:{},revalidate:1}
} 
export default WebApps
