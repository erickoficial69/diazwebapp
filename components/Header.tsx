import {useState} from 'react'
import {
    AppBar,
    Toolbar,
    Button,
    Hidden,
    IconButton
} from '@material-ui/core'

import Link from 'next/link'
import { NavigationHD, NavigationMobile } from './Navigation'
import { Menu } from '@material-ui/icons'


export const Header = ({ context:{setLoading,path} }: any) => {
    const [openMenu,setOpenMenu] = useState(false)
    return (
        <AppBar position="fixed" color='primary' >
            <Toolbar>
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