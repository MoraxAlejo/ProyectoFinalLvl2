"use client"
import { Cloud, Icons } from "../Icons"
import { Location } from "../Icons"
import { Nav } from "../Nav/Nav"
import { useState , useEffect } from "react"


export const BigCard = ({datos , mi_ubicacion}) => {

  // para la ubicacion en la que estoy
  const handleMiUbicacion = () => {
    mi_ubicacion();
  };

  function handleClick() {
    const big_nav_list = document.querySelector("#navlist")

    big_nav_list.classList.remove("nav-list")
  }

  



  return (
    <>
   
    <div className="bigcard">
    
        <div className="contenedor-nav">
          
      <nav>
        <ul>
          <li className="li-search">
            <button onClick={handleClick} className="search" id="buscador">Seach for places</button>
          </li>
          <li onClick={handleMiUbicacion} className="li-location">  
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
