import Link from 'next/link'
import { Grid, Container, Typography, Toolbar } from '@material-ui/core'


export const DevProducts = ({setLoading}:any)=>{
 
  return <Container id="devProducts" itemScope itemType="http://schema.org/Service">
            <Grid container style={{
                color:'white',
                alignContent:'flex-start',
                alignItems:'flex-start',
                position:'relative',
                padding:'50px 0 0 0'
            }}>
                <Grid item xs={12} sm={4} style={{textAlign:'center'}} >
                    <Link href="/mobile-apps" >
                        <a onClick={()=>setLoading(true)}>
                        <Toolbar>
                            <Typography variant="h5" color="textPrimary" style={{width:'100%',textAlign:'center',textShadow:'1px 1px black'}} >Mobile Apps</Typography>
                        </Toolbar>
                        <img width="80%" src="/img/laravel-2.svg" alt="mobile dev"/>
                        </a>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={4} style={{textAlign:'center'}} >
                    <Link href="/web-apps">
                        <a onClick={()=>setLoading(true)}>
                        <Toolbar>
                            <Typography variant="h5" color="textPrimary" style={{width:'100%',textAlign:'center',textShadow:'1px 1px black'}} >Web Apps</Typography>
                        </Toolbar>
                        <img width="80%" src="/img/web-design.svg" alt="web dev"/>
                        </a>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={4} style={{textAlign:'center'}} >
                    <Link href="/dwa-functions" >
                        <a onClick={()=>setLoading(true)}>
                        <Toolbar>
                            <Typography variant="h5" color="textPrimary" style={{width:'100%',textAlign:'center',textShadow:'1px 1px black'}} >DWA Functions</Typography>
                        </Toolbar>
                        <img width="80%" src="/img/api.svg" alt="web dev"/>
                        </a>
                    </Link>
                </Grid>
            </Grid>
          </Container>
}