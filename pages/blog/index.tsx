import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { get_post_taxonomies } from '../../controlers/taxonomies_controles'

type Props={
  taxonomies:[]
}
const Blog = ({taxonomies}:Props)=>{
  const [terms,setTerms] = useState<any>([])
  const query_terms = ()=>{
    taxonomies.map(async(tax:any)=>{
      const req = await fetch(`${process.env.API}/wp/v2/${tax.rest_base}`)
      const res = await req.json()
      
      setTerms(res)
    })
  }
  useEffect(()=>{
    query_terms()
  },[])

  return <>
      <Head>
        <title>Blog - Diaz web app</title>
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online"/>
        <meta name="description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
      </Head>
    <aside>
      <ul>
        {
          terms.map((term:any)=>{
            return (
              <li key={term.id} >{term.name}</li>
            )
          })
        }
      </ul>
    </aside>
    <section className="flex-wrap" itemScope itemType="http://schema.org/Service">
         <article>
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos.
           </p>
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos.
           </p>
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos.
           </p>
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos.
           </p>
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum a eveniet beatae laudantium, fuga, omnis veniam earum sequi corporis sint aperiam dolores unde? Minima, autem culpa quibusdam ad dolorum impedit earum, inventore soluta atque dignissimos saepe ipsum error iure ex iusto! Fugiat consequuntur laudantium similique et labore ea culpa, quasi provident impedit at blanditiis magnam odit eligendi, atque tempore! Nulla recusandae perferendis suscipit totam ad fugit explicabo dolore fuga ullam modi, facere, blanditiis, soluta ea odit. Laudantium sapiente dignissimos sint error, culpa mollitia commodi quia eaque. Perspiciatis officiis facilis hic molestiae, voluptate quam placeat incidunt harum doloribus iure tenetur voluptas expedita. Quisquam aliquid harum, consectetur illo nam repudiandae, ipsam fuga id veniam, totam qui maiores voluptates aut amet deleniti vitae sed! Minus incidunt veritatis quidem odio sequi commodi quam, eos dicta excepturi, in maxime! Sed, autem. At iusto, hic incidunt eius ipsum sapiente dolorum facilis in. Natus, voluptatum quos.
           </p>
         </article>
    </section>
     <style jsx global >
       {
         `
         main{
           position:relative;
           display:grid;
           grid-template-columns:1fr;
           gap:10px;
         }
         @media(min-width:760px){
           main{
             grid-template-columns:200px 1fr;
           }
           main > section{
             grid-column:2 / span 1;
             padding:0 5px;
           }
           main > footer{
             grid-column:1/ span 2;
           }
           aside{
             position:fixed;
           }
         }
         `
       } 
     </style>
  </>
  
}
export const getStaticProps:GetStaticProps=async(_:GetStaticPropsContext)=>{
  try{
    const taxonomies = await get_post_taxonomies('post')
    
    return {props:{taxonomies},revalidate:1}
  }catch(err){
    return {props:{},revalidate:1}
  }
}

export default Blog
