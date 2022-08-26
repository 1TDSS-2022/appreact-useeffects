import React from 'react'
import imagem1 from '../../img/feminina1.jpg'
import imagem2 from '../../img/feminina2.jpg'
import imagem3 from '../../img/feminina3.jpg'
import '../../modas.css'

export default function ModaFeminina() {

    return (
        <div>
            <div class="box">
                <h1>Moda Feminina</h1>
                <hr />
                <div>
                    <figure>
                        <img src={imagem1} alt="Vestido florido" class="imagem" />
                        <figcaption>Vestido florido - R$150,00</figcaption>
                    </figure>
                    <figure>
                        <img src={imagem2} alt="Camisa rock" class="imagem" />
                        <figcaption>Camisa rock - R$70,00</figcaption>
                    </figure>
                    <figure>
                        <img src={imagem3} alt="Vestido chique" class="imagem" />
                        <figcaption>Vestido chique - R$250,00</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}