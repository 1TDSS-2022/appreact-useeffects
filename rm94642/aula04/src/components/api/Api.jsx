import React from "react"
import { useState } from "react"
import { useEffect } from 'react'

export default function Api(){


    const [repositorios, setRepositorios] = useState([])


    useEffect(()=>{
        carregaRepos()
    },[])

    const carregaRepos = async () =>{
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()

        setRepositorios(data)
    }

    return(
        <div>
            <h2>Lista de Usuarios do GitHUB</h2>
            {/*<button onClick={()=>setRepositorios(["Ale", "Ronqui"])}>Alterar</button>*/}
            <ul>
                {repositorios.map((obj)=>
                <li key={obj.id}>
                    <figure>
                        <img src={obj.avatar_url} alt="Avatar" style={{width:'200px'}} />
                        <figcaption> <a href={obj.html_url}>{obj.login}</a></figcaption>
                    </figure>
                </li>
                )}
            </ul>
        </div>
    )
}

// Exercicio:
// 1 - Recuperar o avatar do usuario 
// 2 - Trocar a key do map pelo id do user 
// 3 - Mudar a estrutura dentro da li para uma estrutura semantica com figure/img/