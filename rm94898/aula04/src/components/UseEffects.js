import { useState, useEffect} from 'react'

const UseEffects = () => {

const [valor, setValor] = useState(0);


    return(
        <>
        <h1>Teste</h1>
        <p>{valor}</p>

        <button onClick={() => setValor(valor + 1)}>Button</button>
        </>
    )
}

export default UseEffects;