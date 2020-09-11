import {Typography, Grid, Button} from '@material-ui/core'
import {IDevice} from '../../interfaces/app.interfaces'
import {ArrowDropDownCircle} from '@material-ui/icons'


export const ScreenOne = ({deviceDimensions}:any)=>{
  const device:IDevice = deviceDimensions
  return (
    <Grid style={{
      backgroundImage:'url("/img/code")',
      backgroundSize:'cover',
      backgroundColor:'rgba(15,15,15, .9)',
      backgroundBlendMode:'multiply',
      backgroundAttachment:'fixed',
      minHeight:device.width >= 1024 && device.height >= 768 ?'500px':'calc(100vh - 60px)',
      alignItems:'center',
      alignContent:'center',
      position:'relative'
    }} container itemScope itemType="http://schema.org/Service">
      <meta itemProp="serviceType" content="Home cleaning" />
    <div style={{
      backgroundImage:device.width >= 600 ?'url("/img/mancha.svg")':'',
      backgroundRepeat:'no-repeat',
      backgroundSize:'60% 100%',
      backgroundAttachment:'fixed',
      position:'absolute',
      top:'0',
      left:'0',
      width:'100%',
      height:'100%'
      }}>.</div>
      <Grid item xs={12} sm={6} style={{
          order:device.width >=600?1:2,
          transition:'all .3s ease-in-out',
          }} >
        <span style={{width:'70%',height:'70%',background:'rgba(10,10,10, .1)',borderRadius:'50%',position:'relative',boxShadow:'0px 0px 5px rgba(1,1,1, .3)'}} >
          <img style={{
            position:'relative',
            margin:device.width <= 640?'0 auto':'0 0 0 -3%',
            width:device.width <= 480?'80%':device.width >= 480 && device.width <= 720?'100%':'80%',
            maxHeight:device.width >=1080?'290px':'',
            }}  src="/img/developer1.svg" alt="diaz web app" itemProp="image"/>
        </span>
      </Grid>

      <Grid item xs={12} sm={6} style={{
        transition:'all .6s ease-in-out',
        order:device.width>=600?2:1,
        }}  itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">

          <Typography color="textPrimary" variant='h3' itemProp="name" style={{
              textAlign:'center',
              position:'relative',
              margin:'5px 0 10px 0px',
              fontSize:device.width >= 1080 || device.height >= 800 ?'32px':''
            }} >
              Desarollo de Software
          </Typography>

          <Typography color="textPrimary" itemProp="description" paragraph style={{
            padding:'0 4vmin',
            textAlign:'center',
            position:'relative',
            margin:'0 auto',
            fontSize:device.width >= 1080 || device.height >= 800 ?'21px':''
            }}>
            Desarrollo de aplicaciones móviles, aplicaciones web y otros tipos de software adaptados a la necesidad del cliente.
            <br/>
            <br/>
            Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión.
          </Typography>
      </Grid>

      <Grid item xs={12} sm={12} style={{textAlign:'center',order:3}} >
          <a href='/#screen-two' >
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