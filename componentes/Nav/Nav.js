"use client"

import { Close, ListIcon, Search } from "../Icons"
import { CityList } from "./CityList"
import "./Nav.css"
import { useState } from "react"

export const Nav = ({setCity}) => {
   const [searchValue, setSearchValue] = useState('');

   // guardar lo que se escribe en el imput
   const handleInputcapture = (event) => {
    setSearchValue(event.target.value);
   };

   // realiza la busqueda cuando se le da click 
    const handleClickBusqueda = () => {
    setCity(searchValue);
    setSearchValue('');
    setSelectedCity(null);
    desaparecer()
    };
  
    // Actualizar a las ciudades en la lista del nav cuando se le de click
    const handleClickCityList = (cityName) => {
    setCity(cityName);
    setSelectedCity(cityName);
    desaparecer()

    };

    const [selectedCity, setSelectedCity] = useState(null);

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
       <div className="container-search"> {search} <input onChange={handleInputcapture} id="search" type="text" placeholder = "Search Location"  />
        </div>
        <button onClick={handleClickBusqueda} id="boton-search">Search</button>
        </div>
        <div className="cities">
       
        <div className="listas-container" >
        <ul className="lista">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
          <div  onClick={() =>  handleClickCityList('london')} className="liListas"><li className="lista-city"><p className="li">London</p> {selectedCity === 'london' && <span class="material-symbols-outlined flecita">arrow_forward_ios</span>} </li></div>
          <div  onClick={() =>  handleClickCityList('barcelona')} className="liListas"><li className="lista-city"><p className="li">Barcelona</p> {selectedCity === 'barcelona' && <span class="material-symbols-outlined flecita">arrow_forward_ios</span>} </li> </div>
          <div  onClick={() =>  handleClickCityList('long beach')} className="liListas"><li className="lista-city"><p className="li">Long Beach</p> {selectedCity === 'long beach' && <span class="material-symbols-outlined flecita">arrow_forward_ios</span>} </li></div>
        </ul>
      </div>
       
        
        </div>
      </div>
    </div>
  )
}
