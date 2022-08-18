import React from "react"
import { useEffect, useState } from "react"

export default function Api(){

    const [repositorios, setRepositorios] = useState([])

    useEffect( () => {
        carregaRepos()
    }, [])

    const carregaRepos = async() => {

        const response = await fetch("https://api.github.com/users")
        const data = await response.json()

        setRepositorios(data)

    }

    //Quando o componente se montar ele usará o que está dentro da area abaixo
    //O useEffect executa uma unica vez. No carregament odo comp.
    //Criado apenas uma vez
    // useEffect(()=> {
    //     console.log("Renderizou!")
        
    // },[])


    // //Será recarregado toda vez que atualizar ao apertar o botão
    // useEffect(()=> {
    //     console.log("Renderizou o objeto!")
        
    // },[repositorios])

    //Exercicio
    //1 - Recuperar o avatar do usuário
    //2 - Trocar a Key do map pelo id do user
    //3 - Mudar a estrutura dentro da li para uma estrutura semântica com figure/img/figure

    return (
        <div>
            <h2>Lista de Usuário do GITHUB</h2>
            {/* <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>ALTERAR</button> */}
            <ul>
                {repositorios.map((obj, i) => 
                    <li key={i}>{obj.login}</li>
                )}
            </ul>
        </div>
    )
}