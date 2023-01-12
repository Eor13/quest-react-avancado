import { baseUrl } from './baseUrl'
import {useState, useEffect} from 'react'
import pokemonData from '../object/userPokemon'

const pokemonTyped = "furret"

const pokemonSearched = `${baseUrl}pokemon/${pokemonTyped}`

async function searchPokemons(){
    const response = await fetch(`${pokemonSearched}`)
    const result =  await response.json()
    return result
}




const ShowSearch = () => {
    const [pokemon, setPokemon] = useState({
        info: ''
    })

    useEffect(() =>{
        const fetchData = async () =>{
            const dataSearched = await searchPokemons()

            setPokemon({
                info: dataSearched
            })
            pokemonData.setData(dataSearched)
        }
        fetchData()
        console.log(pokemonData.abilitiesList)
    },[])   
    return(
        <>
            {
                <>
                    <img className='image' src={pokemonData.imagePokemon} alt={pokemon.info.name}/>
                    <h2>{pokemonData.name}</h2>
                    <div className='attacks'>
                        <h3>Lista de Ataques</h3>
                        <ul >
                            {pokemonData.movesList.map((move) =>(<li> {move.move.name}</li> ))}
                        </ul>
                    </div>
                    <div className='abilities'>
                        <h3>habilidades:</h3>
                        <ul >
                            {pokemonData.abilitiesList.map((ability)=>{return <li>{ability.ability.name}</li>})}
                        </ul>
                    </div>
                    <div className='types'>
                        <h3>Tipagem:</h3>
                        <ul >
                            <li>{pokemonData.types.map((type)=>(<li>{type.type.name}</li>))}</li>
                        </ul>
                    </div>
                </>
            }
        </>
    )
}

export {ShowSearch}