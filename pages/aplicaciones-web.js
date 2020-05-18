
import { useEffect, useState } from 'react'
import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'
import Head from 'next/head'
import {devTools} from '../components/graphql-querys/index'
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;
/** api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

 d64267005e28744785d5111a417b7f4f */

function WebApps() {
  const title = 'aplicaciones web'
  const [tools, setTools] = useState([])
  const [tools2, setTools2] = useState([])
  const [tools3, setTools3] = useState([]) 

  const query = `{tools(nombre:"web apps"){
    nombre
  }}
`
  useEffect(() => {
    devTools(query,setTools,setTools2,setTools3)

  },[])
  
  return <>
      <Head>
        <title>{title} - Diaz web App</title>
        <link rel='stylesheet' href='css/effectos.css' />
        <meta name="description" content="Desarrollo web particulares, tiendas online y empresas, optimizadas en seo y performance" />
      </Head>
      <Navbar navStatus={title} />
  <main >
      <div className='webstyle intro1' itemScope itemType="http://schema.org/Service">
        <h1 itemProp="name">Desarrollo de aplicaciones web</h1>
        <p itemProp="description">
          Diaz Web App desarrollo de aplicaciones web particulares, tiendas online y empresariales, optimizamos webs en HTML5 para adaptarlas al responsive design. La demanda de tráfico en Internet desde móviles que supera el 70% actualmente. Dominamos las tecnologías de programación web; progressive web apps (PWA), webassembly (wasm) y server side rendering para aspectos SEO y performance.
        </p>
      </div> 
      <section>
        <article>
        <h2 itemProp="name">SEO y Datos Estructurados</h2>
        <p itemProp="description">
          Integramos técnicas <b>SEO y Datos Estructurados</b> en todos nuestros proyectos para obtener los mejores resultados, para aumentar la visibilidad y tráfico orgánico para aparecer en las mejores posiciones en los motores de búsqueda.
          <br/><br/>
          De esta manera podrás agregar un plan o estrategias de marketing sin necesidad de configurar o editar el código fuente.
        </p>
        </article>
      </section>
      <section>
          
        {
          tools.length > 0?
            <h2>Tecnologías De desarrollo</h2>:
            null
        }
      </section>

      <section>
        <ul className='tecnologies'>
               {
                 tools.map((t,i)=><li key={i}>
                   <p>
                    <img src={"/svg/"+t.nombre+".svg"} />
                    {t.nombre}
                   </p>
                 </li>)
               }
               {
                 tools2.map((t,i)=><li key={i}>
                   <p>
                    <img src={"/svg/"+t.nombre+".svg"} />
                    {t.nombre}
                   </p>
                 </li>)
               }
               {
                 tools3.map((t,i)=><li key={i}>
                   <p>
                    <img src={"/svg/"+t.nombre+".svg"} />
                    {t.nombre}
                   </p>
                 </li>)
               } 
        </ul>
      </section>
      <Footer/>
     
    </main> 
    <style>
        {
           `  
            section{
                grid-column: 2 / span 14;
                margin: 2vmin auto;
              }
            section article{
                margin:2vmin auto;
              }
            section article h2{
                text-align:center;
              }
              .webstyle{
                grid-column: 1 / span 16 ;
                background-image:url(/img/pwa.jpg);
                background-size: cover;
                background-attachment:fixed;
                background-repeat:no-repeat;
                background-position: top center;
                padding:2vmin 8vmin;
                display: flex;
                flex-flow:column;
                justify-content:center;
                align-items:center;
                height:72vh;
              }
              .webstyle h1{
                text-align:center;
                color:white;
              }
              .webstyle p{
                font-size:3vmax;
                color:white;
              }
              @media (min-width:719px){
                .webstyle p{
                  width:75%;
                  font-size:4vh;
                }
              }
            `}
      </style>
  </>
  
}

export default WebApps
