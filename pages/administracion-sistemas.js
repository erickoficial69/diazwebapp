
import { useEffect, useState } from 'react'
import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'
import Head from 'next/head'
import {devTools} from '../components/graphql-querys/index'
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;
/** api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

 d64267005e28744785d5111a417b7f4f */

function WebApps() {
  const title = 'administracion de sistemas'
  
  return <>
      <Head>
        <title>{title} - Diaz web App</title>
        <meta name="description" content="DevOps,System Admin,backend developer, optimitations,performance" />
      </Head>
      <Navbar navStatus={title} />
  <main >
      <div className='webstyle intro1' itemScope itemType="http://schema.org/Service">
        <h1 itemProp="name">Administracion de Sistemas</h1>
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
                background-size: cover;
                background-attachment:fixed;
                background-repeat:no-repeat;
                background-position: top center;
                background-blend-mode:multiply;
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
