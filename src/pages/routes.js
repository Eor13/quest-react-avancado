import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Card, CardTypeList } from "../Components/card";
import { CardsList } from "../Components/cardsList";
import styled from "styled-components";
import { NavBar } from "../Components/NavBar";
import { useContext } from "react";
import { ThemeContext } from '../services/theme-context';


const AppRoutes = () =>{
    const {theme} = useContext(ThemeContext)
    return(
        <BrowserRouter>
            <Div style={{color:theme.color, background:theme.background}}>
                <NavBar/>
                <Main>
                    <Routes>
                        <Route exact path="/" element={<CardsList/>}/>
                        <Route exact path="/:id" element={<Card/>}/>
                        <Route exact path="/type/:typeName" element={<CardTypeList/>}/>
                    </Routes>
                </Main>
            </Div>
        </BrowserRouter>
    )
}

const Div = styled.div`
    min-height:100vh
`
const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    max-width: 1440px;
    row-gap: 10px;
    @media(max-width:500px){
        width: 95vw;    
    }
`
export { AppRoutes }