import React from 'react'
import '../css/Nav_bar.css'

function Nav_bar({weight,planet,changeplanet,changeweight}) {
  let data=["mars","earth","mercury","jupiter","venus","neptune","uranus","saturn"]
  const[planet_n,changePlanet]=React.useState("")
    const update_w=(event)=>{
        changeweight(event.target.value)
    }
    const update_p=(event)=>{
        changePlanet(event.target.value)
    }
    const check_planet=(ele)=>{
      changeplanet(planet_n)
      console.log("button dbaa diya re");
      for(let i=0;i<8;i++){
        if(data[i]===planet_n)return true
      }
      alert("planet name not correct")
      changePlanet("")
      changeplanet("")  
      return false
    }
  return (
    <div id="main_div">
        <div className="input_div"> <label>Enter weight: </label> <input type="number" className='input' value={weight} placeholder="enter weight" onChange={update_w}/>
        </div>
        <div className="input_div"><label>Enter planet: </label><input type="text" className='input' value={planet_n}  placeholder="enter planet name"onChange={update_p}/>
        </div>
        <div id="submit_btn" > <button onClick={check_planet}>find weight</button> </div>
    </div>
  )
}

export default Nav_bar