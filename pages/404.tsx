import { GetStaticProps, GetStaticPropsContext } from 'next'

const Err404 = ()=>{
  
  return <main><section className="intro flex-wrap" >
        <article>
        <h1>Error 404 not found</h1>
          <p style={{maxWidth:'1024px',margin:'0 auto',textAlign:'center'}} itemProp="description">
                Página o recurso no encontrado
          </p>
        </article>
      </section>
     
  </main>
  
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  return {props:{},revalidate:1}
} 
export default Err404
