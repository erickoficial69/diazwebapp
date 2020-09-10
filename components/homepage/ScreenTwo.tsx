import {Typography, Grid, Box, ListItemText} from '@material-ui/core'
import {Facebook,Instagram,Mail,BarChart,MeetingRoom,Twitter,MonetizationOn,Money} from '@material-ui/icons'

export const ScreenTwo = ()=>(
    <article style={{color:'white',position:'relative'}} id='screen-two' itemScope itemType="http://schema.org/Service">
      <meta itemProp="serviceType" content="Home cleaning" />
          <Box itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">

            <Typography style={{textAlign:'center',margin:'20px 0'}} variant='h4' itemProp="name">
                Ofrecemos paquetes completos
            </Typography>

          </Box> 
          
          <Grid container itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog" >

                  <Grid item xs={12} sm={6} md={4} lg={3} style={{zIndex:2}} >
                    <Typography style={{textAlign:'center',margin:'20px 0'}} variant='h5'  itemProp="name">
                      Social Management
                    </Typography>

                    <ListItemText itemProp="description">
                      Equipo de Community Management para promoción de apps y dar el mejor complemento a nuestros proyectos. Creamos en plan de comunicación y actuación en las redes sociales más importantes.
                    </ListItemText>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3} style={{zIndex:2}}>
                    <Typography style={{textAlign:'center',margin:'20px 0'}} variant='h5' itemProp="name">
                      SEO
                    </Typography>

                    <ListItemText itemProp="description">
                      Elaboramos estrategias SEO para obtener los mejores resultados, para aumentar la visibilidad y tráfico orgánico para aparecer en las mejores posiciones en los motores de búsquedas.
                    </ListItemText>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3} style={{zIndex:2}}>
                    <Typography style={{textAlign:'center',margin:'20px 0'}} variant='h5' itemProp="name">
                    Promocion de apps
                    </Typography>

                    <ListItemText itemProp="description">
                      Nuestro equipo especializado ayudará en el proceso promoción optimizando tu app móvil para conseguir aparecer en los primeros resultados de búsqueda en los Market Places y lograr descargas.
                    </ListItemText>
                  </Grid>

          </Grid>


          <Facebook style={
            {
              position:'absolute',
              top:'0',
              left:'5%',
              opacity:'.3'
            }}
            fontSize='large'
            color="secondary" />

          <Instagram style={
            {
              position:'absolute',
              top:'85%',
              left:'15%',
              opacity:'.3'
              }}
              fontSize='large'
              color="secondary" />

          <Mail style={
            {
              position:'absolute',
              top:'45%',
              left:'25%',
              opacity:'.3'
              }}
              fontSize='large'
              color="secondary" />

          <BarChart style={
            {
              position:'absolute',
              top:'22%',
              left:'50%',
              opacity:'.3'
            }}
            fontSize='large'
            color="secondary" />

          <MeetingRoom style={
            {
              position:'absolute',
              top:'85%',
              left:'50%',
              opacity:'.3'
              }}
              fontSize='large'
              color="secondary" />

          <Twitter style={
            {
              position:'absolute',
              top:'45%',
              left:'60%',
              opacity:'.3'
              }}
              fontSize='large'
              color="secondary" />

          <MonetizationOn style={
            {
              position:'absolute',
              top:'85%',
              left:'80%',
              opacity:'.3'
              }}
              fontSize='large'
              color="secondary" />

          <Money style={
            {
              position:'absolute',
              top:'5%',
              left:'95%',
              opacity:'.3'
              }}
              fontSize='large'
              color="secondary" />
      </article>
)