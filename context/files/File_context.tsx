import { createContext, Dispatch, useReducer } from "react";
import { State_Files, WP_File } from "../../interfaces/types_media";
import { files_reducer } from "./files_reducer";

export const default_file:WP_File={
    id: 0,
    alt_text: '',
    author: 0,
    caption: {rendered: ''},
    date:'',
    link: '',
    media_type: '',
    mime_type: '',
    modified: '',
    post: 0,
    slug: '',
    source_url: '/logo512.png'
}

const initial_files_state:State_Files = {
    all_files:[],
    file:default_file,
    req:false
}
export const File_context = createContext<{state_files:State_Files; file_methods:Dispatch<any>}>({state_files:initial_files_state,file_methods:()=>{}})

const File_Provider = ({children}:any)=>{
    const [state_files,file_methods] = useReducer(files_reducer,initial_files_state)
    return <File_context.Provider value={{state_files,file_methods}} >
        {children}
    </File_context.Provider>
}

export default File_Provider