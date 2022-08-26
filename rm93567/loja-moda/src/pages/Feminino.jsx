import React from "react"
import Produto from "../components/Produto/Produto";


export default function Feminino() {
  return(
    <div>
        <h1>Moda Feminina</h1>

        <p>Sessão feminina, peças para todas e a qualquer hora</p>

        <section>
            <Produto src = '/img/feminina-1.png' alt='Camisa' descricao='Camisa' valor='59,99' />
            <Produto src='/img/feminina-2.png' alt='Top Rosa' descricao='Top Rosa' valor='54,99' />
            <Produto src='/img/feminina-3.png' alt='Camisa' descricao='Camisa' valor='59,99' />
        </section>
    </div>
  )
}