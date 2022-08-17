import React from "react"
import {useEffect, useState} from "react"

export default function Api() {
    
    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {
        console.log("Renderizou o componente!")                     
    },[])

    useEffect(() => {
        console.log("Renderizou o objeto!")
    },[repositorios])
    
    return(
        <div>
            <h2>Lista de Usuários do GitHub</h2>
            <button onClick={()=> setRepositorios(["Alê","Salvio"])}>ALTERAR</button>
        </div>
    )
}