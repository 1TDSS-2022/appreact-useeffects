import React from "react"
import Api from "./components/api/Api"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from "./components/Home/Home"
import { Produtos } from "./components/Produtos/Produtos"
import { Servico } from "./components/Servicos/Home"
export default function App(){
    return(

        <BrowserRouter>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produto</Link></li>
                <li><Link to='/servico'>Servico</Link></li>
            </ul>

            <Routes>
                <Route path="/" element={<Home />}> 
                    <Route path="/api" element={<Api />} />
                </Route>
                <Route path="/produtos" element={<Produtos />}/>
                <Route path="/servico" element={<Servico />}/>
            </Routes>
        </BrowserRouter>

    )
}


//  const App = ()=>{
  
//     return(
//         <div>
//             <h1>ESTUDO SOBRE USE-EFFECTS</h1>
//         </div>
//     )
//  }

// export default App