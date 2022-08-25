import React from "react";
import {Link} from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <header>
        <nav>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/servicos">Servicos</Link>
            </li>
            <li>
              <Link to="/api">Api Git</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
