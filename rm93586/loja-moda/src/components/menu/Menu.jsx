import React from "react";

import { Link } from "react-router-dom";

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
        </header>
    )
}