import { WP_File } from "../../interfaces/types_media"
import { default_file } from "./File_context"

export async function get_one_file(id:string | number){
    try{
        const req_file = await fetch(`${process.env.api}/media/${id}`)
        if(req_file.status == 404) return default_file
        const file:WP_File = await req_file.json()
        return file
    }catch(err){
        console.log( err )
        return default_file
    }

}
export async function get_all_files(){
    try{
        const req_files = await fetch(`${process.env.api}/media`)
        const files:WP_File[] = await req_files.json()
        if(req_files.status == 404) return []
        return files
    }catch(err){
        console.log( err )
        return []
    }

}