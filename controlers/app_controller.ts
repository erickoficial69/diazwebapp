import { App } from "../interfaces/app_interfaces"
import {initialApp} from '../context/wp_context/app_context'
export const get_app_info = async()=>{
    try {
        const req = await fetch(`http://localhost:5000/wp-json`)
        const res:App = await req.json()
        return res
    } catch (error) {
        console.log(error)
        return initialApp
    }
}