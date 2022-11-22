import React, {useEffect, useState} from "react"
import {Container, Divider, Segment, Header, Grid, Image, Card, Icon, Search } from 'semantic-ui-react'
import BreweryCard from "./BreweryCard"
import Beer from "../assets/beer-glass1.jpg"

function Breweries({ breweries, setBreweries, searchBrewery, setSearchBrewery, onUpdateBreweryCard, onUpdateBreweryLikes}) {
    

    const breweriesToDisplay = breweries.filter((brewery) => {
        if(searchBrewery === "") return true;
        return brewery.name.toLowerCase().includes(searchBrewery.toLowerCase())
    })

    function handleDeleteBrewery(id) {
        const updatedBreweries = breweries.filter((brewery) => brewery.id !== id)
        setBreweries(updatedBreweries)
    }

   

    return (
    <div style={{ backgroundColor:"white"}}>
    <Divider hidden/>
    <Header style={{ fontFamily:"Lucida Handwriting"}} as='h1' icon textAlign='center'>
      <Image circular src={Beer} />
    Breweries
</Header>
<Container style={{ paddingLeft:460}}>
    <Search
           size="large"
           type="text" 
           placeholder="Search..."
           value={searchBrewery}
           onSearchChange={(e) => setSearchBrewery(e.target.value)}
        />
</Container>
<Divider hidden />
        <Container>
        <Grid columns={3} divided>
            <Grid.Row stretched>
                {breweriesToDisplay.map((brewery) => (
                 <BreweryCard 
                 onDeleteBrewery={handleDeleteBrewery} 
                 brewery={brewery}
                 onUpdateBreweryCard={onUpdateBreweryCard}
                 onUpdateBreweryLikes={onUpdateBreweryLikes}/>
                ))}
            </Grid.Row>
        </Grid>
        </Container>
    </div>
    )
    }

export default Breweries 