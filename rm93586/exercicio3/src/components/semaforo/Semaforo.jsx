import React from "react";
import { useState } from "react";

import "./Semaforo.css";

let x = 1;

export default  function Semaforo() {

    

    const [pareVisivel, setPareVisivel] = useState(false);
    const [atencaoVisivel, setAtencaoVisivel] = useState(false);
    const [sigaVisivel, setSigaVisivel] = useState(false);

    const handleClickPare = () => {
        setPareVisivel(true);
        setAtencaoVisivel(false);
        setSigaVisivel(false);
    };

    const handleClickAtencao = () => {
        setAtencaoVisivel(true);
        setPareVisivel(false);
        setSigaVisivel(false);
    };

    const handleClickSiga = () => {
        setSigaVisivel(true);
        setPareVisivel(false);
        setAtencaoVisivel(false);
    };


    const mudaSemaforo = () => {
        
        if (x === 1) {
            handleClickPare();
            x += 1;
            console.log(x);
        } else if (x === 2) {
            handleClickAtencao();
            x += 1;
            console.log(x);
        } else if (x === 3) {
            handleClickSiga();
            x = 1;
            console.log(x);
        }
    }
    






    return (
        <div className="Semaforo">
            <button onClick={mudaSemaforo}>MUDAR</button>
            {pareVisivel && <h2 className="pare">PARE</h2>}
            {atencaoVisivel && <h2 className="atencao">ATENÇÃO</h2>}
            {sigaVisivel && <h2 className="siga">SIGA</h2>}
        </div>
    )
}