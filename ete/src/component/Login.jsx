import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import '../css/Login.css'
function Login() {
  const nav=useNavigate()
  const[data,setData]=useState([])
  const[val,setvar]=useState(-1)
  const [{ email,password }, setState] = useState({
    email: "",
    password: "",
  })

  const get_data= ()=>{
     axios.get(`https://63493e2da59874146b1af07d.mockapi.io/login_info`)
    .then(response=>setData(response.data))
    // console.log(data)
  }
  useEffect(() => {
     get_data()
    //  console.log("data",data)
    //  changes()
  },[])
  
   function s()
    { 
      let v=data.find((user)=>{
        return user.email===email && user.password===password
      })
      return v==null?1:0
    }
  const changes=()=>
  {
    setvar(1)
    const Save_changes= s()
    setvar(Save_changes)
    // console.log(val)
    // console.log("Data",role)
    // if(val==1)
    // val===1?alert("passwrod or email is not correct"):console.log("")
    if(val===1){return alert("passwrod or email is not correct")}
    if(val===0){setState({email:"",password:"",role:""})}
    // val===0?setState({email:"",password:"",role:""}):console.log("") 
    nav('/Add_user') 
    
  }
  
  return (
    // <div>
    <div class="box">
    <div class="container">
      <div class="d1">
        <img src={require('../images/pic.jpg')} alt="" />
      </div>
      <div class="d2">
        <div class="social">
          <button id="myButton" class="btn1" href="">
            <a class="link1" href="sigin.html" target="_blank"
              >sign in</a
            ></button
          ><span>/</span>
          <button id="myButton" class="btn1" href="">
            <a class="link2" href="login.html">login</a>
          </button>
          <div>
            <a href="https://www.facebook.com/" target="_blank"
              ><i class="bi bi-facebook"></i
            ></a>
            <a
              href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"
              target="_blank"
              ><i class="bi bi-google"></i
            ></a>
          </div>
        </div>
        <div class="social">
          <div class="info">
            <label for="name">Email:</label><br />
            <input type="text" placeholder="email" value={email} required onChange={(e)=>{setState(prev=>({...prev,email:e.target.value}))}}/><br />
          </div>
          <div class="info">
            <label for="name">password:</label><br />
            <input type="text" required placeholder="password"  value={password}  onChange={(e)=>{setState(prev=>({...prev,password:e.target.value}))}}/>
          </div>
          
        </div>
        <div class="rem">
          <a class="link frgt" target="_blank" style={{color:'white'}}href="forget_password.html"
            >forget password</a
          >
        </div>
        <div class="submit">
          <button class="subbtn" onclick="replace()" onClick={changes}>submit</button>
        </div>
      </div>
    </div>
  </div>



  )
}

export default Login