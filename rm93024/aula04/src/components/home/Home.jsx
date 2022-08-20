import React from "react"
import {Link} from 'react-router-dom'

export default function Home() {
    
    //REQUEST > https://www.fiap.com.br
    //RESPONSE > HTML
    
    return(
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/api">Api</Link>
            </header>
        </div>
    )
}