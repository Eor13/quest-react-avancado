import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Card, CardForName } from "../Components/card";
import { CardsList } from "../Components/cardsList";

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<CardsList/>}/>
                <Route exact path="/:id" element={<Card/>}/>
                <Route exact path="/name" element={<CardForName/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }