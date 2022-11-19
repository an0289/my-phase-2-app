import React, {useEffect, useState} from "react"
import {Container, Divider, Segment, Header, Grid, Image, Card, Icon, Search } from 'semantic-ui-react'
import BreweryCard from "./BreweryCard"

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
    <>
    <Divider/>
    <Container text>
            <Header block textAlign="center" as="h1">Breweries</Header>   
    </Container>
        <Segment compact>
            <Search
            size="huge"
            type="text" 
            placeholder="Search..."
            value={searchBrewery}
            onSearchChange={(e) => setSearchBrewery(e.target.value)}
            />
    </Segment>
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
    </>
    )
    }

export default Breweries 