// import { inputMonster } from '../../services/searchPokemon'
import { useState } from 'react'
import './style.css'

const InputSearched = (props) => {
    const [input, setInput] = useState('')
    
    const handleInput =(e) => {setInput(e.target.value)}
    console.log(input)

    return(
        <>
            <input type={"text"} className="campo" placeholder={"Digite aqui o nome do pokemon" }onChange={handleInput}></input>
        </>
            // <button className="btn" onClick={handleButton}>Pesquisar</button>
            // return <button className="btn" onClick={inputMonster(InputPokemon)}>Pesquisar</button>
    )
}


export {InputSearched}