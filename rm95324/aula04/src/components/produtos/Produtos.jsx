import React from 'react'

export default function Produtos(){
    
    const produtos = {
        backgroundColor: '#bff',
        height: '85vh',
        textAlign: 'center',
        color: '#7cc'
    }

    return(
        <div style={produtos}>
            <h1>Página produtos</h1>
            <p>Exemplo da página de produtos do projeto</p>
        </div>
    )
}