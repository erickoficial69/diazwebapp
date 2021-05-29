import { AppProps } from "next/app";
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import './index.css'
import { Post_Provider } from "../context/posts/Post_Context";
import { App_provider } from "../context/wp_context/app_context";

function Myapp({ Component, pageProps }: AppProps) {
 
  return <App_provider>
    <Post_Provider>
      <Head>
        <title>Diaz web app - desarrollo de aplicaciones a la medida</title>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="logo.png"/>
        <meta name="theme-color" content="rgb(10,10,10)" />
        <meta name="description" content="Diaz web app, Desarrollo de software y soluciones tecnologiocas adaptadas a la necesidad del cliente. Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión."/>
        <meta name="keywords" content="diaz web app, desarrollo web, desarrollo de aplicaciones moviles, desarrollo de e-commerce, desarrollo tiendas online, desarrollo de software" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="author" content="diaz web app" />
      </Head>
      <Header {...pageProps} />
      <Component {...pageProps}/>
      <Footer />
    
  </Post_Provider>
  </App_provider>;
}

export default Myapp