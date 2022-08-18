import React from "react"
import { useReducer } from "react"
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

    //Exercicio: 
    
    // 1 - Recuperar o avatar do usuário
    // 2 - Trocar a Key do map pelo id do user
    // 3 - Mudar a estrutura dentro da li para uma estrutura semântica com figure/img/figcap

    
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