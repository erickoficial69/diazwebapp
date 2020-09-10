import {createContext, useState, useEffect} from 'react'
import {IDevice} from '../interfaces/app.interfaces'
const {Provider,Consumer} = createContext({})

function Store({children}:any){
    const [deviceDimensions,setDeviceDimensions]= useState<IDevice>({width:0,height:0})

    useEffect(()=>{
        setDeviceDimensions({
            width:window.innerWidth,
            height:window.innerHeight
        })
        window.addEventListener('resize',()=>{
            setDeviceDimensions({
                width:window.innerWidth,
                height:window.innerHeight
            })
        })
    },[])

    return <Provider value={
            {
                deviceDimensions
            }
        } >
        {children}
    </Provider>
}
export {Consumer}
export default Store