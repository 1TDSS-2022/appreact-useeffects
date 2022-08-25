import React from 'react'

export default function Home(){
    
    const home = {
        backgroundColor: '#ffb',
        height: '85vh',
        textAlign: 'center',
        color: 'orange'
    }

    return(
        <div style={home}>
            <h1>Página principal</h1>
            <p>Exemplo da página principal do projeto</p>
            {/* <header>
                <Link to="/">Home</Link>
                <Link to="/api">API</Link>
            </header> */}

        {/* Area de Navegação */}
            {/* <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Api">
                    <Api />
                </Route>
            </Switch> */}
        </div>

    )
    
}
