import React from 'react'

export default function Home(){
    
    const home = {
        backgroundColor : '#000',
        height : '85vh',
        textAlign : 'center',
        color : '#7cc'
    }

    return (
        <div style={home}>
            <h1>Página principal</h1>
            <p>Exemplo de página principal do Projeto.</p>
        </div>
    )

}