import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './style';
import { completeListOfPokemons } from '../../services/handleApi';
  

  
const Pokedex = () => {  
  const [pokedex, setPokedex] = useState([])
  const [QuantityPokemons,setQuantityPokemons] = useState(10)
  
  useEffect(() =>{
    const fetchData = async () =>{
    const pokemonsList = await completeListOfPokemons(QuantityPokemons)
    const dataPokemon = pokemonsList.results.map(async (pokemon)=>{return await getPokemon(pokemon.url)})
    const results = await Promise.all(dataPokemon)
    setPokedex(results)
  }
  fetchData()
  
  async function getPokemon(url){
    const response = await fetch(url)
    const result = await response.json()
    return result
  }
  
},[QuantityPokemons])

const addMorePokemons = () =>{
  setQuantityPokemons(( PrevMore) => PrevMore+10)
}

return (
    <>
        <Styled.Container>
          {pokedex.length > 0 &&
            pokedex.map((poke, index) => {
              return (
                <Styled.Pokemons key={index}>
                  <Link to={`/${poke.id}`}>
                    <Styled.Img src={poke.sprites.front_default} alt={poke.name}/>
                    <Styled.Informations>#{poke.id}</Styled.Informations>
                    <Styled.Informations>{poke.name}</Styled.Informations>
                  </Link>
                </Styled.Pokemons>
              )
          })}
        </Styled.Container>
        <Styled.Button type='submit' className='btn' onClick={addMorePokemons} >Carregar Mais</Styled.Button>  
    </>
  )
}

export { Pokedex }