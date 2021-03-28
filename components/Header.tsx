import {Blog,Code_slash,Home,Login} from './icons'
import Link from 'next/link'

export const Header = ({navigation_controller}:any) => {
    return (
        <header className="flex-nowrap">
            <Link href="/" >
                <button onClick={()=>navigation_controller('/')} className="icon-button" ><img src="/logo.png" width="32px" alt="logo diaz web app"/><b>Diaz web app</b></button>
            </Link>
            <nav className="flex-nowrap">
                <Link href="/" >
                    <button onClick={()=>navigation_controller('/')} className="icon-button"><Home/> <b>Home</b></button>
                </Link>
                <Link href="/productos" >
                    <button onClick={()=>navigation_controller('/productos')} className="icon-button" ><Code_slash/> <b>Productos</b></button>
                </Link>
                <Link href="/blog" >
                    <button onClick={()=>navigation_controller('/blog')} className="icon-button" ><Blog/> <b>Blog</b></button>
                </Link>
                <Link href="/login" >
                    <button onClick={()=>navigation_controller('/login')} className="icon-button" ><Login/> <b>Ingresar</b></button>
                </Link>
            </nav>                   
        </header>
    )
}