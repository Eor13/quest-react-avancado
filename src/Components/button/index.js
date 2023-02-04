import Pokebola from "../../images/pokebola.png";
import { useContext } from "react";
import { ThemeContext } from "../../services/theme-context";
import * as Styled from './style';
//adalkdaldkaldkald

const TogglerButton = (props) => {
    const { theme } = useContext(ThemeContext)
    return(
        <Styled.Button {...props} style={{color: theme.color, background: theme.background}}>
          <Styled.Img src={Pokebola} alt="Botão de Troca de Tema"/>
        </Styled.Button>
    )
}

export { TogglerButton }