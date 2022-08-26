import React from "react";

import './Carteirinha.css';



export default function Carteirinha(props) {
    return (
        <>
        <div className="carteirinha">
            <div>
                <img className="foto" src={props.fotosProps[0]}/>
            </div>
            <div>
                <div className="nome">{props.alunoProps[0]}</div>
                <div className="matricula">{props.matriculaProps[0]}</div>
                <br/>
                <div className="curso">{props.cursoProps[0]}</div>
                <div className="turma">{props.turmaProps[0]}</div>
            </div>
        </div>
        <div className="carteirinha">
            <div>
                <img className="foto" src={props.fotosProps[1]}/>
            </div>
            <div>
                <div className="nome">{props.alunoProps[1]}</div>
                <div className="matricula">{props.matriculaProps[1]}</div>
                <br/>
                <div className="curso">{props.cursoProps[1]}</div>
                <div className="turma">{props.turmaProps[1]}</div>
            </div>
        </div>
        <div className="carteirinha">
            <div>
                <img className="foto" src={props.fotosProps[2]}/>
            </div>
            <div>
                <div className="nome">{props.alunoProps[2]}</div>
                <div className="matricula">{props.matriculaProps[2]}</div>
                <br/>
                <div className="curso">{props.cursoProps[2]}</div>
                <div className="turma">{props.turmaProps[2]}</div>
            </div>
        </div>
        </>
    );
}