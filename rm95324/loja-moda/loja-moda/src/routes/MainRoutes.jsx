import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/home/Home'
import ModaFeminina from '../components/moda-feminina/ModaFeminina'
import ModaMasculina from '../components/moda-masculina/ModaMasculina'
import ModaInfantil from '../components/moda-infantil/ModaInfantil'
import Sobre from '../components/sobre/Sobre'

export default function MainRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/moda-feminina" element={<ModaFeminina/>}/>
                <Route path="/moda-masculina" element={<ModaMasculina/>}/>
                <Route path="/moda-infantil" element={<ModaInfantil/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
        </>
    )
}