import {
    Toolbar,
    Button,
    Drawer,
    Grid,
    Typography
} from '@material-ui/core'

import {
    HomeOutlined,
    DeveloperModeOutlined,
    DevicesOutlined,
    PersonOutlined,
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
                <Grid container style={{width:variant==="permanent"?'auto':'240px' }}>
                    <Grid item xs={12} lg="auto">
                        <Link href="/login" >
                            <Button 
                            style={{width:'100%'}}
                            variant='text' 
                            size="large" 
                            startIcon={<PersonOutlined color="secondary" />}
                            onClick={()=>setLoading(path==='/login'?false:true)} >
                                <Typography style={{width:'100%',textAlign:'left'}}>Ingresar</Typography>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
            
        </Drawer>
    )
}

const ItemsMenu = ({variant,setLoading,path}:any)=>{
    return (
        <>
                 
            <Grid container style={{width:variant==="permanent"?'auto':'240px' }}>
                <Grid item xs={12} lg="auto">
                    <Link href="/" >
                        <Button 
                        style={{width:'100%'}}
                        variant='text' 
                        size="large" 
                        startIcon={<HomeOutlined color="secondary" />}
                        onClick={()=>setLoading(path==='/'?false:true)} >
                            <Typography style={{width:'100%',textAlign:'left'}}>Home</Typography>
                        </Button>
                    </Link>
                </Grid>

                <Grid item xs={12} lg="auto">
                    <Link href="/mobile-apps" >
                        <Button 
                        variant='text' 
                        size="large"
                        style={{width:'100%'}} 
                        startIcon={<DeveloperModeOutlined color="secondary"/>}
                        onClick={()=>setLoading(path==='/mobile-apps'?false:true)} >
                            <Typography style={{width:'100%',textAlign:'left'}}>Mobile apps</Typography>
                        </Button>
                    </Link>
                </Grid>

                <Grid item xs={12} lg="auto">
                    <Link href="/web-apps" >
                        <Button 
                        variant='text' 
                        size="large" 
                        style={{width:'100%'}}
                        startIcon={<DevicesOutlined color="secondary"/>}
                        onClick={()=>setLoading(path==='/web-apps'?false:true)}>
                            <Typography style={{width:'100%',textAlign:'left'}}>Web apps</Typography>
                        </Button>
                    </Link>
                </Grid>

                <Grid item xs={12} lg="auto">
                    <Link href="/dwa-functions" >
                        <Button 
                        variant='text' 
                        size="large" 
                        style={{width:'100%'}}
                        startIcon={<CloudOutlined color="secondary"/>}
                        onClick={()=>setLoading(path==='/dwa-functions'?false:true)} >
                            <Typography style={{width:'100%',textAlign:'left'}}>dwa functions</Typography>
                        </Button>
                    </Link>
                </Grid>

                <Grid item xs={12} lg="auto">
                    <Link href="#contact" >
                        <Button 
                        variant='text' 
                        size="large" 
                        style={{width:'100%'}}
                        startIcon={<ContactSupportOutlined color="secondary"/>}
                        >
                            <Typography style={{width:'100%',textAlign:'left'}}>Contacto</Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}