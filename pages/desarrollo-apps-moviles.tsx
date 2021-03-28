import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const MobileApps=({setLoading}:any)=>{

  useEffect(()=>{
    setLoading(false)
  },[])

  return <>
          <Head>
            <title >Desarrollo de aplicaciones móviles - Diaz web app</title>
            <meta name="keywords" content="diaz web app, desarrollo de aplicaciones moviles, applicaciones para e-commerce, applicaciones para tiendas online"/>
            <meta name="description" content="Desarrollo de aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado." />
          </Head>

          <article className="intro flex-wrap" itemScope itemType="http://schema.org/Service">

               <img src="/img/laravel-2.webp" alt="monile dev" itemProp="image"/>

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
        </article>
    </>
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  return {props:{},revalidate:1}
} 
export default MobileApps