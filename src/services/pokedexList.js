import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from './baseUrl';
import styled from 'styled-components';

let QuantityPokemons = 10
let offSet = 0

async function CompleteListOfPokemons(){
  let fullList = `${ baseUrl }pokemon?limit=${QuantityPokemons}&offset=${offSet}`
  const response = await fetch(`${fullList}`)
  return await response.json()
}

const Pokedex = () => {
  const [pokedex, setPokedex] = useState([])//primeira chamada de useState retorna um array vazio
  const [More,setMore] = useState(20)

  useEffect(() =>{
    const fetchData = async () =>{
      const pokemonsList = await CompleteListOfPokemons()
      const dataPokemon = pokemonsList.results.map(async (pokemon)=>{return await getPokemon(pokemon.url)})
      const results = await Promise.all(dataPokemon)
      setPokedex(results)
    }
    fetchData()
    
    async function getPokemon(url){
      const response = await fetch(url)
      const result = await response.json()
      return result
    }
  },[QuantityPokemons])
  
  const AddMorePokemons = () =>{
    setMore(( PrevMore) => PrevMore+10)
    QuantityPokemons = More
  }

  return (
      <>
          <Ul>
            {pokedex.length > 0 &&
              pokedex.map((poke, index) => {
                return (
                  <Li key={index}>
                    <Link to={`/${poke.id}`}>
                      <Img src={poke.sprites.front_default} alt={poke.name}/>
                      <P>#{poke.id}</P>
                      <P>{poke.name}</P>
                    </Link>
                  </Li>
                )
            })}
          </Ul>
          <Button type='submit' className='btn' onClick={AddMorePokemons} >Carregar Mais</Button>  
      </>
    )
  }

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
const Button = styled.button`
  background-color: #5C2C2C;
  color: #DB6767;
  width: 120px;
  height: 30px;
  border-radius: 15px;
  border: 1px none black;
  padding: 8px;
  transition: 0.8s;
  &:hover{
      background-color: #A31717;
      color: beige;
  }
`

export { Pokedex }