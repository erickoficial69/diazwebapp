import Store,{Consumer} from '../context/Provider'
import {Header} from './Header'
import { Context } from 'vm'
import ThemeProvider,{theme} from './theme'

import Head from 'next/head'
import { Footer } from './Footer'

const WrapperConsumer  = (Component:any)=>{
    return (props:any) => <Store>
                        <Consumer>
                            {
                                (context:Context) =>(
                                    <ThemeProvider theme={theme} >
                                        <Head>
                                            <title>DWA - home</title>
                                            <link rel="stylesheet" href="/index.css"/>
                                            <link rel="manifest" href="/site.webmanifest" />
                                            <link rel="shortcut icon" href="/favicon.ico" />
                                        </Head>

                                       <Header {...props} context={context}/>
                                        <main style={{paddingTop:'60px'}}>
                                            <Component {...props} context={context} />
                                        </main>
                                        <Footer/>
                                    </ThemeProvider>
                                )
                            }
                        </Consumer>
                    </Store>
}

export default WrapperConsumer