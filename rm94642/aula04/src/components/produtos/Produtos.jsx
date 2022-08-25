import React from "react"

export default function Produtos() {

    const produtos = {
        backgroundColor : '#bff',
        height : '85vh',
        textAlign : 'center',
        color : '#7cc'
    }

    return (
        <div style={produtos}>
            <h1>Pagina de Produtos</h1>
            <p>Exemplo de pagina de produtos do projeto.</p>
        </div>
    )
}