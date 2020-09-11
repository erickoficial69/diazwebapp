import { Facebook, Instagram, Mail } from '@material-ui/icons'
import { Grid, Typography, Button, Container } from '@material-ui/core'

export const Footer = () => {
    return (
        <Grid container component="footer" style={{ background: 'rgb(35,35,35)' }}>
            <Grid item xs={12} sm={6} >
                <Container >
                    <Typography color="textPrimary" variant="body1" style={{margin:'10px 0',textAlign:'center'}}>Diaz web app</Typography>
                    <Typography paragraph variant="caption" color="textPrimary" >
                        Plataforma dedicada al desarrollo de aplicaciones web, aplicaciones móviles y otros tipos de software, para gestionar e impulsar todo tipo de prendimiento, negocios y empresas a través del desarrollo tecnológico.
                    </Typography>

                    <Typography variant="body2" color="textPrimary">Contácto</Typography>
                    <Grid container component="ul" >
                        <Grid item color="textPrimary" component="li">
                            <a target='blank' href="https://facebook.com/diazwebapp">
                                <Button style={{margin:'0 2px'}} size="small" variant="outlined" startIcon={<Facebook color="secondary" />} >
                                    Facebook
                                </Button>
                            </a>
                        </Grid>
                        <Grid item color="textPrimary" component="li">
                            <a target='blank' href="mailto:diazwebapp@gmail.com">
                                <Button style={{margin:'0 2px'}} size="small" variant="outlined" startIcon={<Mail color="secondary" />} >
                                    Gmail
                                </Button>
                            </a>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

            <Grid item xs={12} sm={6} >
                <Container>
                    <Typography color="textPrimary" variant="body1" style={{margin:'10px 0',textAlign:'center'}}>Erick Díaz</Typography>

                    <Typography color="textPrimary" paragraph variant="caption">
                        Emprendedor, desarrollador de software y administrador de sistemas. Fundador y representante de la plataforma <b>Diaz web app</b>
                    </Typography>

                    <Typography color="textPrimary" variant="body2">Contácto</Typography>

                    <Grid container component="ul" >
                        <Grid item component="li">
                            <a target='blank' href="https://facebook.com/erickoficial69">
                                <Button style={{margin:'0 2px'}} size="small" variant="outlined" startIcon={<Facebook color="secondary" />} >
                                    Facebook
                                </Button>
                            </a>
                        </Grid>
                        <Grid item component="li">
                            <a target='blank' href="https://instagram.com/erickoficial69">
                                <Button style={{margin:'0 2px'}} size="small" variant="outlined" startIcon={<Instagram color="secondary" />} >
                                    Instagram
                                </Button>
                            </a>
                        </Grid>
                        <Grid item component="li">
                            <a target='blank' href="mailto:erickoficial69@gmail.com">
                                <Button style={{margin:'0 2px'}} size="small" variant="outlined" startIcon={<Mail color="secondary" />}>
                                    Gmail
                                </Button>
                            </a>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}