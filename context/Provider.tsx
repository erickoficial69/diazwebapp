import {createContext, useState, useEffect} from 'react'
import {IDevice} from '../interfaces/app.interfaces'
const {Provider,Consumer} = createContext({})

function Store({children}:any){
    const [deviceDimensions,setDeviceDimensions]= useState<IDevice>({width:0,height:0})
    const [loading,setLoading] = useState(true)
    const [path,setPath] = useState('')

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

    useEffect(()=>{
        setPath(document.location.pathname)
        setLoading(false)
    },[])

    return <Provider value={
            {
                deviceDimensions,
                loading,setLoading,
                path,setPath
            }
        } >
        {children}
    </Provider>
}
export {Consumer}
export default Store