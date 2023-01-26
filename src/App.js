import { ThemeProvider } from './services/theme-context';
import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './pages/routes';

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyle/>
      <AppRoutes/>
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