import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Api from "./components/api/Api"
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/api' element={<Api/>} />
        </Routes>
    </BrowserRouter>,

document.getElementById("root"))
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   