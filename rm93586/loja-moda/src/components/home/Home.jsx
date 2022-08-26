import React from "react";
import {Link} from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <>
            <header className="cabecalho">
                <div className="cabecalho_conteudo">
                    <p className="cabecalho_conteudo_titulo">NOVA COLEÇÃO 2022</p>
                    <h1>A NOVA TEMPORADA <br/>DA MODA!</h1>
                    <p className="cabecalho_conteudo2">O melhor da estação!! <br/> Confira o que vai ser moda no inverno e renove seu guarda-roupa!</p>
                    <li><Link to="/modafeminina" ><button className="cabecalho_botao">Venha conhecer!</button></Link></li>
                </div>
            </header>
        </>
    )
}