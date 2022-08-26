import React from "react"
import Produto from "../components/Produto/Produto";
import './Pages.css'

export default function Calcas() {
    return (
        <main>
            <h1>Calças</h1>


            <section>
                <Produto src='/images/palla-pants.png' alt='Palla Pants Brown' descricao='Palla Pants Brown' valor='350,00' />
                <Produto src='/images/palla-pants2.png' alt='Palla Pants' descricao='Palla Pants' valor='299,00' />
            </section>

        </main>

    );
}