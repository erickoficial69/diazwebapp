import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineMail
} from 'react-icons/ai'
function Footer() {
    return <>
            <footer>
                <span>
                    <h2>About</h2>
                <article>
                    
                    <b>Diaz web app</b>
                    <p>
                    Plataforma dedicada al desarrollo de aplicaciones web, aplicaciones móviles y otros tipos de software, para gestionar e impulsar todo tipo de prendimiento, negocios y empresas a través del desarrollo tecnológico.
                    </p>

                    <b>contácto</b>
                    <ul className="tecnologies" >
                        <li>
                            <a target='blank' href="https://facebook.com/diazwebapp">
                                <AiOutlineFacebook/>
                                facebook
                            </a> 
                        </li>
                        <li>
                            <a target='blank' href="mailto:diazwebapp@gmail.com">
                                <AiOutlineMail/>
                                gmail
                            </a>
                        </li>
                    </ul>
                </article>
                
                <article>
                    <b>Erick Díaz</b>
                    <p>
                         Emprendedor, desarrollador de software y administrador de sistemas. Fundador y representante de la plataforma <b>Diaz web app</b>
                    </p>

                    <b>contácto</b>

                    <ul className="tecnologies">
                        <li>
                            <a target='blank' href="https://facebook.com/erickoficial69">
                                <AiOutlineFacebook/>
                                facebook
                            </a> 
                        </li>
                        <li>
                            <a target='blank' href="https://instagram.com/erickoficial69">
                                <AiOutlineInstagram/>
                                instagram
                            </a>
                        </li>
                        <li>
                            <a target='blank' href="mailto:erickoficial69@gmail.com">
                                <AiOutlineMail/>
                                gmail
                            </a>
                        </li>
                    </ul>
                </article>
                </span>
            </footer>
            <style>
                {
                    `
                    footer{
                        grid-column: 1 / span 16;
                        background:var(--themeColor);
                    }
                    footer span{
                        grid-column: 2 / span 14;
                        display:flex;
                        flex-flow:column;
                        justify-content:space-between;
                    }
                    footer span h2{
                        width:100%;
                        text-align:center;
                        line-height:2;
                    }
                    footer span article b{
                        width:100%;
                        text-align:center;
                    }
                    footer span article p{
                        padding:2vmin;
                    }
                    footer span article{
                        width:99%;
                    }
                    @media (min-width:512px){
                        footer span{
                            flex-flow:row wrap;
                        }
                        footer span article{
                            width:48%;
                        }
                    }
                    `
                }
            </style>
        </>
}

export {Footer}