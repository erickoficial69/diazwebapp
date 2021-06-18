import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Card_1 from '../../components/post_cards/card_1'
import { get_all_posts, get_post_type } from '../../controlers/app_controller'
import { get_terms } from '../../controlers/taxonomies_controles'
import { Post } from '../../interfaces/app_interfaces'

type Props={
  posts:Post[]
  page_info:any
}
const Blog = ({posts,page_info}:Props)=>{
  const [show_cats,setShow_Cats] = useState<boolean>(false)
  const router = useRouter()
  if(router.isFallback) return <section><b>Loading...</b></section>
  

  const toggle_element = (e:any)=>{
    const li:HTMLElement = e.target
    const ul_items = li.parentElement?.children[1]
    ul_items?.classList.toggle('view_items')
   
  }
  
  return <>
      <Head>
        <title>Blog - Diaz web app</title>
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de e-commerce, desarrollo de tiendas online"/>
        <meta name="description" content="Desarrollamos aplicaciones web para particulares y comercios. Optimizadas en rendimiento listas para aplicar estrategias de marketing." />
      </Head>
    <aside>
      <nav className="aside_mobile_toolbar" >
        <li><button>Filtrar por categorias</button></li>
        <li onClick={()=>setShow_Cats(!show_cats)} ><b>{show_cats?'Close':'Categorias'}</b></li>
      </nav>
      <ul onFocus={()=>setShow_Cats(false)} className="aside_cats hidde_cats" >
        {
          page_info.taxonomies.map((taxonomy:any,i:number)=>{
            return <li key={i} >
              <b onClick={toggle_element} >{taxonomy.name}</b>
              <ul className="view_items" >
                {
                  taxonomy.terms.map((ter:any,ti:number)=>{
                    return <li key={ti}><Link href={`/blog/${taxonomy.rest_base}/${ter.slug}`} ><a>{ter.name}</a></Link></li>
                  })
                }
              </ul>
            </li>
          })
        }
      </ul>
    </aside>
    <section>
         <article>
           <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quia corporis consectetur dicta doloremque libero voluptatum sit debitis ad suscipit?
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ex sit numquam laboriosam sed reiciendis dicta, dolores, molestias, atque nisi sequi eos maiores fuga. Quasi ullam praesentium nesciunt asperiores sapiente ut. Quibusdam, exercitationem ratione hic voluptatem eius sequi iusto repudiandae possimus tempore! Odio aliquam adipisci et facere nobis tenetur unde officia voluptatem, soluta, quasi in sequi eveniet sit officiis! Ratione dolores unde perspiciatis quaerat sequi eaque, voluptatem animi accusantium ullam quo illum eos nemo facilis architecto? Dolore tempore eius cupiditate quas fuga, quae modi velit, culpa perferendis officia soluta non error voluptatem corrupti neque a ipsam voluptas aliquid nam. Vel alias quam eum dolor perspiciatis aperiam corporis corrupti, id harum voluptates dolore. Ipsum, ipsam quae. Eveniet delectus laudantium odio aperiam hic soluta suscipit fuga nobis debitis. Quas earum vitae eos facilis. Esse laudantium voluptatem cumque, mollitia accusamus quibusdam nihil soluta, officiis enim nesciunt tempore sequi ad sed animi. Maiores, laborum?
           </p>
         </article>
    </section>
    <section>
    {posts?
    <section id="news" >
        <h2>Últimas noticias</h2>          
       <div className="container_posts_1" >
            {posts.map((post:Post)=><Card_1 post={post} key={post.id} />)}
       </div>
    </section>
    :null}
    </section>
    <style jsx global>
      {
         `
          main > aside{
            background:var(--primary-color);
          }
          main > aside > .aside_cats{
            background:var(--background-color);
            position:fixed;
            width:250px;
            height:100%;
            overflow:auto;
            top:0;
            left:${show_cats?'0':'-100%'};
            transition:all .3s ease;
          }
          @media(min-width:960px){
            main > aside{
              background: var(--background-color);
              overflow:auto;
            }

            main > aside .aside_cats{
              flex-flow:column;
              width:200px;
              left:unset;
              position:relative;
            }
            main > section,main > footer{
              margin-left:200px;
              width:calc(100% - 200px);
            }
            .container_posts_1{
              grid-template-columns:repeat(4,18vw);
              grid-auto-rows:18vw;
            }
          }
          @media(min-width:1180px){
            .container_posts_1{
              grid-template-columns:repeat(4,19vw);
              grid-auto-rows:19vw;
            }
            main > section,main > footer{
              max-width:1200px;
            }
          }
          @media(min-width:1280px){
            main{
              max-width:1200px;
            }
            .container_posts_1{
              grid-template-columns:repeat(6,160px);
              grid-auto-rows:160px;
            }
          }
          @media(min-width:1366px){
            main{
              max-width:1280px;
            }
            .container_posts_1{
              grid-template-columns:repeat(6,170px);
              grid-auto-rows:170px;
            }
          }
         `
       } 
     </style>
  </>
  
}

export const getStaticProps:GetStaticProps = async(_:GetStaticPropsContext)=>{
  try{
      
      const posts = await get_all_posts({rest_base:'posts'})
      let page_info = await get_post_type({type:'post'}) 
      page_info = {...page_info,taxonomies:await get_terms(page_info.taxonomies)}
      
      return {props:{posts,page_info},revalidate:1}
  }catch(err){
      return {props:{},revalidate:1}
  }
}

export default Blog
