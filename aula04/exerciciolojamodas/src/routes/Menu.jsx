import React from "react";

export default function Menu(){

    const menu = {
        backgroundcolor : '#ffb',
        height : '85vh',
        textAlign : 'center',
        color : '#7cc'
    }

    return (
        <div style={menu}>
            <h1>Página de Menu</h1>
            <p>Loja MODA ! A sua loja de roupas!</p>
            <img src="/img/menuderoupas.jpg" alt="lojamoda" />
        </div>
    )
}