import "./NavBarStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="nav-container">
        <h1 className="logo-text">HELLO</h1>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hello">Hello</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default NavBar;