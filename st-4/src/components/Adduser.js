import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import data from '../database/db';
function Adduser() {
    const nameref = useRef();
    const emailref = useRef();
    const ageref = useRef();
    const posref = useRef();
    const folref = useRef();
    const fol = useRef();
    const likeref = useRef();
    let history = useNavigate();
    const updatedata = (event) =>{
        event.preventDefault();
        let dataval ={
            id:data.length+1,
            name:nameref.current.value,
            age:ageref.current.value,
            email:emailref.current.value,
            posts:posref.current.value,
            followers:folref.current.value,
            following:fol.current.value,
            totallikes:likeref.current.value
        }
        data.push(dataval)
        console.log(data)
        history("/viewUsers")
    }

    return (
        <div className='adduser'>
            <form onSubmit={updatedata}>
                <input ref={nameref} placeholder='Enter your Name'/>
                <input ref={emailref} placeholder='Enter your Email'/>
                <input ref={ageref} placeholder='Enter your Age'/>
                <input ref={posref} placeholder='Enter Your Posts'/>
                <input ref={folref} placeholder='Enter Your Followers'/>
                <input ref={fol} placeholder='Enter your Following'/>
                <input ref={likeref} placeholder='Enter your likes'/>
                <center>
                    
                    <button type='submit'>Submit</button>
                </center>
            </form>
        </div>
    )
}

export default Adduser
