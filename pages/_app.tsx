import App, { AppProps, AppContext } from "next/app";
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import socket from 'socket.io-client'
import './index.css'

const io = socket(process.env.WSAPI || '') 

function Myapp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  const [path, setPath] = useState('')

  const navigation_controller = (newruta: string) => {
    if (path === newruta) return
    setPath(newruta)
    setLoading(true)
  }
  useEffect(()=>{
    setPath(window.location.pathname)
  },[])

  pageProps={...pageProps,
    loading, setLoading,
    navigation_controller,
    path, setPath, io
  }
  return <>
    <Head>
      <title>Diaz web app - desarrollo de aplicaciones a la medida</title>
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="logo.png"/>
      <meta name="theme-color" content="rgb(10,10,10)" />
      <meta name="description" content="Desarrollo de aplicaciones web, moviles y soluciones tecnologiocas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión."/>
      <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de aplicaciones moviles, desarrollo de e-commerce, desarrollo tiendas online" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      <meta name="author" content="diaz web app" />
    </Head>
    <Header {...pageProps} />

    <main>
      <Component {...pageProps}/>
    </main>
    {
      loading ? (
        <div className="loader" >
          <img width="44px" src="/icons_svg/sync-outline.svg" alt="" />
        </div>
      ) : null
    }
    <Footer />
  </>;
}

Myapp.getStaticProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)

  return {appProps}
}

export default Myapp