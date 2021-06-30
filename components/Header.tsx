import {Blog,Code_slash,Home} from './icons'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { App_context } from '../context/wp_context/app_context'
import Loader_app from './loader_app'

export const Header = () => {
    const {app,app_dispatch} = useContext(App_context)
    return (
        <header>
            <div className="toolbar flex-nowrap">
                <Link href="/" >
                    <a onClick={()=>{document.location.pathname!='/'?app_dispatch({type:'loader_app',payload:true}):null}} className="logo-header" ><Image loading="lazy" src="/logo.png" width="32px" height="32px" alt="logo diaz web app"/><b>Diaz web app</b></a>
                </Link>
                <nav className="flex-nowrap">
                    <Link href="/" >
                        <a onClick={()=>{document.location.pathname!='/'?app_dispatch({type:'loader_app',payload:true}):null}} className="icon-button"><Home/> <b>Home</b></a>
                    </Link>
                    <Link href="/productos" >
                        <a onClick={()=>{document.location.pathname!='/productos'?app_dispatch({type:'loader_app',payload:true}):null}} className="icon-button" ><Code_slash/> <b>Productos</b></a>
                    </Link>
                    <Link href="/blog" >
                        <a onClick={()=>{document.location.pathname!='/blog'?app_dispatch({type:'loader_app',payload:true}):null}} className="icon-button" ><Blog/> <b>Blog</b></a>
                    </Link>
                </nav>
                <div className={app.loader_app?'loader_app':'loader_app_off'} ><Loader_app /></div>
            </div>                   
        </header>
    )
}