import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu';
import Rodape from './components/Rodape/Rodape';
import Home from './pages/Home';
import Calcados from './pages/Calcados';
import Calcas from './pages/Calcas';
import Roupas from './pages/Roupas';
import Sobre from './pages/Sobre';

export default function MyRoutes() {
    return (
        <BrowserRouter>

            <Menu />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/roupas' element={<Roupas />} />
                <Route path='/calcados' element={<Calcados />} />
                <Route path='/calcas' element={<Calcas />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>

            <Rodape/>

        </BrowserRouter>
    )
}