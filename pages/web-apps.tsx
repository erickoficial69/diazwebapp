import Head from 'next/head'
import App from '../components/App'
import {WebOptimisation} from '../components/webApps/WebOptimisation'
import {Typography,Grid,Toolbar} from '@material-ui/core'

const WebApps = ()=>{
  
  return <>
      <Head>
        <meta name="description" content="Desarrollo de aplicaciones web particulares, tiendas online y corporativas, optimizadas en seo y performance" />
      </Head>

      <Grid container style={{
            background:'url("/img/code")',
            backgroundSize:'cover',
            backgroundColor:'rgba(0,0,0, .9)',
            backgroundBlendMode:'multiply',
            color:'white',
            textAlign:'center',
            alignItems:'center',
            alignContent:'center',
            padding:'55px 4vmin'
            }} itemScope itemType="http://schema.org/Service">
                <Grid item xs={12} sm={7} md={6} lg={4} >
                    <img width="80%" src="/img/web-design.svg" alt="monile dev" itemProp="image"/>
                </Grid>

                <Grid item xs={12} sm={5} md={6} lg={8} itemProp="name" >
                    <Toolbar >
                        <Typography style={{width:'100%',textAlign:'center'}} variant="h5">Desarrollo de aplicaciones web</Typography>
                    </Toolbar>
                    <Typography style={{maxWidth:'1024px',margin:'0 auto'}} paragraph itemProp="description">
                      Desarrollamos plataformas web para particulares y comercios.
                      <br/>
                      Optimizamos webs en HTML5 para adaptarlas al responsive design.
                      <br/>
                        Dominamos las tecnologías de programación web:
                      <br/>
                      progressive web apps (PWA), webassembly (wasm) y server side rendering para aspectos SEO y performance.
                    </Typography>
                </Grid>
      </Grid>

      <WebOptimisation/>
     
  </>
  
}

export default App(WebApps)
