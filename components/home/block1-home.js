
function Block1() {

  return <>
  <div className="paralax intro1">
          <article>
          <h1>Desarrollo de sotfware </h1>
          <p>
              Desarrollamos sitios web, aplicaciones, para Android / Ios y otros tipos de sofware adaptados a la necesidad del cliente.
          </p>
          <p>
              Extiende tu negocio y llega a más clientes en cualquier parte del mundo, en cualquier dispositivo y en cualquier conexión. 
          </p>
          <p>
              Ofrecemos consultoría tecnológica necesaria, previo al desarrollo de cualquier proyecto. 
          </p>
          
          </article>

          <img src="/img/logo.png" alt="diaz web app"/>
      </div>


      <style>
        {
           `  
              .paralax{
                grid-column: 1 / span 16;
                background-image:url(/img/codes-white.jpg);
                background-color:#111;
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
                  height:65%;
                  order:2;
                  overflow:hidden;
                  margin: 3% 0 0 0;
                }
                .paralax p{
                  padding: 0 17vmin;
                }
                .paralax img{
                  margin-top:2.5%;
                  height:35%;
                  order:1
                }
              .paralax article h1{
                text-align:center;
                color:white;
              }
              .paralax article p{
                font-size:15px;
                color:white ;
                padding: 3vmin;
                text-align:center;
                text-shadow:0px 0px 1px black;
              }

              @media (min-width: 720px){
                .paralax{
                  align-items:center;
                }
                .paralax article{
                  height:85%;
                  width:55%;
                  order:1;
                  padding-top:5%;
                  margin-right:7%;
                }
                .paralax img{
                  order:2;
                  height:50%;
                  margin-top:-8%;
                }
                .paralax article p{
                  font-size:4.2vh;
                  padding: 1vmin;
                  text-align:justify;
                }
              }
            `}
      </style>
  </>
}

export default Block1
