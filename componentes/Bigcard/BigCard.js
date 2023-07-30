"use client"
import { Cloud, Icons } from "../Icons"
import { Location } from "../Icons"
import { Nav } from "../Nav/Nav"



export const BigCard = () => {

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
            <p className="grados">15</p> <p className="c">°C</p>
            </div>
            <p className="shower">Shower</p>
            <div className="today"> 
            <p className="today-text">Today</p> <p className="point">.</p> <p className="date"> Friday,  5 jun</p>
            </div>
            <p className="ciudad"> <Location />Helsinki</p>
            
        </div>
      </div>
      </div>
    </>
  )
}
