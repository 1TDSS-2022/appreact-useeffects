import React from 'react'
import { useState, useEffect } from 'react'

//https://api.github.com/users
//https://api.github.com/users/BrenoMMartins

export default function Api(){

    //useEffect Era muito utilizado com classes 
    // ddmount -> presta atenção na montagem do componente useEffect na estrutura padrão executa uma unica vez, se der F5 na pag ele vai executar
    // 
    //useState não da pra mexer com classes

    const [repositorios, setRepositorios] = useState([]) //esse [] quer receber uma lista

    useEffect(async() => {
        carregaRepos()
    },[])

    const carregaRepos = async() => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setRepositorios(data)
    }

    // useEffect(() => {
    //     console.log('renderizou')
    // },[]) //Com este [] ele olha apenas para o componente dele

    // useEffect(() => {
    //     console.log('renderizou o objeto')
    // }, [repositorios])


    // Exercicio:
    // - Recuperar o avatar do usuário
    // - Trocar a Key do map pelo id do user
    // - Mudar a estrutura dentro do li para um estrutura semantica com figure/img/figcaption


    return(
        <div>    
            <h1>Lista de Usuário do GitHUB</h1>
            {/* <button onClick={() => setRepositorios(["Alê", "Ronqui"])}>ALTERAR</button> */}

            <ul style={{listStyle:'none'}}>
                {repositorios.map((obj) =>
                    <li key={obj.id}>
                        <figure>
                            <img src={obj.avatar_url} alt="AVATAR" style={{width:'200px'}}/>
                            <figcaption>
                                <a href={obj.html_url}>{obj.login}</a>
                            </figcaption>
                        </figure>
                        </li>
                )}
            </ul>

        </div>
    )
}


        // <ul style={{listStyle:'none'}}>
        //     {repositorios.map((obj, i) =>
        //         <li key={i}>{obj.login}</li>
        //     )}
        // </ul>