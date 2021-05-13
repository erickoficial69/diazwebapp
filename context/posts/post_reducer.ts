import { Action, PostState } from "../../interfaces/post_interface";

function postsReducer(state: PostState, action: Action): PostState {
    switch (action.type) {
        case 'req':
        return {...state,req:true}

    case 'get_all_posts':
        return {...state, allPosts: action.payload, req:false }
    
    case 'get_post':
        return {...state,post:action.payload, req:false}

    default:
        return state
    }
}
export default postsReducer