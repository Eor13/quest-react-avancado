import ImagemLogo from '../image/logo.png';
import { ThemeTogglerButton } from '../toggleButton';
import { Link } from 'react-router-dom';
import styled from "styled-components";
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
        <Form onSubmit={handleSubmit}> 
                <Label htmlFor='search' >Pesquisar</Label>
                <Input 
                type={"text"} 
                id='search' 
                placeholder={"Digite o pokemon" }
                onChange={(e) => {setName(e.target.value)}} 
                value={name}
                />
        </Form>
    )
}

const NavBar = () => {
    return(
        <Nav>
            <NavLink to="/">
                <Img src={ImagemLogo} alt="Logo Pokemon"/>
            </NavLink>
            <InputSearched/>
            <ThemeTogglerButton/>
        </Nav>
    )
}

const NavLink = styled(Link)`
width: 20%;
height: 20%;
` 
const Img = styled.img`
    width:100%;
`
const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100vw;
column-gap: 20px;
@media(max-width:500px){
    width: 95vw;    
}
`
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
export { NavBar }