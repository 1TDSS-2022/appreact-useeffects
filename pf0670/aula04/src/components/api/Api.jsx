import React from "react"
import { useEffect, useState } from "react"

export default function Api(){

    const [repositorios, setRepositorios] = useState([])

    useEffect(()=>{
        console.log("RENDERIZOU!")
    },[])

    useEffect(()=>{
        console.log("RENDERIZOU O OBJETO")
    },[repositorios])

    return(
        <div>
            <h2>Lista de Usuário do GitHUB</h2>
            <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>ALTERAR</button>
        </div>
    )
}