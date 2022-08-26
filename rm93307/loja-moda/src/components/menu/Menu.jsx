import React from "react";
import {Link} from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/modaFeminina'>Moda Feminina</Link></li>
                    <li><Link to='/modaMasculina'>Moda Masculina</Link></li>
                    <li><Link to='/modaInfantil'>Moda Infantil</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}