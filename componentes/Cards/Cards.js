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
    <Card /> 
    <Card /> 
    <Card /> 
    <Card /> 
    <Card /> 
   
    <p className="text-cards">{text}</p>
   <MediumCard />
  <MediaCardSmall />
  


</div>
</>
    
  )
}
