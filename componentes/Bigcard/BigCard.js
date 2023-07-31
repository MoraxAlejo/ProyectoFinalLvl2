"use client"
import { Cloud, Icons } from "../Icons"
import { Location } from "../Icons"
import { Nav } from "../Nav/Nav"
import { useState , useEffect } from "react"


export const BigCard = () => {

  function handleClick() {
    const big_nav_list = document.querySelector("#navlist")

    big_nav_list.classList.remove("nav-list")
  }

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
   
    <div className="bigcard">
    
        <div className="contenedor-nav">
          
      <nav>
        <ul>
          <li className="li-search">
            <button onClick={handleClick} className="search" id="buscador">Seach for places</button>
          </li>
          <li className="li-location">
            
            <Icons />
          </li>
        </ul>
      </nav>
        <div className="wheater-info">
        <div className="backimage">

        </div>
           <div className="cloud">
            <Cloud />
           </div> 
           
            
            <div className="contenedor-grados">
            <p className="grados">{datos?.main.temp}</p> <p className="c">°C</p>
            </div>
            <p className="shower">{datos?.weather[0].main}</p>
            <div className="today"> 
            <p className="today-text">Today</p> <p className="point">.</p> <p className="date"> Friday,  5 jun</p>
            </div>
            <p className="ciudad"> <Location />{datos?.name}</p>
            
        </div>
      </div>
      </div>
    </>
  )
}
