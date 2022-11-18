import React from 'react'
import {Container, Segment, Header, Grid, Image, Card, Button, Icon, Search, Divider } from 'semantic-ui-react'
import BarCard from "./BarCard"


function Bars({ bars, setBars, searchBar, setSearchBar, onUpdateBarLikes }) {

const barsToDisplay = bars.filter((bar) => {
    if(searchBar === "") return true;
    return bar.name.toLowerCase().includes(searchBar.toLowerCase())
})

function handleDeleteBar(id) {
    const updatedBars = bars.filter((bar) => bar.id !== id)
    setBars(updatedBars)
}


return (
<>
<Divider/>
    <Container text>
            <Header block textAlign="center" as="h1">Bars</Header>   
    </Container>
    <Segment compact>
        <Search
           size="huge"
           type="text" 
           placeholder="Search..."
           value={searchBar}
           onSearchChange={(e) => setSearchBar(e.target.value)}
        />
    </Segment>
    <Container >
    <Grid center columns={3} divided>
        <Grid.Row  >
            {barsToDisplay.map((bar) => (
             <BarCard 
             onDeleteBar={handleDeleteBar} onUpdateBarLikes={onUpdateBarLikes}
             bar={bar} />
            ))}
        </Grid.Row>
    </Grid>
    </Container>
</>
)
}

export default Bars 