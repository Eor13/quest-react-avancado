import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details, ListPokemonByType } from "./othersPages";
import * as Styled from './style';
import { Home } from "./home";
import { NavBar } from "../components/navBar";
import { useContext } from "react";
import { ThemeContext } from '../services/theme-context';


const AppRoutes = () =>{
    const {theme} = useContext(ThemeContext)
    return(
        <BrowserRouter>
            <Styled.Div style={{color:theme.color, background:theme.background}}>
                <NavBar/>
                <Styled.Main>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/:id" element={<Details/>}/>
                        <Route exact path="/type/:typeName" element={<ListPokemonByType/>}/>
                    </Routes>
                </Styled.Main>
            </Styled.Div>
        </BrowserRouter>
    )
}

export { AppRoutes }