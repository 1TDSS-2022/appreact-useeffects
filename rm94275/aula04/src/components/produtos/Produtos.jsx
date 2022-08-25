import React from 'react'

export default function Produtos(){
    
    const produtos = {
        backgroundColor : '#000',
        height : '85vh',
        textAlign : 'center',
        color : '#7cc'
    }

    return (
        <div style={produtos}>
            <h1>Página de produtos</h1>
            <p>Exemplo de página de produtos do Projeto.</p>
        </div>
    )
}