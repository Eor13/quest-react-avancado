import ImagemLogo from './Components/image/logo.png';
import './App.css'
import {InputSearched} from './Components/Input/index'
import { Cards } from './Components/cards';
// import { Card } from './Components/card';


function App() {
  return (
    <>
    <header className="cabecalho">
      <img src={ImagemLogo} alt="pokemon" className='logo' />
      <nav>
        <InputSearched/>
      </nav>
    </header>
    <main className="container-de-exibicao">
      <Cards/>
      {/* <Card/> */}
    </main>
    </>
  )
}

export default App;
