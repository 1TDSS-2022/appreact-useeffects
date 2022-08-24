import React from "react"
import { useEffect, useState } from "react"

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
    // 3 - Mudar a estrutura dentro da li para uma 
    //estrutura semântica com figure/img/figcaption



    return(
        <div>
            <h2>Lista de Usuário do GitHUB</h2>
            {/* <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>ALTERAR</button> */}
            <ul style={{listStyle:'none'}}>
                {repositorios.map((obj)=>
                    <li key={obj.id}>
                        <figure>
                            <img src={obj.avatar_url} alt="AVATAR" style={{width:'200px'}}/>
                            <figcaption><a href={obj.html_url}>{obj.login}</a> </figcaption>
                        </figure>
                    </li>
                )}
            </ul>
        </div>
    )
}