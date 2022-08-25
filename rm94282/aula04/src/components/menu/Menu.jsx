import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return(
    <header>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/api">Api GitHub</Link></li>
        </ul>
        </nav>
    </header>
  )
}

export default Menu;