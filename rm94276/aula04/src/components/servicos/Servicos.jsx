import React from 'react'

export default function Servicos(){

    const servicos = {
        backgrounColor: '#ff3',
        height: '85v',
        textAlign: 'center',
        color: 'orange'
    }

    return(
        <div style={servicos}>
            <h1>Página de Serviços</h1>
            <p>Exemplo da página de Serviços do projeto</p>
        </div>
    )
}