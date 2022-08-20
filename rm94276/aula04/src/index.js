import React from "react"
import ReactDOM  from "react-dom"
import App from "./App.jsx"
import "./index.css"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Api from "./components/api/Api.jsx"

ReactDOM.render( 
    <BrowserRouter>
        <Routes>    
            <Route element={<App/>}/>
            <Route element={<Api/>}/>
        </Routes>
    </BrowserRouter>
    ,document.getElementById('root'))