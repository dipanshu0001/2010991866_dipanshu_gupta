import React from 'react'
import {data} from '../planet_data_base'
import Planet_details from './Planet_details'
import "../css/Planets.css"
function Planets({planet,weight}) {
  return (
    <div  className="Planet_main_div">
      {
        data.map((ele,index)=>{
          // return <img src={ele.img} style={{height:"100px",borderRadius:"50% "}} key={index} name={ele.name}/>
          return <Planet_details img={ele.img} name={ele.name} g={ele.g} planet={planet} weight={weight}/>
        })
      }
    </div>
  )
}

export default Planets