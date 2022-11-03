import React from "react"
import {  NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className="navbar">
            <ul>
            <li>    
            <NavLink 
                to="/"
                exact
            >
                Home
            </NavLink>
            </li>
            <li>    
            <NavLink 
                to="/bars"
                exact
            >
                Bars
            </NavLink>
            </li>
            <li>
            <NavLink 
                to="/breweries"
                exact
            >
                Breweries
            </NavLink>
            </li>
            <li>
            <NavLink 
                to="/submitform"
                exact
            >
                SubmitForm
            </NavLink>
            </li>
            </ul>
        </div>
    )

}

export default NavBar