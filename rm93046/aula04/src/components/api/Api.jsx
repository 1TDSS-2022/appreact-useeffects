import React from "react";
import { useState, useEffect } from "react";


export default function Api(){

    const [repositorios, setRepositorios] = useState([])
    
    useEffect(()=>{
        console.log("Renderizou")
    })

    
    useEffect(()=>{
        console.log("Renderizou o objeto")
    },[repositorios])

    return(
        <div>
            <h2>Lista de usuários do github</h2>
            <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>Alterar</button>
        </div>
    )
}