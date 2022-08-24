import React from 'react'

export default function home() {

    const servicos = {
        backgroundColor: '#666',
        height:'85vh',
        textAlign:'center',
        color:'orange'
    }

  return (
    <div style= {servicos}>
        <h1>Página principal</h1>
        <p>Exemplo da página principal do projeto</p>
    </div>
  )
}