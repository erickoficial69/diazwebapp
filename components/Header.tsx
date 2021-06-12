import {Blog,Code_slash,Home,Login} from './icons'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
    return (
        <header>
            <div className="toolbar flex-nowrap">
            <Link href="/" >
                <a className="logo-header" ><Image loading="lazy" src="/logo.png" width="32px" height="32px" alt="logo diaz web app"/><b>Diaz web app</b></a>
            </Link>
            <nav className="flex-nowrap">
                <Link href="/" >
                    <a className="icon-button"><Home/> <b>Home</b></a>
                </Link>
                <Link href="/productos" >
                    <a className="icon-button" ><Code_slash/> <b>Productos</b></a>
                </Link>
                <Link href="/blog" >
                    <a className="icon-button" ><Blog/> <b>Blog</b></a>
                </Link>
                <Link href="/login" >
                    <a className="icon-button" ><Login/> <b>Ingresar</b></a>
                </Link>
            </nav></div>                   
        </header>
    )
}