import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import home from './components/home/home'
import Produtos from './components/produtos/produtos'
import Servicos from './components/servicos/servicos'
import Menu from './components/menu/menu'



export default function App(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path = "/" element = {home}/>
                <Route path = "/produtos" element = {<Produtos/>}/>
                <Route path = "/servicos" element = {<Servicos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

