import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Bars from "./Bars"
import Breweries from "./Breweries"
import NavBar from "./NavBar"
import SubmitForm from "./SubmitForm"
import Home from "./Home"
import { Divider, Segment } from 'semantic-ui-react'


function App() {
    const [bars, setBars] = useState([])
    const [breweries, setBreweries] = useState([])

   useEffect(() => {
    fetch("http://localhost:3000/bars")
    .then((r) => r.json())
    .then((bars) => setBars(bars))
   }, []) 

return (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/bars">
                <Bars bars={bars} setBars={setBars}/>   
            </Route>
            <Route exact path="/breweries">
                <Breweries />
            </Route>
            <Route exact path="/submitform">
                <SubmitForm />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </div>
)
}

export default App