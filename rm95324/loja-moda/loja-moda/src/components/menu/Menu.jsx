import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import './menu.css'

export default function Menu(){
    return(
        <header>
            <h1>Loja de modas</h1>
            <nav>
                <ul class="menu">
                    <li><Link to="/" class="link">Home</Link></li>
                    <li><Link to="/moda-feminina" class="link">Moda Feminina</Link></li>
                    <li><Link to="/moda-masculina" class="link">Moda Masculina</Link></li>
                    <li><Link to="/moda-infantil" class="link">Moda Infantil</Link></li>
                    <li><Link to="/sobre" class="link">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}