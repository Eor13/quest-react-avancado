import Pokebola from "../image/pokebola.png"
import { useContext } from "react";
import { ThemeContext } from "../../services/theme-context";
import styled from "styled-components";

const TogglerButton = (props) => {
    const { theme } = useContext(ThemeContext)
    return(
        <Button {...props} style={{color: theme.color, background: theme.background}}>
          <Img src={Pokebola} alt="Botão de Troca de Tema"/>
        </Button>
    )
}


const Button = styled.button`
    border: 1px solid #DB6767;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;

    @media(max-width:830px){
        width: 75px;
        height: 75px;    
    }
    @media(max-width:500px){
        width: 45px;
        height: 45px;    
    }

`
const Img = styled.img`
    width: 90%;
`
export { TogglerButton }