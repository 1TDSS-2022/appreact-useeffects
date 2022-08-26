import React from 'react'
import imagem1 from '../../img/masculina1.jpg'
import imagem2 from '../../img/masculina2.jpg'
import imagem3 from '../../img/masculina3.jpg'
import '../../modas.css'

export default function ModaMasculina() {

    return (
        <div>
            <div class="box">
                <h1>Moda Masculina</h1>
                <hr />
                <div>
                    <figure>
                        <img src={imagem1} alt="Camiseta" class="imagem" />
                        <figcaption>Camiseta - R$75,00</figcaption>
                    </figure>
                    <figure>
                        <img src={imagem2} alt="Óculos escuros vermelho" class="imagem" />
                        <figcaption>Óculos escuros vermelho - R$300,00</figcaption>
                    </figure>
                    <figure>
                        <img src={imagem3} alt="Colete preto" class="imagem" />
                        <figcaption>Colete preto - R$140,00</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}