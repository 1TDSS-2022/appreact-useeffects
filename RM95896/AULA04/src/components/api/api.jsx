import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Api (){
    const [repositorios,setRepositorios] = useState([])
    useEffect= (() => {
    carregaRepos()
}, [])

    const carregaRepos = async() =>{
            const response = await fetch('https://api.github.com/users')
            const data = await response.json()
    
            setRepositorios(data)

    }

    // useEffect(()=>{
    //     console.log("Renderizou!")
    // },[])

    // useEffect(()=>{
    //     console.log("Renderizou O OBJETO!")
    // },[repositorios])

    return(
        <div>
            <h2>Lista de usuarios do Git Hub</h2>
            {/* <button onClick={()=> setRepositorios(['Ale', 'Ronqui'])}>ALTERAR</button> */}
        <ul>
            {repositorios.map((obj,i)=>
            <li key = {i}>{obj.login}</li>
            )}
        </ul>
        </div>
    )
}

// EXERCICIO:

// 1. RECUPERAR O AVATAR DO USUARIO
// 2. TROCAR A KEY DO MAP PELO ID DO USER
// 3. MUDAR A ESTRUTURA DENTRO DA LI PRA UMA ESTRUTURA SEMANTICA COM FIG/IMG/FIGCAPTION