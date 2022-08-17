import React from "react";
import { useEffect, useState } from "react";

export default function Api(){
    
    const[repositorios, setRespositorios] = useState([])
    
    //UseEffect executa uma unica vez no carregamentp do componenete
    //did.mont did.uptade
    // useEffect(()=>{
    //     console.log("Renderizado!")
    // },[])
    
    // //Vai direcionar o carregamento para certo objeto
    // useEffect(()=>{
    //     console.log("Renderizou o objeto")
    // },[repositorios])

    return(
        <>
            <h2>Lista de usuários do GitHub:</h2>
            <button onClick={()=>setRespositorios(['Henrique', 'Rodrigo']) }>Alterar</button>
        </>
    )
}