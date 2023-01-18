import { createContext } from "react";
import { useState } from "react";

const Themes = {
    light: {
        color: '#000',
        background: 'linear-gradient(to right, #80FFCF, #AF62B8)'
        // background: 'linear-gradient(to right, #D41E1E, #0C6DC7 )'
    },
    dark:{
        color: '#fff',
        background: 'linear-gradient(to right, #0C6DC7, #D41E1E )'
    }
}

const ThemeContext = createContext()

const ThemeProvider = (props) =>{
    const [theme, setTheme] = useState(Themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export { Themes, ThemeContext, ThemeProvider }