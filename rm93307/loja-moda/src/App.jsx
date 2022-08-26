import React from "react";

import {BrowserRouter} from 'react-router-dom'

import Menu from './components/menu/Menu'
import Rodape from "./components/rodape/Rodape";
import MainRoutes from "./routes/MainRoutes";

export default function App(){
    return(
        <BrowserRouter>
            <Menu/>
            <MainRoutes/>
            <Rodape/>
        </BrowserRouter>
    )
}