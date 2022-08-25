import React from 'react'
import {Link} from 'react-router-dom'


// Ao clicar no link leva a página ao diretorio especificado (tem que ser criado pelo routes)
export default function Menu() {

    return(
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