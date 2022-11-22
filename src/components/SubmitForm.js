import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Checkbox, Form, Container, Header, Segment, Divider, Label } from 'semantic-ui-react'

function SubmitForm({ onAddBar, onAddBrewery }) {
   
    const history = useHistory()
    
    
    const [formBarData, setFormBarData] = useState({
        name: "",
        image: "",
        petFriendly: false, 
        patio: false,
        mondayHours: "Monday: ", 
        tuesdayHours: "Tuesday: ",
        wednesdayHours: "Wednesday: ",
        thursdayHours: "Thursday: ",
        fridayHours: "Friday: ",
        saturdayHours: "Saturday: ", 
        sundayHours: "Sunday: ", 
        website: "", 
        likes: 0
    })
    
    

    const [formBreweryData, setFormBreweryData] = useState({
        name: "",
        image: "",
        petFriendly: false, 
        patio: false,
        mondayHours: "Monday: ", 
        tuesdayHours: "Tuesday: ",
        wednesdayHours: "Wednesday: ",
        thursdayHours: "Thursday: ",
        fridayHours: "Friday: ",
        saturdayHours: "Saturday: ", 
        sundayHours: "Sunday: ",
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

    function handleBreweryChangeCheckBox(event) {
        setFormBreweryData({
            ...formBreweryData, 
            [event.target.name]: event.target.checked 
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
                "mondayHours": formBarData.mondayHours,
                "tuesdayHours": formBarData.tuesdayHours,
                "wednesdayHours": formBarData.wednesdayHours,
                "thursdayHours": formBarData.thursdayHours,
                "fridayHours": formBarData.fridayHours,
                "saturdayHours": formBarData.saturdayHours, 
                "sundayHours": formBarData.sundayHours,
                "petFriendly": formBarData.petFriendly, 
                "patio": formBarData.patio, 
                "website": formBarData.website,
                "likes": parseInt(formBarData.likes),
            })
        })
            .then((r) => r.json())
            .then((newBar) => {
                onAddBar(newBar)
                history.push("/bars")})
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
                "mondayHours": formBreweryData.mondayHours,
                "tuesdayHours": formBreweryData.tuesdayHours,
                "wednesdayHours": formBreweryData.wednesdayHours,
                "thursdayHours": formBreweryData.thursdayHours,
                "fridayHours": formBreweryData.fridayHours,
                "saturdayHours": formBreweryData.saturdayHours, 
                "sundayHours": formBreweryData.sundayHours,
                "website": formBreweryData.website, 
                "petFriendly": formBreweryData.petFriendly,
                "patio": formBreweryData.patio
            })
        })
            .then((r) => r.json())
            .then((newBrewery) => {
                onAddBrewery(newBrewery)
                history.push(`/breweries`)})
    }

return (
<div style={{ backgroundColor:"white"}}>
<Divider hidden/>
    <Container text>
            <Header  textAlign="center" as="h1">Add A New Bar Or Brewery</Header>   
    </Container>
<Divider hidden />

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
                    <input onChange={handleBarChangeText} type="text" name="mondayHours" value={formBarData.mondayHours} 
                    placeholder='Monday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="tuesdayHours" value={formBarData.tuesdayHours} 
                    placeholder='Tuesday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="wednesdayHours" value={formBarData.wednesdayHours} 
                    placeholder='Wednesday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="thursdayHours" value={formBarData.thursdayHours} 
                    placeholder='Thursday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="fridayHours" value={formBarData.fridayHours} 
                    placeholder='Friday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="saturdayHours" value={formBarData.saturdayHours} 
                    placeholder='Saturday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBarChangeText} type="text" name="sundayHours" value={formBarData.sundayHours} 
                    placeholder='Sunday Hours' />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                <label>Bar Website</label>
                <input onChange={handleBarChangeText} type="text" name="website" value={formBarData.website}  placeholder='Bar Website' />
                </Form.Field>
                <Form.Field>
                    <input type="checkbox" name="petFriendly" value="Pet Friendly"  checked={formBarData.petFriendly} 
                    onChange={handleBarChangeCheckBox} label="Pet Friendly" />
                    Pet Friendly
                </Form.Field>
                <Form.Field>
                <input type="checkbox" name="patio" value="Outdoor Seating"  checked={formBarData.patio}
                 onChange={handleBarChangeCheckBox} label="Pet Friendly" />
                    Outdoor Seating
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
                    <input onChange={handleBreweryChange} type="text" name="mondayHours" value={formBreweryData.mondayHours} placeholder='Monday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="tuesdayHours" value={formBreweryData.tuesdayHours} placeholder='Tuesday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="wednesdayHours" value={formBreweryData.wednesdayHours} placeholder='Wednesday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="thursdayHours" value={formBreweryData.thursdayHours} placeholder='Thursday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="fridayHours" value={formBreweryData.fridayHours} placeholder='Friday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="saturdayHours" value={formBreweryData.saturdayHours} placeholder='Saturday Hours' />
                    </Form.Field>
                    <Form.Field>
                    <input onChange={handleBreweryChange} type="text" name="sundayHours" value={formBreweryData.sundayHours} placeholder='Sunday Hours' />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                <label>Brewery Website</label>
                <input onChange={handleBreweryChange} type="text" name="website" value={formBreweryData.website} placeholder='Brewery Website' />
                </Form.Field>
                <Form.Field>
                    <input type="checkbox" name="petFriendly" value="Pet Friendly"  checked={formBreweryData.petFriendly} onChange={handleBreweryChangeCheckBox}  />
                    Pet Friendly
                </Form.Field>
                <Form.Field>
                <input type="checkbox" name="patio" value="Outdoor Seating"  checked={formBreweryData.patio} onChange={handleBreweryChangeCheckBox}  />
                    Outdoor Seating
                </Form.Field>
                <Button color="blue" type='submit'>Submit</Button>
            </Form>
    </Segment> 
</Container>

<Divider hidden />
</div>

)
}

export default SubmitForm