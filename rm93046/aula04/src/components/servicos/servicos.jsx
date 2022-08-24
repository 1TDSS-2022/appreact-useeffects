import React from "react";

export default function home(){
    const servicos = {
        backgroundColor : '#bfb',
        height : '85vh',
        textAlign : 'center',
        color : 'orange'
    }

    return(
        <div Style = {servicos}>
            <h1>Página de serviços</h1>
            <p>exemplo de pagina de serviços</p>
        </div>
    )
}