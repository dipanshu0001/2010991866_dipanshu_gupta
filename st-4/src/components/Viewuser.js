import React from 'react'
import data from '../database/db'
import { Link } from "react-router-dom";

function Viewuser(props) {
  return (
    <div className='viewdata'>
      <table className='table'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Followers</th>
            <th>Following</th>
            <th>Likes</th>
            <th>Posts</th>
        </tr>
        {
            data.map((item)=>{
                return <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.followers}</td>
                    <td>{item.following}</td>
                    <td>{item.totallikes}</td>
                    <td>{item.posts}</td>
                    <td><Link to='/editUser' className='lis' onClick={()=>props.changeId(item.id-'0'-1)}>Edit User</Link></td>
                </tr>
            })
        }
      </table>
    </div>
  )
}

export default Viewuser
