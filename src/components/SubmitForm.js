import React from "react"
import { Button, Checkbox, Form, Container, Header, Segment, Divider } from 'semantic-ui-react'

function SubmitForm() {
return (
<>
    <Container text>
    <Segment.Group raised>
        <Segment>
        <Header as='h2'>Add A New Bar</Header>
        </Segment>
        <Segment.Group>
        <Segment>
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Segment>
        </Segment.Group>
    </Segment.Group> 
    </Container>
    <Divider hidden />
    <Container text>
    <Segment.Group raised>
        <Segment>
        <Header as='h2'>Add A New Bar</Header>
        </Segment>
        <Segment.Group>
        <Segment>
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Segment>
        </Segment.Group>
    </Segment.Group> 
    </Container>
</>

)
}

export default SubmitForm