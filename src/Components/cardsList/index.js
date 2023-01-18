import { Pokedex } from '../../services/pokedexList'
import './style.css'

const CardsList =() =>{
    return(
        <>
            <h1>Pokedex</h1>
            <div className='container'>
                <Pokedex/>
            </div>
        </>
    )
}

export { CardsList }