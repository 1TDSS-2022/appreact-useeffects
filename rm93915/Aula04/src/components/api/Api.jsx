import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Api(){

    const [repositorios, setRepositorios] = useState([])
    useEffect(()=>{
        console.log("Renderizou")

    })

    useEffect(()=>{
        console.log("Renderizou o obj")

    },[repositorios])
    return(
        <div>
            <h2>Lista de usuario do GITHUB</h2>
            <button onClick= {() => setRepositorios(["jow","olá"])}>GAbiru</button>
        </div>
    )
}