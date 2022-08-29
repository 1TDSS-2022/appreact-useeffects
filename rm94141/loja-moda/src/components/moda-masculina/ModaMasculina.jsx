import React from 'react'
import CortaVento from './img/jaqueta-masc.jpeg'
import TenisMasc from './img/tenis-masc.jpeg'
import CalcaMasc from './img/calca-masc.jpeg'

export default function ModaMasculina(){
    return (
        <div className='home'>
            <h1>Moda Masculina</h1>
            <ul className="produtos">
                <li>
                    <h2>Jaqueta</h2>
                    <img src={CortaVento} alt="Jaqueta Corta Vento Masculina" width={'940px'}></img>
                    <p className="produto-descricao">Nike Sportswear Windrunner</p>
                    <p className="produto-preco">R$579,99</p>
                </li>
                <li>
                    <h2>Tênis</h2>
                    <img src={TenisMasc} alt="Tênis Nike Masculino" width={'940px'}></img>
                    <p className="produto-descricao">Nike Air Force 1 '07 LV8</p>
                    <p className="produto-preco">R$999,99</p>
                </li>
                <li>
                    <h2>Calça</h2>
                    <img src={CalcaMasc} alt="Calça Jogger Nike Masculina" width={'940px'}></img>
                    <p className="produto-descricao">Jogger Nike Sportswear</p>
                    <p className="produto-preco">R$349,99</p>
                </li>
            </ul>
        </div>
    )
}