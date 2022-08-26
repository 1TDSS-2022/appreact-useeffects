import React from "react";
import { useState } from "react";

import './MinhaConta.css'

let logado = 0;

const listaEmails = ["conta1@fiap.com", "conta2@fiap.com", "conta3@fiap.com"]
const listaSenhas = ["111", "222", "333"]

function login() {

var variavelEmail = document.getElementById("email");
var variavelSenha = document.getElementById("senha");

for(var contador = 0; contador < listaEmails.length; contador++) {

    if (variavelEmail.value === "") {
        console.log("Digite um email válido")
        break;}

    if (variavelSenha.value === "") {
        console.log("Campo de Senha está vazio! Por favor insira sua senha.")
        break; }


    if (variavelEmail.value === listaEmails[contador]) {

            if (variavelSenha.value === listaSenhas[contador]) {
                console.log("Login efetuado com sucesso!")
                //setVisivel(true);
                logado = 1;
                
                break;

            } else {
                console.log("Senha inválida!")
                break;
            }

        } else if (contador == listaEmails.lenght - 1) {
            console.log("Email inválido!")
            break;
        }

}
}

export default function MinhaConta() {
    
    const [visibilidadeLogin, setVisivel] = useState(false);

    const contaLogada = () => {
        setVisivel(true);
    };

    const contaDeslogada = () => {
        setVisivel(false);
    };


    const validarLogin = () => {
    login();
    if (logado === 1) {
        contaLogada();
    }
    }

    const deslogarConta = () => {
        contaDeslogada();
    }
    
    

        
    
    
    return (
        <>
        <section className="minha-conta">
            {visibilidadeLogin && <section id="logado">
                <h1>Minha conta</h1>
                <h3>Nome de usuário: <span id="usuarioConta">username</span></h3>
                <h3>Email: <span id="emailConta">email@usuario.com</span></h3>
                <button type='button' onClick={deslogarConta}>Deslogar</button>
            </section>}



            {visibilidadeLogin || <section id="naoLogado">
                <h1>Faça seu login</h1>
                <p>tente: conta1@fiap.com e senha 111</p>
                <form id="formulario">
                    <label htmlFor="usuario" className="usuario">Usuário</label>
                    <br/>
                    <input type="text" placeholder="Usuário" name="usuario" id="email"/>
                    <br/>
                    <label htmlFor="senha" className="senha">Senha</label>
                    <br/>
                    <input type="password" placeholder="Senha" name="senha" id="senha"/>
                    <br/>
                    <button type='button' onClick={validarLogin}>Entrar</button>
                </form>
            </section>}
        </section>
        </>
    )
}