import React, { useState, useEffect } from "react"
import logoGit from '../../img/github.svg'
import './ApiUsers.css'
//Exercicio:
//1 Recuperar o avatar do usuário:
//2 Trocar a key do map pelo id do user
//3 mudar a estrtura dentro da li para uma estrutra semantica com figure/img/figcaption

const ApiUsers = () => {

    const [usuarios, setUsuarios] = useState([]);

    const loadingUsuarios = async () => {

        const response = await fetch("https://api.github.com/users");
        const data = await response.json();


        setUsuarios(data.map((item) => {
            return (
                item = {
                    id: item.id,
                    login: item.login,
                    avatar: item.avatar_url,
                    perfil: item.html_url,
                    seguidores: item.followers_url.length,
                }
            )
        }
        ))
    }

    useEffect(() => {
        loadingUsuarios()
    }, [])
    return (
        <>

            <h1 className="text-h1">Usuários do github</h1>

            <div className="usersContainer">
                {
                    usuarios.map((usuario) => {
                        return (

                            <div key={usuario.id} className="container">
                                <a className="ancor" target="_blank" href={usuario.perfil}>
                                    <div>
                                        <figure>
                                            <img className="avatar" src={usuario.avatar} />
                                            <figcaption>{usuario.login}</figcaption>
                                        </figure>
                                    </div>
                                    <div className="logoGit">
                                        <a href="https://github.com" target='_blank'><img src={logoGit} alt="" /></a>
                                    </div>
                                    <div>
                                        <p>Seguidores: {usuario.seguidores}</p>
                                    </div>
                                </a>


                            </div>

                        )
                    })
                }

            </div>

        </>
    )
}

export default ApiUsers