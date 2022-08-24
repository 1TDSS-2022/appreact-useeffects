import React from 'react'
import { useEffect, useState } from 'react'

export default function App(){

    const objeto = [
    {   nome: "Wallison",
        id : 21
    },
    {
        nome: "Duda",
        id : 17
    },
    {
        nome: "Jesus",
        id: 33
    }
    ]





    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {      
        carregaRepos()
    },[])


    const carregaRepos = async() =>{
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()

        setRepositorios(data)
    }





    // useEffect(()=>{
    //     console.log("RENDERIZOU!")
    // })
    // useEffect(()=>{
    //     console.log("RENDERIZOU O OBJETO!")
    // },[repositorios])

    return(
        <div style={{textAlign: 'center'}}>
            <h2>Lista de Usuários do GitHUB</h2>
            {/* <button onClick={()=> setRepositorios(["Alê, Ronqui"])}>ALTERAR</button> */}
            <ul style={{listStyle:'none'}}>
                {
                    repositorios.map((obj, i)=>
                    <li key={obj.id}>
                        <figure>
                            <img src={obj.avatar_url} alt="AVATAR" style={{width: '20%'}} />
                            <figcaption><a href={obj.html_url} target ="_blank " style={{color:'white', fontSize: '1.8rem'}}>{obj.login}</a></figcaption>
                        </figure>
                    </li>
                    )}
            </ul>
        </div>
    )
}