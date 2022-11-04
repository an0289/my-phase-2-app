import React from 'react'
import {Container, Segment, Header, Grid, Image, Card, Button, Icon } from 'semantic-ui-react'


function Bars({ key, id, name, image, website, hours}) {
return (
<>
    <Segment inverted padded="very">
        <Header textAlign="center" as="h1">Bars</Header>
    </Segment>
    <Container>
    <Grid columns={3} divided>
        <Grid.Row>
        <Grid.Column>
            <Card color="black">
                <Image tiny src={image} wrapped ui={false} />
                <Card.Content>
                <Card.Header as="h1">{name}</Card.Header>
                <Card.Meta>
                    <Button color="yellow" size="tiny">Happy Hour</Button>
                </Card.Meta>
                <Card.Description>
                Hours: {hours}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Button size="Medium" color="green">Open</Button> 
                    <Button size="Medium">Edit</Button>
                    <Button size="Medium">
                        <Icon name="trash" />
                    </Button>
                </a>
                </Card.Content>
            </Card>
        </Grid.Column>
        </Grid.Row>
    </Grid>
    </Container>
</>
)
}

export default Bars 