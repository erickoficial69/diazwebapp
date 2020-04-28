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
