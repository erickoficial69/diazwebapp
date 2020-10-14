import {PlayArrowOutlined} from '@material-ui/icons'
import { Button } from '@material-ui/core'

export const ButtonStartNow=()=>{

  return <Button variant="contained" color='secondary' startIcon={<PlayArrowOutlined color="inherit"/>} >
            ¡Empieza Ahora!
          </Button>
}


