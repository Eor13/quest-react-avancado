import {Card} from '../card'
import './style.css'

const cardTitle = ['Pokemon 1', 'Pokemon 2', 'Pokemon 3', 'Pokemon 4' , 'Pokemon 5' , 'Pokemon 6' , 'Pokemon 7' , 'Pokemon 8']

const openDatas = () =>{
    console.log("abrindo")
}

const Cards =() =>{
    return(
        <>
            <h1>Pokedex</h1>
            <div className='container'>
                {
                    cardTitle.map((cardTitle, index) => {
                        return(
                            <Card key={index} open={() => openDatas}>
                                <h3>{cardTitle}</h3>
                                <p>Descrição do Pokemon {index}</p>
                            </Card>
                            
                        )
                    })
                }
            </div>
        </>
    )
}

export {Cards}