import Image from 'next/image'
import { useEffect, useState} from 'react'
import { get_one_file } from '../context/files/files_api_controllers'
import { default_file } from '../context/files/File_context'
import { WP_File } from '../interfaces/types_media'
import Loader_app from './loader_app'

type Props={
    id:string | number
    alt:string | undefined 
}

const Thumb = ({id,alt}:Props)=>{
    const [thumb,setThumb] = useState<WP_File>(default_file)
    const [load,setLoad] = useState(false)

    useEffect(()=>{
        (async()=>{
            setLoad(true)
            setThumb(await get_one_file(id))
            setLoad(false)
        })()
    },[])
    
    return load?(
        <Loader_app />
    ):<Image width="100%" height="100%" src={thumb.source_url} alt={alt} />
}

export default Thumb