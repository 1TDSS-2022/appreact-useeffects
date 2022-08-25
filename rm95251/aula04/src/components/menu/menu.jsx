import React from 'react'
import {Link} from 'react-router-dom'


export default function Menu(){
    return(
    <nav>
    <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/produtos">PRODUTOS</Link></li>
        <li><Link to="/servicos">SERVIÇOS</Link></li>
    </ul>
    </nav>
)
}
