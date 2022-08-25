import React from "react";
// import { Switch, Route, Link } from "react-router";
// import Api from "../api/Api";
import{Link} from "react-router-dom";

export default function Home(){

    const home = {
        backgroundColor : '#ffb',
        height : '85vh',
        textAlign : 'center',
        color : 'orange'
    }

    return(
        <div style={home}>
            <h1>Página Principal</h1>
            <p>Exemplo da página Principal do projeto.</p>
        </div>
    )
}