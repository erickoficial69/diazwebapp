import { useState, useEffect } from 'react'
import { WifiOff } from '@material-ui/icons'
import { MenuItem } from '@material-ui/core'
import { sendEmail } from '../graphql-querys/index'
import {
    AiOutlineCloseCircle,
    AiOutlineMail,
    AiFillRightCircle,
    AiOutlineWhatsApp,
    AiOutlineAppstoreAdd,
} from 'react-icons/ai'
import Notifications from '../pwa-events/notifications'

const Chat = (props)=>{
    const [user, setUser] = useState({})
    const [openQuestion, setOpenQuestion] = useState(false)
    const [statusSend, setStatusSend] = useState(false)
    const [install,setStatusInstall] = useState(false)
  
    let prompt

    const {net} = props

    const sendMessage =  (e)=>{
        setStatusSend('Enviando...')
        e.preventDefault()

        const gql = `
        {
            sendEmail(para:"${user.correo}" cuerpo:"${user.mensaje}")
        }
        `
        sendEmail(gql,setStatusSend)        
       
    }
    const notWifi = ()=>{
        net.connected === false?
            new Notifications().wifiOff()
        : null
    }
    useEffect(()=>{
        notWifi()
    },[])    
    useEffect(()=>{
      window.addEventListener("beforeinstallprompt", e =>{ 
          e.preventDefault()
      // log the platforms provided as options in an install prompt 
      //console.log(e.platforms); // e.g., ["web", "android", "windows"] 
       setStatusInstall(true)
       prompt = e
    })
  })

    return <>
    <aside className='lateralIndicators'>
    {
        net.connected === false?(
            <WifiOff
            className="alertWifi"
            />
        ):null
    }
    {
        install?
            <span className="installApp">
                <AiOutlineAppstoreAdd onClick={()=>prompt.prompt()}/>
            </span>:null
    }
    <a className="whatsapp" target="new" href="https://wa.me/584148733690">
        <AiOutlineWhatsApp/>
    </a>

    {!openQuestion?
    <span 
    className="gmail"
    >
        <AiOutlineMail
        onClick={()=>setOpenQuestion(openQuestion===true?false:true)} 
        />
    </span>:
        <AiOutlineCloseCircle
        onClick={()=>setOpenQuestion(openQuestion===true?false:true)} 
        />}
    
    </aside>

        <form message={statusSend?statusSend:''} className='chat' onSubmit={e=>sendMessage(e)} >
                
            <h3>Dudas...?</h3>

            <label>Tu correo</label>
            
            <input type='email' name='nombre' 
            onChange={e=>setUser({...user, correo:e.target.value})}/>
            <textarea name='message' onChange={e=>setUser({...user, mensaje:e.target.value})} >
                
            </textarea>
             <button
                    className={net.connected === false? "wifiOff" : ""} 
                    disabled={net.connected === false? true : false} >
                    
                    <MenuItem>
                    {net.connected === false? <WifiOff className="alertWifi"/>: <><AiFillRightCircle/> Enviar</> }
                    
                    </MenuItem>
            </button>
        </form>

        <style>
            {
                `
                .chat{
                    z-index:8;
                    height:${!openQuestion?'44px;' : '345px;'} 
                    opacity:${!openQuestion?'0;' : '1;'};
                    width:${!openQuestion?'44px;' : '280px;'}
                    background:#2d2d2d;
                    position:fixed;
                    right:4%;
                    bottom:61px;
                    overflow:hidden;
                    transition:all .3s cubic-bezier(0.215, 1.410, 0.355, 1);
                    display:flex;
                    flex-flow:column;
                    justify-content: space-between;
                    border-radius:3px;
                    padding:1vmin;
                    box-shadow: 0px 0px 2px lightgrey;
                }
                .chat::after{
                    content:attr(message);
                    width:100%;
                    height:100%;
                    background:rgba(0,0,0, .7);
                    position:absolute;
                    top:0;
                    left:0;
                    display:${statusSend?'flex;':'none;'}
                    flex-flow:column;
                    justify-content:center;
                    align-items:center;
                    font-weight:bold;
                }
                .chat h3{
                    line-height:1.3;
                    text-align:center;
                }
                .chat input{
                    line-height:2;
                    background:#2d2d2d;
                    border:1px solid lightgrey;
                    padding: 0 2vmin;
                    color:lightgrey;
                }
                .chat button{
                    width:45%;
                    border:1px solid lightgrey;
                    border-radius:3px;
                    text-transform:uppercase;
                    color:lightgrey;
                }
                .chat textarea{
                    height:185px;
                    resize:none;
                    background:#2d2d2d;
                    border:1px solid lightgrey;
                    padding:2vmin;
                    color:lightgrey;
                }
                @media (min-width:512px){
                    .chat{
                        width:${!openQuestion?'44px;' : '75vmin;'}
                        right:calc(55px + 4%);
                    }
                }
                .installApp{
                    position: relative;
                    z-index:1;
                  }
                  .installApp > svg{
                    border: 1px solid var(--effectColor);
                    color:var(--iconColor);
                    background: var(--themeColor);
                  }
                  .installApp::before{
                    content: "Install App!!";
                    position: absolute;
                    width:340%;
                    height:50%;
                    top:22%;
                    left: -315% ;
                    z-index:-1;
                    background-color: var(--themeColor);
                    border: 1px solid var(--effectColor);
                    border-radius: 22px;
                    line-height: 2;
                    text-shadow: 1px 1px black;
                    animation: help 9s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
                    animation-delay: 3s;
                    overflow: hidden;
                    padding: 0 2vmin;
                  }
                `
            }
        </style>
    </>
}

export default Chat