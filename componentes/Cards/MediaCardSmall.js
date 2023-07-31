"use client"
import { useState,useEffect } from "react";

export const MediaCardSmall = () => {
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

  return (
    <>
    <div className="medium-small-cards">
      
       <p>Visibility</p>
       <div className="visibility">
       <p>{datos?.visibility}</p> <p>miles</p> 
      </div>
    </div>


    <div className="medium-small-cards-2">
        <p>Air Pressure</p>
        <div className="mb">
        <p>998 </p><p>mb</p>
        </div>
    </div>
   
    </>
  )
}
