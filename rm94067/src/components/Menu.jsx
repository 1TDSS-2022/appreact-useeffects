import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){

    const header = {
        padding: '25px',
        backgroundColor: 'Black',
        color: 'white',
        
    }
    const h1 = {
        margin: '0px',
    }

    return(
        <>
            <header style={header}>
                <h1 style={h1}>Logotipo</h1>
                <div>
                    <ul>
                        <li><Link to ='/'>Home</Link></li>
                        <li><Link to ='/modaFem'>Moda Feminina</Link></li>
                        <li><Link to ='/modaMasc'>Moda Masculina</Link></li>
                        <li><Link to ='/modaInfantil'>Moda Infantil</Link></li>
                        <li><Link to ='/sobre'>Sobre</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}