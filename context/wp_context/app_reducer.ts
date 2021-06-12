import { App, AppAction } from "../../interfaces/app_interfaces";

function app_reducer(state:App,action:AppAction){
    switch (action.type) {
        case "loader_app":
            return {...state, loader_app:true}
        case "get_app_info":
            return action.payload
        case "get_all_posts":
            return {...state, posts:action.payload}
        case "get_post":
            return {...state, post:action.payload}
        case "get_all_files":
            return {...state, files:action.payload}
        default:
            return state
    }
}

export default app_reducer