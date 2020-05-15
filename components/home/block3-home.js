import {
  AiOutlineDesktop,
  AiOutlineMobile
} from 'react-icons/ai'
import {
  TiWiFiOutline
} from 'react-icons/ti'
import Link from 'next/link'
function Block3(){ return(
  <>
  <h1 style={
    {
      gridColumn:"2/span 14",
      textAlign:"center"
    }
  } >
    Servicio y soporte técnico
  </h1>
  <ul itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog" className='techSupport'>
    
    <li>
    
        <h2 itemProp="name">Computadores</h2>
        
          <AiOutlineDesktop/>
        
        <p itemProp="description">
          Diaz web app ofrece servicio servicio técnico especializado en computadores y laptops de todas las marcas y modelos existentes.
        </p>
        <Link href="/servicio-tecnico">
                <a style={{background:"var(--themeColor)"}} href="/servicio-tecnico.html">
                  Ver más
                </a>
            </Link>
    </li>
    <li>
    
        <h2 itemProp="name">Móviles</h2>
        
          <AiOutlineMobile/>
        
        <p itemProp="description">
          Servicio técnico especializado en smartphones, tablets y equipos móviles tradicionales, trabajamos con fabricantes como samsung y huawei.
        </p>
        <Link href="/servicio-tecnico">
                <a style={{background:"var(--themeColor)"}} href="/servicio-tecnico.html">
                  Ver más
                </a>
            </Link>
    </li> 
    <li>
    
        <h2 itemProp="name">Redes / Internet</h2>
        
          <TiWiFiOutline/>
        
        <p itemProp="description">
          Diaz web app ofrece servico técnico de estructura de redes informáticas como wifi, lan, modems y routers, de uso empresarial y domestico.
        </p>
        <Link href="/servicio-tecnico">
                <a style={{background:"var(--themeColor)"}} href="/servicio-tecnico.html">
                  Ver más
                </a>
            </Link>
    </li>
  </ul>
    <style>
      {
        `
        .techSupport{
          grid-column: 2 / span 14;
          display:grid;
          grid-template-columns:repeat(1,1fr);
          padding:3vmin 1vmin;
        }
        .techSupport li{
          margin:2vmin 0;
          border-radius:5px;
          box-shadow:0px 0px 1px white;
          padding:2vmin;
          display:flex;
          flex-flow:column;
          justify-content:center;
        }
        .techSupport li h2{
          text-align:center;
        }
        .techSupport li a{
          line-height:2;
          text-align:center;
          margin:1vmin ;
        }
        .techSupport li svg{
          width:12vmin;
          height:12vmin;
          margin:1vmin auto;
          position:relative;
        }
        @media(min-width:719px){
          .techSupport {
            grid-template-columns:repeat(3,1fr);
            grid-gap:2vmin;
          }
        }
        `
      }
    </style>
  </>
)}
export default Block3
