import React from 'react'
import Widget from './Slides'
import '../css/Home.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { BsStarHalf, BsStarFill, BsFillStarFill } from "react-icons/bs";
import { GrDocumentCsv, GrDocumentPdf } from "react-icons/gr";

// import { AiFillStar } from "react-icons/ai";
function Home() {
  const nav=useNavigate()
  return (
    <div className="home-main">
      <div className="left-main">
        <div className='up'>
          <p className='largest'>generate survey <br />and online form<br /> in <p className="diff">minutes</p> </p>
          <small>create form and survey that people want to answer,<br /> get more response and clear insight</small>
          <Button variant="outline-primary" onClick={()=>nav('/Sigin')}>Get started its free!!!</Button>{' '}
        </div>
        <div className="down">
          <span className="stars">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </span>
          <div className="comp-name"><BsFillStarFill fill={'green'} style={{ fontSize: 'xx-large' }} /> <span>Trsutpilot</span></div>
          <p className='rating'> Rated 4.5/5.0 from 250+<br /> reviews on <a href="Trustpiolt.com" target="_blank"> Trustpiolt.com</a></p>

        </div>
      </div>
      <div className="right-main">
        <div className="right-l">
          <div className="right-l-1">
            <img src={require('../images/p-1-1.jpg')} className='img-w' />
            <div class="bar-main">
              <div className="d-1"></div>
              <div className="d-2"></div>
              <div className="d-3"></div>
            </div>
          </div>
          <div className="right-l-2">
            <ul style={{ listStyle: 'none' }}>
              <li>Respodents</li>
              <li><Widget img={require('../images/r-1.jpg')} name="veronika" /></li>
              <li><Widget img={require('../images/r-2.jpg')} name="anjali" /></li>
              <li><Widget img={require('../images/r-3.jpg')} name="saem" /></li>
            </ul>
          </div>
          <div className="right-l-3">
            <ul>Export Responses
              <li><GrDocumentPdf fill={'orange'} /><Widget name="Export as PDF" /></li>
              <li><GrDocumentCsv fill={'green'} /><Widget name="Export as CSV" /> </li>
            </ul>
          </div>

        </div>
        <div className="right-r">
          {/* <div className="right-r-1"></div> */}
          <div className="right-r-1">
            {/* <div > */}
              <video autoPlay muted loop style={{ width: '60%', height: '40%',borderRadius:'10px' }} className='video' >
                <source src={require('../images/s.mp4')} type='video/mp4' ></source>
              </video>
            {/* </div> */}
            <div className='material'>
              <p>Hi, Arun</p>
              <p>Are you ready to<br/>
                take this survey?</p>
                <br/> 
              <p>it wont take more than 2 minutes</p>
              <Button variant="outline-primary" className="outline-sec" onClick={()=>nav('/Sigin')}>Start Survey</Button>{' '}
            </div>
          </div>
          <div className="right-r-2">
          <Button variant="outline-primary" className="outline-pink" onClick={()=>nav('/Sigin')} style={{position:'absolute',zIndex:'5',right:'20%'}}>Start Survey</Button>{' '}
            </div>
        </div>
      </div>









    </div>
  )
}

export default Home