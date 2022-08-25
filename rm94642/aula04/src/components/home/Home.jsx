import React from "react"

export default function Home() {

    const home = {
        backgroundColor : '#ffb',
        height : '85vh',
        textAlign : 'center',
        color : 'orange'
    }

    return (
        <div style={home}>
            <h1>Pagina Principal</h1>
            <p>Exemplo da pagina principal.</p>
        </div>
    )
}