import Head from 'next/head'
import {Navbar} from '../components/navbar'
import Block1 from '../components/home/block1-home'
import Block2 from '../components/home/block2-home'
import Block3 from '../components/home/block3-home'
import {Footer} from '../components/footer'


function Home() {
  const title = 'home'
  
  return <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Diaz Web App, tambien conocido como dwa, desarrollo de Software, mobile and web apps development, marketing online and seo strategies todo lo que necesitas para hacer crecer tu negocio ." />
      </Head>
      <Navbar navStatus={title} />

      <main>
      <Block1/>
      <Block2/>
      <Block3/>
      <Footer/>
      </main>
  </>

}

export default Home
