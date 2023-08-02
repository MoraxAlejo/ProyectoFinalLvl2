"use client"
import { BigCard } from "../../componentes/Bigcard/BigCard"
import { Cards } from "../../componentes/Cards/Cards"
import { Icons } from "../../componentes/Icons"
import { Nav } from "../../componentes/Nav/Nav"
import { useState, useEffect } from "react"
export default function Home() {
  const [grados , setGrados] = useState("metric")
  const KEY = "fb5f1762203630e3519254f88d5c6496";
  const  [city, setCity] = useState('Cochabamba');
  const [datos, setDatos] = useState();

    useEffect(() => {
        const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=${grados}`)
        Promise.all([promesa]).then(async (values) => {
            const data = await values[0].json();
            if (data.cod === '404') {
              alert("Ciudad no encontrada, Porfavor Introduzca una ciudad existente u otra ciudad");
            } else {
              setDatos(data);
            }
        })
    }, [city , grados]); 

const [datosdias, setDatosDias] = useState([]);

useEffect(() => {
  const promes = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`);
  Promise.all([promes]).then(async (values) => {
    const datasiguientes = await values[0].json();
    if (datasiguientes.cod === '404') {
      alert("Ciudad no encontrada, Porfavor Introduzca una ciudad existente u otra ciudad");
    } else {
      // Obtener los datos para los próximos 5 días
      const datosProximosCincoDias = datasiguientes.list.filter((dato, index) => index % 8 === 0);
      setDatosDias(datosProximosCincoDias);
    }
  })
}, [city]);

console.log(datosdias)


// codigo para la geolocation de tu ubicacion 

const mi_ubicacion = () => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitud}&longitude=${longitud}&localityLanguage=en`);
    const data = await response.json();
    setCity(data.locality);
  });
};
  const tiempo = datos?.weather[0].main
  if (tiempo == "Rain") {
    return (
    <> 
    <Nav setCity = {setCity}   />
    <div className='padre'>
      <BigCard datosdias ={datosdias} grados = {grados} imagen = "/HeavyRain.png" datos = {datos} mi_ubicacion = {mi_ubicacion} />
      <Cards datosdias ={datosdias} grados={grados} setGrados={setGrados}  datos = {datos} />
    </div>
    </>
  )
  } else if (tiempo == "Clear") {
    return (
    <> 
    <Nav setCity = {setCity}   />
    <div className='padre'>
      <BigCard datosdias ={datosdias} grados = {grados} imagen = "/Clear.png" datos = {datos} mi_ubicacion = {mi_ubicacion} />
      <Cards datosdias ={datosdias} grados={grados} setGrados={setGrados}   datos = {datos} />
    </div>
    </>
  ) 
    } else if (tiempo == "Clouds") {
    return (
    <> 
    
    <Nav setCity = {setCity}   />
    <div className='padre'>
      <BigCard datosdias ={datosdias} grados = {grados} imagen = "/HeavyCloud.png" datos = {datos} mi_ubicacion = {mi_ubicacion} />
      <Cards datosdias ={datosdias} grados={grados} setGrados={setGrados}  datos = {datos} />
    </div>
    </>
  )
    } 
    else if (tiempo == "Thunderstorm") {
    return (
    <> 
    <Nav setCity = {setCity}   />
    <div className='padre'>
      <BigCard datosdias ={datosdias} grados = {grados} imagen = "/tormenta.png" datos = {datos} mi_ubicacion = {mi_ubicacion} />
      <Cards datosdias ={datosdias} grados={grados} setGrados={setGrados}   datos = {datos} />
    </div>
    </>
  )
    } 
    else if (tiempo == "Drizzle") {
      return (
      <> 
      <Nav setCity = {setCity}   />
      <div className='padre'>
        <BigCard datosdias ={datosdias} grados = {grados} imagen = "/Shower.png" datos = {datos} mi_ubicacion = {mi_ubicacion} />
        <Cards datosdias ={datosdias} grados={grados} setGrados={setGrados}   datos = {datos} />
      </div>
      </>
    )
      } 

      else if (tiempo == "Mist") {
        return (
        <> 
        <Nav setCity = {setCity}   />
        <div className='padre'>
          <BigCard datosdias ={datosdias} grados = {grados} imagen = "/LightCloud.png" datos = {datos} mi_ubicacion = {mi_ubicacion} />
          <Cards datosdias ={datosdias} grados={grados} setGrados={setGrados}   datos = {datos} />
        </div>
        </>
      )
        } 

    

  return (
    <> 
    <Nav setCity = {setCity}   />
    <div className='padre'>
    

      <BigCard datosdias ={datosdias} grados = {grados} imagen = "/LightCloud.png" datos = {datos} mi_ubicacion = {mi_ubicacion} />


      <Cards datosdias ={datosdias} grados={grados} setGrados={setGrados}   datos = {datos} />
      
    </div>
    </>
  )
}


