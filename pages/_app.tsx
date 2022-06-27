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
    <meta name='format-detection' content='telephone=yes' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='msapplication-TileColor' content='#2B5797' />
    <meta name='msapplication-tap-highlight' content='no' />
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
        
          <Component {...pageProps}/>

        <footer>
          <Footer />
        </footer>
  </>;
}

export default Myapp