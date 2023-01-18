import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from './baseUrl'

let QuantityPokemons = 10
let offSet = 0
const fullList = `${ baseUrl }pokemon?limit=${QuantityPokemons}&offset=${offSet}`

async function CompleteListOfPokemons(){
  const response = await fetch(`${fullList}`)
  return await response.json()
}

const Pokedex = () => {
  const [pokedex, setPokedex] = useState([])//primeira chamada de useState retorna um array vazio
  useEffect(() =>{
    const fetchData = async () =>{
      const pokemonsList = await CompleteListOfPokemons()
      const dataPokemon = pokemonsList.results.map(async (pokemon)=>{return await getPokemon(pokemon.url)})
      const results = await Promise.all(dataPokemon)
      setPokedex(results)
    }
    fetchData()
    
    async function getPokemon(listPokemonUrl){
      const response = await fetch(listPokemonUrl)
      const result = await response.json()
      return result
    }
  },[])

  const AddPokemons =() =>{
    const [More,setMore] = useState("")
    console.log(More)
    // console.log(loadingMoreQuantity)
    useEffect(()=>{
      setMore(console.log("Olá"))
      // setLoadingMoreQuantity([(prevLoadingMoreQuantity => prevLoadingMoreQuantity+10)])
      
    },[])
  }

  console.log(pokedex)
  return (
      <>
          <ul>
            {pokedex.map((poke, index) => {
              return (
                <li key={index}>
                  <Link to={`/${poke.id}`}>
                  <img src={poke.sprites.front_default} alt={poke.name}/>
                  <p>#{poke.id}</p>
                  <p>{poke.name}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
          <button className='btn' onClick={AddPokemons} >Carregar Mais</button>
        
      </>
    )
    
  }

export { Pokedex }