
import { Snow } from "../Icons"
import { Card } from "./Card"
import "./Cards.css"
import { Grados } from "./Grados"
import { MediaCardSmall } from "./MediaCardSmall"
import { MediumCard } from "./MediumCard"

export const Cards = ({datos, datosdias , grados , setGrados}) => {
  const text = "Today's Highlights"
  return (
<>    
<div className="small-cards"> 
<Grados grados={grados} setGrados={setGrados}/>
<div className="alineador">
    <Card text = "Tomorrow" image = "./Clear.png" datos = {datos} /> 
    <Card text = "Sun, 7 Jun" image = "./Hail.png" datos = {datos}  /> 
    <Card text = "Mon, 8 Jun" image = "./LightCloud.png" datos = {datos}  /> 
    <Card text = "Tues, 9 Jun" image = "./Shower.png" datos = {datos}  /> 
    <Card text = "Wed, 10 Jun" image = "./snow.png" datos = {datos}  /> 
    </div>
   
    <p className="text-cards">{text}</p>
   <MediumCard datos ={datos} />
  <MediaCardSmall datos={datos} />
  


</div>
</>
    
  )
}
