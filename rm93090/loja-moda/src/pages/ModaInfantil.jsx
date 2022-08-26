import React from "react"
import Produto from "../components/Produto/Produto";
import './Pages.css'

export default function ModaInfantil() {
    return (
        <main>
            <h1>Moda Feminina</h1>

            <p>As roupas infantis mudaram ao longo do tempo para atender às necessidades das crianças em crescimento e seus gostos em constante mudança. Ao incentivar e informar as crianças, os pais os ajudam a definir seu próprio estilo com base nas últimas tendências da moda. Qualquer coisa é um jogo justo quando as crianças entendem como definir as escolhas da moda para si mesmas.</p>

            <section>
                <Produto src='/images/infantil-1.png' alt='Agasalho Azul' descricao='Agasalho Azul' valor='74,99' />
                <Produto src='/images/infantil-2.png' alt='Agasalho Preto' descricao='Agasalho Preto' valor='74,99' />
                <Produto src='/images/infantil-3.png' alt='Agasalho Rosa' descricao='Agasalho Rosa' valor='74,99' />
                <Produto src='/images/infantil-4.png' alt='Agasalho Roxo' descricao='Agasalho Roxo' valor='74,99' />
            </section>

        </main>

    );
}