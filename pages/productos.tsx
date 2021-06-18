import { GetStaticProps, GetStaticPropsContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
const Products_page = () => {
  useEffect(()=>{
    (async()=>{
      const rutes = await fetch(`${process.env.api}/categories`)
      const res = await rutes.json()
      console.log(res)
    })()
  },[])

    return <>
        <section className="intro flex-wrap" itemScope itemType="http://schema.org/Service">
            <div className="flex-wrap">  
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
                        <Link href="/">
                          <a>
                            <Image layout="responsive" width="32px" height="32px" loading="lazy" className="icons" src="/icons_svg/next.js.svg" alt="next js" />
                            <p>Next js</p>
                          </a>
                        </Link>
                        <Link href="/" >
                          <a>
                            <Image layout="responsive" width="32px" height="32px" loading="lazy" className="icons" src="/icons_svg/react.js.svg" alt="react js" />
                            <p >React js</p>
                          </a>
                        </Link>
                      </span>
                </article>
            </div>
      </section>

      <section className="intro" itemScope itemType="http://schema.org/Service">
          <div className="flex-wrap">
                <article>
                    <h1 itemProp="name" >Desarrollo de aplicaciones móviles</h1>
                   
                    <p itemProp="description">
                        Desarrollamos aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado.
                        <br/>
                        Tenemos alto conocimiento en entornos de desarrollo <button className="help"><b>Multi Plataforma</b></button> enfocados en <b>Android {'&'} Ios</b>, Utilizamos:
                      <br/>
                    </p>
                    <span className="flex-wrap">
                        <Link href="/" >
                          <a>
                            <Image layout="responsive" width="32px" height="32px" loading="lazy" className="icons" src="/icons_svg/ionic.svg" alt="ionic" />
                            <p>Ionic</p>
                          </a>
                        </Link>
                        <Link href="/" >
                          <a>
                            <Image layout="responsive" width="50px" height="50px" loading="lazy" className="icons" src="/icons_svg/react.js.svg" alt="react native" />
                            <p >React Native</p>
                          </a>
                        </Link>
                    </span>
                </article>

                <Image width="50px" height="250px" src="/img/laravel-2.webp" alt="monile dev" itemProp="image"/>
            </div>
        </section>
      </>
    }

export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
    return {props:{},revalidate:1}
} 
export default Products_page
