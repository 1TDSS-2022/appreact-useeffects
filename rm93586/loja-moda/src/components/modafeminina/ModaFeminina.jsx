import React from "react";

import ListaDeRoupa from '../listaDeRoupa/ListaDeRoupa'

import Foto1 from './imgModa/1.jpg'
import Foto2 from './imgModa/2.jpg'
import Foto3 from './imgModa/3.jpg'
import Foto4 from './imgModa/4.jpg'
import Foto5 from './imgModa/5.jpg'


import './ModaFeminina.css'


const foto = [Foto1, Foto2, Foto3, Foto4, Foto5]
const roupa = ["Vestido1", "Vestido2", "Vestido3", "Vestido4", "Vestido5"]
const preco = ["R$100,00", "R$100,00", "R$100,00", "R$100,00", "R$100,00"]


export default function ModaFeminina() {
    return(

        <>
        <section class="moda-feminina">
            <h2>Seleção Feminina</h2>
            <p class="moda-feminina-conteudo">Lorem ipsum dolor sit amet consectetur. <br/>
                Lorem, ipsum dolor.</p>
            <div class="lista">
            <ListaDeRoupa roupasProps={foto} nomeProps={roupa} precoProps={preco}/>
            </div>
        </section>
        </>

    )
}