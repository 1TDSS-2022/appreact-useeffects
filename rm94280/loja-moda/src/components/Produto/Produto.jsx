import React from 'react';
import './Produto.css'

function Produto(props) {
    return (
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

            <button>Adicionar ao Carrinho</button>
        </div>
    )
}

export default Produto;