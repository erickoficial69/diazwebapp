function camera(videoElement:HTMLVideoElement,containerVideo:HTMLDivElement,setStatus:any){
    navigator.getUserMedia({
        video:true,
        audio:false
    },
    stream=>{
        videoElement.srcObject = stream
        videoElement.style.display='none'
        setStatus(true)
    },
    err=>{
        console.log(err)
        setStatus(false)
    })

    const play = ()=>{
        const canvas = document.createElement('canvas')
        canvas.style.width = '100%'
        canvas.style.height = '100%'
            const context = canvas.getContext('2d')
    
            canvas.toDataURL('image/webp', .5)
            setInterval(()=>{
                context.drawImage(videoElement,0,0)
            },100)
    
            console.log(context)
    
            containerVideo.append(canvas)
    }

    const stop = ()=>{
        return alert('stop')
    }

    return {play,stop}
}


export default camera
