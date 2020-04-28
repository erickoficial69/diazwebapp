import {defineCustomElements} from '@ionic/pwa-elements/loader'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { HomeOutlined, DeveloperModeOutlined, WebOutlined} from '@material-ui/icons'
import Chat from '../components/chat/chat'
import {Backdrop, Icon, IconButton } from '@material-ui/core'
//Capatitor import 
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

const network = (setNet)=>{
    Network.addListener("networkStatusChange", rs=>{
        setNet(rs)
    })
}
const inactive = {
    color:"darkgoldenrod"
  }

function Navbar(props) {
    const { navStatus } = props

    const [width, setWidth] = useState(null)
    const [status, setStatus] = useState('')
    const [show, setShow] = useState(false)
    const [net,setNet] = useState({})

    useEffect(() => {
        
        defineCustomElements(window)
        setWidth(window.innerWidth)

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
        window.removeEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    })
    useEffect(() => {
        setStatus(navStatus)
    },[])
    useEffect(() => {
        network(setNet)
    },[])
    
    return <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel='stylesheet' href='/css/dark.css' />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1 user-scalable=no" />
            </Head>

            <header>
                <span>
                    {
                        width > 720 ? (
                            status === 'home'?(
                                <p style={inactive} className="inactive" >
                                        <img src="/img/logo.png" width="32px" />
                                        diaz web app
                                </p>
                            ):(
                                <Link href="/" >
                                    <a href="/">
                                        <img src="/img/logo.png" width="32px" />
                                        diaz web app
                                    </a>
                                </Link>
                            )
                        ):null
                    }
                    <nav>
                    {
                        status === 'home' ?(
                            <p style={inactive} className="inactive" >
                                <IconButton style={inactive} ><HomeOutlined style={inactive} color='secondary' /></IconButton>
                                {
                                    width > 641 ? 'home' : null
                                }
                            </p>
                        ):(
                        <Link href="/">
                            <a onClick={()=>setShow(true)} href="/">
                            <IconButton><HomeOutlined/></IconButton>
                                {
                                    width > 641 ? 'home' : null
                                }
                            </a>
                        </Link> 
                        )
                    }

                    {
                        status === 'web apps' ?(
                            <p style={inactive} className="inactive" >
                                <IconButton style={inactive} width="32px" height="32px">
                                    <WebOutlined style={inactive}/>
                                </IconButton>
                                {
                                    width > 641 ? 'web apps' : null
                                }
                            </p>
                        ):(
                        <Link href="/webapps">
                            <a onClick={()=>setShow(true)} href="/webapps.html">
                                <IconButton width="32px" height="32px">
                                    <WebOutlined/>
                                    
                                </IconButton>
                                {
                                    width > 641 ? 'web apps' : null
                                }
                            </a>
                        </Link> 
                        )
                    }

                    {
                        status === 'movil apps' ?(
                            <p style={inactive} className="inactive" >
                                <IconButton style={inactive}><DeveloperModeOutlined style={inactive}/></IconButton>
                                {
                                    width > 641 ? 'movil apps' : null
                                }
                            </p>
                        ):(
                        <Link href="/movilapps">
                            <a onClick={()=>setShow(true)} href="/movilapps.html">
                            <IconButton><DeveloperModeOutlined/></IconButton>
                                {
                                    width > 641 ? 'movil apps' : null
                                }
                            </a>
                        </Link> 
                        )
                    }
                    </nav>
                </span>
            </header>
            <Chat net={net}/>
            <style>
                {`

                    :root{
                        --font-size:16px;
                        --iconColor:rgb(0, 135, 224);
                        --iconColorButton:rgb(255, 255, 255);
                        --textColor:lightgrey;
                        --backgroundColor:#1d1d1d;
                        --themeColor:#2d2d2d;
                    }
                    header{
                        position:fixed;
                        ${width < 721 ? 'bottom:0;' : 'top:0;'}
                        background:var(--themeColor);
                        height:52px;
                        z-index:999;
                    }
                    main{
                        height:calc(100vh - 52px);
                        ${width < 721 ? 'top:0;' : 'top:52px;'}
                    }
                    header span{
                        grid-column: 2 / span 14;
                        display:flex;
                        flex-flow:row nowrap;
                        align-items:center;
                        justify-content:${width <720?'center;':'space-between;'}
                        height:52px;
                        overflow:hidden;
                    }
                    header span nav{
                        display:flex;
                        flex-flow:row nowrap;
                        align-items:center;
                        justify-content:${width <720?'space-between;':"flex-end;"}
                        height:52px;
                        overflow:hidden;
                        ${width <720?'width:100%;':null}
                    }

                    header span a{
                        display:flex;
                        flex-flow:row nowrap;
                        justify-content:space-between;
                        align-items:center;
                        padding:0 2vmin;
                        text-transform:capitalize;
                    }
                    
                    header span a svg{
                        color:var(--iconColor);
                    }
                    header span a img{
                        margin-right:5px;
                    }
                    header span p{
                        display:flex;
                        flex-flow:row nowrap;
                        justify-content:space-between;
                        align-items:center;
                        text-transform:capitalize;
                    }
                `}
            </style>
            <Backdrop style={
                    {
                    zIndex:'99999',
                 }
                 } 
                 open={show} >
                    <img src="/img/loading-chulo.gif" />
            </Backdrop>
        </>
}

export {Navbar}