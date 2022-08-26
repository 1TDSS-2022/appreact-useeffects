import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import ModaMasculina from '../components/Masculino/ModaMasculino'
import ModaFeminina from '../components/Feminino/ModaFeminina'
import ModaInfantil from '../components/Infantil/ModaInfantil'
import Sobre from '../components/Sobre/Sobre'


export default function Routers() {
  return (
    
    <>
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/masculino' element={<ModaMasculina/>}/>
        <Route path='/feminino' element={<ModaFeminina/>}/>
        <Route path='/infantil' element={<ModaInfantil/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
    </Routes>
    </>
    
  )
}
