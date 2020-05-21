const installEvent =(setStatusInstall,setPrompt)=>{
    window.addEventListener("beforeinstallprompt", e =>{ 
        // log the platforms provided as options in an install prompt 
        //console.log(e.platforms); // e.g., ["web", "android", "windows"] 
         setStatusInstall(true)
         setPrompt(e)
      })
}

export {
    installEvent
}