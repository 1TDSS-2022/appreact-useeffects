import React from 'react'
import Blusao from './img/jaqueta-inf.jpeg'
import TenisInf from './img/tenis-inf.jpeg'
import CalcaInf from './img/calca-inf.jpeg'

export default function ModaInfantil(){
    return (
        <div className='home'>
            <h1>Moda Infantil</h1>
            <ul className="produtos">
                <li>
                    <h2>Blusão</h2>
                    <img src={Blusao} alt="Blusão Infantil Nike" width={'940px'}></img>
                    <p className="produto-descricao"> Nike Flc Hoodie</p>
                    <p className="produto-preco">R$279,99</p>
                </li>
                <li>
                    <h2>Tênis</h2>
                    <img src={TenisInf} alt="Tênis Nike Revolutio Infantil" width={'940px'}></img>
                    <p className="produto-descricao">Nike Revolutio</p>
                    <p className="produto-preco">R$329,99</p>
                </li>
                <li>
                    <h2>Calça</h2>
                    <img src={CalcaInf} alt="Calça Nike Air Infantil" width={'940px'}></img>
                    <p className="produto-descricao">Nike Air</p>
                    <p className="produto-preco">R$299,99</p>
                </li>
            </ul>
        </div>
    )
}