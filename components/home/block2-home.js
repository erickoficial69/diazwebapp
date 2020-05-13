import Link from 'next/link'
import {MenuItem} from '@material-ui/core'

function Block2() {
  return <>
  <ul itemprop="hasOfferCatalog" itemscope itemtype="http://schema.org/OfferCatalog" className='block2'>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/OfferCatalog" >
        
            <h2 itemprop="name">Web apps</h2>
            <img style={{ width: '90%', maxWidth: '100vmin', }} src='img/webResponsive.gif' alt="frontend apps" itemprop="image"/>
            
            <p itemprop="description">
              Desarrollamos plataformas web para particulares y comercios con tecnologías como <b>progressive web apps (pwa) y webasembly (wasm)</b>
            </p>
            <Link href="/web-apps-dvelopment">
                <a style={{background:"var(--themeColor)"}} href="/web-apps-dvelopment.html">
                  Ver más
                </a>
            </Link>
        </li> 
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/OfferCatalog" >
        
            <h2 itemprop="name">Movil apps</h2>
            <img style={{ width: '90%', maxWidth: '100vmin', }} src='img/mobile-animated.webp' alt="devOps" itemprop="image"/>
            <p itemprop="description">
              Desarrollamos aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado.
            </p>
            <Link href="/mobile-apps-dvelopment">
              
                <a style={{background:"var(--themeColor)"}} href="/mobile-apps-dvelopment.html">
                  Ver más
                </a>
            </Link>
        </li>
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/OfferCatalog" >
        
            <h2 itemprop="name">Servicios devOps</h2>
            <img style={{ width: '90%', maxWidth: '100vmin', }} src='img/support.gif' alt="devOps" itemprop="image"/>
            <p itemprop="description">
              Mejora la experiencia de tus clientes optimizando velocidad y seguridad, reduce costos de servicios en tus aplicaciones, entre muchas ventajas que ofrece un DevOps service.
            </p>
            
              
              <Link href="/devops">
                <a style={{background:"var(--themeColor)"}} href="/devops.html">
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
                background:white;
                border-radius:5px;
                box-shadow:0px 0px 1px white;
                padding:2vmin;
                color:grey;
                height:98vmin;
                overflow:hidden;
                display:flex;
                flex-flow:column;
                justify-content:space-between;              
              }
              .block2 li h2{
                  text-align:center;
                  line-height:2;
                  color:grey;
              }
              .block2 li p{
                color:grey;
              }
              .block2 li b{
                color:grey;
              }
              .block2 li img{
                object-fit:cover;
                width:32vmin;
                height:39vmin;
                margin-bottom:3vmin;
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
