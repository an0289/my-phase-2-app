import React from "react"
import {Container, Segment, Header, Grid, Image, Card, Icon } from 'semantic-ui-react'

function Breweries() {
return (
<>
    <Segment inverted padded="very">
        <Header textAlign="center" as="h1">Breweries</Header>
    </Segment>
    <Grid columns={3} divided>
        <Grid.Row>
        <Grid.Column>
            <Card>
                <Image tiny src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/df/90/92/zilker-brewering-company.jpg?w=1200&h=-1&s=1' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Zilker Brewing</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                Monday-Thursday: 11am - 10pm; Friday-Saturday: 11am - 11pm; Sunday: 11am - 8pm
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
            </Card>
        </Grid.Column>
        </Grid.Row>
    </Grid>
</>
)
}

export default Breweries 