import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Styled from './style';
import { searchTypes } from "../../services/handleApi";

const TypeList = () =>{
    const [type, setType] = useState('')

    const {typeName} = useParams()

    useEffect(() =>{
        const fetchDataType = async () =>{
            const dataSearched = await searchTypes(typeName)   
            const dataPokemons = dataSearched.pokemon.map(async (poke)=>{return await getPokemon(poke.pokemon.url)})
            const results = await Promise.all(dataPokemons)
            setType(results)
        }
        
        fetchDataType()
        async function getPokemon(url){
        const response = await fetch(url)
        const result = await response.json()
        return result
        }
    },[ typeName ])

    return(
        <>
        <Styled.H2>Pokemons do Tipo: <Styled.Span>{typeName}</Styled.Span> </Styled.H2>
        <Styled.Section>
            {
            <>
                <Styled.Container>
                {type.length > 0 &&
                    type.map((poke, index) => {
                    return (
                    <Styled.Pokemon key={index}>
                        <Link to={`/${poke.id}`}>
                        <Styled.Img src={poke.sprites.front_default} alt={poke.name}/>
                        <Styled.Information>{poke.name}</Styled.Information>
                        </Link>
                    </Styled.Pokemon>
                    )
                })}
                </Styled.Container>
                <Link to={"/"}><Styled.Btn>Retornar à Lista</Styled.Btn></Link>
            </>
            }
        </Styled.Section>
      </>
    )
}

export { TypeList }