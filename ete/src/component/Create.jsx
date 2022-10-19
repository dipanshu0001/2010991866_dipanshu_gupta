import React, { useState, useEffect, useContext } from 'react'
import {  Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router'

import '../css/Create.css'
function Create() {
    const nav=useNavigate()
    const [{fname,lname,mobile,age,email,images}, setstate] = useState({
        fname: "",
        lname: "",
        // id:"",
        mobile:"",
        age:"",
        email: "",
        images:""
    })
    const[img,setimage]=useState("")
    const saveChanges = (e) => {
        e.preventDefault();
        setstate(prev=>({fname: "",lname: "",age: "",mobile:"",email: "",images:""}))

    }
   const  fileChange=(e)=>{
    setimage(e.target.files[0])
        console.log(e.target)
        setstate(prev=>({
            ...prev,
            images:URL.createObjectURL(e.target.files[0])
        }))
        // const read=new FileReader();
        // read.addEventListener("load",()=>{
        //     setstate(prev=>({
        //         ...prev,
        //         images:read.result
        //     }))
        // })
        // console.log(images)

    }
const addUser= async()=>{
    if(fname!=="" && email!="" && email!=="" && mobile!=="" && age!=="" && images!==""){
    await axios.post(`https://63493e2da59874146b1af07d.mockapi.io/data`, {
        fname,
        lname,
        email,
        mobile,
        age,
        images
    })
    nav('/display_user')}
    else alert('One of the field is empty')
}
    return (
        <Form onSubmit={saveChanges} className="form-main">
            {/* <Form> */}
            <div>
                <label>First Name</label>
                <input   required placeholder='First Name' value={fname} 
                onChange={(e) => {
                    setstate(prev => ({
                        ...prev,
                        fname: e.target.value
                    }))
                }} />
                </div>
            {/* </Form> */}
            {/* <Form> */}
            <div>
                <label>Last Name</label>
                <input required
                    placeholder='Last Name'
                    value={lname}
                    onChange={(e) => {
                        setstate(prev => ({
                            ...prev,
                            lname: e.target.value
                        }))
                    }}
                /></div>
            {/* </Form> */}
            {/* <Form> */}
            <div>
                <label>Age</label>
                <input  required
                type="number"
                 placeholder='Age' 
                 value={age} 
                 onChange={(e)=>{setstate(prev=>({
                    ...prev,
                    age:e.target.value
                }))} }
                 /></div>
            {/* </Form> */}
            {/* <Form.Field> */}
            <div>
                <label>Mobile no.</label>
                <input  required
                type="number"
                 placeholder='mobile No.'
                 value={mobile}
                 onChange={(e)=>{setstate(prev=>({
                    ...prev,
                    mobile:e.target.value
                }))} }
                 
                 />
                 </div>
            {/* </Form.Field> */}
            {/* <Form.Field> */}
            <div>
                <label>Email</label>
                <input required
                 placeholder='Email' 
                 type="email"
                  value={email} 
                  onChange={(e)=>{setstate(prev=>({
                    ...prev,
                    email:e.target.value
                }))} }
                  />
                  </div>
            <div>
                <label>img Link</label>
                <input required
                //  placeholder='Email' 
                 type="file"
                //   value={email} 
                  onChange={(e)=>fileChange(e) }
                  />
                  </div>
                  <Button variant="outline-primary" className="btn"  onClick={addUser} >Add user</Button>{' '}

        </Form>
    )
}

export default Create