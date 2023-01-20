import { Pokedex } from '../../services/pokedexList'
import styled from 'styled-components'

const CardsList =() =>{
    return(
        <>
            <PageTitle>Pokedex</PageTitle>
            <Section>
                <Pokedex/>
            </Section>
        </>
    )
}

const PageTitle = styled.h1`
    text-align: center;
    box-shadow: 0px 2px 15px black;
    width: 95%;
    font-size: 4rem;
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
    @media(max-width:400px){
        max-height: 80vh;
    }
`
export { CardsList }