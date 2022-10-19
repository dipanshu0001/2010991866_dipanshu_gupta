import React,{useState,useContext,useEffect} from 'react'
import '../css/Signin.css'
import axios from 'axios'
function Sigin() {
  const [{fname,lname,email,password}, setstate] = useState({
    fname: "",
    lname: "",
    email: "",
    password:"",

})
const send_data=()=>{
  axios.post(`https://63493e2da59874146b1af07d.mockapi.io/login_info`,{
    fname,lname,email,password
  })
}
const sigin_changes=()=>{
  console.log(fname,lname,email,password)
  send_data()
  
}
const changes=(e)=>{
e.preventDefault();
setstate({fname:"",lname:"",email:"",password:""})
}

  return (
    <div className="box">
      <form onSubmit={(e)=>{changes(e)}}>
        <div className="container">

          <div class="d1">
            <img src={require('../images/welcome.jpg')} alt="" />
          </div>
          <div div class="d2">
            <div class="rgst">
              <p data-text="Register">Register</p>
            </div>
            <div class="social">
              <div class="user">
                <div class="info">
                  <label for="name" className='label'>FirstName:</label><br />
                  <input type="text" placeholder="username" required  value={fname} 
                  onChange={(e) => {
                    setstate(prev => ({
                        ...prev,
                        fname: e.target.value
                    }))
                }} /><br />
                </div>
                <div class="info">
                  <label for="name">LastName:</label><br />
                  <input 
                  type="text" 
                  placeholder="username"
                  value={lname}
                  onChange={(e) => {
                    setstate(prev => ({
                        ...prev,
                        lname: e.target.value
                    }))
                }}
                   /><br />
                </div>
              </div>
              <div class="email">
                <label for="name" className='label'>Email:</label><br />
                <input 
                type="email"
                 placeholder="email"
                 required 
                 value={email}
                 onChange={(e)=>{setstate(prev=>({...prev,email:e.target.value}))}}
                 
                 />
              </div>
              <div class="psswrd">
                <div class="info">
                  <label for="name" className='label'> set password:</label><br />
                  <input 
                  type="password"
                   placeholder="password"
                  required 
                  value={password}
                  onChange={(e)=>{setstate(prev=>({...prev,password:e.target.value}))}}/>
                </div>
                <div class="info" id="confirm">
                  <label for="name" className='label'> confirm password again:</label><br />
                  <input type="password" value={password} placeholder="password" required />
                </div>
              </div>
            </div>
            <div class="rem">


            </div>
            <div class="submit">
              <button class="subbtn" onClick={sigin_changes}>register</button>
            </div>
          </div>




        </div>
      </form>



    </div>
  )
}

export default Sigin