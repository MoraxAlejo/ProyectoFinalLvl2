import { Navigation } from "../Icons"


export const MediumCard = () => {
  return (
    <>
    <div className="contenedor-medium">
     <div className="medium-cards">
        <p className="p1">Wind Status</p>
        <div className="container-7">
        <p className="p2">7</p> <p>mph</p>
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
        <p className="second-p">84</p> <p>%</p>
        </div>
        <p>Barra</p>
     </div>
    </div>
    
    </>
  )
}
