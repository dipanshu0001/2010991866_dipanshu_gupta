import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import data from '../database/db';
function Edituser(props) {
  const id = props.userId
  const nameref = useRef();
  const emailref = useRef();
  const ageref = useRef();
  const posref = useRef();
  const folref = useRef();
  const fol = useRef();
  const likeref = useRef();

  let history = useNavigate();
  const updatedata = (event) => {
    event.preventDefault();
    let dataval = {
      id: id,
      name: nameref.current.value,
      age: ageref.current.value,
      email: emailref.current.value,
      posts: posref.current.value,
      followers: folref.current.value,
      following: fol.current.value,
      totallikes: likeref.current.value
    }
    data[id] = dataval
    history("/viewUsers")
  }
  const onType = (event) => {
    nameref.current.value = event.target.value;
  }
  if(id===-1){
    return (
      <div className='edituser'>
        <h1>Please Go to View Users Page and use the Edit button</h1>
      </div>
    )
  }
  return (
    <div className='edituser'>
      <form className='editfeild' onSubmit={updatedata}>
        <input ref={nameref} placeholder='Enter your Name' defaultValue={data[id].name} />
        <input ref={emailref} placeholder='Enter your Email' defaultValue={data[id].email} />
        <input ref={ageref} placeholder='Enter your Age' defaultValue={data[id].age} />
        <input ref={posref} placeholder='Enter Your Posts' defaultValue={data[id].posts} />
        <input ref={folref} placeholder='Enter Your Followers' defaultValue={data[id].followers} />
        <input ref={fol} placeholder='Enter your Following' defaultValue={data[id].following} />
        <input ref={likeref} placeholder='Enter your likes' defaultValue={data[id].totallikes} />
        <button>Edit</button>
      </form>

    </div>
  )
}

export default Edituser