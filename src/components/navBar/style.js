import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
width: 20%;
height: 20%;
` 
export const Img = styled.img`
    width:100%;
`
export const Nav = styled.nav`
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
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 10px;
`
export const Label = styled.label`
font-size: 2rem;
width: 250px;
text-align:center;
color: #5C2C2C;
margin-bottom: 5px;
border-radius:30px;
box-shadow: 0px 0px 100px #5c2c2c;
@media(max-width:830px){
    width: 180px; 
    font-size: 1.7rem;
}
@media(max-width:500px){
    width: 90px;
    font-size: 1.3rem;
}
`
export const Input = styled.input`
width: 250px;
font-size: 2rem;
text-align:center;
color: #5C2C2C;
border-radius: 10px;
border: 1px solid transparent; 
@media(max-width:830px){
    width: 180px; 
    font-size: 1.7rem;
}
@media(max-width:500px){
    width: 120px;
    font-size: 1rem;
}
`