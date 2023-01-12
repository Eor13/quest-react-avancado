import {useState, useEffect} from 'react'
import { baseUrl } from './baseUrl'
import pokemonListData from '../object/userList'

const QuantatyPokemons = 10
const listaCompleta = `${ baseUrl }pokemon?limit=${QuantatyPokemons}&offset=0`
async function listaCompletaDePokemons(){
    const response = await fetch(`${listaCompleta}`)
    const lista = await response.json()
    return lista
}
const ListaDePokemons = () => {
    const [pokedex, setPokedex] = useState([])//primeira chamada de useState retorna um array vazio
    useEffect(() =>{
        const fetchData = async () =>{
            const pokemonsList = await listaCompletaDePokemons()
            setPokedex(pokemonsList.results)
            pokemonListData.setData(pokemonsList)
        }
        fetchData()
    },[])
    console.log(pokemonListData)
    return (
        <ul>
        {
          pokedex.map((poke, index) => {
            return (
              <li key={index}>
                <p>{poke.name}</p>
                <p>{poke.url}</p>
              </li>
            )
          })
        }
      </ul>
    )
}
export {ListaDePokemons}