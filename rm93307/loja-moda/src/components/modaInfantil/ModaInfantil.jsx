import React from "react";
import style from './ModaInfantil.module.css'
import conjuntofeminino from '../../assets/img/conjuntofem.jpg'
import conjuntomasculino from '../../assets/img/conjuntomasc.jpg'
import moletom from '../../assets/img/moletommasculino.jpg'
import vestidoinfantil from '../../assets/img/vestidoinfantil.jpg'
import pijamafeminino from '../../assets/img/pijamafeminino.jpg'
import pijamamasculino from '../../assets/img/pijamamasc.jpg'


export default function ModaInfantil(){
 
    return(
        <div class={style.mainInf}>
            <h1>Moda Infantil</h1>

            <div class={style.cards}>
                <div>
                    <img src={conjuntofeminino} alt="Conjunto Infantil Feminino"/>
                    <figcaption>Conjunto Infantil - Feminino</figcaption>
                    <figcaption class={style.figcap}>R$ 40,00</figcaption>
                </div>

                <div>
                    <img src={vestidoinfantil} alt="Vestido Feminino Inverno" />
                    <figcaption>Vestido</figcaption>
                    <figcaption class={style.figcap}>R$ 20,00</figcaption>
                </div>

                <div>
                    <img src={conjuntomasculino} alt="Conjunto Infantil Masculino Verão" />
                    <figcaption>Conjunto Infantil - Masculino</figcaption>
                    <figcaption class={style.figcap}>R$ 40,00</figcaption>
                </div>
                <div>
                    <img src={moletom} alt="Conjunto Infantil Masculino Inverno" />
                    <figcaption>Conjunto Moleton</figcaption>
                    <figcaption class={style.figcap}>R$ 45,00</figcaption>
                </div>
                <div>
                    <img src={pijamafeminino} alt="Pijama Feminino" />
                    <figcaption>Pijama Feminino</figcaption>
                    <figcaption class={style.figcap}>R$ 25,00</figcaption>
                </div>
                <div>
                    <img src={pijamamasculino} alt="Pijama Masculino" />
                    <figcaption>Pijama Masculino</figcaption>
                    <figcaption class={style.figcap}>R$ 25,00</figcaption>
                </div>
            </div>
        </div>
    )
}