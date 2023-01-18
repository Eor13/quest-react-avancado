import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Card } from "../Components/card";
import { CardsList } from "../Components/cardsList";

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<CardsList/>}/>
                <Route exact path="/:id" element={<Card/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }