import React from "react"
import Menu from './components/menu/Menu'
import Rodape from './components/rodape/Rodape'

//Rotas
import MainRoutes from "./routes/MainRoutes"

export default function App() {
    return (
        <div>
        <Menu/>
        <MainRoutes/>
        <Rodape/>
        </div>
    )
}