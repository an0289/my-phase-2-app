import React from 'react'
import {Container, Segment, Header, Grid, Image, Card, Button, Icon } from 'semantic-ui-react'
import BarCard from "./BarCard"


function Bars({ bars, setBars}) {

function handleDeleteBar(id) {
    const updatedBars = bars.filter((bar) => bar.id !== id)
    setBars(updatedBars)
}

function handleUpdateHours(id, hours) {
    fetch(`http://localhost:3000/bars/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "hours": [hours]
        })
    })
        .then((r) => r.json())
        .then((updatedBar) => {
            const updatedBars = bars.map((bar) => {
                if(bar.id === updatedBars.id) {
                    return updatedBar
                }
                return bar
            })
            setBars(updatedBars)
        })
}

return (
<>
   
    <Segment inverted padded="very">
        <Header  textAlign="center" as="h1">Bars</Header>
    </Segment>
    <Container>
    <Grid center columns={3} divided>
        <Grid.Row  >
            {bars.map((bar) => (
             <BarCard 
             onDeleteBar={handleDeleteBar} onUpdateHours={handleUpdateHours}
             key={bar.id} id={bar.id} name={bar.name} image={bar.image} website={bar.website} hours={bar.hours}/>
            ))}
        </Grid.Row>
    </Grid>
    </Container>
</>
)
}

export default Bars 