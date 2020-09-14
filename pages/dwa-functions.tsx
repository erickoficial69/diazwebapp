import Head from 'next/head'
import App from '../components/App'
import {WebOptimisation} from '../components/webApps/WebOptimisation'
import {Typography,Grid,Toolbar} from '@material-ui/core'

const WebApps = ()=>{
  
  return <>
      <Head>
        <meta name="description" content="Desarrollo de aplicaciones web particulares, tiendas online y corporativas, optimizadas en seo y performance" />
      </Head>

      <Grid container 
      style={
        {
            background:'url("/img/code")',
            backgroundSize:'cover',
            backgroundColor:'rgba(0,0,0, .9)',
            backgroundBlendMode:'multiply',
            color:'white',
            alignItems:'center',
            alignContent:'center',
            padding:'0px 4vmin',
            height:'100vh'
        }
      } itemScope itemType="http://schema.org/Service">

                <Grid item xs={12} itemProp="name" >
                    <Toolbar >
                        <Typography style={{width:'100%',textAlign:'center'}} variant="h4">DWA Functions</Typography>
                    </Toolbar>
                    <Typography style={{maxWidth:'1024px',margin:'0 auto',textAlign:'center'}} paragraph itemProp="description">
                      Proximamente cloud storage, cloud messages, graphql apis y más.
                    </Typography>
                </Grid>
      </Grid>
     
  </>
  
}

export default App(WebApps)
