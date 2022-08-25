import React from "react"
import { useEffect, useState } from "react"

export default function Api(){
    //https://api.github.com/users
    //Conceito MasterPage - Estudar

    const objeto = [{
        nome : "Nanne",
        id : 121
    },
    {

        nome : "Julia",
        id : 122

    },
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
    // 3 - Mudar a estrutura dentro da li para uma estrutura semântica com figure/img/figcaption



    // return(
    //     <div>
    //         <h2>Lista de Usuário do GitHUB</h2>
    //         {/* <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>ALTERAR</button> */}
    //         <ul>
    //             {/* obj.id = id do objeto JSON*/ }
    //             {repositorios.map((obj,i)=>
    //                 <li key={obj.id}>{obj.login}</li>
    //             )}
    //         </ul>
    //     </div>
    // )

    return(
        <div>
            <h2>Lista de Usuário do GitHUB</h2>
            {/* <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>ALTERAR</button> */}
            
            <ul style = {{listStyle: 'none'}}>
                {/* obj.id = id do objeto JSON*/ 
                /* obj.avatar_url = busca avatar_url do objeto json*/}
                {repositorios.map((obj,i)=>
                   <figure>
                    <img src={obj.avatar_url} alt="AVATAR" style = {{width: '200px'}} />
                    <a href={obj.html_url}><figcaption>{obj.login}</figcaption></a>
                   </figure>
                )}
            </ul>
        </div>
    )
}