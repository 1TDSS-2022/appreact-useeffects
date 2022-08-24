import React from "react"
import { useEffect, useState } from "react"

export default function Api(){

    const [repositorios , setRepositorios ] = useState([])

    useEffect(()=>{
        carregaRepos()   
    },[])

    const carregaRepos = async() =>{
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()

        setRepositorios(data)

    }

    //quando o componente se montar ele vai executar o que está no UseEffect
    //executa somente uma vez (no carregamento do componente)
    /* useEffect(()=>{
        console.log("RENDERIZOU!")
    },[])

    useEffect(()=>{
        console.log("RENDERIZOU O OBJETO!")
    },[repositorios])
 */
    return (
        <div>
            <h2>Lista de Usuários do GitHub</h2>
            {/* <button onClick={()=> setRepositorios(["Alê", "Ronqui"])}>ALTERAR</button> */}
            <ul>
                {repositorios.map((obj, i)=>
                    <li key={i}>{obj.login}</li>
                )}
            </ul>
        </div>
    )
}