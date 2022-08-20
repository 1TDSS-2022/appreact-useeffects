import React from 'react'
import {Switch, Link, Route} from 'react-router'
import Api from "../api/Api"

export default function Home(){
    
    return(
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/api">API</Link>
            </header>

        {/* Area de Navegação */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Api">
                    <Api />
                </Route>
            </Switch>
        {/* Area de Navegação */}

        </div>
    )
}