import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu';
import Rodape from './components/Rodape/Rodape';
import Home from './pages/Home';
import ModaFeminina from './pages/ModaFeminina';
import ModaInfantil from './pages/ModaInfantil';
import ModaMasculina from './pages/ModaMasculina';
import Sobre from './pages/Sobre';

export default function MyRoutes() {
    return (
        <BrowserRouter>

            <Menu />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/masculino' element={<ModaMasculina />} />
                <Route path='/feminino' element={<ModaFeminina />} />
                <Route path='/infantil' element={<ModaInfantil />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>

            <Rodape/>

        </BrowserRouter>
    )
}