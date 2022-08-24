import React from "react"
import { useEffect, useState } from "react"

export default function Api(){

//    const objeto = [
//        {
//           nome : "nanne",
//            id : 121
//      }
//    ]
//    const objetoJSON = [
//        {
//            "nome" : "nanne",
//            "id" : 121.23
//        }
//    ]
    
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
            <ul style={{listStyle:'none'}}>
                {repositorios.map((obj)=>
                    <li key={obj.id}>
                        <figure>
                            <img src={obj.avatar_url} alt="Avatar" style={{width:'200px'}}/>
                            <figcaption><a href={obj.html_url}>{obj.login}</a></figcaption>
                        </figure>
                    </li>
                )}
            </ul>
        </div>
    )
}