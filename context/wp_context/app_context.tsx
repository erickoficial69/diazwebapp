import { createContext, Dispatch, useEffect, useReducer } from "react";
import { get_app_info } from "../../controlers/app_controller";
import { App, AppAction } from "../../interfaces/app_interfaces";
import app_reducer from "./app_reducer";

export const initialApp:App = {
    authentication:[],
    description:'',
    gmt_offset:'',
    home:'',
    loader_app:false,
    name:'',
    namespaces:[],
    routes:{
        "":{}
    },
    timezone_string:'',
    url:''
}

export const App_context = createContext<{app:App;app_dispatch:Dispatch<AppAction>}>({app:initialApp,app_dispatch:()=>{}})

export const App_provider =({children}:any)=>{
    const [app,app_dispatch] = useReducer(app_reducer,initialApp)
    const start_app = async()=>{
        app_dispatch({type:'loader_app'})
        app_dispatch({
            type:'get_app_info',
            payload: await get_app_info()
        })
    }
    useEffect(()=>{
        start_app()
    },[])
    return <App_context.Provider value={{
        app,app_dispatch
    }} >
        {children}
    </App_context.Provider>
}