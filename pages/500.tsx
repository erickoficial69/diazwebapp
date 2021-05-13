import { GetStaticProps, GetStaticPropsContext } from 'next'

const Err500 = ()=>{

  
  return <main>
    <section className="intro flex-wrap" >
        <article>
        <h1>Error 500 in server</h1>
          <p style={{maxWidth:'1024px',margin:'0 auto',textAlign:'center'}} itemProp="description">
                Error interno del servidor
          </p>
        </article>
    </section>
     
  </main>
  
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  return {props:{},revalidate:1}
} 
export default Err500
