import { BigCard } from "../../componentes/Bigcard/BigCard"
import { Cards } from "../../componentes/Cards/Cards"
import { Icons } from "../../componentes/Icons"
import { Nav } from "../../componentes/Nav/Nav"

export default function Home() {
  return (
    <>
    <Nav />
    <div className='padre'>
       
      <BigCard />
      <Cards  />
      
    </div>
    </>
  )
}
