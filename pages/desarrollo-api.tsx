import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
type Props ={
  setLoading:any
}
const Apis = ({setLoading}:Props)=>{

  useEffect(()=>{
    setLoading(false)
  },[])
  
  return <>
      <Head>
        <meta name="description" content="Desarrollo de aplicaciones web particulares, tiendas online y corporativas, optimizadas en seo y performance" />
      </Head>

      <article className="intro flex-wrap" >
        <img src="/img/api.webp" alt="apis development" />
        <section>
        <h1>Desarrollo Api's</h1>
          <p style={{maxWidth:'1024px',margin:'0 auto',textAlign:'center'}} itemProp="description">
                Proximamente Real time, Rest full api, graphql apis y más.
          </p>
        </section>
      </article>
  </>
  
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  return {props:{},revalidate:1}
} 
export default Apis
