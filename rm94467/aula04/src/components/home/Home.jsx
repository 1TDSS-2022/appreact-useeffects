import React from "react"
import { Switch, Route, link } from 'react-router'
import Api from "../api/Api"

export default function Home() {

    //ESTÁ SENDO UM REQUEST, PARA O SERVIDOR http://www.fiap.com.br
    //ELE GERA O RESPONSE DO TIPO HTML, O USUARIO SEMPRE TERÁ UMA RESPOSTA HTML

    // COMO FAZEMOS PARA FAZER UMA NAVEGAÇÃO?
    // PRECISAMOS INSTALAR O REACT HUTER DOM: SE TRATA DE UMA BIBLIOTECA QUE PRECISA SER INTALADO
    // E DEPOIS QUE UTILIZAR TEMOS QUE CONFIGURAR ELE, E VAMOS PODER UTILIZAR ELE DENTRO
    // PARA CRIAR RIOTAS NA APLICAÇÃO EX: LINK DE UMA PAG PARA OUTRA (PRECISAMOS UTILIZAR ROTAS COM O REACT ROUTERnpm DOM)
    // SITE PARA USAR: reactrouterdom
    return (
        <div>
            <header>
                <link to="/">Home</link>
                <link to="/api">Api</link>
                <a href="#">Home</a><a href="#">Api</a>
            </header>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/api">
                    <Api />
                </Route>


            </Switch>

        </div>

    )
}