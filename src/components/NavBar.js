import React from "react"
import {  Link } from "react-router-dom"
import { Button, Container, Segment, Header, Divider } from 'semantic-ui-react'

function NavBar() {

    return (
    <>
        <Header block >
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
        </Header>
    </>
    )

}

export default NavBar