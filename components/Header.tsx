import {IconDwa, Icon_Menu} from './icons'
import Link from 'next/link'
import { Navigation } from './Navigation'
import { useState } from 'react'

export const Header = () => {
    const [show,setShow] = useState<boolean>(false)
    return (
            <div className="toolbar">
                <Link href="/" >
                    <a className="logo-header" >
                        <IconDwa width={32} height={32} />
                        <b>Diaz web app</b>
                    </a>
                </Link>
                <span style={{display:'flex',alignItems:'center',flexFlow:'row nowrap'}} >
                    <Navigation show={show} setShow={setShow}/>
                    <span style={{cursor:'pointer'}} onClick={()=>setShow(!show)}>
                        <Icon_Menu  width={32} height={32} />
                    </span>
                </span>
                
            </div>  
    )
}