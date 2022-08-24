import React from "react";
import { useState, useEffect } from "react";


export default function Api(){

    const objeto = [
    {
        nome : "Nanne",
        id : 121
    }
    ,
    {
        nome : "Julia",
        id : 122
    }
    ,
    {
        nome : "Roberto",
        id : 123
    }
]



    const [repositorios, setRepositorios] = useState([])
    
    useEffect(()=>{
        console.log("Renderizou")
    })

    
//    useEffect(()=>{
//        console.log("Renderizou o objeto")
//    },[repositorios])

    useEffect( ()=>{
        carregaRepos()
    },[])

    const carregaRepos = async ()=>{
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()

        setRepositorios(data)
    }

    return(
        <div>
            <h2>Lista de usuários do github</h2>
            <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>Alterar</button>

            <ul>
                {repositorios.map((obj,i)=>
                <li key={i}>{obj.login}</li>
                )}
            </ul>
        </div>
    )
}