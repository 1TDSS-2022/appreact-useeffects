import React from "react";

const Home = () => {

    const home = {
        backgroundColor: '#ffb',
        padding: '5px',
        height: '85vh',
        textAlign: 'center',
        color: 'orange'
    }


    return(
       <div style={home}>
            <h1>Página principal</h1>
            <p>Exemplo da página principal do projeto.</p>
       </div>
    )

}

export default Home;