import React, { useState, useEffect, useContext } from 'react'
import { Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router';
function Update() {
    const nav=useNavigate()
    const [{ fname, lname, mobile, age, email ,images}, setstate] = useState({
        fname: "",
        lname: "",
        mobile: "",
        age: "",
        email: "",
        images:""
    })
    useEffect(() => {
        setstate(
            {
                fname: localStorage.getItem('fname'),
                lname: localStorage.getItem('lname'),
                mobile: localStorage.getItem('mobile'),
                email: localStorage.getItem('email'),
                age: localStorage.getItem('age'),
                // age: localStorage.getItem('age'),
            }
        )
    }, [])
    const saveChanges = (e) => {

        e.preventDefault();
        setstate(prev => ({ fname: "", lname: "", age: "", mobile: "", email: "" ,images:""}))

    }
    const id = localStorage.getItem('id')
    const addUser = () => {
        alert('sure u want below mentioned changes')
        axios.put(`https://63493e2da59874146b1af07d.mockapi.io/data/${id}`, {
            fname,
            lname,
            email,
            mobile,
            age,
            images
        })
        nav('/display_user')



    }


    const  fileChange=(e)=>{
        console.log(e.target.files)
        console.log(e.target.files[0])
        console.log(URL.createObjectURL(e.target.files[0]))
        setstate(prev=>({
            ...prev,
            images:URL.createObjectURL(e.target.files[0])
        }))

    }
    return (
        // <div>
        <Form onSubmit={saveChanges} className="form-main">
            <div>
                <label>First Name</label>
                <input required placeholder='First Name' value={fname} onChange={(e) => {
                    setstate(prev => ({
                        ...prev,
                        fname: e.target.value
                    }))
                }} />
            </div>
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
            <div>
                <label>Age</label>
                <input required
                    type="number"
                    placeholder='Age'
                    value={age}
                    onChange={(e) => {
                        setstate(prev => ({
                            ...prev,
                            age: e.target.value
                        }))
                    }}
                /></div>
            <div>
                <label>Mobile no.</label>
                <input required
                    type="number"
                    placeholder='mobile No.'
                    value={mobile}
                    onChange={(e) => {
                        setstate(prev => ({
                            ...prev,
                            mobile: e.target.value
                        }))
                    }}

                />
            </div>
            <div>
                <label>Email</label>
                <input required
                    placeholder='Email'
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setstate(prev => ({
                            ...prev,
                            email: e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <label>img Link</label>
                <input required
                    placeholder='Email'
                    type="file"
                    //   value={email} 
                    onChange={(e) => fileChange(e)}
                />
            </div>
            {/* <Button type='submit' onClick={}>save changes</Button> */}
            <Button variant="outline-primary" className="btn"  onClick={addUser} >Start Survey</Button>{' '}

        </Form>
    )
}

export default Update