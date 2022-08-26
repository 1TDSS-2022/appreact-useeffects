import React from "react"
import Produto from "../components/Produto/Produto";
import './Pages.css'

export default function Calcados() {
    return (
        <main>
            <h1>Calçados</h1>


            <section>
                <Produto src='./images/Dunk_UNLV.png' alt='Dunk UNLV' descricao='Dunk UNLV' valor='1500,00' />
                <Produto src='/images/Dunk-Black.png' alt='Dunk Black' descricao='Dunk Black' valor='2900,00' />
                <Produto src='/images/DunkLow-Paisley.png' alt='Dunk Low Paisley' descricao='Dunk Low Paisley' valor='1600,00' />
                <Produto src='/images/Air Force-“Off-White”.png' alt='Air Force 1 Mid “Off-White”' descricao='Air Force 1 Mid “Off-White”' valor='3200,00' />
                <Produto src='/images/yeezy-500.png' alt='Yeezy 500”' descricao='Yeezy 500' valor='1900,00' />          
            </section>

        </main>

    );
}