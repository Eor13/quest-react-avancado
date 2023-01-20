import {baseUrl} from './baseUrl'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { useParams, useSearchParams } from 'react-router-dom'
import pokemonData from '../object/userPokemon'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// async function searchPokemonsForName(typed){
//     const response = await fetch(`${baseUrl}pokemon/${typed}`)
//     const result =  await response.json()
//     return result
// }

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
    // const {typed} = useSearchParams()
    // console.log(typed)

    useEffect(() =>{
        const fetchData = async () =>{
            const dataSearched = await searchPokemons(id)
            setPokemon({
                info: dataSearched
            })
            pokemonData.setData(dataSearched)
            console.log(dataSearched)
        }
        fetchData()
        console.log(pokemonData)
    },[id])   
    
    // useEffect(() =>{
    //     const fetchData = async () =>{
    //         const dataSearched = await searchPokemonsForName(typed)
    //         setPokemon({
    //             info: dataSearched
    //         })
    //         pokemonData.setData(dataSearched)
    //         console.log(dataSearched)
    //     }
    //     fetchData()
    //     console.log(pokemonData)
    // },[typed])   

    return(
        <Section>
            {
            <>
                <Img src={pokemonData.imagePokemon} alt={pokemon.info.name}/>
                <H2>{pokemonData.name}</H2>
                <DivInformations>
                    <H3>Tipagem:</H3>
                    <Ul>
                        {pokemonData.types.map((type)=>(<Li>{type.type.name}</Li>))}
                    </Ul>
                </DivInformations>
                <DivInformations>
                    <H3>habilidades:</H3>
                    <Ul>
                        {pokemonData.abilitiesList.map((ability)=>{return <Li>{ability.ability.name}</Li>})}
                    </Ul>
                </DivInformations>
                <DivInformations attacks>
                    <H3>Lista de Ataques</H3>
                    <Ul attack>
                        {pokemonData.movesList.map((move) =>(<Li> {move.move.name}</Li> ))}
                    </Ul>
                </DivInformations>
                <Link to={"/"}><Btn>Retornar à Lista</Btn></Link>
            </>
            }
        </Section>
    )
}

export { PokemonDetails }

const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #DB6767;
    border-radius: 10px;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding: 15px;
    gap: 10px;
    margin: 15px;
    @media(max-width:500px){
        width: 70%;  
    }
`
const Img = styled.img`
    width: 40%;
    background-color: #A31717;
    // background-color: #fff;
    border-radius: 50%;
`
const H2 = styled.h2`
    text-transform: uppercase;
    font-size: 1.8rem;
    color: #5C2C2C;
`
const DivInformations = styled.div`
    width: 100%;  
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 10px;
    border: 4px double #A31717;
    height: ${props => props.attacks ?"250px": "none"};
    `
    const H3 = styled.h3`
    display: flex;
    font-size: 1.6rem;
    color: #5C2C2C;
    `
    const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    width: 80%;
    align-items: center;
    list-style-type: disclosure-closed;
    list-style-position:inside;
    overflow-y: ${props => props.attack ?"scroll": "none"};
    
    `
    const Li = styled.li`
    color: #5C2C2C;
    width: 110px;
    padding-bottom: 5px;
    &:hover{
        color: black;
    }
`
const Btn = styled.div`
    color: #DB6767;
    background-color: #5C2C2C;
    padding: 8px;
    border-radius: 10px;
    transition: 0.8s;
    &:hover{
        background-color: #A31717;
        color: beige;
    }
`