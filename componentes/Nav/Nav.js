import { Close, Search } from "../Icons"
import { CityList } from "./CityList"
import "./Nav.css"

export const Nav = () => {
    const search = <Search/>
  return (
    <div className="bigcarg-nav">
      <div className="container-inputs">
        <div><button className="close"><Close /></button></div>
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
