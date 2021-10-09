import { WP_POST } from "./wp_posts";

export type WP_RESP_POSTS={
    total: number,
    totalpages: number,
    current:number,
    posts:WP_POST[]
}