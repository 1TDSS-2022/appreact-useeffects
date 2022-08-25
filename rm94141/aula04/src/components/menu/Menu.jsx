import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../components/home/Home'
import Produtos from '../components/produtos/Produtos'
import Servicos from '../components/servicos/Servicos'

export default function Menu() {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
            </ul>    
        </nav>
    </header>
  )
}
