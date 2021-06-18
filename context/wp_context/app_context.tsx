import { createContext, Dispatch, useEffect, useReducer } from "react";
import { get_all_files, get_all_posts, get_app_info } from "../../controlers/app_controller";
import { App, AppAction, File, Post } from "../../interfaces/app_interfaces";
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
    url:'',
    posts:[],
    pages:[],
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
export const default_file:File={
    id: 2146,
    date: "2021-06-01T23:23:12",
    date_gmt: "2021-06-02T03:23:12",
    guid: {
        rendered: "http://localhost:5000/020620211622604192-png/"
    },
    modified: "2021-06-01T23:23:12",
    modified_gmt: "2021-06-02T03:23:12",
    slug: "020620211622604192-png",
    status: "inherit",
    type: "attachment",
    link: "http://localhost:5000/020620211622604192-png/",
    title: {
        rendered: "020620211622604192.png"
    },
    author: 1,
    description: {
        rendered: "<p class=\"attachment\"><a href='http://localhost:5000/wp-content/uploads/2021/06/020620211622604192.png'><img width=\"300\" height=\"152\" src=\"http://localhost:5000/wp-content/uploads/2021/06/020620211622604192.png\" class=\"attachment-medium size-medium\" alt=\"\" loading=\"lazy\" /></a></p>\n"
    },
    caption: {
        rendered: ""
    },
    alt_text: "",
    media_type: "image",
    mime_type: "image/png",
    media_details: {
        width: 0,
        height: 0,
        file: "",
        },
    post: false,
    source_url: "http://localhost:5000/wp-content/uploads/2021/06/020620211622604192.png",
  
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
        app_dispatch({
            type:'get_all_files',
            payload: await get_all_files()
        })
        app_dispatch({
            type:'get_all_posts',
            payload: await get_all_posts({rest_base:'posts'})
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