import React from "react"
import {Routes, Link, Route} from "react-router-dom"
import Api from "../api/Api"

export default function Home(){

    return(
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/api">Api</Link>
                
                
            </header>
        
        

        <Routes>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/api">
                <Api/>
            </Route>
        </Routes>

        </div>
    )
}