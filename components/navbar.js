import {defineCustomElements} from '@ionic/pwa-elements/loader'
import Link from 'next/link'
import Head from 'next/head'
import Notifications from './pwa-events/notifications'
import { useState, useEffect } from 'react'

import {
    AiOutlineHome,
    AiOutlineHtml5,
    AiOutlineMobile,
    AiOutlineSafety,
    AiOutlineTool,

    AiFillHome,
    AiFillMobile,
    AiFillTool,
    AiFillHtml5,
    AiFillSafetyCertificate
} from 'react-icons/ai'

import Chat from '../components/chat/chat'
import {Backdrop} from '@material-ui/core'

import GetGeolocation from './pwa-events/geoLocation/wheaterApi'

//Capatitor import 
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

const network = async (setNet)=>{
    await Network.getStatus().then(status=>{
        setNet(status)
    })
    Network.addListener("networkStatusChange", rs=>{
        setNet(rs)
    })
}

function Navbar(props) {
    const { navStatus } = props

    const [width, setWidth] = useState(null)
    const [status, setStatus] = useState('')
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState(false)

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
    },[])

    useEffect(() => {
        setStatus(navStatus)
    },[])
    useEffect(() => {
        network(setNet)
    },[])
    useEffect(()=>{
        window.addEventListener('appinstalled', () => {
            new Notifications().appInstalled()
            });
    })
    useEffect(()=>{
        new GetGeolocation().getCurrentPosition(setLocation)
        new GetGeolocation().watchPosition(setLocation)
    },[])

    return <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel='stylesheet' href='css/dark.css' />
                <meta name="keywords" content="desarrollo de aplicaciones, diaz web app, dwa, aplicaciones web, aplicaciones moviles, diseño web, desarrollo web" />
                <meta name="theme-color" content="#2d2d2d"/>
                <meta name="author" content="Diaz web app" />

                <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1,user-scalable=no" />
            </Head>

            <header>
                <span>
                    {
                        width > 916 ? (
                            status === 'home'?(
                                <p  >
                                        <img src="/img/logo.png" width="32px" />
                                        <span>diaz web app</span>
                                </p>
                            ):(
                                <Link href="/" >
                                    <a href="/">
                                        <img src="/img/logo.png" width="32px" />
                                        <span>diaz web app</span>
                                    </a>
                                </Link>
                            )
                        ):null
                    }
                    <nav>
                    {
                        status === 'home' ?(
                            <p >
                                <AiFillHome/>
                                <span>home</span>
                            </p>
                        ):(
                        <Link href="/">
                            <a onClick={()=>setShow(true)} href="/">
                            <AiOutlineHome />
                                <span>home</span>
                            </a>
                        </Link> 
                        )
                    }

                    {
                        status === 'aplicaciones web' ?(
                            <p  >
                                <AiFillHtml5/>
                                <span>web apps</span>
                            </p>
                        ):(
                        <Link href="/aplicaciones-web">
                            <a onClick={()=>setShow(true)} href="/aplicaciones-web.html">
                               <AiOutlineHtml5/>
                                <span>web apps</span>
                            </a>
                        </Link> 
                        )
                    }

                    {
                        status === 'aplicaciones moviles' ?(
                            <p  >
                                <AiFillMobile/>
                                <span>mobile apps</span>
                            </p>
                        ):(
                        <Link href="/aplicaciones-moviles">
                            <a onClick={()=>setShow(true)} href="/aplicaciones-moviles.html">
                            <AiOutlineMobile/>
                              <span>mobile apps</span>
                            </a>
                        </Link> 
                        )
                    }
                    {
                        status === 'administracion de sistemas' ?(
                            <p  >
                                <AiFillSafetyCertificate/>
                                <span>A. sistemas</span> 
                            </p>
                        ):(
                        <Link href="/administracion-sistemas">
                            <a onClick={()=>setShow(true)} href="/administracion-sistemas.html">
                            <AiOutlineSafety/>
                                <span>A. sistemas</span>
                            </a>
                        </Link> 
                        )
                    }
                    {
                       location ?
                            location.sys.country === "VE"?
                            status === 'serv. técnico' ?(
                                <p  >
                                    <AiFillTool/>
                                    <span>S. técnico</span> 
                                </p>
                            ):(
                            <Link href="/servicio-tecnico">
                                <a onClick={()=>setShow(true)} href="/servicio-tecnico.html">
                                <AiOutlineTool/>
                                    <span>S. técnico</span>
                                </a>
                            </Link> 
                            )
                            :null
                    :null
                     }
                    </nav>
                </span>

            </header>
            <Chat net={net} />
            <style>
                {`

                    :root{
                        --font-size:${width < 916 ? '14px;' : '16px;'}
                        --iconColor:rgb(248, 200, 2);
                        --effectColor:rgb(68, 225, 25);
                        --effectColor2:rgb(0, 195, 254);
                        --textColor:lightgrey;
                        --backgroundColor:#1d1d1d;
                        --themeColor:#2d2d2d;
                    }
                    header{
                        position:fixed;
                        ${width < 916 ? 'bottom:0;' : 'top:0;'}
                        background:var(--themeColor);
                        height:52px;
                        z-index:999;
                    }
                    main{
                        ${width < 916 ? 'top:0;' : 'top:52px;'}
                    }
                    header span{
                        grid-column: 2 / span 14;
                        display:flex;
                        flex-flow:row nowrap;
                        align-items:center;
                        justify-content:${width <916?'center;':'space-between;'}
                        overflow:hidden;
                    }
                    header span nav{
                        display:flex;
                        flex-flow:row nowrap;
                        align-items:center;
                        justify-content:${width <916?'space-between;':"flex-end;"}
                        height:52px;
                        overflow:hidden;
                        ${width <916?'width:100%;':null}
                    }

                    header span a{
                        display:flex;
                        flex-flow:${width <916?'column;':"row nowrap;"}
                        justify-content:${width <916?'space-between;':"center;"}
                        align-items:center;
                        padding:0 2vmin;
                        text-transform:capitalize;
                        text-shadow: 1px 1px black;
                    }
                    
                    header span a svg{
                        color:var(--iconColor);
                        width:24px;
                        height:24px;
                        margin-right:1vmin;
                    }
                    header span p{
                        display:flex;
                        flex-flow:${width <916?'column;':"row nowrap;"}
                        justify-content:${width <916?'space-between;':"center;"};
                        align-items:center;
                        padding:0 2vmin;
                        text-transform:capitalize;
                        text-shadow: 1px 1px black;
                    }
                    header span p svg{
                        width:24px;
                        height:24px;
                        margin-right:1vmin;
                    }
                    header span a span{
                        font-size:${width <916?'9px;':"18px;"};
                        text-align:center;
                    }
                    header span p span{
                        font-size:${width <916?'9px;':"18px;"};
                        text-align:center;
                    }
                    header span img{
                        margin-right:1vmin;
                    }
                `}
            </style>
            <Backdrop style={
                    {
                    zIndex:'99999',
                 }
                 } 
                 open={show} >
                    <img width="150vmin" height="150vmin" src="/img/loading-chulo.webp" />
            </Backdrop>
        </>
}

export {Navbar, AiFillHtml5, AiOutlineMobile, AiFillTool, AiFillSafetyCertificate}