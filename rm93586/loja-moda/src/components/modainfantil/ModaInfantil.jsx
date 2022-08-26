import React from "react";

import ListaDeRoupa from '../listaDeRoupa/ListaDeRoupa'

import Foto1 from './imgModa/1.jpg?auto=compress'
import Foto2 from './imgModa/2.jpg?auto=compress'
import Foto3 from './imgModa/3.jpg?auto=compress'
import Foto4 from './imgModa/4.jpg?auto=compress'
import Foto5 from './imgModa/5.jpg?auto=compress'


import './ModaInfantil.css'


const foto = [Foto1, Foto2, Foto3, Foto4, Foto5]
const roupa = ["Conjunto A", "Conjunto B", "Conjunto C", "Conjunto D", "Conjunto E"]
const preco = ["R$300,00", "R$250,00", "R$299,00", "R$399,00", "R$200,00"]


export default function ModaInfantil() {
    return(

        <>
        <section className="moda-infantil">
            <h2>Seleção Infantil</h2>
            <p className="moda-infantil-conteudo">Os termômetros ainda marcam elevadas temperaturas, mas as estações que inspiram as tendências do mundo da moda já estão se aproximando. E quando falamos sobre moda infantil, é preciso ressaltar que as crianças estão cada dia mais alinhadas com esse universo, tanto no quesito fashion quanto no conforto, que é uma das características mais procuradas pelas mamães e papais. </p>
            <div className="lista">
            <ListaDeRoupa roupasProps={foto} nomeProps={roupa} precoProps={preco}/>
            </div>
        </section>
        </>

    )
}