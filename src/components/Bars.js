import React from 'react'
import {Container, Segment, Header, Grid, Image, Card, Button, Icon } from 'semantic-ui-react'
import BarCard from "./BarCard"


function Bars({ bars, setBars}) {
return (
<>
   
    <Container>
    <Header block textAlign="center" as="h1">Bars</Header>
    <Grid columns={3} divided>
        <Grid.Row  >
            {bars.map((bar) => (
             <BarCard key={bar.id} id={bar.id} name={bar.name} image={bar.image} website={bar.website} hours={bar.hours}/>
            ))}
        </Grid.Row>
    </Grid>
    </Container>
</>
)
}

export default Bars 