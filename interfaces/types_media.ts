export type WP_File={
    id: number
    alt_text: string
    author: number
    caption?: {rendered: string}
    date:string
    link: string
    media_type: string
    mime_type: string
    modified: string
    post: number
    slug: string
    source_url: string
}

export type File_Action = 
    | {type:'get_all_files',payload:WP_File[]}
    | {type:'get_file',payload:WP_File}
    | {type:'req'}

export type State_Files ={
    all_files:WP_File[]
    file:WP_File
    req:boolean
}