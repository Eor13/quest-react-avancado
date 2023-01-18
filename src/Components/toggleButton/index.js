import { useContext } from "react";
import { ThemeContext, Themes } from "../them-context";
import { Button } from "../button";

const ThemeTogglerButton = () =>{
    const {theme, setTheme} = useContext(ThemeContext)
    return(
        <>
            <Button onClick={() => setTheme(theme === Themes.light ? Themes.dark : Themes.light)}/>
        </>
    )
}

export { ThemeTogglerButton }