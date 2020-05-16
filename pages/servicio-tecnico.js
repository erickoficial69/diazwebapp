import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'
import Head from 'next/head'
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;
/** api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

 d64267005e28744785d5111a417b7f4f */

function WebApps() {
  const title = 'serv. técnico'
  
  return <>
      <Head>
        <title>{title} - Diaz web App</title>
        <meta name="description" content="Servicion técnico, computadores, smartphones, mobiles,internet,optimitations,performance" />
      </Head>
      <Navbar navStatus={title} />
  <main >
      <div className='webstyle intro1' itemScope itemType="http://schema.org/Service">
        <h1 itemProp="name">Servicio y soporte técnico</h1>
        <p itemProp="description">
            Próximamente disponible.
        </p>
      </div> 
      <Footer/>
     
    </main> 
    <style>
        {
           `  
            section{
                grid-column: 2 / span 14;
                margin: 2vmin auto;
              }
            section article{
                margin:2vmin auto;
              }
            section article h2{
                text-align:center;
              }
              .webstyle{
                grid-column: 1 / span 16 ;
                background-color:#222;
                padding:2vmin 8vmin;
                display: flex;
                flex-flow:column;
                justify-content:center;
                align-items:center;
                height:72vh;
              }
              .webstyle h1{
                text-align:center;
                color:white;
              }
              .webstyle p{
                font-size:3vmax;
                color:white;
              }
              @media (min-width:719px){
                .webstyle p{
                  width:75%;
                  font-size:4vh;
                }
              }
            `}
      </style>
  </>
  
}

export default WebApps
