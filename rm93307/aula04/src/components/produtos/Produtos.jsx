import React from "react";

export default function Produtos(){

    const produto = {
        backgroundColor : '#bff',
        height : '85vh',
        textAlign : 'center',
        color : '#7cc'
    }

    return(
        <div style={produto}>
            <h1>Página de Produtos</h1>
            <p>Exemplo da página de Produtos do Projeto.</p>
        </div>
    )
}