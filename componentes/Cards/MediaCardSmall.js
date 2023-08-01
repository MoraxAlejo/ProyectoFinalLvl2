"use client"
import { useState,useEffect } from "react";

export const MediaCardSmall = ({datos}) => {
 

  return (
    <>
    <div className="medium-small-cards">
      
       <p>Visibility</p>
       <div className="visibility">
       <p>{datos?.visibility}</p> <p>miles</p> 
      </div>
    </div>


    <div className="medium-small-cards-2">
        <p>Air Pressure</p>
        <div className="mb">
        <p>{datos?.wind.speed} </p><p>mb</p>
        </div>
    </div>
   
    </>
  )
}
