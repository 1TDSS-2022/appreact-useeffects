import React from "react";

import { Link } from "react-router-dom";
import lupa from '../../imgPadrao/lupa.png'
import carrinho from '../../imgPadrao/supermarket.png'
import usuario from '../../imgPadrao/user.png'

export default function Menu() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="/modafeminina">Moda Feminina</Link></li>
                    <li><Link to="/modamasculina">Moda Masculina</Link></li>
                    <li><Link to="/modainfantil">Moda infantil</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
            <div class="menu-cliente">
                <img src={lupa} alt="busca"/>
                <img src={carrinho} alt="usuario"/>
                <img src={usuario} alt="carrinho"/>
            </div>
        </header>
    )
}