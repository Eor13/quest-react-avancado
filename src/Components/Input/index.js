// import { inputMonster } from '../../services/searchPokemon'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const InputSearched =() => {
    const [input, setInput] = useState('')
    // const navigate = useNavigate()
    
    const handleSubmit =(e) => {
        e.preventDefault()
        // navigate(`${input}`)
        setInput("")

        
        console.log(input)
    }

    return(
        <Form onSubmit={handleSubmit}> 
            <Label htmlFor='search' >Pesquisar</Label>
            <Input 
            type={"text"} 
            id='search' 
            placeholder={"Digite o pokemon" }
            onChange={(e) => {setInput(e.target.value)}} 
            value={input}
            />
        </Form>
    )
}
export {InputSearched}

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 10px;
`
const Label = styled.label`
    font-size: 2rem;
    width: 250px;
    text-align:center;
    color: #5C2C2C;
    @media(max-width:830px){
        width: 180px; 
        font-size: 1.7rem;
        
    }
    @media(max-width:500px){
        width: 90px;
        font-size: 1.3rem;
    }
`
const Input = styled.input`
    width: 250px;
    font-size: 2rem;
    color: #5C2C2C;
    @media(max-width:830px){
        width: 180px; 
        font-size: 1.7rem;
        
    }
    @media(max-width:500px){
        width: 120px;
        font-size: 1rem;
    }
`