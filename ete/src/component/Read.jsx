import React, { useState, useEffect } from 'react'
import { Routes, Rotue, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Read() {
    const [data, setstate] = useState([])
    const get_data = async() => {
       await axios.get(`https://63493e2da59874146b1af07d.mockapi.io/data`)
            .then(response => {
                setstate(response.data)
                console.log(data)
            })
    }
    useEffect(() => {
        get_data()
    }, [])

    const nav = useNavigate()
    const get_u = (ele) => {
        // const {id,fname,lname,age,mobile,email}=data;
        // console.log(data);
        console.log(ele)
        localStorage.setItem('fname', ele.fname)
        localStorage.setItem('lname', ele.lname)
        localStorage.setItem('age', ele.age)
        localStorage.setItem('email', ele.email)
        localStorage.setItem('mobile', ele.mobile)
        localStorage.setItem('id', ele.id)
        // localStorage.setItem('images', JSON.stringify(ele.images))
        // localStorage.setItem('fname',fname)
        // localStorage.setItem('lname',lname)
        // localStorage.setItem('id',id)
        // localStorage.setItem('age',age)
        // console.log(typeof(e))
        // console.log(e)
        // console.log(localStorage.getItem('fname'))
        // nav('/update')
    }
    const del = async(id) => {
        await axios.delete(`https://63493e2da59874146b1af07d.mockapi.io/data/${id}`)
            .then(
                get_data()
            )
    }
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Profile image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Mobile No.</th>
                    <th>Email</th>
                    <th>Update/Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((ele,index) => {
                        return (
                            <tr key={index+1}>
                                <td>{index+1}</td>
                                <td  > <img  style={{width:'50px',height:'50px',borderRadius:'50%'}}src={ele.images}/></td>
                                <td>{(ele.fname + " " + ele.lname === " " ? "-" : ele.fname + " " + ele.lname)}</td>
                                {/* <td>{ele.lname}</td> */}
                                <td>{ele.age === 0 ? "-" : ele.age}</td>
                                {/* <td> <img src={ele.images}/></td> */}
                                <td>{ele.mobile === 0 ? "-" : ele.mobile}</td>
                                <td>{ele.email === "" ? "-" : ele.email}</td>
                                <td>
                                    <Link to="/update">

                                    <Button variant="outline-primary" className="btns" onClick={() => get_u(ele)} >Edit</Button>{' '}
                                    </Link>
                                    /
                                    <Link to='/display_user' >
                                    <Button variant="outline-danger" className="btns" onClick={() => del(ele.id)} >Delete</Button>{' '}

                                    </Link> 
                                </td>

                            </tr>)
                    })
                }
            </tbody>
        </Table>
    )
}

export default Read