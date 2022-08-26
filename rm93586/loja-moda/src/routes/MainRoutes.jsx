import React from "react";
import {Routes, Route} from 'react-router-dom'

// Diretorios
import Home from '../components/home/Home'
import ModaMasculina from "../components/modamasculina/ModaMasculina";
import ModaFeminina from "../components/modafeminina/ModaFeminina";
import ModaInfantil from "../components/modainfantil/ModaInfantil";
import Sobre from "../components/sobre/Sobre";
import MinhaConta from "../components/minhaConta/MinhaConta";

export default function MainRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/modamasculina" element={<ModaMasculina/>}/>
                <Route path="/modafeminina" element={<ModaFeminina/>}/>
                <Route path="/modainfantil" element={<ModaInfantil/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/minhaconta" element={<MinhaConta/>}/>
            </Routes>           
        </>
    )
}