import React from 'react'

export default function Home(){
    const home = {
        backgroundColor: '#fff',
        height: '85vh',
        textAlign: 'center',
        color: 'orange'
    }

    return(
        <div style={home}>
            <h1>Página principal</h1>
            <p>Exemplo da página de Produtos do projeo</p>
        </div>
    )
}