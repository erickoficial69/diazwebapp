import { AppProps } from "next/app";
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Head from 'next/head'
import "../components/styled_components/critical.css";


function Myapp({ Component, pageProps }: AppProps) {
 
  return <>
    <Head>
    <meta name='application-name' content='Diaz web app' />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
    <meta name='apple-mobile-web-app-title' content='DWA' />
    <meta name='description' content='Best PWA App in the world' />
    <meta name='format-detection' content='telephone=no' />
    <meta name='mobile-web-app-capable' content='yes' />

    <meta name='msapplication-TileColor' content='#2B5797' />
    <meta name='msapplication-tap-highlight' content='no' />

    {/* 
    <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' /> 
    
    <!-- apple splash screen images -->
    <!--
    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_2048.png' sizes='2048x2732' />
    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1668.png' sizes='1668x2224' />
    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1536.png' sizes='1536x2048' />
    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1125.png' sizes='1125x2436' />
    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1242.png' sizes='1242x2208' />
    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_750.png' sizes='750x1334' />
    <link rel='apple-touch-startup-image' href='/static/images/apple_splash_640.png' sizes='640x1136' />

    --> */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="/logo512.png"/>   
        <link rel='icon' type='image/png' sizes='512x512' href='/logo512.png' />     
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="rgb(15,15,15)" />
        <link href="/index.css" rel="stylesheet" />
        <meta property="fb:pages" content="325128641454324" />
        <meta property="fb:app_id" content="539696167476713" />
      </Head>
      
        <header>
          <Header {...pageProps} />
        </header>
        
        <main>
          <Component {...pageProps}/>
        </main>

        <footer>
          <Footer />
        </footer>
  </>;
}

export default Myapp