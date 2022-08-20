import React from "react"
import { useEffect, useState } from "react"

export const Api = () =>{

    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {
        carregaRepos()
    }, [])
    
    const carregaRepos = async() =>{
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setRepositorios(data)

    }
    
    // useEffect(()=>{
    //     console.log("RENDERIZOU!")
    // },[])

    // useEffect(()=>{
    //     console.log("RENDERIZOU O OBJETO")
    // },[repositorios])

    // Exercício:
    // 1 - Recuperar o avatar do usuário
    // 2 - Trocara a Key do map pelo id do user
    // 3 - Mudar a estrutura dentro da li para uma estrutura semântica com figure/img/figcaption



    return(
        <div>
            <h2>Lista de Usuário do GitHUB</h2>
            {/* <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>ALTERAR</button> */}
            <ul>
                {repositorios.map((obj,i)=>
                    <li key={i}>{obj.login}</li>
                )}
            </ul>
        </div>
    )
}