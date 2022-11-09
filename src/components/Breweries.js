import React, {useEffect, useState} from "react"
import {Container, Segment, Header, Grid, Image, Card, Icon } from 'semantic-ui-react'
import BreweryCard from "./BreweryCard"

function Breweries({ breweries, setBreweries}) {

    function handleDeleteBrewery(id) {
        const updatedBreweries = breweries.filter((brewery) => brewery.id !== id)
        setBreweries(updatedBreweries)
    }

    function handleUpdateHours(id, hours) {
        fetch(`http://localhost:3000/breweries/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "hours": [hours]
            })
        })
            .then((r) => r.json())
            .then((updatedBrewery) => {
                const updatedBreweries = breweries.map((brewery) => {
                    if(brewery.id === updatedBreweries.id) {
                        return updatedBrewery
                    }
                    return brewery
                })
                setBreweries(updatedBreweries)
            })
    }

    return (
    <>
        <Segment inverted padded="very">
            <Header textAlign="center" as="h1">Breweries</Header>
        </Segment>
        <Container>
        <Grid columns={3} divided>
            <Grid.Row stretched>
                {breweries.map((brewery) => (
                 <BreweryCard 
                 onDeleteBrewery={handleDeleteBrewery} onUpdateHours={handleUpdateHours}
                 key={brewery.id} id={brewery.id} name={brewery.name} image={brewery.image} website={brewery.website} hours={brewery.hours}/>
                ))}
            </Grid.Row>
        </Grid>
        </Container>
    </>
    )
    }

export default Breweries 