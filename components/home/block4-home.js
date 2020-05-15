
function Block3(){ return(
  <>
  <h1 style={
    {
      gridColumn:"2/span 14"
    }
  } >Ofrecemos paquetes completos</h1>
  <ul itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog" className='plusservice'>
    
    <li>
    
        <h2 itemProp="name">Social Management</h2>
        <p itemProp="description">
          Equipo de Community Management para promoción de apps y dar el mejor complemento a nuestros proyectos. Creamos en plan de comunicación y actuación en las redes sociales más importantes.
        </p>
    </li>
    <li>
    
        <h2 itemProp="name">SEO</h2>
        <p itemProp="description">
          Elaboramos estrategias SEO para obtener los mejores resultados, para aumentar la visibilidad y tráfico orgánico para aparecer en las mejores posiciones en los motores de búsquedas.
        </p>
    </li> 
    <li>
    
        <h2 itemProp="name">Promocion de apps</h2>
        <p itemProp="description">
        Nuestro equipo especializado ayudará en el proceso promoción optimizando tu app móvil para conseguir aparecer en los primeros resultados de búsqueda en los Market Places y lograr descargas.
        </p>
    </li>
  </ul>
    <style>
      {
        `
        .plusservice{
          grid-column: 2 / span 14;
          display:grid;
          grid-template-columns:repeat(1,1fr);
          padding:3vmin 1vmin;
        }
        .plusservice li{
          margin:2vmin 0;
          border-radius:5px;
          box-shadow:0px 0px 1px white;
          padding:2vmin;
        }
        .plusservice li h2{
          font-weight:400;
        }
        @media(min-width:719px){
          .plusservice {
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
