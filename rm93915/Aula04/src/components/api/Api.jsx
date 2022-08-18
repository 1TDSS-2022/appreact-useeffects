import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Api(){

    const [repositorios, setRepositorios] = useState([])
    useEffect(() => {
        carregaRepos()
    })
    
    const carregaRepos = async() =>{
        const response = await fetch("https://api.github.com/users")
        const data  = await response.json();

       setRepositorios(data)
    }
    // useEffect(()=>{
    //     console.log("Renderizou")

    // })

    // useEffect(()=>{
    //     console.log("Renderizou o obj")

    // },[repositorios])

    // exericios:
    // 1) recuperar o avatar do usuario
    // 2) trocar a Key do map pelo o id do user
    // 3) mudar a estrutura dentro da li para uma estrutura  semantica com figure/img/figcapture
    return(
        <div>
            <h2>Lista de usuario do GITHUB</h2>
            {/* <button onClick= {() => setRepositorios(["jow","olá"])}>GAbiru</button> */}
            <ul>
            {repositorios.map((obj,i)=>
            
            <li key = {i}> {obj.login} </li>)}
            </ul>
        </div>
    )
}