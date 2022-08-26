import React from "react";
import style from './Sobre.module.css'
import fotoAle from '../../assets/img/ale.jpg'
import fotoGi from '../../assets/img/gi.jpg'
import fotoIsa from '../../assets/img/isa.jpg'

export default function Sobre(){
    return(
        <div class={style.corpo}>
            <h1>Integrantes</h1>
            <div class={style.integrantes}>
                <div>
                    <p class={style.nome}>Giovana Gouvêa Abreu</p>
                    <img src={fotoGi} alt="Foto mulher" />
                    <figcaption class={style.rm}>Representante - RM95896</figcaption>
                </div>
                <div>
                    <p class={style.nome}>Isa Mary Kusuki Yabiku</p>
                    <img src={fotoIsa} alt="Foto mulher" />
                    <figcaption class={style.rm}>Representante - RM93307</figcaption>
                </div>
                <div>
                    <p class={style.nome}>Alexandre Carlos de Jesus</p>
                    <img src={fotoAle} alt="Foto homem" />
                    <figcaption class={style.rm}>Gerente Comercial</figcaption>
                </div>
            </div>
        </div>
    )
}