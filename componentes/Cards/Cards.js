
import { Snow } from "../Icons"
import { Card } from "./Card"
import "./Cards.css"
import { MediaCardSmall } from "./MediaCardSmall"
import { MediumCard } from "./MediumCard"

export const Cards = ({datos}) => {
  const text = "Today's Highlights"
  return (
<>    
<div className="small-cards"> 
    <Card image = "./Clear.png" datos = {datos} /> 
    <Card image = "./Hail.png" datos = {datos}  /> 
    <Card image = "./LightCloud.png" datos = {datos}  /> 
    <Card image = "./Shower.png" datos = {datos}  /> 
    <Card image = "./snow.png" datos = {datos}  /> 
   
    <p className="text-cards">{text}</p>
   <MediumCard datos ={datos} />
  <MediaCardSmall datos={datos} />
  


</div>
</>
    
  )
}
