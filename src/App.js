import { ThemeProvider } from './Components/them-context';
import './App.css'
import { Body } from './Components/body';


function App() {
  return (
    <ThemeProvider>
      <Body/>
    </ThemeProvider>
  )
}

export default App;
