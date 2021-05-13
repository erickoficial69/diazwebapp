import { GetStaticProps, GetStaticPropsContext } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
const Products_page = () => {
  useEffect(()=>{
    (async()=>{
      const rutes = await fetch(`${process.env.api}/categories`)
      const res = await rutes.json()
      console.log(res)
    })()
  },[])

    return <main>
        <section className="intro flex-wrap" itemScope itemType="http://schema.org/Service">
                
                <Image className="image_intro" width="200px" height="200px" loading="lazy" src="/img/web-design.webp" alt="monile dev" itemProp="image"/>

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
                          <Image width="200px" height="200px" loading="lazy" className="icons" src="/icons_svg/next.js.svg" alt="next js" />
                        </button>
                        <button >
                          <p >React js</p>
                          <Image width="200px" height="200px" loading="lazy" className="icons" src="/icons_svg/react.js.svg" alt="react js" />
                        </button>
                      </span>
                </article>
      </section>

      <section className="intro flex-wrap" itemScope itemType="http://schema.org/Service">

                <article >
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
                          <Image width="200px" height="200px" loading="lazy" className="icons" src="/icons_svg/ionic.svg" alt="ionic" />
                        </button>
                        <button >
                          <p >React Native</p>
                          <Image width="200px" height="200px" loading="lazy" className="icons" src="/icons_svg/react.js.svg" alt="react native" />
                        </button>
                    </span>
                </article>

                <Image width="200px" height="200px" loading="lazy" src="/img/laravel-2.webp" alt="monile dev" itemProp="image"/>
        </section>
      </main>
    }

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
    return {props:{},revalidate:1}
} 
export default Products_page
