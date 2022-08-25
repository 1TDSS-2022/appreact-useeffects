import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Api() {


    const[repositorios, setResponsitorio] = useState([])

useEffect( () => {
    carregaRepos()
}, [])


const carregaRepos = async() => {
    const response =  await fetch("https://api.github.com/users") 
    const data = await response.json();
    setResponsitorio(data)
}
   



    return(
        <div>
        <h2>Lista de usuarios do GITHUB</h2>
        <ul style={ {display: 'flex', flexWrap: 'wrap'}}>
            {repositorios.map((obj) => 
                <li style={{listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                key={obj.id}>
                    <figure>
                        <img style={{width: '100px', borderRadius: '30%', border: '1px solid'}} src={obj.avatar_url} />
                        <figcaption><a href={obj.html_url} target='_blank'>{obj.login}</a></figcaption>
                    </figure>
                </li>
            )}
        </ul>
        
        {/* <button onClick={() => setResponsitorio(["Alo", "Teste"])}>Alterar</button> */}
        </div>
    )

    //Exercicio:
    //1 Recuperar o avatar do usuário:
    //2 Trocar a key do map pelo id do user
    //3 mudar a estrtura dentro da li para uma estrutra semantica com figure/img/figcaption
}

