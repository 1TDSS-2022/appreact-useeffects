import React from "react";

import ListaDeRoupa from '../listaDeRoupa/ListaDeRoupa'

import Foto1 from './imgModa/1.jpg?auto=compress'
import Foto2 from './imgModa/2.jpg?auto=compress'
import Foto3 from './imgModa/3.jpg?auto=compress'
import Foto4 from './imgModa/4.jpg?auto=compress'
import Foto5 from './imgModa/5.jpg?auto=compress'


import './ModaMasculina.css'


const foto = [Foto1, Foto2, Foto3, Foto4, Foto5]
const roupa = ["Casaco Cinza", "Colete", "Conjunto Estilo", "Fashion", "Conjunto Alpha"]
const preco = ["R$100,00", "R$150,00", "R$199,00", "R$299,00", "R$400,00"]


export default function ModaMaculina() {
    return(

        <>
        <section className="moda-masculina">
            <h2>Seleção Masculina</h2>
            <p className="moda-masculina-conteudo">Usar tons neutros é uma dica clássica de como se vestir bem no inverno.<br/> Mas é importante destacar que se a sua profissão tiver um dress code mais informal, você pode sim adicionar cor e estampas no seu look.

As principais cores neutras que são curingas para a estação mais fria do ano são: preto, branco, creme, marrom, cinza e azul marinho.

Essas cores podem estar em calças, blusas, jaquetas, acessórios, etc.

Se você não curte muito só roupas escuras, a dica é brincar com as tonalidades de alguns tons como cinza e marrom.</p>
            <div className="lista">
            <ListaDeRoupa roupasProps={foto} nomeProps={roupa} precoProps={preco}/>
            </div>
        </section>
        </>

    )
}