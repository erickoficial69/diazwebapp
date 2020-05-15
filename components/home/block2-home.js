import Link from 'next/link'

function Block2({Tool,Html5,Mobile}) {
  return <>
  <ul itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog" className='block2'>
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/OfferCatalog" >
        
            <h2 itemProp="name">Web apps</h2>

            <Html5 className="flow" />
            
            <p itemProp="description">
              Desarrollamos plataformas web para particulares y comercios con tecnologías como <b>progressive web apps (pwa) y webasembly (wasm)</b>
            </p>
            <Link href="/web-apps-development">
                <a style={{background:"var(--themeColor)"}} href="/web-apps-development.html">
                  Ver más
                </a>
            </Link>
        </li> 
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/OfferCatalog" >
        
            <h2 itemProp="name">Movil apps</h2>

            <Mobile className="flow flow2" />

            <p itemProp="description">
              Desarrollamos aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado.
            </p>
            <Link href="/mobile-apps-development">
              
                <a style={{background:"var(--themeColor)"}} href="/mobile-apps-development.html">
                  Ver más
                </a>
            </Link>
        </li>
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/OfferCatalog" >
        
            <h2 itemProp="name">Adm. Sistemas</h2>
            
            <Tool className="flow" />
            
            <p itemProp="description">
              Mejora la experiencia de tus clientes optimizando velocidad y seguridad, reduce costos de servicios, migración y escalado de aplicaciones.
            </p>
            
              
              <Link href="/adm-sistemas">
                <a style={{background:"var(--themeColor)"}} href="/sdm-sistemas.html">
                  Ver más
                </a>
              </Link>
            
        </li>
      </ul>
        <style>
           { `
            .block2{
                grid-column: 1 / span 16 ;
                grid-gap:2vmin;
                padding: 5vmin;
                display:grid;
                grid-template-columns:repeat(1,1fr);
                animation: intro1 3s cubic-bezier(0.215, 0.610, 0.355, 1);
                align-content:center;
                align-items:center;
              }
              .block2 li{
                border-radius:5px;
                box-shadow:0px 0px 2px white;
                padding:2vmin;
                height:335px;
                overflow:hidden;
                display:flex;
                flex-flow:column;
                justify-content:space-between;              
              }
              .block2 li h2{
                  text-align:center;
              }
            .block2 li a{
              padding:2vmin;
              text-align:center;
          }
            
              @media (min-width:512px){
                  .block2{
                    grid-template-columns:repeat(2,1fr);
                  }
              }
              @media (min-width:755px){
                .block2{
                    grid-template-columns:repeat(3,1fr);
                }
            }
            `}
      </style>
  </>
              
}

export default Block2
