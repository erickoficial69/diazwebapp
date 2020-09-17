import App from '../components/App'
import Head from 'next/head'
import { ScreenTwo } from '../components/mobileApps/ScreenTwo'
import {ScreenOne} from '../components/mobileApps/ScreenOne'

const MobileApps=()=>{

  return <>
          <Head>
            <meta name="description" content="Desarrollo de aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado." />
          </Head>

          <ScreenOne />
          <ScreenTwo />
    </>
}

export default App(MobileApps)
