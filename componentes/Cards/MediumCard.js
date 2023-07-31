"use client"
import { Navigation } from "../Icons"
import { useState, useEffect } from "react";


export const MediumCard = () => {

  const KEY = "fb5f1762203630e3519254f88d5c6496";
  const city = "cartagena";
  const [datos, setDatos] = useState();

    useEffect(() => {
        const promesa = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
        Promise.all([promesa]).then(async (values) => {
            const data = await values[0].json();
            setDatos(data);
        })
    }, []);

  const percent = datos?.main.humidity


  return (
    <>
    <div className="contenedor-medium">
     <div className="medium-cards">
        <p className="p1">Wind Status</p>
        <div className="container-7">
        <p className="p2">{datos?.wind.speed}</p> <p>mph</p>
        </div>
        <div className="navigation-container">
        <Navigation/><p className="p3">WSW</p>
        </div>
     </div>
    </div>

    <div className="contenedor-medium-2">
     <div className="medium-cards-2">
        <p>Humidity</p>
        <div className="porcentaje">
        <p className="second-p">{percent}</p><p>%</p>
        </div>
        <div className="numbers"> <p>0</p> <p>50</p> <p>100</p> </div>
        <div className="barra-porcentual">
          
          
          <div className="amarillo" style={{ width: `${percent}%` }}></div>
          
        </div>
        <div className="porcentaje-humedad">
           <p>%</p>
        </div>
       
     </div>
    </div>
    
    </>
  )
}
