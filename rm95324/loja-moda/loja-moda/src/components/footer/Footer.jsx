import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import './footer.css'
import redes from '../../img/redes.png'

export default function Footer(){
    return(
        <footer>
            <div>
                <img src={redes} alt="Redes sociais" id="redes"/>
            </div>
            <div>
                <p>Direitos autorais - RM95324</p>
            </div>
        </footer>
    )
}