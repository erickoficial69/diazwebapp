import { File_Action, State_Files } from "../../interfaces/types_media";

export function files_reducer (state_files:State_Files,action:File_Action){
    switch (action.type) {
        case 'req':
            return {...state_files,req:true}
        case 'get_all_files':
            return {...state_files, all_files:action.payload}
        case 'get_file':
            return {...state_files, file:action.payload}
        default:
            return state_files
    }
}