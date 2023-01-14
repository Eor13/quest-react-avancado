import { ListaDePokemons,} from '../../services/pokedexList'
import './style.css'

const Cards =() =>{
    return(
        <>
            <h1>Pokedex</h1>
            <div className='container'>
                <ListaDePokemons/>
            </div>
        </>
    )
}

export {Cards}