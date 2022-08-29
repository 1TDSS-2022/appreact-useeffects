import React from 'react'
import Jaqueta from './img/jaqueta-fem.jpeg'
import TenisFem from './img/tenis-fem.jpeg'
import CalcaFem from './img/calca-fem.jpeg'

export default function ModaFeminina(){
    return (
        <div className='home'>
            <h1>Moda Feminina</h1>
            <ul className="produtos">
                <li>
                    <h2>Jaqueta</h2>
                    <img src={Jaqueta} alt="Jaqueta Nike Sportswear Repel Windrunner Feminina" width={'940px'}></img>
                    <p className="produto-descricao">Nike Sportswear Repel Windrunner</p>
                    <p className="produto-preco">R$449,99</p>
                </li>
                <li>
                    <h2>Tênis</h2>
                    <img src={TenisFem} alt="Tênis Nike Air Force 1'07 Next Nature Feminino" width={'940px'}></img>
                    <p className="produto-descricao">Nike Air Force 1'07</p>
                    <p className="produto-preco">R$799,99</p>
                </li>
                <li>
                    <h2>Calça</h2>
                    <img src={CalcaFem} alt="Calça Nike Sportswear Swoosh Feminina" width={'940px'}></img>
                    <p className="produto-descricao">Nike Sportswear Swoosh</p>
                    <p className="produto-preco">R$599,99</p>
                </li>
            </ul>
        </div>
    )
}