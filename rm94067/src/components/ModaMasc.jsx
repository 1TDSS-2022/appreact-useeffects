import React from "react";
import casual from "../img/Masc/casual.jpg"
import social from "../img/Masc/social.jpg"
import street from "../img/Masc/Street.jpg"
import "../components/css/ModaMasc.css"

export default function ModaMasc(){

    return(
        <section>
            <div>
                <h1>MODA MASCULINA</h1>
            </div>

            <div className="conteiner">
                <span>Casual</span>
                <img src={casual} alt="" />
            </div>

            <div className="conteiner">
                <span>Social</span>
                <img src={social} alt="" />
            </div>
            
            <div className="conteiner">
                <span>Street</span>
                <img src={street} alt="" />
            </div>

        </section>
    )
}