import React, { useState } from "react"
import { Button, Checkbox, Form, Container, Header, Segment, Divider, Label } from 'semantic-ui-react'

function SubmitForm({ onAddBar, onAddBrewery }) {
    const [formBarData, setFormBarData] = useState({
        name: "",
        image: "",
        mondayHours: "Monday: ",
        tuesdayHours: "Tuesday: ",
        wednesdayHours: "Wednesday: ",
        thursdayHours: "Thursday: ",
        fridayHours: "Friday: ",
        saturdayHours: "Saturday: ",
        sundayHours: "Sunday: ",
        website: ""
    })

    const [formBreweryData, setFormBreweryData] = useState({
        name: "",
        image: "",
        hours: [],
        website: ""
    })

    function handleBarChange(event) {
        setFormBarData({
            ...formBarData,
            [event.target.name]: event.target.value
        })
    }

    function handleBreweryChange(event) {
        setFormBreweryData({
            ...formBreweryData,
            [event.target.name]: event.target.value
        })
    }

    function handleBarSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:3000/bars", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": formBarData.name,
                "image": formBarData.image,
                "hours": [formBarData.mondayHours, formBarData.tuesdayHours, formBarData.wednesdayHours,formBarData.thursdayHours, formBarData.fridayHours, formBarData.saturdayHours, formBarData.sundayHours],
                "website": formBarData.website
            })
        })
            .then((r) => r.json())
            .then((newBar) => onAddBar(newBar))
    }

    function handleBrewerySubmit(e) {
        e.preventDefault()

        fetch("http://localhost:3000/breweries", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": formBreweryData.name,
                "image": formBreweryData.image,
                "hours": [formBreweryData.hours],
                "website": formBreweryData.website
            })
        })
            .then((r) => r.json())
            .then((newBrewery) => onAddBrewery(newBrewery))
    }

return (
<>
<Segment inverted padded="very">
        <Header  textAlign="center" as="h1">Add A New Bar or Brewery</Header>
</Segment>
<Container>
    <Segment raised>
        <Label size="massive" color="red" ribbon>Add A New Bar</Label>
            <Form  onSubmit={handleBarSubmit}>
                <Form.Field>
                <label>Bar Name</label>
                <input onChange={handleBarChange} type="text" name="name" value={formBarData.name} placeholder='Bar Name' />
                </Form.Field>
                <Form.Field>
                <label>Bar Image</label>
                <input onChange={handleBarChange} type="text" name="image" value={formBarData.image} placeholder='Bar Image' />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field>
                    <label>Bar Hours</label>
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChange} type="text" name="mondayHours" value={formBarData.mondayHours} placeholder='Hours' />
                    </Form.Field>
                    <Form.Field>
                    {/* <label>Tues Hours</label> */}
                    <input onChange={handleBarChange} type="text" name="tuesdayHours" value={formBarData.tuesdayHours} placeholder='Hours' />
                    </Form.Field>
                    <Form.Field>
                    {/* <label>Wed Hours</label> */}
                    <input onChange={handleBarChange} type="text" name="wednesdayHours" value={formBarData.wednesdayHours} placeholder='Hours' />
                    </Form.Field>
                    <Form.Field>
                    {/* <label>Thurs Hours</label> */}
                    <input onChange={handleBarChange} type="text" name="thursdayHours" value={formBarData.thursdayHours} placeholder='Hours' />
                    </Form.Field>
                    <Form.Field>
                    {/* <label>Fri Hours</label> */}
                    <input onChange={handleBarChange} type="text" name="fridayHours" value={formBarData.fridayHours} placeholder='Hours' />
                    </Form.Field>
                    <Form.Field>
                    {/* <label>Sat Hours</label> */}
                    <input onChange={handleBarChange} type="text" name="saturdayHours" value={formBarData.saturdayHours} placeholder='Hours' />
                    </Form.Field>
                    <Form.Field>
                    {/* <label>Sun Hours</label> */}
                    <input onChange={handleBarChange} type="text" name="sundayHours" value={formBarData.sundayHours} placeholder='Hours' />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                <label>Bar Website</label>
                <input onChange={handleBarChange} type="text" name="website" value={formBarData.website} placeholder='Bar Image' />
                </Form.Field>
                <Button color="blue" type='submit'>Submit</Button>
            </Form>
    </Segment> 
</Container>
    <Divider hidden />
    <Container text>
    <Segment.Group raised>
        <Segment inverted>
        <Header as='h2'>Add A New Brewery</Header>
        </Segment>
        <Segment.Group>
        <Segment>
            <Form onSubmit={handleBrewerySubmit}>
            <Form.Field>
                <label>Brewery Name</label>
                <input onChange={handleBreweryChange} type="text" name="name" value={formBreweryData.name} placeholder='Bar Name' />
                </Form.Field>
                <Form.Field>
                <label>Brewery Image</label>
                <input onChange={handleBreweryChange} type="text" name="image" value={formBreweryData.image} placeholder='Bar Image' />
                </Form.Field>
                <Form.Field>
                <label>Brewery Hours</label>
                <input onChange={handleBreweryChange} type="text" name="hours" value={formBreweryData.hours} placeholder='Bar Image' />
                </Form.Field>
                <Form.Field>
                <label>Brewery Website</label>
                <input onChange={handleBreweryChange} type="text" name="website" value={formBreweryData.website} placeholder='Bar Image' />
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