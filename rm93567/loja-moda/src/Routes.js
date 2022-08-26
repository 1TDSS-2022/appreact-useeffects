import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu';
import Home from './pages/Home';
import Feminino from './pages/Feminino';
import Infantil from './pages/Infantil';
import Masculino from './pages/Masculino';

export default function MyRoutes() {
    return (
        <BrowserRouter>

            <Menu />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/masculino' element={<Masculino />} />
                <Route path='/feminino' element={<Feminino />} />
                <Route path='/infantil' element={<Infantil />} />
            </Routes>


        </BrowserRouter>
    )
}