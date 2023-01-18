import { useContext } from "react";
import ImagemLogo from '../image/logo.png';
import { ThemeContext } from "../them-context";
import {InputSearched} from '../Input'
import { AppRoutes } from '../../pages/routes';
import { ThemeTogglerButton } from '../toggleButton';

const Body = () => {
    const {theme} = useContext(ThemeContext)
    return(
        <body className='master' style={{color:theme.color, background:theme.background}}>
            <header className="cabecalho">
                <img src={ImagemLogo} alt="pokemon" className='logo' />
                <nav>
                <InputSearched/>
                <ThemeTogglerButton/>
                </nav>
            </header>
            <main className="container-de-exibicao">
                <AppRoutes/>
            </main>
        </body>
    )
}

export {Body}