import {
    Toolbar,
    Button,
    Drawer,
    Grid
} from '@material-ui/core'

import {
    HomeOutlined,
    DeveloperModeOutlined,
    DevicesOutlined,
   ContactSupportOutlined,
   CloudOutlined,
} from '@material-ui/icons'

import Link from 'next/link'


export const NavigationMobile = ({setOpenMenu,variant,open,setLoading,path}:any) => {
    return (
        <Drawer variant={variant} anchor="left" open={open} onClick={()=>setOpenMenu(false)} >
            
            <Toolbar>
                <Link href="/" >
                    <Button variant='text' onClick={()=>setLoading(path==='/'?false:true)}>
                        <img width="32px" style={{ margin: "0 8px 0 0" }} src="/favicon.ico" alt="logo-dwa" />
                        Diaz Web app
                    </Button>
                </Link>
            </Toolbar>

            <ItemsMenu setLoading={setLoading} path={path}/>
            
        </Drawer>
    )
}

export const NavigationHD = ({variant,setLoading,path}:any) => {
    return (
        <Drawer variant={variant} anchor="top">
            
            <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
                <Link href="/" >
                    <Button variant='text' >
                        <img width="32px" style={{ margin: "0 8px 0 0" }} src="/favicon.ico" alt="logo-dwa" />
                        Diaz Web app
                    </Button>
                </Link>
                
                <ItemsMenu variant={variant} setLoading={setLoading} path={path}/>
            </Toolbar>
            
        </Drawer>
    )
}

const ItemsMenu = ({variant,setLoading,path}:any)=>{
    return (
        <>
                 
            <Grid container style={{width:variant==="permanent"?'auto':'240px' }}>
                <Grid item>
                    <Link href="/" >
                        <Button 
                        variant='text' 
                        size="large" 
                        startIcon={<HomeOutlined color="secondary" />}
                        onClick={()=>setLoading(path==='/'?false:true)} >
                            Home
                        </Button>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="/mobile-apps" >
                        <Button 
                        variant='text' 
                        size="large" 
                        startIcon={<DeveloperModeOutlined color="secondary"/>}
                        onClick={()=>setLoading(path==='/mobile-apps'?false:true)} >
                            Mobile apps
                        </Button>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="/web-apps" >
                        <Button 
                        variant='text' 
                        size="large" 
                        startIcon={<DevicesOutlined color="secondary"/>}
                        onClick={()=>setLoading(path==='/web-apps'?false:true)}>
                            Web apps
                        </Button>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="/dwa-functions" >
                        <Button 
                        variant='text' 
                        size="large" 
                        startIcon={<CloudOutlined color="secondary"/>}
                        onClick={()=>setLoading(path==='/dwa-functions'?false:true)} >
                            dwa functions
                        </Button>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="#contact" >
                        <Button 
                        variant='text' 
                        size="large" 
                        startIcon={<ContactSupportOutlined color="secondary"/>}
                        >
                            Contacto
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}