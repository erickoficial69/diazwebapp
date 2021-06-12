import { App, File, Post } from "../interfaces/app_interfaces"
import {initialApp,default_post} from '../context/wp_context/app_context'

export const get_app_info = async()=>{
    try {
        const req = await fetch(`${process.env.API}`)
        const res:App = await req.json()
        return res
    } catch (error) {
        console.error(error)
        return initialApp
    }
}
type GetPostParams={
    post_type?:string,
    slug?:string
}
export const get_all_posts = async({post_type}:GetPostParams)=>{
    try {
        const req = await fetch(`${process.env.API}/wp/v2/${post_type?post_type:'posts'}`)
        const res:Post[] = await req.json()
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}

export const get_all_files = async()=>{
    try {
        const req = await fetch(`${process.env.API}/wp/v2/media`)
        const res:File[] = await req.json()
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}

export const get_post = async({post_type,slug}:GetPostParams)=>{
    try {
        const req = await fetch(`${process.env.API}/wp/v2/${post_type?post_type:'posts'}${slug?`?slug=${slug}`:''}`)
        const res:Post[] = await req.json()
        return res[0]
    } catch (error) {
        console.log(error)
        return default_post
    }
}