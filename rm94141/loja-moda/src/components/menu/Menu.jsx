import React from "react"
import {Link} from 'react-router-dom'

export default function Menu() {

  return (
    <header className="menu">
        <nav>
            <ul>
                <li><Link className="menu-list" to="/">Home</Link></li>
                <li><Link className="menu-list" to="/modamasculina">Moda Masculina</Link></li>
                <li><Link className="menu-list" to="/modafeminina">Moda Feminina</Link></li>
                <li><Link className="menu-list" to="/modainfantil">Moda Infantil</Link></li>
                <li><Link className="menu-list" to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    </header>
  )
}