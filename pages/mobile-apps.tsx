import App from '../components/App'
import Head from 'next/head'
import { ScreenTwo } from '../components/mobileApps/ScreenTwo'
import { Grid, Typography, Toolbar } from '@material-ui/core'
import { ButtonStartNow } from '../components/StartNow.Component'

const MobileApps=()=>{

  return <>
          <Head>
            <meta name="description" content="Desarrollo de aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado." />
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
                <Grid item xs={12} sm={5} md={4} >
                    <img width="80%" src="/img/laravel-2.svg" alt="monile dev" itemProp="image"/>
                </Grid>

                <Grid item xs={12} sm={7} md={8} itemProp="name" >
                    <Toolbar >
                        <Typography style={{width:'100%',textAlign:'center'}} variant="h5">Mobile app Development</Typography>
                    </Toolbar>
                    <Typography paragraph style={{maxWidth:'800px',margin:'5px auto'}} itemProp="description">
                        Desarrollamos aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado.
                        <br/>
                        Tenemos alto conocimiento en entornos de desarrollo <b>Android - IOS</b>
                        
                        <br/><br/>

                      <ButtonStartNow />
                    </Typography>
                </Grid>
        </Grid>

          <ScreenTwo />
    </>
}

export default App(MobileApps)
