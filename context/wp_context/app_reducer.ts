import { App, AppAction } from "../../interfaces/app_interfaces";

function app_reducer(state:App,action:AppAction){
    switch (action.type) {
        case "loader_app":
            return {...state, loader_app:true}
        case "get_app_info":
            return action.payload
    
        default:
            return state
    }
}

export default app_reducer