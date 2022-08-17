import React from "react";
import { useState } from "react";
import { useEffect } from "react";



export default function Api(){

    const [repositorios,setRepositorios]=useState([])
    
    //o Use Effect executa uma unica vez no Carregamento do componente
    useEffect(()=>{
        console.log("Render")

    },[])

    useEffect(()=>{
        console.log("Render O Objeto")

    },[repositorios])

    return(
        <div>
            <h2>Lista de Usuarios do GitHUB</h2>
            <button onClick={()=> setRepositorios(["Filipe","Fran"])}>Alterar</button>
        </div>
    )
}