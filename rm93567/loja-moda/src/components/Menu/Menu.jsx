import React from "react";
import { Link } from 'react-router-dom'

export default Menu;

function Menu(){
    return(
        <header>
            <nav>
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
                </ul>
            </nav>
        </header>
    )

    
}