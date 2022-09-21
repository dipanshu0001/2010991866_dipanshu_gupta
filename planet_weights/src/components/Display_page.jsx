import React,{useState,usEffect,useContext} from 'react'
import Nav_bar from './Nav_bar'
import Planets from '../components/Planets'
function Display_page() {
    const[weight,changeweight]=useState()
    const[planet,changeplanet]=useState("")
  return (
    <div>
        <Nav_bar weight={weight} planet={planet} changeweight={changeweight} changeplanet={changeplanet}/>
        <Planets planet={planet} weight={weight}/>
    </div>
  )
}

export default Display_page