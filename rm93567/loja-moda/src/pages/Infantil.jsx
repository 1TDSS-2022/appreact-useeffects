import React from "react"
import Produto from "../components/Produto/Produto";
import './Pages.css'

export default function Infantil() {
  return(
        <div>
            <h1>Sessçao Infantil</h1>

            <p>Sessão Infantil, peças para todos e a qualquer hora</p>
            <section>
                <Produto src='/img/infantis-1.png' alt='Agasalho Quadriculado' descricao='Agasalho Quadriculado' valor='129,99' />
                <Produto src='/img/infantis-2.png' alt='Agasalho Branco' descricao='Agasalho Branco' valor='129,99' />
                <Produto src='/img/infantis-3.png' alt='Agasalho Arco-Iris' descricao='Agasalho Arco-Iris' valor='129,99' />
            </section>

        </div>
  )
}