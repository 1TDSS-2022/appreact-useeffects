import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Api from '../components/Api/Api'
import Home from '../components/Home/Home'
import Produtos from '../components/Produtos/Produtos'
import Servicos from '../components/Servicos/Servicos'

export default function MainRoutes() {
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
