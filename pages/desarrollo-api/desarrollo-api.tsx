import Image from 'next/image'
import Head from 'next/head'

const Apis = ()=>{
  
  return <>
      <Head>
        <meta name="description" content="Desarrollo de aplicaciones web particulares, tiendas online y corporativas, optimizadas en seo y performance" />
      </Head>

      <section className="intro flex-wrap" >
        <Image width="200" height="200" placeholder="blur" layout="fixed" blurDataURL="/img/loading.svg" src="/img/api.webp" alt="apis development" />
        <article>
        <h1>Desarrollo Api's</h1>
          <p style={{margin:'0 auto',textAlign:'center'}} itemProp="description">
                Proximamente Real time, Rest full api, graphql apis y más.
          </p>
        </article>
      </section>
  </>
  
}

export default Apis
