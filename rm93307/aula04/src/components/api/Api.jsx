import React from "react";
import { useEffect, useState } from "react";

export default function Api(){

    const [repositorios, setRepositorios] = useState([])

    useEffect(()=> {
        carregaRepos()
    },[])

    const carregaRepos = async() => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setRepositorios(data)
    }

    // useEffect(()=>{
    //     console.log("RENDERIZOU!")
    // },[])

    // useEffect(()=>{
    //     console.log("RENDERIZOU O OBJETO!!")
    // },[repositorios])

    // Exercício: 
    // 1 - Recuperar o avatar do usuário
    // 2 - Trocar a key do map pelo id do user
    // 3 - Mudar a estrutura dentro da li para uma estrutura semântica com figure/img/figcaption

    return(
        <>
            <h2>Lista de Usuário do GitHub</h2>
            {/* <button onClick={()=> setRepositorios(["Alê", "Rafa"])}>ALTERAR</button> */}
            <ul>
                {repositorios.map((obj,i)=>
                    <li key={i}>{obj.login}</li>
                )}
            </ul>
        </>
    )
}