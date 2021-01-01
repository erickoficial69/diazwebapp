import {Blog,Code_slash,Login} from './icons'

export const Header = ({navigation_controller}: any) => {
    return (
        <header className="flex-nowrap">
            <b onClick={()=>navigation_controller("/")} >Diaz web app</b>
            <nav className="flex-nowrap">
                <button className="icon-button" onClick={()=>navigation_controller("/desarrollo")}><Code_slash/> <b>Desarrollo</b></button>
                <button className="icon-button" onClick={()=>navigation_controller("/blog")}><Blog/> <b>Blog</b></button>
                <button className="icon-button" onClick={()=>navigation_controller("/web-apps-development")}><Login/> <b>Ingresar</b></button>
            </nav>                   
        </header>
    )
}