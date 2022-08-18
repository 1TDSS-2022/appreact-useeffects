import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Api(){

const [repositorios, setRepositorios] = useState([])

    useEffect(() => {
        carregaRepos()
    }, [])
    
    const carregaRepos = async () => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setRepositorios(data)
    }

    // useEffect(()=>{
    //     console.log("Renderizou")
    // })

    // useEffect(()=>{
    //     console.log("Renderizou o Objeto")
    // },[repositorios])

    // Exercicio:
    // 1 - Recuperar o avatar do usuário
    // 2 - Trocar a key do map pelo id do user
    // 3 - Mudar a estrutura dentro da li para uma estrutura semantica com figure/img/figcapture


    return(
        <div>
            <h2>Lista de Usuários do GitHub</h2>
            {/* <button onClick = {() => setRepositorios(["Alê","Ronqui"])}> ALTERAR </button> */}
            <ul>
                {repositorios.map((obj,i) =>
                    <li key={i}> {obj.login} </li>
                )}
            </ul>
        </div>
    )
}