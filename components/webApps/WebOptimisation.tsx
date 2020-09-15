import {Typography, Grid, Box, ListItemText} from '@material-ui/core'
import {BarChart,MonetizationOn,Money, Search, ChromeReaderMode,} from '@material-ui/icons'

export const WebOptimisation = ()=>(
    <article style={{color:'white',position:'relative'}} id='screen-two' itemScope itemType="http://schema.org/Service">
      <meta itemProp="serviceType" content="Home cleaning" />
          <Box itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">

            <Typography style={{textAlign:'center',margin:'5px 0 0 0'}} variant='h4' itemProp="name">
                SEO y Datos Estructurados
            </Typography>

          </Box> 
          
          <Grid container style={{alignItems:'center',alignContent:'center',width:'100%',padding:'0 4vmin'}} itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog" >

                  <Grid item xs={12} sm={6} md={4} lg={2} style={{zIndex:2}}>
                    <img src="img/development1.svg" alt="seo" width="100%" />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={5} style={{zIndex:2}} >
                    <Typography style={{textAlign:'center',margin:'20px 0'}} variant='h5'  itemProp="name">
                      Datos Estructurados
                    </Typography>

                    <ListItemText itemProp="description" style={{padding:'0 2vmin',textAlign:'center'}}>
                      Estructuramos el contenido de tu web con meta información, para que los motores de búsqueda lo interpreten mejor, logrando una mayor conversion de usuarios a potenciales clientes.
                    </ListItemText>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={5} style={{zIndex:2}}>
                    <Typography style={{textAlign:'center',margin:'20px 0'}} variant='h5' itemProp="name">
                      Estrategias SEO
                    </Typography>

                    <ListItemText itemProp="description" style={{padding:'0 2vmin',textAlign:'center'}}>
                      Elaboramos estrategias SEO para obtener mejores resultados, para aumentar la visibilidad y tráfico orgánico logrando mejor posicionamiento en los motores de búsquedas.
                    </ListItemText>
                  </Grid>

          </Grid>

          <BarChart style={
            {
              position:'absolute',
              top:'22%',
              left:'35%',
              opacity:'.3'
            }}
            fontSize='large'
            color="secondary" />

          <ChromeReaderMode style={
            {
              position:'absolute',
              top:'28%',
              left:'55%',
              opacity:'.3'
            }}
            fontSize='large'
            color="secondary" />

          <Search style={
            {
              position:'absolute',
              top:'78%',
              left:'45%',
              opacity:'.3'
            }}
            fontSize='large'
            color="secondary" />

          <MonetizationOn style={
            {
              position:'absolute',
              top:'85%',
              left:'70%',
              opacity:'.3'
              }}
              fontSize='large'
              color="secondary" />

          <Money style={
            {
              position:'absolute',
              top:'25%',
              left:'80%',
              opacity:'.3'
              }}
              fontSize='large'
              color="secondary" />
      </article>
)