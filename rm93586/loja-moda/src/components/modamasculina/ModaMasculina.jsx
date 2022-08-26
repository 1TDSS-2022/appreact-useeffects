import React from "react";

import ListaDeRoupa from '../listaDeRoupa/ListaDeRoupa'

import Foto1 from './imgModa/1.jpg'
import Foto2 from './imgModa/2.jpg'
import Foto3 from './imgModa/3.jpg'
import Foto4 from './imgModa/4.jpg'
import Foto5 from './imgModa/5.jpg'


import './ModaMasculina.css'


const foto = [Foto1, Foto2, Foto3, Foto4, Foto5]
const roupa = ["Roupa1", "Roupa2", "Roupa3", "Roupa4", "Roupa5"]
const preco = ["R$100,00", "R$100,00", "R$100,00", "R$100,00", "R$100,00"]


export default function ModaMaculina() {
    return(

        <>
        <section class="moda-masculina">
            <h2>Seleção Masculina</h2>
            <p class="moda-masculina-conteudo">Lorem ipsum dolor sit amet consectetur. <br/>
                Lorem, ipsum dolor.</p>
            <div class="lista">
            <ListaDeRoupa roupasProps={foto} nomeProps={roupa} precoProps={preco}/>
            </div>
        </section>
        </>

    )
}