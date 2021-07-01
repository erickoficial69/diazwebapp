import { AppProps } from "next/app";
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { App_provider } from "../context/wp_context/app_context";
import Head from 'next/head'

function Myapp({ Component, pageProps }: AppProps) {
 
  return <App_provider>
    <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="/logo512.png"/>
        <link rel="preload" href="/css/index.css" as="style"/>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="rgb(10,10,10)" />
        <style jsx global >
          {
            `
            :root {
              --primary-color:#ffac00; --secondary-color:rgb(80, 95, 228); --font-color:rgb(200, 200, 200); --shadow-color:rgb(15,15,15); --theme-color:rgb(15,15,15); --background-color:rgb(25, 25, 25); }
          
            * {
                margin: 0;
                scroll-behavior: smooth;
                box-sizing: border-box;
                background: transparent;
                transition: all .2s ease;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            
            a {
                text-decoration: none;
            }
            
            h1 {
                font-size: 2em;
            }
            h3 {
              font-size: 1.5em;
          }
          *::-webkit-scrollbar {
            width: 5px;
            background-color: transparent;
        }
        
        *::-webkit-scrollbar-thumb {
            background-color: var(--primary-color);
        }
        
        .container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 60px calc(100vh - 60px);
            height: 100vh;
            overflow: hidden;
        }
        
        body {
            background-color: var(--background-color);
        }
        
        body,a {
            color: var(--font-color);
        }
        
        header,nav {
            overflow: hidden;
        }
        
        header {
            box-shadow: 0px 1px 1px var(--shadow-color);
        }
        
        .logo-header {
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
        }
        
        header > .toolbar > a, header b {
            display: none;
        }
        
        header b {
            margin-left: 5px;
        }
        
        nav {
            width: 100%;
        }
        
        header,footer {
            width: 100%;
            z-index: 101;
        }
        
        header .toolbar {
            height: 100%;
            background: var(--theme-color);
        }
        
        header .toolbar,footer > div, main > section, .intro > div {
            max-width: 960;
            margin: 0 auto;
            position: relative;
        }
        
        main {
            width: 100%;
            margin: 0 auto;
            padding: 0 ;
            overflow-y: auto;
        }
        
        footer > div {
            min-width: 310px;
            text-align: center;
            padding: 10px 0;
        }
        
        footer > div >p {
            padding: 5px;
        }
        
        footer > div > div > a {
            padding: 5px;
            border: 1px solid var(--primary-color);
            border-radius: 5px;
        }
        
        .icons {
            width: 24px;
            height: 24px;
            background: transparent;
        }
        
        .flex-wrap {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
        }
        
        .flex-nowrap {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }
        
        .icon-button {
            margin: 0 5px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
        }
        
        .icon-button svg,.icon-button > img {
            width: 24px;
            height: 24px;
            margin: 0 5px;
        }
        
        .intro > div {
            position: relative;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            padding: 15vmin 3px;
            margin: auto;
            animation: intro .7s ease;
        }
        
          `
          }
        </style>
      </Head>
      <div className="container">
        <Header {...pageProps} />
        <main>
          <Component {...pageProps}/>
          <Footer />
        </main>
      </div>
  </App_provider>;
}

export default Myapp