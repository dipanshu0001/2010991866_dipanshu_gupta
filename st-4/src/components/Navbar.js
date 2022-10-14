import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <h1 className='logo'><Link to='/' className='titlelogo'>MyWorld</Link></h1>
            <ul className='list'>
                <li><Link to='/' className='lis'>Home</Link></li>
                <li><Link to='/viewUsers' className='lis'>View Users</Link></li>
                <li><Link to='/addUser' className='lis'>Add User</Link></li>
                <li><Link to='/editUser' className='lis'>Edit User</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
