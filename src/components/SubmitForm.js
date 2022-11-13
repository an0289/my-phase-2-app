import React, { useState } from "react"
import { Button, Checkbox, Form, Container, Header, Segment, Divider, Label } from 'semantic-ui-react'

function SubmitForm({ onAddBar, onAddBrewery }) {
   
    
   

    
    const [formBarData, setFormBarData] = useState({
        name: "",
        image: "",
        petFriendly: false, 
        patio: false,
        monHours: "Monday: ",
        tuesHours: "Tuesday: ",
        wedHours: "Wednesday: ",
        thursHours: "Thursday: ",
        friHours: "Friday: ",
        satHours: "Saturday: ",
        sunHours: "Sunday: ",
        website: ""
    })
    
    

    const [formBreweryData, setFormBreweryData] = useState({
        name: "",
        image: "",
        petFriendly: false, 
        patio: false,
        monHours: "Monday: ",
        tuesHours: "Tuesday: ",
        wedHours: "Wednesday: ",
        thursHours: "Thursday: ",
        friHours: "Friday: ",
        satHours: "Saturday: ",
        sunHours: "Sunday: ",
        website: ""
    })

    function handleBarChangeText(event) {
        setFormBarData({
            ...formBarData,
            [event.target.name]: event.target.value
        })
       
    }

    function handleBarChangeCheckBox(event) {
        setFormBarData({
            ...formBarData, 
            [event.target.name]: event.target.checked 
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
                "hours": [formBarData.monHours, formBarData.tuesHours, formBarData.wedHours,formBarData.thursHours, formBarData.friHours, formBarData.satHours, formBarData.sunHours],
                "website": formBarData.website,
                "petFriendly": formBarData.petFriendly
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
                "hours": [formBreweryData.monHours, formBreweryData.tuesHours, formBreweryData.wedHours,formBreweryData.thursHours, formBreweryData.friHours, formBreweryData.satHours, formBreweryData.sunHours],
                "website": formBreweryData.website
            })
        })
            .then((r) => r.json())
            .then((newBrewery) => onAddBrewery(newBrewery))
    }

return (
<>
<Segment style={{"backgroundColor": "black"}} inverted padded="very">
        <Header  textAlign="center" as="h1">Add A New Bar or Brewery</Header>
</Segment>

<Container>
    <Segment raised>
        <Label size="massive" color="red" ribbon>Add A New Bar</Label>
            <Form  onSubmit={handleBarSubmit}>
                <Form.Field>
                <label>Bar Name</label>
                <input onChange={handleBarChangeText} type="text" name="name" value={formBarData.name} placeholder='Bar Name' />
                </Form.Field>
                <Form.Field>
                <label>Bar Image</label>
                <input onChange={handleBarChangeText} type="text" name="image" value={formBarData.image} placeholder='Bar Image' />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field>
                    <label>Bar Hours</label>
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="monHours" value={formBarData.monHours} placeholder='Monday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="tuesHours" value={formBarData.tuesHours} placeholder='Tuesday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="wedHours" value={formBarData.wedHours} placeholder='Wednesday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="thursHours" value={formBarData.thursHours} placeholder='Thursday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="friHours" value={formBarData.friHours} placeholder='Friday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="satHours" value={formBarData.satHours} placeholder='Saturday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="sunHours" value={formBarData.sunHours} placeholder='Sunday Hours' />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                <label>Bar Website</label>
                <input onChange={handleBarChangeText} type="text" name="website" value={formBarData.website}  placeholder='Bar Website' />
                </Form.Field>
                <Form.Field>
                    <input type="checkbox" name="petFriendly" value="Pet Friendly"  checked={formBarData.petFriendly} onChange={handleBarChangeCheckBox} label="Pet Friendly" />
                    Pet Friendly
                </Form.Field>
                <Form.Field>
                    <Checkbox  label="Patio"/>
                </Form.Field>
                <Button color="blue" type='submit'>Submit</Button>
            </Form>
    </Segment> 
</Container>

    <Divider hidden />

    <Container>
    <Segment raised>
        <Label size="massive" color="red" ribbon>Add A New Brewery</Label>
            <Form  onSubmit={handleBrewerySubmit}>
                <Form.Field>
                <label>Brewery Name</label>
                <input onChange={handleBreweryChange} type="text" name="name" value={formBreweryData.name} placeholder='Brewery Name' />
                </Form.Field>
                <Form.Field>
                <label>Brewery Image</label>
                <input onChange={handleBreweryChange} type="text" name="image" value={formBreweryData.image} placeholder='Brewery Image' />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field>
                    <label>Brewery Hours</label>
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="monHours" value={formBreweryData.monHours} placeholder='Monday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="tuesHours" value={formBreweryData.tuesHours} placeholder='Tuesday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="wedHours" value={formBreweryData.wedHours} placeholder='Wednesday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="thursHours" value={formBreweryData.thursHours} placeholder='Thursday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="friHours" value={formBreweryData.friHours} placeholder='Friday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="satHours" value={formBreweryData.satHours} placeholder='Saturday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="sunHours" value={formBreweryData.sunHours} placeholder='Sunday Hours' />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                <label>Brewery Website</label>
                <input onChange={handleBreweryChange} type="text" name="website" value={formBreweryData.website} placeholder='Brewery Website' />
                </Form.Field>
                <Button color="blue" type='submit'>Submit</Button>
            </Form>
    </Segment> 
</Container>

<Divider hidden />
</>

)
}

export default SubmitForm