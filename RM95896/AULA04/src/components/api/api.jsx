import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Api (){

    const [repositorios,setRepositorios] = useState([])

    useEffect(()=>{
        console.log("Renderizou!")
    },[])

    useEffect(()=>{
        console.log("Renderizou O OBJETO!")
    },[repositorios])

    return(
        <div>
            <h2>Lista de usuarios do Git Hub</h2>
            <button onClick={()=> setRepositorios(['Ale', 'Ronqui'])}>ALTERAR</button>

        </div>
    )
}