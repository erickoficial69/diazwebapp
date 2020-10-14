import {useState} from 'react'
import {
    AppBar,
    Toolbar,
    Button,
    Hidden,
    IconButton,
    Grid,
    Typography
} from '@material-ui/core'

import Link from 'next/link'
import { NavigationHD, NavigationMobile } from './Navigation'
import { Menu, PersonOutlined } from '@material-ui/icons'


export const Header = ({ context:{setLoading,path} }: any) => {
    const [openMenu,setOpenMenu] = useState(false)
    return (
        <AppBar position="fixed" color='primary' >
            <Toolbar>
                <Grid container >
                    <Grid item xs={9} md={10}>
                        <Link href="/" >
                            <Button variant='text' >
                                <Hidden mdDown>
                                    <img width="32px" style={{ margin: "0 8px 0 0" }} src="/favicon.ico" alt="logo-dwa" />
                                </Hidden>
                                Diaz Web app
                            </Button>
                        </Link>

                        <Hidden lgUp>
                            <IconButton onClick={()=>setOpenMenu(!openMenu)} >
                                <Menu style={{color:"white"}} />
                            </IconButton>
                        </Hidden>
                    </Grid>
                    <Grid item xs={3} md={2}>
                        <Hidden lgUp>
                            <Link href="/login" >
                                <Button 
                                style={{width:'100%'}}
                                variant='text' 
                                size="large" 
                                startIcon={<PersonOutlined color="secondary" />}
                                onClick={()=>setLoading(path==='/login'?false:true)} 
                                >
                                    <Typography style={{width:'100%',textAlign:'left'}}>Ingresar</Typography>
                                </Button>
                            </Link>
                        </Hidden>
                    </Grid>
                </Grid>
            </Toolbar>
            <Hidden lgUp>
                <NavigationMobile variant="temporary" path={path} setLoading={setLoading} setOpenMenu={setOpenMenu} open={openMenu}/>
            </Hidden>

            <Hidden mdDown>
                <NavigationHD variant="permanent" path={path} setLoading={setLoading}/>
            </Hidden>
            
        </AppBar>
    )
}