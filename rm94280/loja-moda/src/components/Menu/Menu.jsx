import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu() {
    return (
        <header>
            <nav>
                <h1>Hyped M</h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/calcados'>Calçados</Link>
                    </li>
                    <li>
                        <Link to='/calcas'>Calças</Link>
                    </li>
                    <li>
                        <Link to='/roupas'>Roupas</Link>
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