
import './style.css'
import {ShowSearch} from '../../services/searchPokemon'
const Card = () =>{
    // return(
    //     <div className="card" onClick={open()}>
    //         {children}
    //         {/* <ShowSearch/> */}
    //     </div>
    // )
    return(
        <div className='cartao'>
            <ShowSearch/>
        </div>
    )
}

export {Card}