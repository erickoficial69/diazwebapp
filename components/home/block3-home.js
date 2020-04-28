
function Block3(){ return(
  <>
  <section className='plusservice'>
    <h1>Ofrecemos paquetes completos</h1>
    <article>
        <h2>Social Management</h2>
        <p>
        Equipo de Community Management para promoción de apps y dar el mejor complemento a nuestros proyectos. Creamos en plan de comunicación y actuación en las redes sociales más importantes.
        </p>
    </article>
    <article>
        <h2>SEO/SEM</h2>
        <p>
        Elaboramos estrategias SEO/SEM para obtener los mejores resultados, para aumentar la visibilidad y tráfico orgánico para aparecer en las mejores posiciones en los motores de búsquedas.
        </p>
    </article> 
    <article>
        <h2>Promocion de apps</h2>
        <p>
        Nuestro equipo especializado ayudará en el proceso promoción optimizando tu app móvil para conseguir aparecer en los primeros resultados de búsqueda en los Market Places y lograr descargas.
        </p>
    </article>
  </section>
    <style>
      {
        `
        .plusservice{
          grid-column: 2 / span 14;
          display:grid;
          grid-template-columns:repeat(1,1fr);
          padding:3vmin 1vmin;
        }
        .plusservice h1{
          line-height:2;
        }
        .plusservice article{
          margin-botoom:2vmin;
          border-radius:5px;
          box-shadow:0px 0px 1px white;
          padding:2vmin;
        }
        .plusservice article h2{
          line-height:2;
          font-weight:400;
        }
        @media(min-width:719px){
          .plusservice {
            grid-template-columns:repeat(3,1fr);
            grid-gap:2vmin;
          }
          .plusservice h1{
            grid-column:1 / span 3;
            line-height:2;
          }
        }
        `
      }
    </style>
  </>
)}
export default Block3
