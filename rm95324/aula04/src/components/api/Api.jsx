import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Api(){

    const [repositorios, setRepositorios]= useState([])

    //o useEffect executa uma única vez. no carregamento do comp
    useEffect(()=>{
        console.log("Renderizou!")
    },[])
    useEffect(()=>{
        console.log("Renderizou o objeto!")
    },[repositorios])

    return(
        <div>
            <h2>Lista de usuário do GitHub</h2>
            <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>Alterar</button>
        </div>
    )
}