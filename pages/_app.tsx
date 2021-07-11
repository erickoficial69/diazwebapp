import { AppProps } from "next/app";
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { App_provider } from "../context/wp_context/app_context";
import Head from 'next/head'
import { CriticalCSS } from "../components/styled_components/CriticalCSS";


function Myapp({ Component, pageProps }: AppProps) {
 
  return <App_provider>
    <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="/logo512.png"/>        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="rgb(15,15,15)" />
        <link href="/index.css" rel="stylesheet" />
        <meta property="fb:pages" content="325128641454324" />
        <meta property="fb:app_id" content="539696167476713" />
      </Head>
      <CriticalCSS />
        <Header {...pageProps} />
        <main>
          <Component {...pageProps}/>
          
        </main>
        <Footer />
      
  </App_provider>;
}

export default Myapp