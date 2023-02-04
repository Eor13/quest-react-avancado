import styled from 'styled-components';


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #DB6767;
    border-radius: 10px;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding: 15px;
    gap: 10px;
    margin: 15px;
    @media(max-width:500px){
        width: 70%;  
    }
`
export const Img = styled.img`
    width: 40%;
    background-color: #A31717;
    border-radius: 50%;
`
export const POkemonName = styled.h2`
    text-transform: uppercase;
    font-size: 1.8rem;
    color: #5C2C2C;
`
export const PokemonInformations = styled.div`
    width: 100%;  
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 10px;
    border: 4px double #A31717;
    max-height: ${props => props.attacks ?"250px": "none"};
`
export const Title = styled.h3`
    display: flex;
    font-size: 1.6rem;
    color: #5C2C2C;
`
export const BoxInformation = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.abilityName ? "flex-start" : "center"};
    column-gap: 30px;
    width: 90%;
    align-items: flex-start;
    list-style-type: disclosure-closed  ;
    list-style-position:inside;
    overflow-y: ${props => props.attack ? "scroll": "none"};
    @media(max-width:500px){
        margin-left:${props => props.attack ? "50%": "none"};  
    }
    @media(max-width:375px){
        margin-left:${props => props.attack ? "40%": "none"};  
    }
`
export const Informations = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;  
`
export const Information = styled.li`
    color: #5C2C2C;
    width: ${props => props.attack ? "28%" : "100%"};
    padding-bottom: 5px;
    text-decoration: none;
    cursor:${props => props.typeName ? "pointer" : "default"};
    font-weight:${props => props.abilityName ?"900": "none"};
    font-size:${props => props.abilityName ?"1.3rem": "none"};
    list-style-type: ${props => props.abilityDescription ? "none" : "disclosure-closed"};
    text-align: ${props => props.abilityDescription ? "justify" : "none"};
    trasition: 1.5s;
    &:hover{
        color:${props => props.typeName ? "beige" : "black"};
        background-color:${props => props.typeName ? " #A31717" : "none"};
        padding:${props => props.typeName ? " 5px" : "none"};
        border-radius: 10px;
    }
    @media(max-width:950px){
        width:${props => props.attack ? "40%" : "100%"};  
    }
    @media(max-width:500px){
        width: 100%;  
    }
`
export const Btn = styled.div`
    color: #DB6767;
    background-color: #5C2C2C;
    padding: 8px;
    border-radius: 10px;
    transition: 0.8s;
    &:hover{
        background-color: #A31717;
        color: beige;
    }
`