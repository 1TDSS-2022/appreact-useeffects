import React from "react"
import Produto from "../components/Produto/Produto";
import './Pages.css'

export default function ModaFeminina() {
    return (
        <main>
            <h1>Moda Feminina</h1>

            <p>A moda está em constante evolução para representar as ideias e sentimentos da sociedade. As mulheres expressam sua individualidade vestindo roupas de diversas tendências. Embora vários estilos tenham surgido, as mulheres têm dificuldade em encontrar roupas que fiquem bem nelas. A moda é uma indústria de nicho e deve atender aos gostos de um determinado grupo de pessoas. Para ajudar os designers de moda a enfrentar esse desafio, aqui estão alguns pensamentos sobre como as roupas femininas chiques devem ser.</p>

            <section>
                <Produto src='/images/feminino-1.png' alt='Top Rosa' descricao='Top Rosa' valor='74,99' />
                <Produto src='/images/feminino-2.png' alt='Top Vermelho' descricao='Top Vermelho' valor='74,99' />
                <Produto src='/images/feminino-3.png' alt='Top Preto' descricao='Top Preto' valor='74,99' />
                <Produto src='/images/feminino-4.png' alt='Top Academia' descricao='Top Academia' valor='74,99' />
            </section>

        </main>

    );
}