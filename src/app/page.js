"use client"
import { BigCard } from "../../componentes/Bigcard/BigCard"
import { Cards } from "../../componentes/Cards/Cards"
import { Icons } from "../../componentes/Icons"
import { Nav } from "../../componentes/Nav/Nav"
import { useState, useEffect } from "react"
export default function Home() {



  const KEY = "fb5f1762203630e3519254f88d5c6496";
  const  [city, setCity] = useState('lima');
  const [datos, setDatos] = useState();

    useEffect(() => {
        const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
        Promise.all([promesa]).then(async (values) => {
            const data = await values[0].json();
            if (data.cod === '404') {
              alert("Ciudad no encontrada, Porfavor Introduzca una ciudad existente u otra ciudad");
            } else {
              setDatos(data);
            }
        })
    }, [city]);

const mi_ubicacion = () => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitud}&longitude=${longitud}&localityLanguage=en`);
    const data = await response.json();
    setCity(data.locality);
  });
};
  return (
    <> 
    <Nav setCity = {setCity}   />
    <div className='padre'>
    

      <BigCard imagen = "" datos = {datos} mi_ubicacion = {mi_ubicacion} />


      <Cards datos = {datos} />
      
    </div>
    </>
  )
}
