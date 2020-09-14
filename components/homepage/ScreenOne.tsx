import {Typography, Grid, Button} from '@material-ui/core'
import {IDevice} from '../../interfaces/app.interfaces'
import {ArrowDropDownCircle} from '@material-ui/icons'


export const ScreenOne = ({deviceDimensions}:any)=>{
  const device:IDevice = deviceDimensions
  return (
    <Grid style={{
      backgroundImage:'url("/img/code")',
      backgroundSize:'cover',
      backgroundColor:'rgba(15,15,15, .8)',
      backgroundBlendMode:'multiply',
      backgroundAttachment:'fixed',
      alignItems:'center',
      alignContent:'center',
      position:'relative',
      padding:'50px 0'
    }} container itemScope itemType="http://schema.org/Service">
      <meta itemProp="serviceType" content="Home cleaning" />
    <div style={{
      backgroundImage:device.width >= 600 ?'url("/img/mancha.svg")':'',
      backgroundRepeat:'no-repeat',
      backgroundSize:'65% 100%',
      backgroundAttachment:'fixed',
      position:'absolute',
      top:'0',
      left:'0',
      width:'100%',
      height:'100%'
      }}></div>
      <Grid item xs={12} sm={7} md={5} lg={4} style={{
          order:device.width >=600?1:2,
          transition:'all .3s ease-in-out',
          position:'relative'
          }} >

        <img width="100%" src="/img/developer1.svg" alt="diaz web app" itemProp="image"/>
      </Grid>

      <Grid item xs={12} sm={5} md={7} lg={8} style={{
        transition:'all .6s ease-in-out',
        order:device.width>=600?2:1,
        padding:'4vmin',
        position:'relative'
        }}  itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">

          <Typography style={{width:'100%',textAlign:'center',marginBottom:'25px'}} color="textPrimary" variant='h4' itemProp="name" >
              Desarollo de Software
          </Typography>

          <Typography style={{maxWidth:'800px',margin:'10px auto',textAlign:'center'}} color="textPrimary" itemProp="description" paragraph>
            Desarrollo de aplicaciones móviles, aplicaciones web y otros tipos de software adaptados a la necesidad del cliente.
            <br/>
            <br/>
            Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión.
          </Typography>
      </Grid>

      <Grid item xs={12} sm={12} style={{textAlign:'center',order:3}} >
          <a href='/#devProducts' >
            <Button color='secondary' startIcon={<ArrowDropDownCircle/>} >
              <Typography color='textSecondary' >
                Más
              </Typography>
            </Button>
          </a>
      </Grid>
      </Grid>
)
}