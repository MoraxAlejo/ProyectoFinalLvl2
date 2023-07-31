import { Snow } from "../Icons"
import { Card } from "./Card"
import "./Cards.css"
import { MediaCardSmall } from "./MediaCardSmall"
import { MediumCard } from "./MediumCard"

export const Cards = () => {
  const text = "Today's Highlights"
  return (
<>    
<div className="small-cards"> 
    <Card image = "./Clear.png" /> 
    <Card image = "./Hail.png" /> 
    <Card image = "./LightCloud.png" /> 
    <Card image = "./Shower.png" /> 
    <Card image = "./snow.png" /> 
   
    <p className="text-cards">{text}</p>
   <MediumCard />
  <MediaCardSmall />
  


</div>
</>
    
  )
}
