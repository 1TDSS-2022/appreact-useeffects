import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Menu from './components/Menu'
import Produtos from './components/produtos/Produtos'
import Servicos from './components/servicos/Rodapes'


export default function App(){

    return(

        <BrowserRouter>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/servicos">Servicos</Link></li>
        </ul>

            <Routes>
                <Route path='/' element={<Menu/>} />
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}
