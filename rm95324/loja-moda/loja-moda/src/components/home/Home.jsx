import React from 'react'
import imagem1 from '../../img/home1.jpg'
import imagem2 from '../../img/home2.jpg'
import imagem3 from '../../img/home3.jpg'
import './home.css'

export default function Home() {

    return (
        <div>
            <h1>Página principal</h1>
            <div class="box">
                <h2>Tendências da temporada</h2>
                <hr/>
                <div>
                    <img src={imagem1} alt="moça" class="imagem"/>
                    <img src={imagem2} alt="homem" class="imagem"/>
                    <img src={imagem3} alt="criança" class="imagem"/>
                </div>
            </div>
        </div>
    )
}