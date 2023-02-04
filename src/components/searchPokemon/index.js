import {useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import pokemonData from '../../object/userPokemon';
import { Link } from 'react-router-dom';
import * as Styled from './style';
import { searchPokemons } from '../../services/handleApi';

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState("")
    const [status, setStatus] = useState(0)
    const {id} = useParams()
    
    
    useEffect(() =>{
        const fetchData = async () =>{
            const dataSearched = await searchPokemons(id)
            if(dataSearched === 404){
                return setStatus(dataSearched)
            }
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

    if (status === 404){
        return(
            
            <Styled.Container>
                <Styled.PokemonInformations>
                    <Styled.Title>The name typed is not a pokemon.</Styled.Title>
                </Styled.PokemonInformations>
                <Link to={"/"}><Styled.Btn>Retornar à Lista</Styled.Btn></Link>
            </Styled.Container>
        )
    } else {
        return(
            <Styled.Container>
            {
            <>
                <Styled.Img src={pokemonData.imagePokemon} alt={pokemon.name}/>
                <Styled.POkemonName>{pokemonData.name}</Styled.POkemonName>
                <Styled.PokemonInformations>
                    <Styled.Title>Tipagem:</Styled.Title>
                    <Styled.BoxInformation>
                        {pokemonData.types.map((type, index)=>(<Link key={index} to={`/type/${type.type.name}`}><Styled.Information typeName>{type.type.name}</Styled.Information></Link>))}
                    </Styled.BoxInformation>
                </Styled.PokemonInformations>
                <Styled.PokemonInformations>
                    <Styled.Title>habilidades:</Styled.Title>
                    <Styled.BoxInformation abilityName>
                        {pokemonData.abilitiesList.map((ability, index)=>{
                            return(
                                <Styled.Informations key={index}>
                                    <Styled.Information abilityName ability>{ability.name}</Styled.Information>
                                    {ability.effect_entries.length === 0 ?  
                                    <Styled.Information abilityDescription ability>{`There is no description registered so far.`}</Styled.Information> : 
                                    <Styled.Information abilityDescription ability>{ ability.effect_entries[1].language.name === "en" ? ability.effect_entries[1].effect :ability.effect_entries[0].effect}</Styled.Information>}
                                </Styled.Informations>
                            )
                        })}
                    </Styled.BoxInformation>
                </Styled.PokemonInformations>
                <Styled.PokemonInformations attacks>
                    <Styled.Title>Lista de Ataques</Styled.Title>
                    <Styled.BoxInformation attack>
                        {pokemonData.movesList.map((move, index) =>(<Styled.Information key={index} attack> {move.move.name}</Styled.Information> ))}
                    </Styled.BoxInformation>
                </Styled.PokemonInformations>
                <Link to={"/"}><Styled.Btn>Retornar à Lista</Styled.Btn></Link>
            </>
            }
            </Styled.Container>
        )
    }
}

export { PokemonDetails }
