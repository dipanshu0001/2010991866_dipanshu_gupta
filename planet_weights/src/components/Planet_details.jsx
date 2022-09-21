import React, { useEffect } from 'react'
import '../css/Planet_detais.css'
function Planet_details({ img, name, g, planet, weight }) {
  useEffect(() => {
    let planet_value = document.getElementById(`${name}`);
    planet_value.style.backgroundImage = `url(${img})`
    console.log(planet_value)
    // console.log(planet_value.style.backgroundImage)
  }, [])
// let f=weight
// f=f/9.8
  return (
    <>
    <div className="planet_div">
      <div className="Planet" id={name}>
        {
          planet === name ? <img src={require("./pngegg.png")} style={{ postion: "absolute", width: "50px", height: "50px" }} /> : console.log("heloo")
        }
        {
          planet === name ? (
            <h6 style={{fontSize:"x-small"}}>
              {Math.trunc(weight * g)}{" you weigh "}{(weight*g-weight)>0?`${Math.trunc(weight*g-weight)} more than earth`:`${Math.trunc(weight-weight*g)} less than earth`}
            </h6>
          ) : console.log("weight mhi hai iska")
        }
      </div>
    </div>
    {/* <span>
    {
          planet === name ? (
            <h6>
              {Math.trunc(weight * g)}{" you weigh "}{(weight*g-weight)>0?`${Math.trunc(weight*g-weight)} more than earth`:`${Math.trunc(weight-weight*g)} less than earth`}
            </h6>
          ) : console.log("weight mhi hai iska")
    }
    </span> */}

    </>
  )
}

export default Planet_details