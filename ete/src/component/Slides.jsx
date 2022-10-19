import React from 'react'

function Slides({img,name}) {
  return (
    <div style={{display:'flex',margin:'30px 0px',alignItems:'center'}}> 
      {img&&<img src={img} className='img-w' />}
      <p style={{padding:'0px 10px',margin:'auto 0px',fontWeight:'bold'}}><span>{name}</span></p>

    </div>
  )
}

export default Slides