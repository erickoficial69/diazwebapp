import App from '../components/App'
import {ScreenOne} from '../components/homepage/ScreenOne'
import {ScreenTwo} from '../components/homepage/ScreenTwo'
import {IDevice} from '../interfaces/app.interfaces'
import { Container } from '@material-ui/core'

const IndexPage = ({context}:any) => {
  const deviceDimensions:IDevice = context.deviceDimensions
  return <>
      <ScreenOne deviceDimensions={deviceDimensions} />

      <Container>
        <ScreenTwo />
      </Container>
  </>
}

export default App(IndexPage)
