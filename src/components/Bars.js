import React from 'react'
import {Container, Segment, Header, Grid, Image, Card, Button, Icon, Search, Divider } from 'semantic-ui-react'
import BarCard from "./BarCard"
import Martini from "../assets/martini-glass1.jpg"


function Bars({ bars, setBars, searchBar, setSearchBar, onUpdateBarHours, onUpdateBarLikes }) {

const barsToDisplay = bars.filter((bar) => {
    if(searchBar === "") return true;
    return bar.name.toLowerCase().includes(searchBar.toLowerCase())
})

function handleDeleteBar(id) {
    const updatedBars = bars.filter((bar) => bar.id !== id)
    setBars(updatedBars)
}


return (
<div style={{ backgroundColor:"white"}}>
<Divider hidden/>
<Header style={{ fontFamily:"Lucida Handwriting"}} as='h1' icon textAlign='center'>
      <Image circular src={Martini} />
    Bars
</Header>
<Container style={{ paddingLeft:460}}>
    <Search
           size="large"
           type="text" 
           placeholder="Search..."
           value={searchBar}
           onSearchChange={(e) => setSearchBar(e.target.value)}
        />
</Container>
<Divider hidden />
    <Container >
    <Grid center columns={3} divided>
        <Grid.Row  >
            {barsToDisplay.map((bar) => (
             <BarCard 
             onDeleteBar={handleDeleteBar} onUpdateBarLikes={onUpdateBarLikes} onUpdateBarHours={onUpdateBarHours}
             bar={bar} />
            ))}
        </Grid.Row>
    </Grid>
    </Container>
</div>
)
}

export default Bars 