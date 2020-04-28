import {gqlLogin} from '../graphql-querys/index'

class LogginController{
    
    constructor(sockets){
        this.ws = sockets
    }
    checkLogin(setUser,setSession){
        if(localStorage.login){
            setUser(JSON.parse(localStorage.login))
            setSession(true)
        }else{
            const userLogged = {
                id:Date.now(),
                nombre:'invitado',
                apellido:'invitado'
            }
            setUser(userLogged)
            setSession(false)
        }
    }

   async startLogin(dataUser,setUser,setSession){
        
           const query =`{
               login(nombre:"${dataUser}"){
                   id
                   nombre
                   apellido
                   rango
                   estado
                   contrasena
                   correo
               }
            }
           `
           const result = await gqlLogin(query)
            
           if(result.login === false){
                return
            
           }else{
              
                localStorage.login = JSON.stringify(result.login[0])
                setUser(JSON.parse(localStorage.login))
                setSession(true)
           }
        }
}
 
export default LogginController