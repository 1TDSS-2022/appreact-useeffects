import React from 'react'

export default function Home(){

    const produtos = {
        backgroundColor : '#bff',
        height : '85vh',
        textAlign : 'center',
        color : '#7cc'
    }

    return(
        <div style={produtos}>
            <h1>Página de Produtos</h1>
            <p>Exemplo da página dos produtos de compra.</p>
        </div>
    )

}