import React from "react";
import style from './ModaMasculina.module.css'
import conjMasc from '../../assets/img/conjunto-terno.jpg'
import blusaMasc from '../../assets/img/blusa-flanelada.jpg'
import calcaMasc from '../../assets/img/calca-masculina.jpg'
import pijamaMasc from '../../assets/img/pijama-cinza-masculino.jpg'
import boneMasc from '../../assets/img/bone-lakers.jpg'
import botaMasc from '../../assets/img/bota-masculina.jpg'

export default function ModaMasculina(){

    return(
        <div class={style.mainMasc}>
            <div>
                <h1>Moda Masculina</h1>
            </div>
            <div class={style.cards}>
                <div>
                    <img src={conjMasc} alt="Conjunto terno e calça" />
                    <figcaption>Conjunto de Terno e Calça</figcaption>
                    <figcaption class={style.figcap}>R$ 80,00</figcaption>
                </div>
                <div>
                    <img src={blusaMasc} alt="Blusa" />
                    <figcaption>Blusa Flanelada Xadrez</figcaption>
                    <figcaption class={style.figcap}>R$ 30,00</figcaption>
                </div>
                <div>
                    <img src={calcaMasc} alt="Calça Jeans" />
                    <figcaption>Calça Jeans</figcaption>
                    <figcaption class={style.figcap}>R$ 40,00</figcaption>
                </div>
                <div>
                    <img src={pijamaMasc} alt="Pijama" />
                    <figcaption>Pijama de frio</figcaption>
                    <figcaption class={style.figcap}>R$ 40,00</figcaption>
                </div>
                <div>
                    <img src={boneMasc} alt="Bone" />
                    <figcaption>Bone Lakers</figcaption>
                    <figcaption class={style.figcap}>R$ 15,00</figcaption>
                </div>
                <div>
                    <img src={botaMasc} alt="Bota" />
                    <figcaption>Bota preta cano alto</figcaption>
                    <figcaption class={style.figcap}>R$ 95,00</figcaption>
                </div>
            </div>
        </div>
    )
}