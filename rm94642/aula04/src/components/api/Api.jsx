import React from "react"
import { useState } from "react"
import { useEffect } from 'react'

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
            <h2>Lista de Usuarios do GitHUB</h2>
            <button onClick={()=>setRepositorios(["Ale", "Ronqui"])}>Alterar</button>
        </div>
    )
}