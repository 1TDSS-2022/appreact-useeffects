import React from "react";

import ListaDeRoupa from '../listaDeRoupa/ListaDeRoupa'

import Foto1 from './imgModa/1.jpg?auto=compress'
import Foto2 from './imgModa/2.jpg?auto=compress'
import Foto3 from './imgModa/3.jpg?auto=compress'
import Foto4 from './imgModa/4.jpg?auto=compress'
import Foto5 from './imgModa/5.jpg?auto=compress'


import './ModaFeminina.css'


const foto = [Foto1, Foto2, Foto3, Foto4, Foto5]
const roupa = ["Casaco Preto", "Casaco Branco", "Casaco Preto", "Casaco Cinza", "Casaco Rosa"]
const preco = ["R$100,00", "R$150,00", "R$100,00", "R$600,00", "R$300,00"]


export default function ModaFeminina() {
    return(

        <>
        <section className="moda-feminina">
            <h2>Seleção Feminina</h2>
            <p className="moda-feminina-conteudo">Uma questão importante a se considerar quando falamos sobre o que usar no inverno em um país com múltiplos climas é que todas as tendências podem e devem ser adaptadas para a sua realidade e as temperaturas do local onde você mora. 

Com isso em mente, na hora de criar um look ou elaborar uma coleção específica para os meses mais gelados do ano, considere as cores, os contrastes, as texturas, as formas, as estampas, os recortes e até os acessórios que prometem bombar na estação.</p>
            <div className="lista">
            <ListaDeRoupa roupasProps={foto} nomeProps={roupa} precoProps={preco}/>
            </div>
        </section>
        </>

    )
}