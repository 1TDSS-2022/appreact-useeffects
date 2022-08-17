import React from "react"
import { useEffect, useState } from "react"

export default function Api(){

    const [repositorios, setRepositorios] = useState([])

    //Quando o componente se montar ele usará o que está dentro da area abaixo
    //O useEffect executa uma unica vez. No carregament odo comp.
    //Criado apenas uma vez
    useEffect(()=> {
        console.log("Renderizou!")
        
    },[])


    //Será recarregado toda vez que atualizar ao apertar o botão
    useEffect(()=> {
        console.log("Renderizou o objeto!")
        
    },[repositorios])


    return (
        <div>
            <h2>Lista de Usuário do GITHUB</h2>
            <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>ALTERAR</button>
        </div>
    )
}