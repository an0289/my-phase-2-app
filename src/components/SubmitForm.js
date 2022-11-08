import React from "react"
import { Button, Checkbox, Form, Container, Header, Segment, Divider } from 'semantic-ui-react'

function SubmitForm() {
return (
<>
<Segment inverted padded="very">
        <Header  textAlign="center" as="h1">Add A New Bar or Brewery</Header>
</Segment>
    <Container text>
    <Segment.Group raised>
        <Segment inverted>
        <Header as='h2'>Add A New Bar</Header>
        </Segment>
        <Segment.Group>
        <Segment>
            <Form>
                <Form.Field>
                <label>Bar Name</label>
                <input placeholder='Bar Name' />
                </Form.Field>
                <Form.Field>
                <label>Bar Image</label>
                <input placeholder='Bar Image' />
                </Form.Field>
                <Form.Field>
                <label>Bar Hours</label>
                <input placeholder='Bar Image' />
                </Form.Field>
                <Form.Field>
                <label>Bar Website</label>
                <input placeholder='Bar Image' />
                </Form.Field>
                <Button color="blue" type='submit'>Submit</Button>
            </Form>
        </Segment>
        </Segment.Group>
    </Segment.Group> 
    </Container>
    <Divider hidden />
    <Container text>
    <Segment.Group raised>
        <Segment inverted>
        <Header as='h2'>Add A New Brewery</Header>
        </Segment>
        <Segment.Group>
        <Segment>
            <Form>
            <Form.Field>
                <label>Brewery Name</label>
                <input placeholder='Bar Name' />
                </Form.Field>
                <Form.Field>
                <label>Brewery Image</label>
                <input placeholder='Bar Image' />
                </Form.Field>
                <Form.Field>
                <label>Brewery Hours</label>
                <input placeholder='Bar Image' />
                </Form.Field>
                <Form.Field>
                <label>Brewery Website</label>
                <input placeholder='Bar Image' />
                </Form.Field>
                <Button color="blue" type='submit'>Submit</Button>
            </Form>
        </Segment>
        </Segment.Group>
    </Segment.Group> 
    </Container>
</>

)
}

export default SubmitForm