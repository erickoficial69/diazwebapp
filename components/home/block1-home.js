
function Block1() {

  return <>
  <div className="paralax intro1" itemScope itemType="http://schema.org/Service">
    <meta itemProp="serviceType" content="Home cleaning" />
          <article itemProp="provider" itemScope itemType="http://schema.org/LocalBusiness">
          <h1 itemProp="name">Desarrollo de software </h1>
          <p>
            Desarrollo de aplicaciones móviles, aplicaciones web y otros tipos de software adaptados a la necesidad del cliente.
            <br/>
            Con Diaz Web App, puedes extender tu negocio y llegar a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión.
            <br/>
            <br/>
            Diaz web app ofrece servicio técnico en equipos y redes informáticas como wifi, lan, modems y routers, de uso empresarial y domestico.
          </p>
          
          </article>

          <img src="/img/logo.png" alt="diaz web app" itemProp="image"/>
      </div>


      <style>
        {
           `  
              .paralax{
                grid-column: 1 / span 16;
                background-image:url(/img/codes.gif);
                background-color:#222;
                background-size:cover;
                background-position:center center;
                background-attachment:fixed;
                background-blend-mode:multiply;
                display:flex;
                flex-flow:row wrap;
                justify-content:center;
                align-items:center;
                align-content:center;
                height:92vh;
              }
              
              .paralax article{
                  order:2;
                  overflow:hidden;
                  margin: 1% 0 0 0;
                }
                .paralax p{
                  padding: 0 7vmin;
                }
                .paralax img{
                  margin-top:2%;
                  height:33%;
                  order:1
                }
              .paralax article h1{
                text-align:center;
                color:white;
              }
              .paralax article p{
                font-size:13px;
                color:white ;
                padding: 2vmin;
                text-align:center;
                text-shadow:0px 0px 1px black;
              }

              @media (min-width: 720px){
                .paralax{
                  align-items:center;
                }
                .paralax article{
                  width:55%;
                  order:1;
                  margin-right:7%;
                  display:flex;
                  flex-flow:column;
                  align-items:center;
                  align-content:center;
                  justify-content:center;
                }
                .paralax img{
                  order:2;
                  height:50%;
                }
                .paralax article p{
                  font-size:3vh;
                  padding: 1vmin;
                  text-align:justify;
                }
              }
            `}
      </style>
  </>
}

export default Block1
