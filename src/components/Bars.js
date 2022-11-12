import React from 'react'
import {Container, Segment, Header, Grid, Image, Card, Button, Icon, Search } from 'semantic-ui-react'
import BarCard from "./BarCard"


function Bars({ bars, setBars, searchBar, setSearchBar, onUpdateBarHours }) {

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
   
    <Segment  style={{"backgroundColor":"black"}} inverted padded="very">
        <Header  textAlign="center" as="h1">Bars</Header>
    </Segment>
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
             onDeleteBar={handleDeleteBar} onUpdateBarHours={onUpdateBarHours}
             key={bar.id} id={bar.id} name={bar.name} image={bar.image} website={bar.website} hours={bar.hours} petFriendly={bar.petFriendly} likes={bar.likes} />
            ))}
        </Grid.Row>
    </Grid>
    </Container>
</>
)
}

export default Bars 