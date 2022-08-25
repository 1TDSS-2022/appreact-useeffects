import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Api from "./components/api/Api"
import Home from './components/home/Home'
import Produtos from './components/produtos/Produtos'
import Servicos from './components/servicos/Servicos'
import Menu from './components/menu/Menu'


// export default function App(){
//     return(
//         <div>
//             <h1>ESTUDO SOBRE USE-EFFECTS</h1>
//             <Api/>
//         </div>
//     )
// }

export default function App(){

    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
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