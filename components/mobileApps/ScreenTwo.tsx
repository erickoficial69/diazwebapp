import {
  Android,
  Apple
} from '@material-ui/icons'
import { Grid, Container, Typography, Toolbar } from '@material-ui/core'


export const ScreenTwo = ()=>{
 
  return <Container itemScope itemType="http://schema.org/Service">

            <Grid container style={{
              alignItems:'center',
              alignContent:'center',
              padding:'55px 0'
            }} >

              <Grid item xs={12} md={6}>
                <Toolbar>
                    <Android style={{color:"lightgreen",fontSize:'90px',position:'relative', margin:'0 auto'}} />
                </Toolbar>
                
                <Typography color="textPrimary" style={{textAlign:'center'}} variant="h6" itemProp="name">Android Apps</Typography>

                <Typography color="textPrimary" paragraph itemProp="description" style={{padding:'5px',textAlign:'center'}}>
                    Desarrollamos aplicaciones nativas para Android, plataforma líder a nivel mundial con la mejor cuota de mercado absoluta. Tenemos basta experiencia en el desarrollo para Android.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
            
                <Toolbar style={{marginTop:'-20px'}}>
                    <Apple style={{color:'gray',fontSize:'100px',position:'relative', margin:'0 auto'}} />
                </Toolbar>
                
                <Typography color="textPrimary" style={{textAlign:'center'}} variant="h6" itemProp="name">IOS Apps</Typography>

                <Typography color="textPrimary" itemProp="description" style={{padding:'5px',textAlign:'center'}}>
                    Desarrollo de aplicaciones nativas para iPhone, Diaz Web App desarrolla aplicaciones desde la primera versión iOS hasta la actual y tenemos un experto conocimiento de App Store.
                </Typography>
            
              </Grid>
            </Grid>
          </Container>
}