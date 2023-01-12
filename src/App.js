import ImagemLogo from './Components/image/logo.png';
import './App.css'
import {InputSearched} from './Components/Input/index'
// import { Cards } from './Components/cards';
import { Card } from './Components/card';

import {ListaDePokemons } from './services/pokedexList'


function App() {
  return (
    <>
    <header className="cabecalho">
      <img src={ImagemLogo} alt="Logo Pokemon" />
      <nav>
        <InputSearched/>
      </nav>
    </header>
    <main className="container-de-exibicao">
      {/* <Cards/> */}
      <Card/>
      {/* <ListaDePokemons/> */}
    </main>
    </>
  )
}

export default App;
