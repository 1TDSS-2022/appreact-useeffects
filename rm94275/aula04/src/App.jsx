import React from 'react'
import ReactDOM from 'react-dom'
import Api from './components/api/Api'
import {BrowserRouter as Router} from 'react-router-dom'

export default function App(){
    return(
        <div>
            <h1>ESTUDO SOBRE USE-EFFECTS</h1>
            <Api/>
        </div>
    )
}

/*
const App = () =>{
    return(
        <div>
            <h1>ESTUDO SOBRE USE-EFFECTS</h1>

        </div>
    )
}
*/