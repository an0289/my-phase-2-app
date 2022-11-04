import React from "react"
import {  Link } from "react-router-dom"
import { Button } from 'semantic-ui-react'

function NavBar() {

    return (
        <div className="navbar">   
            <Button as={ Link }  
                to="/"
                exact
            >
                Home
            </Button>   
            <Button as={ Link } 
                to="/bars"
                exact
            >
                Bars
            </Button>
            <Button as={ Link }  
                to="/breweries"
                exact
            >
                Breweries
            </Button>
            <Button as={ Link }  
                to="/submitform"
                exact
            >
                SubmitForm
            </Button>
        </div>
    )

}

export default NavBar