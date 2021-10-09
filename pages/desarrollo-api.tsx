
import Head from 'next/head'

const Apis = ()=>{
  
  return <>
      <Head>
        <meta name="description" content="Desarrollo de aplicaciones web particulares, tiendas online y corporativas, optimizadas en seo y performance" />
      </Head>

      <section className="intro flex-wrap" >
        <img loading="lazy" src="/img/api.webp" alt="apis development" />
        <article>
        <h1>Desarrollo Api's</h1>
          <p style={{maxWidth:'1024px',margin:'0 auto',textAlign:'center'}} itemProp="description">
                Proximamente Real time, Rest full api, graphql apis y más.
          </p>
        </article>
      </section>
  </>
  
}

export default Apis
