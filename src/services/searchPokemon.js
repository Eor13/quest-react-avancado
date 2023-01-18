import {baseUrl} from './baseUrl'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import pokemonData from '../object/userPokemon'
import { Link } from 'react-router-dom'


// const pokemonTyped = "charizard"

// const pokemonSearched = `${baseUrl}pokemon/${id}`


async function searchPokemons(id){
    const response = await fetch(`${baseUrl}pokemon/${id}`)
    const result =  await response.json()
    return result
}

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState({
        info: ''
    })

    const {id} = useParams()

    useEffect(() =>{
        const fetchData = async () =>{
            const dataSearched = await searchPokemons(id)

            setPokemon({
                info: dataSearched
            })
            pokemonData.setData(dataSearched)
        }
        fetchData()
        console.log(pokemonData)
    },[id])   
    return(
        <div className='cartao'>
            {
            <>
                <img className='image' src={pokemonData.imagePokemon} alt={pokemon.info.name}/>
                <h2>{pokemonData.name}</h2>
                <div className='informations types'>
                    <h3>Tipagem:</h3>
                    <ul>
                        {pokemonData.types.map((type)=>(<li>{type.type.name}</li>))}
                    </ul>
                </div>
                <div className='informations abilities'>
                    <h3>habilidades:</h3>
                    <ul>
                        {pokemonData.abilitiesList.map((ability)=>{return <li>{ability.ability.name}</li>})}
                    </ul>
                </div>
                <div className='informations attacks'>
                    <h3>Lista de Ataques</h3>
                    <ul>
                        {pokemonData.movesList.map((move) =>(<li> {move.move.name}</li> ))}
                    </ul>
                </div>
                <Link className='btn' to={"/"}>Retornar à Lista</Link>
            </>
            }
        </div>
    )
}

export { PokemonDetails }