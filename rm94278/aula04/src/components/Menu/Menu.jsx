
import React from 'react';
import {Link} from 'react-router-dom'

// import { Container } from './styles';

export default function Menu() {
    
  return( 
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Produtos</Link></li>
                    <li><Link to="/services">Servicos</Link></li>
                </ul>
            </nav>
        </header>
  )
}
