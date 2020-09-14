import Store,{Consumer} from '../context/Provider'
import {Header} from './Header'
import ThemeProvider,{theme} from './theme'

import Head from 'next/head'
import { Footer } from './Footer'
import {CircularProgress} from '@material-ui/core'

const WrapperConsumer  = (Component:any)=>{
    return (props:any) => <Store>
                        <Consumer>
                            {
                                (context:any) =>(
                                    <ThemeProvider theme={theme} >
                                        <Head>
                                            <title>DWA - home</title>
                                            <link rel="stylesheet" href="/index.css"/>
                                            <link rel="manifest" href="/site.webmanifest" />
                                            <link rel="shortcut icon" href="/favicon.ico" />
                                        </Head>
                                        <Header {...props} context={context}/>
                                        <main style={{paddingTop:'50px'}}>
                                            <Component {...props} context={context} /> 
                                            {
                                                context.loading?(
                                                    <div style={{
                                                        position:'fixed',
                                                        left:0,
                                                        top:0,
                                                        height:'100vh',
                                                        width:'100vw',
                                                        background:'rgba(0,0,0, .5)',
                                                        display:'flex',
                                                        flexFlow:'row',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                        <CircularProgress color="secondary"/>
                                                    </div>
                                                ):null
                                            }
                                        </main>
                                        <Footer/>
                                    </ThemeProvider>
                                )
                            }
                        </Consumer>
                    </Store>
}

export default WrapperConsumer