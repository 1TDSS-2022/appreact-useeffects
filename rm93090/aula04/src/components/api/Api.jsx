import React from "react"
import { useEffect, useState } from "react"
import './Api.css'

export default function Api() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        carregaRepos()
    }, [])

    const carregaRepos = async () => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setUsers(data)
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



    return (
        <div>
            <h2>Lista de Usuário do GitHUB</h2>
            {/* <button onClick={()=> setRepositorios(["Alê","Ronqui"])}>ALTERAR</button> */}
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <figure>
                            <img src={user.avatar_url} alt="perfil" className="avatar"/>
                        </figure>

                        <figcaption>
                            {user.login}
                        </figcaption>
                    </li>
                )}
            </ul>
        </div>
    )
}