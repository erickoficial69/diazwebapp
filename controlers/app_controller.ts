import { App, File, Post } from "../interfaces/app_interfaces"
import {initialApp} from '../context/wp_context/app_context'

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
type GetPostParams={
    rest_base:string
    slug?:string
}
export const get_all_posts = async({rest_base}:GetPostParams)=>{
    try {
        const req = await fetch(`${process.env.API}/wp/v2/${rest_base}/?_embed=true`)
        const res:Post[] = await req.json()
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}

export const get_post = async({rest_base,slug}:GetPostParams)=>{
    try {
        const req = await fetch(`${process.env.API}/wp/v2/${rest_base}/?_embed=true&slug=${slug}`)
        const res:Post[] = await req.json()
        return res[0]
    } catch (error) {
        console.log(error)
        return 
    }
}
export const get_post_type = async({type}:any)=>{
    
        const req = await fetch(`${process.env.API}/wp/v2/types/${type}`)
        const res = await req.json()
        return res
}