import { useContext } from "react";
import Pokebola from "../image/pokebola.png"
import { ThemeContext } from "../them-context";

const Button = (props) => {
    const { theme } = useContext(ThemeContext)
    return(
        <button className="togglerButton" {...props} style={{color: theme.color, background: theme.background}}>
            <img src={Pokebola} alt="Botão de Troca de Tema"/>
        </button>
    )
}

export {Button}