import React from 'react'

export default function home() {

    const produtos= {
        backgroundColor: '#666',
        height:'85vh',
        textAlign:'center',
        color:'orange'
    }

  return (
    <div style= {produtos}>
        <h1>Página principal</h1>
        <p>Exemplo da página principal do projeto</p>
    </div>
  )
}