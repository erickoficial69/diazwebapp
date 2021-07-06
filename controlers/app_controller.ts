import { App, Post, WPResp } from "../interfaces/app_interfaces"
import {initialApp} from '../context/wp_context/app_context'
import { wp_post_types } from "../wpconfig"

type GetPostParams={
    rest_base?:string
    slug?:string
    taxonomy?:string
    term?:string
    page?:number
    per_page?:number
}

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

export const get_all_posts = async({rest_base,page,per_page}:GetPostParams)=>{
        const path = rest_base == 'pages' ?`${process.env.API}/wp/v2/${rest_base}/?_embed=true&page=${page?page:'1'}`:`${process.env.API}/wp/v2/${rest_base}/?_embed=true&page=${page?page:'1'}&per_page=${per_page?per_page:'6'}`
    
        const req = await fetch(path)
        const resp:Post[] = await req.json()

        const wp_data:WPResp={
            data: resp,
            total:req.headers.get('x-wp-total'),
            total_pages: req.headers.get('x-wp-totalpages')
        } 
        return wp_data
        
}
export const get_posts_by_taxonomy = async({rest_base,taxonomy,term,page,per_page}:GetPostParams)=>{
    const req_tax = await fetch(`${process.env.API}/wp/v2/${taxonomy}?slug=${term}`)
    const res_tax:any = await req_tax.json()
    
    const path = rest_base == 'pages' ?`${process.env.API}/wp/v2/${rest_base}?_embed=true`:`${process.env.API}/wp/v2/${rest_base}?_embed=true&${taxonomy}=${res_tax[0].id}&page=${page?page:'1'}&per_page=${per_page?per_page:'6'}`
    
    const req_posts = await fetch(path)
    const resp:Post[] = await req_posts.json()
    const wp_data:WPResp={
        data: resp,
        total: req_posts.headers.get('x-wp-total'),
        total_pages: req_posts.headers.get('x-wp-totalpages')
    }
    return wp_data
}
export const get_post = async({rest_base,slug}:GetPostParams)=>{
    const path = rest_base == 'pages' ?`${process.env.API}/wp/v2/${rest_base}?_embed=true&slug=${slug}`:`${process.env.API}/wp/v2/${rest_base}?_embed=true&$&slug=${slug}`

    try {
        const req = await fetch(path)
        const res:Post[] = await req.json()
        return res[0]
    } catch (error) {
        console.log(error)
        return 
    }
}

export const get_post_type = async({slug}:GetPostParams)=>{
    
        const req = await fetch(`${process.env.API}/wp/v2/types/${slug}`)
        const res = await req.json()
        return res
}
export const get_posts_paths = async ()=>{
    
    const paths:any[] = []
    for(let post_type of wp_post_types){
        const path = post_type.rest_base == 'pages' ?`${process.env.API}/wp/v2/${post_type.rest_base}`:`${process.env.API}/wp/v2/${post_type.rest_base}?per_page=100`
        const req_ = await fetch(path)
        const res:any[] = await req_.json()
        if(res && res.length > 0){
            for(let post of res){
                paths.push({params:{rest_base:post_type.rest_base,slug:post.slug}})
            }
        }
    }
    return paths
}