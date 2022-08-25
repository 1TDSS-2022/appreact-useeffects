import React from "react";
import { useEffect, useState } from "react";

export default function Api(){


    const objeto = [

        {
            nome: "Nanne",
            id: 121
        }
        ,
        {
            nome: "Julia", 
            id: 122
        }
        ,
        {
            nome: "Henrique",
            id: 123
        }
    ]
       

    
    
    const[repositorios, setRespositorios] = useState([])
    

    useEffect(()=>{
        carregaRepos()
    }, [])

    const carregaRepos = async() =>{
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setRespositorios(data)
    }
    //UseEffect executa uma unica vez no carregamentp do componenete
    //did.mont did.uptade
    // useEffect(()=>{
    //     console.log("Renderizado!")
    // },[])
    
    // //Vai direcionar o carregamento para certo objeto
    // useEffect(()=>{
    //     console.log("Renderizou o objeto")
    // },[repositorios])


    // Exercicio:
    //1- Recuperar o Avatar do usuário
    // 2- Trocara a Key do map pelo id do user 
    // 3-Mudar a estrutura dentro da li para uma estrutura semântica com figure/img/figure

    const ul = {
        listStyle:'none',
        display: 'flex',
        alignContent: 'space-around',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

    return(
        <>
            <h2>Lista de usuários do GitHub:</h2>
            {/* <button onClick={()=>setRespositorios(['Henrique é gay', 'Luan by tola']) }>Alterar</button> */}
            <ul style={ul}>
                {repositorios.map((obj) =>
                    <li key={obj.id}>
                        <figure style={{}}>
                            <img src={obj.avatar_url} alt="Avatar" style={{width:'9rem', borderRadius:'30%', }} />
                            <figcaption><a href={obj.html_url}>{obj.login}</a></figcaption>
                        </figure>
                    </li>
                )}
            </ul>
        </>
    )
}