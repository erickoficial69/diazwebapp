import { createContext, Dispatch, useReducer } from "react";
import { App, AppAction, Post } from "../../interfaces/app_interfaces";
import app_reducer from "./app_reducer";

export const initialApp:App = {
    info:{
        authentication:[],
        description:'',
        gmt_offset:'',
        home:'',
        name:'',
        namespaces:[],
        routes:{
            "":{}
        },
        timezone_string:'',
        url:'',
    },
    loader_app:true,
    loader_request:false,
    posts:{
        data:[],
        total:null,
        total_pages:null
    },
    pages:{
        data:[],
        total:null,
        total_pages:null
    },
    files:[]
}
export const default_post:Post={
    id:0,
    author:0,
    comment_status:'',
    content:{rendered:'',protected:false},
    date:'',
    format:'',
    meta:[],
    modified:'',
    ping_status:'',
    slug:'',
    status:'',
    title:{rendered:''},
    type:'',
    _embedded:{
        author: [{}],
        "wp:featuredmedia":[],
        "wp:term": []
    }
}
export const App_context = createContext<{app:App;app_dispatch:Dispatch<AppAction>}>({app:initialApp,app_dispatch:()=>{}})

export const App_provider =({children}:any)=>{
    const [app,app_dispatch] = useReducer(app_reducer,initialApp)
    return <App_context.Provider value={{
        app,app_dispatch
    }} >
        {children}
    </App_context.Provider>
}