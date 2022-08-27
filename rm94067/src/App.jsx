import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Rodape from "./components/Rodape";
import ModaMasc from "./components/ModaMasc";
import ModaFem from "./components/ModaFem";
import ModaInfantil from "./components/ModaInfantil";
import Sobre from "./components/Sobre";

export default function App(){

    return(
        <>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/modaMasc" element={<ModaMasc/>}/>
                    <Route path="/modaFem" element={<ModaFem/>}/>
                    <Route path="/modaInfantil" element={<ModaInfantil/>}/>
                    <Route path="/sobre" element={<Sobre/>}/>
                </Routes>
                <Rodape/>
            </BrowserRouter>
            
        </>
    )
}