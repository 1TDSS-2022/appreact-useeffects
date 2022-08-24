import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Api(){

    const objeto = [
    {
        nome: "Nanne",
        id: 121
    },
    {
        nome: "Julia",
        id: 122
    },
    {
        nome: "Roberto",
        id: 123
    }

]

    //const objetoJSON = {
    //    "nome": "Nanne",
    //    "id": 121
    //}

    const [repositorios, setRepositorios]= useState([])

    useEffect(() => {
        carregaRepos()
    }, [])

    const carregaRepos = async() => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()

        setRepositorios(data)
    }

    //o useEffect executa uma única vez. no carregamento do comp
    //useEffect(()=>{
    //    console.log("Renderizou!")
    //},[])
    //useEffect(()=>{
    //    console.log("Renderizou o objeto!")
    //,[repositorios])

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