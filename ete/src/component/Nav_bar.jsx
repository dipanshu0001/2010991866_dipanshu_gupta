import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../css/Nav_bar.css'
// import img from '../'
// const logo=require('./')
function Nav_bar() {
    return (
        <div className="Nav_bar-main">
            <div className="img-Navbar">
                <div>
                    <img src={require('../images/Logo.png')} ></img>
                </div>
            </div>
            {/* <div > */}
                <nav className="links-main">
                    <NavLink to='/'> Home </NavLink>
                    <NavLink to='Add_user'> Add user </NavLink>
                    <NavLink to='display_user'> Display user </NavLink>
                    <NavLink to='update'> Update user </NavLink>
                    <NavLink to='Login'> Login </NavLink>
                    <NavLink to='Sigin'> Sigin </NavLink>
                </nav>
            {/* </div> */}
        </div>
    )
}

export default Nav_bar