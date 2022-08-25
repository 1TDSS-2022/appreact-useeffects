import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "../components/home/Home"
import Produtos from "../components/produtos/Produtos"
import Servicos from "../components/servicos/Servicos"

export default function MainRoutes(){

    return(
        <div>
                <Routes>
                    <Route path="/" element={<Home></Home>}/>
                    <Route path="/products" element={<Produtos></Produtos>}/>
                    <Route path="/services" element={<Servicos></Servicos>}/>
                </Routes>
        </div>
    )
}
