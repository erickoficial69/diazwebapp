import Head from 'next/head'
import App from '../components/App'
import {ScreenTwo} from '../components/homepage/ScreenTwo'
import {Container, Typography} from '@material-ui/core'

const WebApps = ()=>{
  
  return <>
      <Head>
        <meta name="description" content="Desarrollo de aplicaciones web particulares, tiendas online y corporativas, optimizadas en seo y performance" />
      </Head>
      <Container className='webstyle' itemScope itemType="http://schema.org/Service">
        <Typography variant="h3" color="textPrimary" itemProp="name">Desarrollo de aplicaciones web</Typography>
        <Typography paragraph itemProp="description" color="textPrimary" >
          Diaz Web App desarrollo de aplicaciones web particulares, tiendas online y empresariales, optimizamos webs en HTML5 para adaptarlas al responsive design.
          <br/> La demanda de tráfico en Internet desde móviles que supera el 70% actualmente. Dominamos las tecnologías de programación web;
          <br/> progressive web apps (PWA), webassembly (wasm) y server side rendering para aspectos SEO y performance.
        </Typography>
      </Container> 

      <Container>
          <ScreenTwo/>
      </Container>
     
    <style>
        {
           ` 
              .webstyle{
                background-image:url(/img/pwa.jpg);
                background-size: cover;
                background-attachment:fixed;
                background-repeat:no-repeat;
                background-position: top center;
                display: flex;
                flex-flow:column;
                justify-content:center;
                align-items:center;
                min-height:95vh;
                max-height:800px;
              }
            `}
      </style>
  </>
  
}

export default App(WebApps)
