import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Api = () =>{
    
    const [repositorios, setRepositorios] = useState([])
    
    useEffect(()=>{
        console.log("render")
    })

    useEffect(()=>{
        console.log("render2")
    }, [repositorios])

    return(
        <div>
            <h2>lista de usuarios</h2>
            <button onClick={() => setRepositorios(['Alê', 'Ronqui'])}>ALTERAR</button>
        </div>
    )
}

export default Api