import React from 'react'
import Api from './components/api/Api'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/home/Home'
import Produtos from './components/produtos/Produtos'
import Servicos from './components/servicos/Servicos'


export default function App(){

    return(

        <BrowserRouter>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/servicos">Servicos</Link></li>
            <li><Link to="/api">Estudo sobre USE-EFFECTS</Link></li>
        </ul>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/api' element={<Api/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

/* <div>
    <h1>Estudo sobre USE-EFFECTS</h1>
    <Api/>
</div> */

// const App = () => {
//     return(
//         <>
//             <div>
//                 <h1>Estudo sobre USE-EFFECTS</h1>
//             </div>
//         </>
//     )
    
// }