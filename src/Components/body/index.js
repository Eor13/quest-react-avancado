import ImagemLogo from '../image/logo.png';
import { useContext } from "react";
import { ThemeContext } from '../../services/theme-context';
import { AppRoutes } from '../../pages/routes';
import {InputSearched} from '../Input'
import { ThemeTogglerButton } from '../toggleButton';
import styled from "styled-components";

export const Body = () => {
    const {theme} = useContext(ThemeContext)
    return(
        <Div style={{color:theme.color, background:theme.background}}>
            <Header >
                <Img src={ImagemLogo} alt="pokemon"/>
                <Nav>
                <InputSearched/>
                <ThemeTogglerButton/>
                </Nav>
            </Header>
            <Main>
                <AppRoutes/>
            </Main>
        </Div>
    )
}

const Div = styled.div`
    min-height:100vh
`

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    @media(max-width:500px){
        width: 95vw;    
    }
`
const Img = styled.img`
    width: 30%;
    height: 30%;
`
const Nav = styled.nav`
    display: flex;
    column-gap: 20px;
    align-items: center;
    
`
const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 9   0vh;
    max-width: 1440px;
    row-gap: 10px;
    @media(max-width:500px){
        width: 95vw;    
    }
`