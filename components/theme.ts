import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {grey,pink,green,lightBlue} from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette:{
        primary: {
            main:'rgb(35,35,35)',
            contrastText:green[500]
        },
        secondary: {
            main:lightBlue[900],
        },
        background:{
            default:'rgba(15,15,15, .5)',
            paper:'rgb(35,35,35)'
        },
        text:{
            primary:grey[50],
            secondary:pink[500],
            hint:lightBlue[400],
            disabled:lightBlue[900]
        }
    }
})

export default ThemeProvider