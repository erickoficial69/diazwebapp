import Head from 'next/head'
import App from '../components/App'
import {WebOptimisation} from '../components/webApps/WebOptimisation'
import {Typography,Grid,Toolbar,Button} from '@material-ui/core'
import { ButtonStartNow } from '../components/StartNow.Component'

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
                        <Typography style={{width:'100%',textAlign:'center'}} variant="h5">Web App Development</Typography>
                    </Toolbar>
                    <Typography style={{maxWidth:'1024px',margin:'0 auto'}} paragraph itemProp="description">
                      Desarrollamos plataformas web para particulares y comercios.
                      <br/>
                      Desarrollamos u optimizamos webs aplicando:
                      <br />
                       <b>progressive web apps (PWA), webassembly (wasm), server side rendering (SSR)</b>
                      
                      <br/><br/>

                      <ButtonStartNow />
                    </Typography>
                </Grid>
      </Grid>

      <WebOptimisation/>
     
  </>
  
}

export default App(WebApps)
