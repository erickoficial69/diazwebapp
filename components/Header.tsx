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


export const Header = ({ context }: any) => {
    const [openMenu,setOpenMenu] = useState(false)
    return (
        <AppBar position="fixed" color='primary' >
            <Toolbar>
                <Link href="/" >
                    <Button variant='text' >
                        <img width="32px" style={{ margin: "0 8px 0 0" }} src="/favicon.ico" alt="logo-dwa" />
                        Diaz Web app
                    </Button>
                </Link>
                <Hidden mdUp>
                    <IconButton onClick={()=>setOpenMenu(!openMenu)} >
                        <Menu />
                    </IconButton>
                </Hidden>
                
            </Toolbar>
            <Hidden mdUp>
                <NavigationMobile variant="temporary" setOpenMenu={setOpenMenu} open={openMenu}/>
            </Hidden>

            <Hidden xsDown>
                <NavigationHD variant="permanent"/>
            </Hidden>
            
        </AppBar>
    )
}