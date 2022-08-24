import React from "react";
import { useEffect, useState } from "react";

export default function Api(){

    const objeto = [
        {
            nome: "Nanne",
            id: 121
        },
        {
            nome: "Ruan",
            id: 94528
        }
    ]
 

    const objetoJSON = {
        "nome" : "Nanne",
        "id": 121
    }

    const [repositorios, setRepositorios] = useState([])

    useEffect(()=>{
        carregaRepos()
    }, [])

    const carregaRepos = async () =>{
        const response = await fetch('https://api.github.com/users')
        const data = await response.json()
        setRepositorios(data)
    }

    useEffect(()=>{
        console.log('RENDERIZOU O OBJETO')
    },[repositorios])
    return(
        <div>
            <h2>Lista de usuários do GutHUB</h2>
            {/* <button onClick={()=> setRepositorios(["Alê", "Ronqui"])}>ALTERAR</button> */}
            <ul style={{listStyle: 'nome'}}>
                {repositorios.map((obj)=>
                <li key={obj.id}>
                    <figure>
                        <img src={obj.avatar_url} alt="Foto de avatar" style={{width: '200px'}}/>
                        <figcaption><a href={obj.html_url} target='_blank'>{obj.login}</a></figcaption>
                    </figure>
                    {obj.login}</li>)}
            </ul>
        </div>
    )
}

//Exercício -> Recuperar o avatar do usuário
//Trocar a Key do map pelo id do user
//Mudar a estrutura dentro da li para uma estrutura semantica com figure/img/figcaption