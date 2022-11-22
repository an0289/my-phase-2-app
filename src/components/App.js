import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Bars from "./Bars"
import Breweries from "./Breweries"
import NavBar from "./NavBar"
import SubmitForm from "./SubmitForm"
import Home from "./Home"
import { Divider, Segment, Header } from 'semantic-ui-react'



function App() {
    const [bars, setBars] = useState([])
    const [breweries, setBreweries] = useState([])
    const [searchBar, setSearchBar] = useState("")
    const [searchBrewery, setSearchBrewery] = useState("")
    

    
    
    

   useEffect(() => {
    fetch("http://localhost:3000/bars")
    .then((r) => r.json())
    .then((bars) => setBars(bars))
   }, []) 

   useEffect(() => {
    fetch("http://localhost:3000/breweries")
    .then((r) => r.json())
    .then((breweries) => setBreweries(breweries))
   }, []) 

   function handleAddBar(newBar) {
    setBars([...bars, newBar])
   }

   function handleAddBrewery(newBrewery) {
    setBreweries([...breweries, newBrewery])
   }

   function updateBarCard(updatedBar){
    const updatedBars = bars.map((bar) => {
        if(bar.id === updatedBar.id) {
            return updatedBar
        }
        return bar
    })
    setBars(updatedBars)
    }

   function updateBarLikes(updatedBar){
    const updatedBars = bars.map((bar) => {
        if(bar.id === updatedBar.id) {
            return updatedBar
        }
        return bar
    })
    setBars(updatedBars)
    }

    function updateBreweryCard(updatedBrewery) {
     const updatedBreweries = breweries.map((brewery) => {
        if(brewery.id === updatedBrewery.id) {
            return updatedBrewery
        }
        return brewery
     })
     setBreweries(updatedBreweries)
    }

    function updateBreweryLikes(updatedBrewery) {
        const updatedBreweries = breweries.map((brewery) => {
            if(brewery.id === updatedBrewery.id) {
                return updatedBrewery
            }
            return brewery
        })
        setBreweries(updatedBreweries)
    }



return (
    <div style={{ backgroundColor: "black"}} >
        <Header  style={{backgroundColor:"black"}} >
        <NavBar />
        </Header>
        <div >
        <Switch>
            <Route exact path="/bars">
                <Bars  
                onUpdateBarLikes={updateBarLikes} 
                onUpdateBarCard={updateBarCard}
                searchBar={searchBar} setSearchBar={setSearchBar} bars={bars} setBars={setBars}/>   
            </Route>
            <Route exact path="/breweries">
                <Breweries searchBrewery={searchBrewery} setSearchBrewery={setSearchBrewery} breweries={breweries} setBreweries={setBreweries}
                onUpdateBreweryCard={updateBreweryCard}
                onUpdateBreweryLikes={updateBreweryLikes}/>
            </Route>
            <Route exact path="/submitform">
                <SubmitForm onAddBar={handleAddBar} onAddBrewery={handleAddBrewery} />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        </div>
    </div>
)
}

export default App