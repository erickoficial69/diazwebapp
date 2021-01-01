import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'

const Err500 = ({setLoading}:any)=>{
  
  useEffect(()=>{
    setLoading(false)
  },[])
  
  return <><article className="intro flex-wrap" >
        <section>
        <h1>Error 500 in server</h1>
          <p style={{maxWidth:'1024px',margin:'0 auto',textAlign:'center'}} itemProp="description">
                Error interno del servidor
          </p>
        </section>
      </article>
     
  </>
  
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  return {props:{},revalidate:1}
} 
export default Err500
