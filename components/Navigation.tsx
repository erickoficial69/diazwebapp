import {
    Toolbar,
    Button,
    Drawer,
    Grid,
    IconButton
} from '@material-ui/core'

import {
    Home,
    DeveloperMode,
    Devices,
    Menu
} from '@material-ui/icons'

import Link from 'next/link'


export const NavigationMobile = ({setOpenMenu,variant,open}:any) => {
    return (
        <Drawer variant={variant} anchor="left" open={open} >
            
            <Toolbar>
                <Link href="/" >
                    <Button variant='text' >
                        <img width="32px" style={{ margin: "0 8px 0 0" }} src="/favicon.ico" alt="logo-dwa" />
                        Diaz Web app
                    </Button>
                </Link>

                <IconButton>
                    <Menu />
                </IconButton>
            </Toolbar>
            <ItemsMenu setOpenMenu={setOpenMenu}/>
            
        </Drawer>
    )
}

export const NavigationHD = ({variant}:any) => {
    return (
        <Drawer variant={variant} anchor="top">
            
            <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
                <Link href="/" >
                    <Button variant='text' >
                        <img width="32px" style={{ margin: "0 8px 0 0" }} src="/favicon.ico" alt="logo-dwa" />
                        Diaz Web app
                    </Button>
                </Link>
                
                <ItemsMenu variant={variant} />
            </Toolbar>
            
        </Drawer>
    )
}

const ItemsMenu = ({variant}:any)=>{
    return (
        <>
                 
            <Grid container style={{width:variant==="permanent"?'auto':'240px' }}>
                <Grid item>
                            <Link href="/" >
                    <Button variant='text' size="large" startIcon={<Home color="secondary" />} >
                    Home
                    </Button>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href="/mobile-apps" >
                        <Button variant='text' size="large" startIcon={<DeveloperMode color="secondary"/>}>
                            Mobile apps
                        </Button>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href="/web-apps" >
                        <Button variant='text' size="large" startIcon={<Devices color="secondary"/>}>
                            Web apps
                        </Button>
                            </Link>
                </Grid>
            </Grid>
        </>
    )
}