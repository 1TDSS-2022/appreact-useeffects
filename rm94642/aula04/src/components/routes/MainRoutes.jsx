import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from '../components/home/Home'
import Produtos from '../components/produtos/Produtos'
import Servicos from '../components/servicos/Servicos'

export default function MainRoutes() {
    <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
            </Routes>
    </>
}