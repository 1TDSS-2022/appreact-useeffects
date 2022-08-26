import React from "react";


//Este componente gera a lista de roupas de todas as páginas

var botao = "ADICIONAR"


export default function ListaDeRoupa(props){
    return (
        <>
        <div class="lista-item">
                    <div class="button"><a href="#">{botao}</a></div>
                    <figure>
                    <img class="imagem" src={props.roupasProps[0]} alt=""/>
                    <figcaption class="produto">{props.nomeProps[0]}</figcaption>
                    <figcaption class="preco">{props.precoProps[0]}</figcaption>
                    </figure>
                </div>
                <div class="lista-item">
                    <figure>
                    <div class="button"><a href="#">{botao}</a></div>
                    <img class="imagem" src={props.roupasProps[1]} alt=""/>
                    <figcaption class="produto">{props.nomeProps[1]}</figcaption>
                    <figcaption class="preco">{props.precoProps[1]}</figcaption>
                    </figure>
                </div>
                <div class="lista-item">
                    <figure>
                    <div class="button"><a href="#">{botao}</a></div>
                    <img class="imagem" src={props.roupasProps[2]} alt=""/>
                    <figcaption class="produto">{props.nomeProps[2]}</figcaption>
                    <figcaption class="preco">{props.precoProps[2]}</figcaption>
                    </figure>
                </div>
                <div class="lista-item">
                    <figure>
                    <div class="button"><a href="#">{botao}</a></div>
                    <img class="imagem" src={props.roupasProps[3]} alt=""/>
                    <figcaption class="produto">{props.nomeProps[3]}</figcaption>
                    <figcaption class="preco">{props.precoProps[3]}</figcaption>
                    </figure>
                </div>
                <div class="lista-item">
                    <figure>
                    <div class="button"><a href="#">{botao}</a></div>
                    <img class="imagem" src={props.roupasProps[4]} alt=""/>
                    <figcaption class="produto">{props.nomeProps[4]}</figcaption>
                    <figcaption class="preco">{props.precoProps[4]}</figcaption>
                    </figure>
                </div>
            </>
    )
}