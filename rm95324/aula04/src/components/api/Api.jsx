import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Api(){

    const [repositorios, setRepositorios]= useState([])

    useEffect(async () => {
        carregaRepos
    }, [])

    const carregaRepos = () => {
        const response = fetch("https://api.github.com/users")
        const data = response.json()

        setRepositorios(data)
    }

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
            {/* <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>Alterar</button>*/}
            <ul>
                {repositorios.map((obj,i)=>
                    <li key={i}>{obj.login}</li>
                )}
            </ul>
        </div>
    )
}