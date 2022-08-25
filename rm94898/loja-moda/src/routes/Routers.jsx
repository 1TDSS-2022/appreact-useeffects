import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'


export default function Routers() {
  return (
    
    <>
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
        <Route path='/api' element={<Api/>}/>
    </Routes>
    </>
    
  )
}
