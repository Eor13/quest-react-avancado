import { ThemeProvider } from './services/theme-context'
import { Body } from './Components/body';
import { createGlobalStyle } from 'styled-components';


export function App() {
  return (
    <ThemeProvider>
        <GlobalStyle/>
        <Body/>
    </ThemeProvider>

  )
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
    text-decoration: none;
  }
`