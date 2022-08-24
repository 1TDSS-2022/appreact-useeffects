import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Produtos from './components/produtos/Produtos'
import Servicos from './components/servicos/Servicos'

export default function App (){
    return (
       
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/produtos" element={<Produtos/>}></Route>
                <Route path="/servicos" element={<Servicos/>}></Route>
            </Routes>
        </BrowserRouter>

    )
}