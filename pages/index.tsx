
import App from '../components/App'
import { DevProducts } from '../components/homepage/DevProducts'
import {ScreenOne} from '../components/homepage/ScreenOne'

const IndexPage = ({context:{deviceDimensions,setLoading}}:any) => {

      return <>
          <ScreenOne deviceDimensions={deviceDimensions} />
          <DevProducts setLoading={setLoading} />
      </>
    }

export default App(IndexPage)
