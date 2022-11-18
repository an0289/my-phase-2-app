import React from "react"
import {  Link } from "react-router-dom"
import { Button, Container, Segment, Header, Divider } from 'semantic-ui-react'


function NavBar() {

    return (
    <div  className="navbar">
        <Segment style={{"backgroundColor": "black"}}>
                <Button size="huge" color="teal" as={ Link } 
                    to="/"
                    exact
                >
                    Home
                </Button> 
                <Button size="huge" color='teal' as={ Link } 
                    to="/bars"
                    exact
                >
                    Bars
                </Button>
                <Button size="huge" color='teal' as={ Link }  
                    to="/breweries"
                    exact
                >
                    Breweries
                </Button>
                <Button size="huge" color='teal' as={ Link }  
                    to="/submitform"
                    exact
                >
                    Add New
                </Button>
        </Segment>
    </div>
    )

}

export default NavBar