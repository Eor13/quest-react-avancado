import {baseUrl} from './baseUrl';
import {useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import pokemonData from '../object/userPokemon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

async function searchPokemons(id){
    const response = await fetch(`${baseUrl}pokemon/${id}`)
    const result =  await response.json()
    return result
}

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState({
        info: '',
        abilities:''
    })
    const {id} = useParams()
    // 
    
    useEffect(() =>{
        const fetchData = async () =>{
            const dataSearched = await searchPokemons(id)
            const dataAbilities = dataSearched.abilities.map(async (ability)=>{return await getAbility(ability.ability.url)})
            const resultsAbilities = await Promise.all(dataAbilities)

            setPokemon({
                info: dataSearched,
                abilities: resultsAbilities
            })
            pokemonData.setData(dataSearched, resultsAbilities)
        }
        fetchData()
        
        async function getAbility(url){
            const response = await fetch(url)
            const result = await response.json()
            return result
        }
    },[id])

    return(
        <Section>
            {
            <>
                <Img src={pokemonData.imagePokemon} alt={pokemon.name}/>
                <H2>{pokemonData.name}</H2>
                <DivInformations>
                    <H3>Tipagem:</H3>
                    <Ul>
                        {pokemonData.types.map((type, index)=>(<Link key={index} to={`/type/${type.type.name}`}><Li typeName>{type.type.name}</Li></Link>))}
                    </Ul>
                </DivInformations>
                <DivInformations>
                    <H3>habilidades:</H3>
                    <Ul abilityName>
                        {pokemonData.abilitiesList.map((ability, index)=>{
                            return(
                                <Div key={index}>
                                    <Li abilityName ability>{ability.name}</Li>
                                    {ability.effect_entries.map((effect,i) =>{
                                        return(
                                            <Li key={i} abilityDescription ability>{effect.effect}</Li>
                                        )})
                                    }
                                </Div>
                            )})}
                    </Ul>
                </DivInformations>
                <DivInformations attacks>
                    <H3>Lista de Ataques</H3>
                    <Ul attack>
                        {pokemonData.movesList.map((move, index) =>(<Li key={index} attack> {move.move.name}</Li> ))}
                    </Ul>
                </DivInformations>
                <Link to={"/"}><Btn>Retornar à Lista</Btn></Link>
            </>
            }
        </Section>
    )
}

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
    max-height: ${props => props.attacks ?"250px": "none"};
`
const H3 = styled.h3`
    display: flex;
    font-size: 1.6rem;
    color: #5C2C2C;
`
const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.abilityName ? "flex-start" : "center"};
    column-gap: 30px;
    width: 90%;
    align-items: flex-start;
    list-style-type: disclosure-closed  ;
    list-style-position:inside;
    overflow-y: ${props => props.attack ? "scroll": "none"};
    @media(max-width:500px){
        margin-left:${props => props.attack ? "50%": "none"};  
    }
    @media(max-width:375px){
        margin-left:${props => props.attack ? "40%": "none"};  
    }
`
const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;  
`
const Li = styled.li`
    color: #5C2C2C;
    width: ${props => props.attack ? "28%" : "100%"};
    padding-bottom: 5px;
    text-decoration: none;
    cursor:${props => props.typeName ? "pointer" : "default"};
    font-weight:${props => props.abilityName ?"900": "none"};
    font-size:${props => props.abilityName ?"1.3rem": "none"};
    list-style-type: ${props => props.abilityDescription ? "none" : "disclosure-closed"};
    text-align: ${props => props.abilityDescription ? "justify" : "none"};
    trasition: 1.5s;
    &:hover{
        color:${props => props.typeName ? "beige" : "black"};
        background-color:${props => props.typeName ? " #A31717" : "none"};
        padding:${props => props.typeName ? " 5px" : "none"};
        border-radius: 10px;
    }
    @media(max-width:950px){
        width:${props => props.attack ? "40%" : "100%"};  
    }
    @media(max-width:500px){
        width: 100%;  
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
export { PokemonDetails }
