import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import ModaMasculina from '../components/Masculino/ModaMasculino'
import ModaFeminina from '../components/Feminino/ModaFeminina'
import ModaInfantil from '../components/Feminino/ModaFeminina'


export default function Routers() {
  return (
    
    <>
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/masculino' element={<ModaMasculina/>}/>
        <Route path='/feminino' element={<ModaFeminina/>}/>
        <Route path='/infantil' element={<ModaInfantil/>}/>
    </Routes>
    </>
    
  )
}
