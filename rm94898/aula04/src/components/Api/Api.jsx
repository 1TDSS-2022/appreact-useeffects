import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Api() {

    const[repositorios, setResponsitorio] = useState([])

    useEffect(() => {
            
        console.log('RENDERIZOU')
})

    useEffect(() => {
        console.log('Rendizando o objeto')
},[repositorios])


   

    return(
        <div>
        <h2>Lista de usuarios do GITHUB</h2>
        <h2>{repositorios}</h2>
        
        <button onClick={() => setResponsitorio(["Alo", "Teste"])}>Alterar</button>
        </div>
    )
}

