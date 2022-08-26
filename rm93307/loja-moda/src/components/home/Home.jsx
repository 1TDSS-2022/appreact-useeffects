import React from "react";
import style from './Home.module.css'
import { Link } from "react-router-dom";
import infantil from '../../assets/img/conjuntofem.jpg'
import feminino from '../../assets/img/conjunto-feminina.jpg'
import masculino from '../../assets/img/conjuntomasc.jpg'

export default function Home(){
    return(
        <div class={style.mainHome}>
            <h2>VENHA CONFERIR AS NOVIDADES QUE TEMOS ESPECIALMENTE PARA VOCÊ!!!</h2>
            <p class={style.pHome}>Somos uma loja com o propósito de proporcionar as pessoas a andarem no estilo com produtos de qualidade e com preços acessíveis. <br/>
            Aqui você encontra roupas, sapatos e acessórios para que você possa comprar o seu look completo. Aproveite essas oportunidades!</p>
            <div class={style.cards}>
                <div>
                    <Link to="/modaInfantil"><img src={infantil} alt="Conjunto de Roupa" /></Link>
                    <figcaption class={style.figHome}>SEÇÃO INFANTIL</figcaption>
                </div>
                <div>
                    <Link to="/modaFeminina"><img src={feminino} alt="Conjunto de Roupa" /></Link>
                    <figcaption class={style.figHome}>SEÇÃO FEMININA</figcaption>
                </div>
                <div>
                    <Link to="/modaMasculina"><img src={masculino} alt="Conjunto de Roupa" /></Link>
                    <figcaption class={style.figHome}>SEÇÃO MASCULINA</figcaption>
                </div>
            </div>
        </div>
    )
}