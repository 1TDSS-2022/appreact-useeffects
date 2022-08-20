import React from "react";
import Api from "./components/api/Api";
import {BrowserRouter as Switch,Route,Link} from 'react-router-dom'
import Home from "./components/home/Home";


export default function App(){
    return(
        <div>
            <h1>Estudo Sobre Use Effect</h1>
            {/* <Api/> */}
            <Home/>

        </div>
    )
}