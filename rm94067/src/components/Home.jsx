import React from "react";
import modaFem from "../img/modaFem.jpg"
import modaMasc from "../img/modaMasc.jpg"
import modaInfantil from "../img/modaInfantil.jpg"
import "../App.css"


export default function Menu(){

    const home = {
        padding: '10px 0px 30px 0px',
        backgroundColor: 'grey',
        fontFamily: 'Arial',
        textAlign: 'Center'        
    }
    const img = {
        display: 'flex',
        justifyContent: 'center'
    }

    return(

        <section style={home}>
            <h1>Moda Feminina</h1>
            <div style={img}> 
                <img src={modaFem} alt=''/>
            </div>
            <h1>Moda Masculina</h1>
            <div style={img} > 
                <img src={modaMasc} alt=''/>
            </div>
            <h1>Moda Infantil</h1>
            <div style={img}> 
                <img src={modaInfantil} alt=''/>
            </div>

        </section>
        
    )
}