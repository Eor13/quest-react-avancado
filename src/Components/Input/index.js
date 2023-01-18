// import { inputMonster } from '../../services/searchPokemon'
import { useState } from 'react'
import './style.css'

const InputSearched =() => {
    const [input, setInput] = useState('')
    
    
    const handleInput =(e) => {
        setInput(
            e.target.value
        )}

    return(
        <div className='campo'> 
            <label htmlFor='search' >Pesquisar</label>
            <input type={"text"} id='search' placeholder={"Digite o pokemon" }onChange={handleInput} value={input}></input>
        </div>
            // <button className="btn" onClick={handleButton}>Pesquisar</button>
            // return <button className="btn" onClick={inputMonster(InputPokemon)}>Pesquisar</button>
    )
}


export {InputSearched}