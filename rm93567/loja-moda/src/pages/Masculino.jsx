import React from "react"
import Produto from "../components/Produto/Produto";
import './Pages.css'

export default function Masculino() {
  return(
        <div>
            <h1>Sessão Masculina</h1>

            <p>Sessão masculina, peças para todos e a qualquer hora.</p>

            <section>
                <Produto src='/img/masculino-1.png' alt='Camisa do São Paulo' descricao='Camisa do São Paulo' valor='190,00' />
                <Produto src='/img/masculino-2.png' alt='Camisa do Corinthians' descricao='Camisa do Corinthians' valor='190,00' />
                <Produto src='/img/masculino-3.png' alt='Camisa do Santos' descricao='Camisa do Santos' valor='190,00' />
            </section>

        </div>
  )
}