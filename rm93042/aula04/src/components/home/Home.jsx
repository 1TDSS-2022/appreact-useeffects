import React from "react";
import {Switch,Link,Route} from "react-router-dom"

export default function Home(){
    
    
    return(
        <div>
            <header>
                <Link to="/">HOME</Link>
                <Link to="/api">API</Link>
                
            </header>
        
        {/* Area de navegação */}
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/api">
                    <Api/>
                </Route>
            </Switch>

        {/* Area de navegação */}





        </div>
    )
}