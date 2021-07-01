import { AppProps } from "next/app";
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { App_provider } from "../context/wp_context/app_context";
import Head from 'next/head'

function Myapp({ Component, pageProps }: AppProps) {
 
  return <App_provider>
    <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png"/>
        <link rel="stylesheet" href="/css/index.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="rgb(10,10,10)" />
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