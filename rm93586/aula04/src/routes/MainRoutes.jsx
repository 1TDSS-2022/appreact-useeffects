import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from '../components/home/Home'
import Produtos from '../components/produtos/Produtos'
import Servicos from '../components/servicos/Servicos'


//Cria o endereço do diretorio no "/"
//Ex link.com/ = home       link.com/produtos = produtos
export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
            </Routes>
        </>
    )
}