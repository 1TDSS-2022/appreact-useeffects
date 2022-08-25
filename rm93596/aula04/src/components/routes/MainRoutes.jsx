import React from "react"
import {Routes, Route} from 'react-router-dom'
import Servicos from "../components/api/servicos/Servicos"
import Home from "../components/home/Home"
import Produtos from "../components/produtos/Produtos"

export default function App(){


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