class Notifications{
    
    activateNotificatons = async ()=>{
        const sw = await navigator.serviceWorker.getRegistration()
        if(!sw){
            return 
        }
        window.Notification.requestPermission()
    }

    async appInstalled(){
        const sw = await navigator.serviceWorker.getRegistration()
        if(!sw){
            return 
        }
        if(Notification.permission === "blocked"){
            return
        }
        if(Notification.permission !== "granted"){
            window.Notification.requestPermission()

            if(Notification.permission === "granted"){
                return sw.showNotification("App Instalada",{
                    icon:"/favicon.ico"
                })
            }
        }
        if(Notification.permission === "granted"){
            sw.showNotification("App Instalada",{
                icon:"/favicon.ico"
            })
        }
    }
    async wifiOff(){
        const sw = await navigator.serviceWorker.getRegistration()
        if(!sw){
            return 
        }
        if(Notification.permission === "blocked"){
            return
        }
        if(Notification.permission !== "granted"){
            window.Notification.requestPermission()

            if(Notification.permission === "granted"){
                return sw.showNotification("Sin Internet",{
                    icon:"/favicon.ico",
                    vibrate:[200,200,]
                })
            }
        }
        if(Notification.permission === "granted"){
            sw.showNotification("Sin Internet",{
                icon:"/favicon.ico",
                vibrate:[200,200,]
            })
        }
    }
}

export default Notifications