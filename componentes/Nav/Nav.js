"use client"

import { Close, Search } from "../Icons"
import { CityList } from "./CityList"
import "./Nav.css"

export const Nav = () => {
    const search = <Search/>
    
    function desaparecer() {
      const desaparece = document.querySelector("#navlist")

      desaparece.classList.add("nav-list")



    }


  return (
    <div className="bigcard-nav nav-list" id="navlist">
      <div className="container-inputs">
        <div><button onClick={desaparecer} className="close" id="close-boton"><Close /></button></div>
        <div className="contenedor-alineador">
       <div className="container-search"> {search} <input id="search" type="text" placeholder = "Search Location"  />
        </div>
        <button id="boton-search">Search</button>
        </div>
        <div className="cities">
        <CityList city = "London" />
        <CityList city = "Barcelona" />
        <CityList city = "Long Beach" />
        <CityList city = "a" />
        </div>
      </div>
    </div>
  )
}
