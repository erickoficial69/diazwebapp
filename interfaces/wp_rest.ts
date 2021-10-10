import { WP_POST } from "./wp_posts";

export type WP_RESP_POSTS={
    req_status_number:number
    req_error_message:any
    total: number,
    totalpages: number,
    current:number,
    posts:WP_POST[]
}
