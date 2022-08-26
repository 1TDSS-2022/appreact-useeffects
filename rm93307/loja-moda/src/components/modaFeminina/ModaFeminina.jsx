import React from "react";
import style from './ModaFeminina.module.css'
import conjunto from '../../assets/img/conjunto-feminina.jpg'
import jaqueta from '../../assets/img/jaqueta-feminina.jpg'
import shorts from '../../assets/img/shorts-feminino.jpg'
import saia from '../../assets/img/saia.jpg'
import vestido from '../../assets/img/vestido.jpg'
import tenis from '../../assets/img/tenis-feminino.jpg'

export default function ModaFeminina(){
    return(
        <div class={style.mainFem}>
            <div>
                <h1>Moda Feminina</h1>
            </div>
            <div class={style.cards}>
                <div>
                    <img src={conjunto} alt="Conjunto de Roupa" />
                    <figcaption>Conjunto de Blusa e Calça</figcaption>
                    <figcaption class={style.figcap}>R$ 65,00</figcaption>
                </div>
                <div>
                    <img src={jaqueta} alt="Jaqueta Jeans" />
                    <figcaption>Jaqueta Jeans</figcaption>
                    <figcaption class={style.figcap}>R$ 40,00</figcaption>
                </div>
                <div>
                    <img src={shorts} alt="Shorts Jeans" />
                    <figcaption>Shorts Jeans</figcaption>
                    <figcaption class={style.figcap}>R$ 30,00</figcaption>
                </div>
                <div>
                    <img src={saia} alt="Saia" />
                    <figcaption>Saia Quadriculada</figcaption>
                    <figcaption class={style.figcap}>R$ 25,00</figcaption>
                </div>
                <div>
                    <img src={vestido} alt="Vestido" />
                    <figcaption>Vestido Florido</figcaption>
                    <figcaption class={style.figcap}>R$ 35,00</figcaption>
                </div>
                <div>
                    <img src={tenis} alt="Tenis" />
                    <figcaption>Tenis Vans</figcaption>
                    <figcaption class={style.figcap}>R$ 90,00</figcaption>
                </div>
            </div>
        </div>

    )
}