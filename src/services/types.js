import { useParams } from "react-router-dom";
import { baseUrl } from "./baseUrl";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


async function searchTypes(typeName){
    const response = await fetch(`${baseUrl}type/${typeName}`)
    const result =  await response.json()
    return result
}

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
        <H2>Pokemons do Tipo: <Span>{typeName}</Span> </H2>
        <Section>
            {
            <>
                <Ul>
                {type.length > 0 &&
                    type.map((poke, index) => {
                    return (
                    <Li key={index}>
                        <Link to={`/${poke.id}`}>
                        <Img src={poke.sprites.front_default} alt={poke.name}/>
                        <P>{poke.name}</P>
                        </Link>
                    </Li>
                    )
                })}
                </Ul>
                <Link to={"/"}><Btn>Retornar à Lista</Btn></Link>
            </>
            }
        </Section>
      </>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #DB6767;
    border-radius: 10px;
    width: 70%;
    max-height: 70vh;
    align-items: center;
    justify-content: center;
    padding: 5px 15px;
    gap: 10px;
    margin-top: 5px;
    @media(max-width:500px){
        max-height: 75vh;
    }
`
const H2 = styled.h2`
    text-align: center;
    box-shadow: 0px 2px 15px black;
    width: 95%;
    font-size: 3.5rem;
    border-radius: 8px;
    margin-top: 10px;
    color: #DB6767;
    @media(max-width:830px){
        font-size: 3rem;
        width: 90%;
    }
    @media(max-width:500px){
        font-size: 2.5rem;
        width: 85%;
    }
`
const Span = styled.span`
    text-transform: uppercase;
`

const Ul=styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  gap: 10px;
  overflow-y: scroll;
  @media(max-width:830px){
    overflow-y: scroll;
  }
`
const Li = styled.li`
  border: 4px double #A31717;
  width: 18%;
  padding: 5px;
  list-style: none;
  text-align: center;
  &:hover{
    background-color: rgb(230, 198, 156);
    color: brown;
  }
  @media(max-width:830px){
    width: 25%;    
  }
  @media(max-width:600px){
    width: 40%;    
  }
  @media(max-width:400px){
    width: 70%;    
  }
}
`
const Img = styled.img`
  width: 95%; 
  @media(max-width:800px){
    width: 92%;    
  } 
  @media(max-width:400px){
    width: 90%;    
  }
  `
const P = styled.p`
  color: #5C2C2C;
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

export { TypeList }