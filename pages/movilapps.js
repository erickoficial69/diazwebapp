import { useEffect, useState } from 'react'
import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'
import Head from 'next/head'
import {
  AndroidTwoTone,
  Apple
} from '@material-ui/icons'

import {devTools} from '../components/graphql-querys/index'

const query = `{tools(nombre:"movil"){
  nombre
}} 
`

function MovilApp() {
  const title = 'movil apps'
  const [tools, setTools] = useState([])
  const [tools2, setTools2] = useState([])
  const [tools3, setTools3] = useState([])

  useEffect(() => {
    devTools(query,setTools,setTools2,setTools3)
  },[])

 
  return <>
          <Head>
            <title>{title}</title>

          </Head>
          <Navbar navStatus={title} />
  <main >
          

      <div className='movilstyle intro1'>
        <h1>Desarrollo de aplicaciones moviles</h1>
        <article>
            <div style={{textAlign:"center"}}><AndroidTwoTone style={{color:"green", width:"100px"}} className='androidIcon' /></div>
            
            <h2>Android</h2>
            <p>
                Desarrollamos aplicaciones nativas para Android, plataforma líder a nivel mundial con ma mejor cuota de mercado absoluta. Tenemos basta experiencia en el desarrollo de Android. Descubre todas las funcionalidades que Android ofrece programando en lenguaje nativo.
            </p>
        </article> 
        <article>
            <div style={{textAlign:"center"}} ><Apple className='appelIcon' /></div>
            
            <h2>IOS</h2>
            <p>
                Desarrollo de aplicaciones nativas para iPhone, uno de los dispositivos móviles más utilizados siendo de los smartphones más potentes del mercado hemos desarrollado aplicaciones desde la primera versión iOS hasta la actual y tenemos un experto conocimiento de App Store.
            </p>
        </article>
      </div>
      <section>
          <h2>Tecnologías De desarrollo</h2>
      </section>
      <section>
          <ul className='tecnologies'>
              {
                 tools.map((t,i)=><li key={i}>{t.nombre}</li>)
               }
               {
                 tools2.map((t,i)=><li key={i}>{t.nombre}</li>)
               }
               {
                 tools3.map((t,i)=><li key={i}>{t.nombre}</li>)
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
            .movilstyle{
              display:grid;
              grid-column: 1 / span 16 !important;
              background-color:#222;
              background-image:url(/img/codes.gif);
              background-size: cover;
              background-repeat:no-repeat;
              background-position: center center;
              background-blend-mode:multiply;
              padding:5vmin 8vmin;
              grid-template-columns:repeat(2,1fr);
              grid-gap:5vmin;
            }
            .movilstyle h1{
              grid-column:1 / span 2;
              text-align:center;
              color:white;
            }
            .movilstyle article{
              grid-column: 1 / span 2;
            }
            .movilstyle p{
              color:white;
            }
            .movilstyle article svg{
              font-size:111px;
            }
            .movilstyle article svg path{
              color:lightgreen;
            }
            .movilstyle article:last-child svg path{
              color:grey !important;
            }
            .movilstyle h2{
              color:white;
              text-align:center;
            }
            @media (min-width:512px){
              .movilstyle article{
                grid-column: auto / span 1;
              }
            }
            `}
      </style>
  </>
}

export default MovilApp
