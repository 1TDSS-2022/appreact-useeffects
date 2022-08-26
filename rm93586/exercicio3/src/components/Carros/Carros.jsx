import React from "react";

export default function Carros(props) {
    return (
        <div className="Carros">
        <h2>Lista de carros</h2>
        <ul>
            <li>{props.carrosProp[0]}</li>
            <li>{props.carrosProp[1]}</li>
            <li>{props.carrosProp[2]}</li>
            <li>{props.carrosProp[3]}</li>
            <li>{props.carrosProp[5]}</li>
            <li>{props.carrosProp[5]}</li>
            <li>{props.carrosProp[7]}</li>
            <li>{props.carrosProp[8]}</li>
            <li>{props.carrosProp[9]}</li>
        </ul>
        </div>
    );
}