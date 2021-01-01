import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'

const Err404 = ({setLoading}:any)=>{
  
  useEffect(()=>{
    setLoading(false)
  },[])
  
  return <><article className="intro flex-wrap" >
        <section>
        <h1>Error 404 not found</h1>
          <p style={{maxWidth:'1024px',margin:'0 auto',textAlign:'center'}} itemProp="description">
                Página o recurso no encontrado
          </p>
        </section>
      </article>
     
  </>
  
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  return {props:{},revalidate:1}
} 
export default Err404
