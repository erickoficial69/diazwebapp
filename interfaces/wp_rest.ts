import { WP_POST } from "./wp_posts";
import { WP_PAGE } from "./wp_page";
import { WP_TAXONOMY, WP_TERM } from "./wp_taxonomies";
import { WP_TYPE } from "./wp_types";
/////////// Posts
export type WP_RESP_POSTS={
    req_status_number:number
    req_error_message:any
    total: number,
    totalpages: number,
    current:number,
    posts:WP_POST[]
}

/////////// Pages
export type WP_RESP_PAGES={
    req_status_number:number
    req_error_message:any
    total: number,
    totalpages: number,
    current:number,
    pages:WP_PAGE[]
}

/////// terms
export type WP_RESP_TERMS={
    req_status_number:number
    req_error_message:any
    total: number,
    totalpages: number,
    current:number,
    terms:WP_TERM[]
}
export type WP_RESP_TYPES={
    req_status_number:number
    req_error_message:any
    types:WP_TYPE[]
}
export type WP_RESP_TYPE={
    req_status_number:number
    req_error_message:any
    type:WP_TYPE | null
}
export type WP_RESP_TAXONOMIES={
    req_status_number:number
    req_error_message:any
    taxonomies:WP_TAXONOMY[]
}
export type WP_RESP_TAXONOMY={
    req_status_number:number
    req_error_message:any
    taxonomie:WP_TAXONOMY | null
}