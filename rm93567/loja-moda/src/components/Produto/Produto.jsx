import React from "react";


export default Produto;

function Produto(props){
    return(
        <div className='produto'>
            <figure>
                <img src={props.src} alt={props.alt} />
            </figure>
            
            <figcaption>
                {props.descricao}
            </figcaption>
            
            <strong>
                R${props.valor}
            </strong>

            <button>Comprar</button>
        </div>
    )

    
}