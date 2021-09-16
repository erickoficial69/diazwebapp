import { Facebook, Instagram, Mail } from "./icons"

export const Footer = () => {
    return (
        <footer id="contact" className="flex-wrap" >
           <div className="toolbar">
                <div>
                    <h3>Diaz web app</h3>
                    <p>
                        Plataforma dedicada al desarrollo de aplicaciones web, aplicaciones móviles y otros tipos de software, para gestionar e impulsar todo tipo de prendimiento, negocios y empresas a través del desarrollo tecnológico.
                    </p>

                    <h4 style={{textAlign:'center',margin:'5px auto'}}>Contácto</h4>
                    <div className="flex-wrap" style={{justifyContent:'flex-start'}} >
                        <a className="icon-button" target='blank' href="https://facebook.com/diazwebapp">
                            <Facebook/> Facebook
                        </a>
                        <a className="icon-button" target='blank' href="mailto:diazwebapp@gmail.com">
                            <Mail/> Gmail
                        </a>
                    </div>
                </div>

                <div>
                        <h3>Erick Díaz</h3>

                        <p>
                            Emprendedor, desarrollador de software y administrador de sistemas. Fundador y representante de la plataforma <b>Diaz web app</b>
                        </p>

                        <h4 style={{textAlign:'center',margin:'5px auto'}}>Contácto</h4>

                        <div className="flex-wrap" style={{justifyContent:'flex-start'}}>
                            <a className="icon-button" target='blank' href="https://facebook.com/erickoficial69">
                                <Facebook/> Facebook
                            </a>
                            <a className="icon-button" target='blank' href="https://instagram.com/erickoficial69">
                                <Instagram/> Instagram
                            </a>
                            <a className="icon-button" target='blank' href="mailto:erickoficial69@gmail.com">
                                <Mail/> Gmail
                            </a>
                        </div>
                </div>
           </div>
        </footer>
    )
}