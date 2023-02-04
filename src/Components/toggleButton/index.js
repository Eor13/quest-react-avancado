import { useContext } from "react";
import { ThemeContext, Themes } from "../../services/theme-context";
import { TogglerButton } from "../button";
//asasa

const ThemeTogglerButton = () =>{
    const {theme, setTheme} = useContext(ThemeContext)
    return <TogglerButton onClick={() => setTheme(theme === Themes.light ? Themes.dark : Themes.light)}/>
}
export { ThemeTogglerButton }