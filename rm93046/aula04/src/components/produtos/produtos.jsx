import React from "react";

export default function home(){
    const produtos = {
        backgroundColor : '#bff',
        height : '85vh',
        textAlign : 'center',
        color : '7cc'
    }

    return(
        <div Style = {produtos}>
            <h1>Página de produtos</h1>
            <p>exemplo de pagina de produtos</p>
        </div>
    )
}