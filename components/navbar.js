import {defineCustomElements} from '@ionic/pwa-elements/loader'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import {
    AiOutlineHome,
    AiOutlineHtml5,
    AiOutlineMobile,
    AiOutlineTool,

    AiFillHome,
    AiFillMobile,
    AiFillTool,
} from 'react-icons/ai'

import Chat from '../components/chat/chat'
import {Backdrop } from '@material-ui/core'
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
    
    return <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel='stylesheet' href='/css/dark.css' />
                <meta name="keywords" content="HTML, dwa, JS, diaz web app, mobile development,web development, web apps, mobile apps, diseño, desarrollo" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1 user-scalable=no" />
            </Head>

            <header>
                <span>
                    {
                        width > 720 ? (
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
                        status === 'web apps development' ?(
                            <p  >
                                <AiOutlineHtml5/>
                                <span>web apps</span>
                            </p>
                        ):(
                        <Link href="/web-apps-dvelopment">
                            <a onClick={()=>setShow(true)} href="/web-apps-dvelopment.html">
                               <AiOutlineHtml5/>
                                <span>web apps</span>
                            </a>
                        </Link> 
                        )
                    }

                    {
                        status === 'mobile apps development' ?(
                            <p  >
                                <AiFillMobile/>
                                <span>mobile apps</span>
                            </p>
                        ):(
                        <Link href="/mobile-apps-dvelopment">
                            <a onClick={()=>setShow(true)} href="/mobile-apps-dvelopment.html">
                            <AiOutlineMobile/>
                              <span>mobile apps</span>
                            </a>
                        </Link> 
                        )
                    }
                    {/*
                        status === 'servicio tecnico' ?(
                            <p  >
                                <AiFillTool/>
                                <span>serv. tecnico</span> 
                            </p>
                        ):(
                        <Link href="/serviciotecnico">
                            <a onClick={()=>setShow(true)} href="/serviciotecnico.html">
                            <AiOutlineTool/>
                                <span>serv. tecnico</span>
                            </a>
                        </Link> 
                        )
                        */}
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
                        flex-flow:${width <720?'column;':"row nowrap;"}
                        justify-content:${width <720?'space-between;':"center;"}
                        align-items:center;
                        padding:0 2vmin;
                        text-transform:capitalize;
                    }
                    
                    header span a svg{
                        color:var(--iconColor);
                        width:24px;
                        height:24px;
                    }
                    header span p svg{
                        width:24px;
                        height:24px;
                    }
                    header span a span{
                        font-size:${width <720?'11px;':"18px;"};
                    }
                    header span p span{
                        font-size:${width <720?'11px;':"18px;"};
                    }
                    header span img{
                        margin-right:5px;
                    }
                    header span p{
                        display:flex;
                        flex-flow:${width <720?'column;':"row nowrap;"}
                        justify-content:${width <720?'space-between;':"center;"};
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
                    <img width="150vmin" height="150vmin" src="/img/loading-chulo.gif" />
            </Backdrop>
        </>
}

export {Navbar}