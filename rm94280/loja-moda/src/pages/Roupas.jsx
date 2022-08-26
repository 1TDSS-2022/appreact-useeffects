import React from "react"
import Produto from "../components/Produto/Produto";
import './Pages.css'

export default function Roupas() {
    return (
        <main>
            <h1>Roupas</h1>

            <section>
                <Produto src='/images/vlone-rodman.png' alt='Vlone Rodman Tee' descricao='Vlone Rodman Tee' valor='1500,00' />
                <Produto src='/images/popsmoke-tee.png' alt='Vlone Pop Smoke Tee' descricao='Vlone Pop Smoke Tee' valor='1850,00' />
                <Produto src='/images/ASSC.png' alt='Anti Social Social Club Tee' descricao='Anti Social Social Club Tee' valor='750,00' />
                <Produto src='/images/ASSC2.png' alt='Anti Social Social Club Tee2' descricao='Anti Social Social Club Roses Tee' valor='120,00' />
                <Produto src='/images/assc-hoodie.png' alt='Anti Social Social Club Hoodie' descricao='Anti Social Social Club Hoodie' valor='1850,00' />
            </section>

        </main>

    );
}