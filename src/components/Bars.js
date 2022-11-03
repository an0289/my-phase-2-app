import React from 'react'
import { Segment, Header, Grid, Image, Card, Icon } from 'semantic-ui-react'


function Bars() {
return (
<>
    <Segment inverted padded="very">
        <Header textAlign="center" as="h1">Bars</Header>
    </Segment>
    <Grid columns={3} divided>
        <Grid.Row>
        <Grid.Column>
            <Card>
                <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
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

export default Bars 