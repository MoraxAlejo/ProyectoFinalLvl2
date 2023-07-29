import { ListIcon } from "../Icons"

export const CityList = (props) => {
  return (
   <>
    <div className="places-list">
            <div className="city-container">
                <p>{props.city}</p> <p className="icon-list"> <ListIcon/>  </p>
            </div>
       </div> 

   </>
  )
}
