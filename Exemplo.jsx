import { useState} from "react"

const Exemplo = ({cor}) => {

    const [texto, setTexto] = useState ("teste useState")
    return ( 

        <div>
            <h1 style={{color : cor}}> {texto}</h1>
            <button onClick={() =>{setTexto("Texto Apos o Click")}}>{botao}</button>
        </div>
    )
}

export default Exemplo;