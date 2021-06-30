import { App, AppAction } from "../../interfaces/app_interfaces";

function app_reducer(state:App,action:AppAction){
    switch (action.type) {
        case "loader_app":
            return {...state, loader_app:action.payload}
        case "get_app_info":
            return {...state, info:action.payload}
        case "get_all_posts":
            return {...state, posts:action.payload,loader_request:false}
        case "get_posts_by_taxonomy":
            return {...state, posts:action.payload,loader_request:false}
        case "get_post":
            return {...state, post:action.payload,loader_request:false}
        default:
            return state
    }
}

export default app_reducer