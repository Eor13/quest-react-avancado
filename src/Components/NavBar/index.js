import ImagemLogo from '../../images/logo.png';
import { ThemeTogglerButton } from '../toggleButton';
import * as Styled from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputSearched =() => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit =(e) => {
        e.preventDefault()

        navigate(`/${name.toLowerCase()}`)
        setName("")
    }
    return(
        <Styled.Form onSubmit={handleSubmit}> 
                <Styled.Label htmlFor='search' >Pesquisar</Styled.Label>
                <Styled.Input 
                type={"text"} 
                id='search' 
                placeholder={"Digite o pokemon" }
                onChange={(e) => {setName(e.target.value)}} 
                value={name}
                />
        </Styled.Form>
    )
}

const NavBar = () => {
    return(
        <Styled.Nav>
            <Styled.NavLink to="/">
                <Styled.Img src={ImagemLogo} alt="Logo Pokemon"/>
            </Styled.NavLink>
            <InputSearched/>
            <ThemeTogglerButton/>
        </Styled.Nav>
    )
}

export { NavBar }