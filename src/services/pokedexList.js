import {useState, useEffect} from 'react'
import { baseUrl } from './baseUrl'

const QuantityPokemons = 100
const fullList = `${ baseUrl }pokemon?limit=${QuantityPokemons}&offset=0`

async function CompleteListOfPokemons(){
  const response = await fetch(`${fullList}`)
  return await response.json()
}


const ListaDePokemons = () => {
  const [pokedex, setPokedex] = useState([])//primeira chamada de useState retorna um array vazio
  const [loadingMoreQuantity,setLoadingMoreQuantity] = useState(0)
  
  useEffect(() =>{
    const fetchData = async () =>{
        const pokemonsList = await CompleteListOfPokemons()
        const dataPokemon = pokemonsList.results.map(async (pokemon)=>{return await getPokemon(pokemon.url)})
        const res = await Promise.all(dataPokemon)
        setPokedex(res)
      }
      fetchData()


      async function getPokemon(listPokemonUrl){
        const response = await fetch(listPokemonUrl)
        const result = await response.json()
        return result
      }
    }
  ,[loadingMoreQuantity])
    console.log(pokedex)
    return (
      <>
        <ul>
          {
          pokedex.map((poke, index) => {
            return (
              <li key={index}>
                <img src={poke.sprites.front_default} alt={poke.name}/>
                <p>{poke.name}</p>
                <p>#{poke.id}</p>
              </li>
            )
          })
          }
        </ul>
        <button className='btn'>
            Carregar Mais
        </button>
      </>
    )
  
}
// onClick={
//   setLoadingMoreQuantity(
//     (prevLoadingMoreQuantity)=> prevLoadingMoreQuantity +10
//     )
//   }


export {ListaDePokemons}