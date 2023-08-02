import { Snow } from "../Icons"
import { Card } from "./Card"
import "./Cards.css"
import { Grados } from "./Grados"
import { MediaCardSmall } from "./MediaCardSmall"
import { MediumCard } from "./MediumCard"
import { Location } from "../Icons"

export const Cards = ({datos, datosdias , grados , setGrados}) => {
  const text = "Today's Highlights"
  const dias = ["Mañana", "Día siguiente", "En dos días", "En tres días", "En cuatro días"]
  const fecha5 = new Date();
  fecha5.setDate(fecha5.getDate() + 5);
  const fecha2 = new Date();
  fecha2.setDate(fecha2.getDate() + 2);
  const fecha3 = new Date();
  fecha3.setDate(fecha3.getDate() + 3);
  const fecha4 = new Date();
  fecha4.setDate(fecha4.getDate() + 4);

  return (
<>    
<div className="small-cards"> 
<Grados grados={grados} setGrados={setGrados}/>
<div className="alineador">

  <Card text="Tomorrow" image="./Clear.png" datos={datosdias[0]} />
  <Card text={fecha2.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })} image="./tormenta.png" datos={datosdias[1]} />
  <Card text={fecha3.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })} image="./LightRain.png" datos={datosdias[2]} />
  <Card text={fecha4.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })} image="./Clear.png" datos={datosdias[3]} />
  <Card text={fecha5.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })} image="./LightCloud.png" datos={datosdias[4]} />
    </div>
   
    <p className="text-cards">{text}</p>
   <MediumCard datos ={datos} />
  <MediaCardSmall datos={datos} />
  


</div>
</>
    
  )
}