import { Snow } from "../Icons"
import { Card } from "./Card"
import "./Cards.css"
import { MediaCardSmall } from "./MediaCardSmall"
import { MediumCard } from "./MediumCard"

export const Cards = () => {
  return (
<>    
<div className="small-cards"> 
    <Card /> 
    <Card /> 
    <Card /> 
    <Card /> 
    <Card /> 
   <MediumCard />
  <MediaCardSmall />
  


</div>
</>
    
  )
}
