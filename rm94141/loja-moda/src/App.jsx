import React from "react"
import Menu from "./components/menu/Menu"
import Rodape from "./components/rodape/Rodape"
import MainRoutes from "./routes/MainRoutes"
import './index.css'

export default function App(){
    return (
        <>
            <Menu/>
            <MainRoutes/>
            <Rodape/>
        </>
    )
}