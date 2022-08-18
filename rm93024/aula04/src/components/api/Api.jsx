import React from "react"
import {useEffect, useState} from "react"

export default function Api() {
    
    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {
        carregaRepos()
    },[])

    const carregaRepos = async() => {
        const response  = await fetch("https://api.github.com/users")
        const data = await response.json()
        setRepositorios(data)    
    }

    // useEffect(() => {
    //     console.log("Renderizou o componente!")                     
    // },[])

    // useEffect(() => {
    //     console.log("Renderizou o objeto!")
    // },[repositorios])
    
    return(
        <div>
            <h2>Lista de Usuários do GitHub</h2>
            {/* <button onClick={()=> setRepositorios(["Alê","Salvio"])}>ALTERAR</button> */}
            <ul>
                {repositorios.map((obj,i)=>
                    <li key={i}>{obj.login}</li>
                )}
            </ul>
        </div>
    )
}