
export const Styled_sidebar = ()=>(
    <style jsx global>
      {
         ` 
         main > aside{
           display:grid;
           grid-template-columns:1fr;
           gap:10px;
           width:95vw;
           margin: 0 auto;
         }
         main > aside ul{
                list-style:none;
                background:var(--theme-color);
                margin-top:10px;
                border-radius:10px;
                padding:0;
                padding-bottom:5px;
              }
          main > aside ul > p{
            padding:5px;
            border-bottom:1px solid var(--shadow-color);
            text-align:center;
            text-transform:uppercase;
            color:var(--secondary-color);
          }
          main > aside ul li{
            margin:10px 5px;
          }
          main > aside ul a{
            display:block;
          }
          main > aside ul a:hover{
            color:var(--primary-color);
          }
          @media(min-width:512px){
            main > aside{
              grid-template-columns:repeat(2,1fr);
            }
          }
          @media(min-width:640px){
            main > aside{
              grid-template-columns:repeat(3,1fr);
            }
          }
          @media(min-width:800px){
            main > aside{
              grid-template-columns:repeat(4,1fr);
            }
          }
          @media(min-width:960px) {
              main{
                  display:grid;
                  grid-template-columns:1fr 250px;
                  gap:10px;
              }
              header .toolbar, main, main > section {
                  width: 99%;
              }
              main > aside{
                height:max-content;
                grid-template-columns:1fr;
                width:99%;
                margin-right:1%;
              }
             
              main > section{
                grid-column: 1 / span 1;
              }
              .container_posts_1 {
                  grid-template-columns: repeat(3, 1fr);
                  padding: 1vw;
                  border-radius: 10px
              }
          }
          
          @media(min-width:1280px) {
              .container_posts_1 {
                  grid-template-columns: repeat(6, 1fr);
                  gap: 5px;
                  padding: 5px
              }
              main, header .toolbar{
                max-width:1200px;
              }
          }
         `
       } 
     </style>
)