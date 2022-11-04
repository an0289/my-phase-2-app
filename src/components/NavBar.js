import React from "react"
import {  Link } from "react-router-dom"
import { Button, Container, Segment } from 'semantic-ui-react'

function NavBar() {

    return (
        <div>
             <Button size="large" color="black" as={ Link } 
                to="/"
                exact
            >
                Home
            </Button> 
            <Button size="large" color='black' as={ Link } 
                to="/bars"
                exact
            >
                Bars
            </Button>
            <Button size="large" color='black' as={ Link }  
                to="/breweries"
                exact
            >
                Breweries
            </Button>
            <Button size="large" color='black' as={ Link }  
                to="/submitform"
                exact
            >
                Add New
            </Button>
        </div>
    )

}

export default NavBar