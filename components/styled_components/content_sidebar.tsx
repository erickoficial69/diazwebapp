type Params={
    show_cats:boolean
}
export const Styled_sidebar = ({show_cats}:Params)=>(
    <style jsx global>
      {
         `
         main > section:nth-child(2){
            padding: 45px 2px;
         }
         main > section > h1, main > section > p{
           text-align:center;
         }
         main > section > p{
           padding:10px;
         }
          main > aside{
            background:var(--primary-color);
          }
          main > aside ul{
            list-style:none;
          }
          main > aside > .aside_cats{
            background:var(--background-color);
            position:fixed;
            width:250px;
            height:100%;
            overflow:auto;
            top:0;
            left:${show_cats?'0':'-100%'};
            transition:all .3s ease;
          }
          main > aside > .aside_cats a{
            display:block;
          }
          main > section,main > footer{
            padding:0 5px;
          }
          @media(min-width:960px){
            main > aside{
              background: var(--background-color);
              overflow:auto;
              padding: 15px 0;
            }
        
            main > section:nth-child(2){
                padding:10px 2px;
              }

            main > aside .aside_cats{
              flex-flow:column;
              width:200px;
              left:unset;
              position:relative;
            }
            main > section,main > footer{
              margin-left:200px;
              width:calc(100% - 200px);
            }
            .container_posts_1{
              grid-template-columns:repeat(6,12vw);
              grid-auto-rows:12vw;
            }
          }
          @media(min-width:1080px){
            main > section,main > footer{
              max-width:1200px;
            }
          }
          @media(min-width:1280px){
            main{
              max-width:1200px;
            }
            .container_posts_1{
              grid-template-columns:repeat(6,155px);
              grid-auto-rows:155px;
            }
          }
          @media(min-width:1366px){
            main{
              max-width:1280px;
            }
            .container_posts_1{
              grid-template-columns:repeat(6,170px);
              grid-auto-rows:170px;
            }
          }
         `
       } 
     </style>
)