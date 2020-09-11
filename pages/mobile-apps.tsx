import App from '../components/App'
import Head from 'next/head'
import {
  AndroidTwoTone,
  Apple
} from '@material-ui/icons'
import { Grid, Container, Typography, Toolbar } from '@material-ui/core'


const MovilApp=()=>{
 
  return <>
          <Head>
            <meta name="description" content="Desarrollo de aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado." />
          </Head>
      <Container itemScope itemType="http://schema.org/Service">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Toolbar style={{textAlign:"center"}}>
                <AndroidTwoTone style={{color:"green",fontSize:'90px',position:'relative', margin:'0 auto'}} />
            </Toolbar>
            
            <Typography color="textPrimary" paragraph itemProp="name">Android Apps</Typography>

            <Typography color="textPrimary" paragraph itemProp="description">
                Desarrollamos aplicaciones nativas para Android, plataforma líder a nivel mundial con la mejor cuota de mercado absoluta. Tenemos basta experiencia en el desarrollo para Android. Descubre todas las funcionalidades que Android ofrece con Diaz Web App.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
        
            <Toolbar style={{textAlign:"center"}} >
                <Apple style={{color:'gray',fontSize:'90px',position:'relative', margin:'0 auto'}} />
            </Toolbar>
            
            <Typography color="textPrimary" paragraph itemProp="name">IOS Apps</Typography>

            <Typography color="textPrimary" itemProp="description">
                Desarrollo de aplicaciones nativas para iPhone, uno de los dispositivos móviles más utilizados, Diaz Web App desarrolla aplicaciones desde la primera versión iOS hasta la actual y tenemos un experto conocimiento de App Store.
            </Typography>
        
        </Grid>
        </Grid>
      </Container>

      <section>
        <article>
          <h2 itemProp="name">Promoción de apps</h2>
          <p itemProp="description">
          Nuestro equipo especializado ayudará en el proceso promoción optimizando tu app móvil para conseguir aparecer en los primeros resultados de búsqueda en los Market Places y lograr descargas.
          </p>
      </article>
    </section>
  </>
}

export default App(MovilApp)
