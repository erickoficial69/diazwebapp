
export const CriticalCSS = ()=>(
    <style jsx global>
      {
         `
         :root {
            --primary-color: #ffac00;
            --secondary-color: rgb(80, 95, 228);
            --font-color: rgb(200, 200, 200);
            --shadow-color: rgb(0,0,0);
            --theme-color: rgb(15, 15, 15);
            --background-color: rgb(25, 25, 25);
            --h-header:60px;
            --h-footer:560px;
        }

        * {
            margin: 0;
            scroll-behavior: smooth;
            box-sizing: border-box;
            transition: all .2s ease;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        a {
            text-decoration: none;
        }

        h1 {
            font-size: 2em;
        }

        h2 {
            font-size: 1.7em;
        }

        h3 {
            font-size: 1.5em;
        }

        button {
            cursor: pointer;
        }
         body {
            padding-top:var(--h-header);
            background-color: var(--background-color);
        }
        
        a, body {
            color: var(--font-color);
        }
        
        header{
            position:fixed;top:-1px;left:0;right:0;
            z-index: 101
        }
        footer,header{
            background: var(--theme-color);
        }
        .logo-header {
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
        }
        header .toolbar{
            height:var(--h-header);
            margin:auto;
        }
        header b, header>.toolbar>a {
            display: none
        }
        
        header b {
            margin-left: 5px
        }
        
        nav {
            width: 100%
        }
        
        footer, header,main {
            box-shadow: 0 1px 2px var(--shadow-color);
            width: 100%;
            margin:auto;
            padding: 0;
        }
        
        header .toolbar {
            width: 90vw;
            margin:0 auto;
        }
        main{
            margin-bottom:5px;
            box-shadow:unset;
            border:unset;
        }
        footer .toolbar div {
            min-width: 310px;
            text-align: center;
            padding: 10px 0;
        }

        footer .toolbar div > p {
            padding: 5px;
        }

        footer .toolbar > div > div > a {
            padding: 5px;
            border: 1px solid var(--primary-color);
            border-radius: 5px
        }
        @media(min-width:720px) {
            footer .toolbar{
                display:grid;
                grid-template-rows:1fr 1fr;
                place-items:center;place-content:center;
            }
            footer .toolbar > div {
                width: 50%
            }
            header b, header>.toolbar>a {
                display: flex
            }
            nav {
                width: auto;
            }
        }
        @media(min-width:960px) {
            header .toolbar{
                width: 99%;
            }
        }
        @media(min-width:1280px) {
            .intro>div, footer .toolbar, header .toolbar {
                max-width: 1200px;
            }
        }
        
         `
       } 
     </style>
)