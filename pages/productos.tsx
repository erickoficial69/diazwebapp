import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'

const Products_page = ({setLoading}:any) => {
    
    useEffect(()=>{
        setLoading(false)
    },[])


    return <>
        <article className="intro flex-wrap" itemScope itemType="http://schema.org/Service">
                
                <img src="/img/web-design.webp" alt="monile dev" itemProp="image"/>

                <section itemProp="name" >
                    
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
                          <img className="icons" src="/icons_svg/next.js.svg" alt="next js" />
                        </button>
                        <button >
                          <p >React js</p>
                          <img className="icons" src="/icons_svg/react.js.svg" alt="react js" />
                        </button>
                      </span>
                </section>
      </article>

      <article className="intro flex-wrap" itemScope itemType="http://schema.org/Service">

                <section >
                    <h1 itemProp="name" >Desarrollo de aplicaciones móviles</h1>
                   
                    <p itemProp="description">
                        Desarrollamos aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado.
                        <br/>
                        Tenemos alto conocimiento en entornos de desarrollo <button className="help"><b>Multi Plataforma</b></button> enfocados en <b>Android {'&'} Ios</b>, Utilizamos:
                      <br/>
                    </p>
                    <span className="flex-wrap">
                    <button >
                          <p>Ionic</p>
                          <img className="icons" src="/icons_svg/ionic.svg" alt="ionic" />
                        </button>
                        <button >
                          <p >React Native</p>
                          <img className="icons" src="/icons_svg/react.js.svg" alt="react native" />
                        </button>
                    </span>
                </section>

                <img src="/img/laravel-2.webp" alt="monile dev" itemProp="image"/>
        </article>
      </>
    }

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
    return {props:{},revalidate:1}
} 
export default Products_page
