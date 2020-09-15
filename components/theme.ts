import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {grey,pink,lightBlue} from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette:{
        primary: {
            main:grey[900],
            contrastText:"rgb(255,255,255)",
            dark:'rgb(10,10,10)',
            light:grey[800]
        },
        secondary: {
            main:lightBlue[800],
            contrastText:"rgb(255,255,255)",
            dark:lightBlue[900],
            light:lightBlue[500]
        },
        background:{
            default:'rgba(10,10,10, .5)',
            paper:grey[900]
        },
        text:{
            primary:'rgb(255,255,255)',
            secondary:lightBlue[900],
            disabled:grey[900]
        },
        action:{
            active:pink[800]
        }
    }
})

export default ThemeProvider