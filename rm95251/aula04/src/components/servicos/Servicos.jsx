import React from 'react'

export default function Home(){

    const servicos = {
        backgroundColor : '#bfb',
        height : '85vh',
        textAlign : 'center',
        color : '#7c7'
    }

    return(
        <div style={servicos}>
            <h1>Página de Serviços</h1>
            <p>Exemplo da página dos Serviços.</p>
        </div>
    )

}