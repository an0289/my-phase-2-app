import React from "react"
import { Route, Switch } from "react-router-dom"
import Bars from "./Bars"
import Breweries from "./Breweries"
import NavBar from "./NavBar"
import SubmitForm from "./SubmitForm"


function App() {
return (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/bars">
                <Bars />
            </Route>
            <Route exact path="/breweries">
                <Breweries />
            </Route>
            <Route exact path="/submitform">
                <SubmitForm />
            </Route>
        </Switch>
    </div>
)
}

export default App