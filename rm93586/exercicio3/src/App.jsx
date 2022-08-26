import React from "react"

import Semaforo from "./components/semaforo/Semaforo";

import Carros from "./components/Carros/Carros";

import Carteirinha from "./components/carteirinha/Carteirinha";

import foto1 from './imagem/1.jpg?auto=compress'
import foto2 from './imagem/2.jpg?auto=compress'
import foto3 from './imagem/3.jpg?auto=compress'



//Css padrão
import './EstiloPadrao.css';

const carros = ["Ford", "Fusca", "BMW", "Combi", "Gol", "Corolla", "Audi", "Celta", "Ferrari", "Porsche"];

const fotos = [foto1, foto2, foto3]
const aluno = ["Luan", "Roberto", "Silva"]
const matricula = ["12345", "54321", "98765"]
const turma = ["1TDSS", "2TDSS", "3TDSS"]
const curso = ["Análise e Desenvolvimento de Sistemas", "Administração", "Engenharia de Software"]

export default function App() {
    return (
        <section>
        <h1>William Barrence - RM93586 - 1TDSS</h1>
        <Semaforo />
        <Carros carrosProp={carros} />
        <Carteirinha fotosProps = {fotos} alunoProps={ aluno } matriculaProps={ matricula } cursoProps={ curso } turmaProps={ turma } />
        </section>
    )
}