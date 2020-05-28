import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;
/** d64267005e28744785d5111a417b7f4f */
  const options = {
    enableHighAccuracy: true
    }

export default class GetGeolocation {

    getCurrentPosition(setLocation) {
      async function getLocation(){
        const coordinates = await Geolocation.getCurrentPosition();
          const ubi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.coords.latitude}&lon=${coordinates.coords.longitude}&appid=d64267005e28744785d5111a417b7f4f`)
          console.log(coordinates.coords.latitude)
          const res = await ubi.json() 
          setLocation(res)
      }
      try{
        getLocation()
      }catch(err){
        getLocation()
      }
      
    }
  
   watchPosition(setLocation) {
      const watch = ()=>{
        Geolocation.watchPosition(options, async (position, err) => {
          if(position){
            const ubi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=d64267005e28744785d5111a417b7f4f`)
            
            const res = await ubi.json()
            setLocation(res)
          }
          
        })
      }

    try{ 
      watch()
    }catch(err){
      watch()
        } 
    }
  }