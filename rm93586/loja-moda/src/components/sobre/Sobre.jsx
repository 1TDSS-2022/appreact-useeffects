import React from "react";

import './Sobre.css'

export default function Sobre(){
    return(
        <>
        <section class="sobre">
            <article class="sobre-conteudo">
            <h1>Alunos:</h1>
            <p>RM93586 - William Barrence Santos Junior</p>
            <br/>
            <p>Eu "componentizei" a lista de roupas para poder reutilizar nas páginas: "moda feminina", "moda masculina" e "moda infantil".</p>
            <p>utilizei o "props" para passar as informações para o componente</p>
            <p>utilizei useState no minha conta</p>
            <br/>
            <p>O conteúdo utilizado foram capas de revistas e artigos de moda em geral na internet</p>
            </article>
        </section>
        </>
    )
}