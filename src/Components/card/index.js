
import { PokemonDetailsForName } from '../../services/searchForName'
import { PokemonDetails } from '../../services/searchPokemon'

const Card = () =>{
    return <PokemonDetails/>
}
const CardForName= () =>{
    return <PokemonDetailsForName/>
}


export {Card, CardForName}