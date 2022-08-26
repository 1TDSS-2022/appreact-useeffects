import React from "react"
import Produto from "../components/Produto/Produto";
import './Pages.css'

export default function ModaMasculina() {
    return (
        <main>
            <h1>Moda Masculina</h1>

            <p>A moda masculina tornou-se cada vez mais diversificada nos últimos anos, à medida que as gerações mais jovens começaram a adotar looks diferentes de designers populares. No passado, os homens usavam vestidos longos e ternos elegantes que eram muito diferentes do estilo de hoje. Embora as primeiras modas para os homens fossem semelhantes às das mulheres, os estilos para os homens evoluíram ao longo do tempo. A moda masculina, sem dúvida, mudou ao longo dos anos, à medida que se tornou mais popular entre o público em geral.</p>

            <section>
                <Produto src='/images/masculino-1.png' alt='Camisa do Flamengo' descricao='Camisa do Flamengo' valor='120,00' />
                <Produto src='/images/masculino-2.png' alt='Camisa do São Paulo' descricao='Camisa do São Paulo' valor='120,00' />
                <Produto src='/images/masculino-3.png' alt='Camisa do Atlético' descricao='Camisa do Atlético' valor='120,00' />
                <Produto src='/images/masculino-4.png' alt='Camisa do Cruzeiro' descricao='Camisa do Cruzeiro' valor='120,00' />
            </section>

        </main>

    );
}