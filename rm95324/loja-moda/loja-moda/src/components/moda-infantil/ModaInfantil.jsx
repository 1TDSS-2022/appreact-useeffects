import React from 'react'
import imagem1 from '../../img/infantil1.jpg'
import imagem2 from '../../img/infantil2.jpg'
import imagem3 from '../../img/infantil3.jpg'
import '../../modas.css'

export default function ModaInfantil() {

    return (
        <div>
            <div class="box">
                <h1>Moda Infantil</h1>
                <hr />
                <div>
                    <figure>
                        <img src={imagem1} alt="Conjunto nike" class="imagem" />
                        <figcaption>Conjunto nike - R$175,00</figcaption>
                    </figure>
                    <figure>
                        <img src={imagem2} alt="Conjunto bonitao" class="imagem" />
                        <figcaption>Conjunto bonitao - R$100,00</figcaption>
                    </figure>
                    <figure>
                        <img src={imagem3} alt="Blusa com bolinhas" class="imagem" />
                        <figcaption>Blusa com bolinhas - R$40,00</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}