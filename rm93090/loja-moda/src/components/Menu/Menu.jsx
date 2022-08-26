import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu() {
    return (
        <header>
            <nav className='gray12'>
                <h1>Loja Moda</h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/masculino'>Masculino</Link>
                    </li>
                    <li>
                        <Link to='/feminino'>Feminino</Link>
                    </li>
                    <li>
                        <Link to='/infantil'>Infantil</Link>
                    </li>
                    <li>
                        <Link to='/sobre'>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu;